import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/auth-context';
import SideMenuLayout from '@/components/layouts/side-menu-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faMoneyBillWave, 
  faUsers, 
  faSmile 
} from '@fortawesome/free-solid-svg-icons';

export default function ReportsPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

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
            icon={faChartLine} 
            className="h-5 w-5 text-indigo-600 mr-2" 
          />
          <h1 className="text-2xl font-bold">Reports</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Business Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              This page shows an overview of your business performance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6 flex items-center">
                  <FontAwesomeIcon 
                    icon={faMoneyBillWave} 
                    className="h-8 w-8 text-green-500 mr-3" 
                  />
                  <div>
                    <div className="text-2xl font-bold">$24,500</div>
                    <p className="text-muted-foreground">Monthly Revenue</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 flex items-center">
                  <FontAwesomeIcon 
                    icon={faUsers} 
                    className="h-8 w-8 text-blue-500 mr-3" 
                  />
                  <div>
                    <div className="text-2xl font-bold">354</div>
                    <p className="text-muted-foreground">New Customers</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 flex items-center">
                  <FontAwesomeIcon 
                    icon={faSmile} 
                    className="h-8 w-8 text-yellow-500 mr-3" 
                  />
                  <div>
                    <div className="text-2xl font-bold">85%</div>
                    <p className="text-muted-foreground">Customer Satisfaction</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-center text-muted-foreground">
              Detailed reports will be available in future updates.
            </p>
          </CardContent>
        </Card>
      </div>
    </SideMenuLayout>
  );
}
