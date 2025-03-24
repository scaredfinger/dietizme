import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/auth-context';
import AuthLayout from '@/components/layouts/auth-layout';
import LoginForm from '@/components/forms/login-form';

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/admin');
    }
  }, [isAuthenticated, router]);

  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
