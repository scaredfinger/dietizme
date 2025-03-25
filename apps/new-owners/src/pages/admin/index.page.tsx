import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/auth-context';
import SideMenuLayout from '@/components/layouts/side-menu-layout';
import TopSellingProducts from '@/components/dashboard/top-selling-products';
import BookingsByDate from '@/components/dashboard/bookings-by-date';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

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
    <SideMenuLayout>
      <div className="space-y-4">
        <div className="flex items-center mb-6">
          <FontAwesomeIcon 
            icon={faTachometerAlt} 
            className="h-5 w-5 text-indigo-600 mr-2" 
          />
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Hello, {user?.displayName || 'User'}! This is your admin dashboard.</p>
          </CardContent>
        </Card>
        
        <TopSellingProducts />
        <BookingsByDate />
      </div>
    </SideMenuLayout>
  );
}
