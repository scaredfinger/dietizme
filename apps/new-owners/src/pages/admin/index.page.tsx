import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/auth-context';
import AdminLayout from '@/components/layouts/admin-layout';
import TopSellingProducts from '@/components/dashboard/top-selling-products';
import BookingsByDate from '@/components/dashboard/bookings-by-date';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminDashboard() {
  const router = useRouter();
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <AdminLayout>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Welcome, {user?.name || 'User'}! This is your admin dashboard.</p>
          </CardContent>
        </Card>
        
        <TopSellingProducts />
        <BookingsByDate />
      </div>
    </AdminLayout>
  );
}
