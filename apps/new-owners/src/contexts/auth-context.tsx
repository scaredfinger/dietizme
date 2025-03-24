import React, { createContext, useContext, useState, useEffect } from 'react';

import { useNhostClient, User } from '@nhost/react';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { auth } = useNhostClient();

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
        const signInResponse = await auth.signIn({
          email,
          password,
        })

        if (signInResponse.error) {
          throw new Error(signInResponse.error.message);
        }

        const user = auth.getUser()
        if (! user) {
          throw new Error('No user returned from authentication');
        }

        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during login');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    // setIsLoading(true);
    // setError(null);
    
    // try {
    //   // In a real app, this would be an API call
    //   // For this demo, simulate a successful registration
    //   const user = { id: '1', email, name };
    //   setUser(user);
    //   localStorage.setItem('user', JSON.stringify(user));
    // } catch (err) {
    //   setError(err instanceof Error ? err.message : 'An error occurred during registration');
    //   throw err;
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const logout = () => {
    auth.signOut();
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    signUp,
    error
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
