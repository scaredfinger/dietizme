import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/auth-context';
import AuthLayout from '@/components/layouts/auth-layout';
import RegisterForm from '@/components/forms/register-form';

export default function RegisterPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/admin');
    }
  }, [isAuthenticated, router]);

  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
