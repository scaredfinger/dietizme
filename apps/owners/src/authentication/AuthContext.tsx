import { createContext, useContext, useEffect } from 'react'
import {
  useUserData,
  useAuthenticationStatus,
  useSignInEmailPassword,
  useSignOut,
  useSignUpEmailPassword
} from '@nhost/nextjs'
import posthog from 'posthog-js'

type SignInEmailPasswordReturnType = ReturnType<typeof useSignInEmailPassword>

type User = ReturnType<typeof useUserData>

type AuthErrorPayload = SignInEmailPasswordReturnType['error']

export interface AuthContextProps {
  currentUser?: User
  isLoading: boolean
  isAuthenticated: boolean
  login?: (email: string, password: string) => Promise<void>
  signup?: (email: string, password: string, name: string) => void
  logout?: () => void
  signInError?: AuthErrorPayload
  signUpError?: AuthErrorPayload
  isSigningIn?: boolean
  isSigningUp?: boolean
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  isLoading: true,
})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const currentUser = useUserData()
  const { isAuthenticated, isLoading: authenticationIsLoading } = useAuthenticationStatus()
  const { signInEmailPassword, isLoading: isSigningIn, error: signInError } = useSignInEmailPassword()
  const { signOut } = useSignOut()
  const { signUpEmailPassword, isLoading: isSigningUp, error: signUpError } = useSignUpEmailPassword()

  async function signup(email: string, password: string, name: string) {
    await signUpEmailPassword(email, password)
  }

  const login = async (email: string, password: string) => {
    await signInEmailPassword(email, password)
  }

  const logout = async () => {
    // setCurrentUser(null)
    await signOut()
  }

  const isLoading = isSigningIn || isSigningUp

  const value = {
    currentUser,
    isAuthenticated,
    isLoading,
    isSigningIn,
    isSigningUp,
    login,
    logout,
    signInError,
    signup,
    signUpError
  }

  return (
    <AuthContext.Provider value={value}>
      {isLoading ? null : children}
    </AuthContext.Provider>
  )
}
