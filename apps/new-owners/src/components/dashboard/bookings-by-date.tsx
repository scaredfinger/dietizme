import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Booking = {
  id: number;
  date: string;
  customer: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  amount: number;
};

const mockBookings: Booking[] = [
  { id: 1, date: '2025-03-25', customer: 'John Doe', status: 'Confirmed', amount: 150.00 },
  { id: 2, date: '2025-03-26', customer: 'Jane Smith', status: 'Pending', amount: 200.00 },
  { id: 3, date: '2025-03-26', customer: 'Bob Johnson', status: 'Confirmed', amount: 175.50 },
  { id: 4, date: '2025-03-27', customer: 'Alice Brown', status: 'Cancelled', amount: 120.75 },
  { id: 5, date: '2025-03-28', customer: 'Charlie Wilson', status: 'Confirmed', amount: 300.25 },
];

export default function BookingsByDate() {
  // Group bookings by date
  const bookingsByDate = mockBookings.reduce((acc, booking) => {
    if (!acc[booking.date]) {
      acc[booking.date] = [];
    }
    acc[booking.date].push(booking);
    return acc;
  }, {} as Record<string, Booking[]>);

  // Calculate totals for each date
  const dateStats = Object.entries(bookingsByDate).map(([date, bookings]) => {
    const confirmed = bookings.filter(b => b.status === 'Confirmed').length;
    const pending = bookings.filter(b => b.status === 'Pending').length;
    const cancelled = bookings.filter(b => b.status === 'Cancelled').length;
    const total = bookings.length;
    const totalAmount = bookings.reduce((sum, b) => sum + b.amount, 0);
    
    return {
      date,
      confirmed,
      pending,
      cancelled,
      total,
      totalAmount
    };
  }).sort((a, b) => a.date.localeCompare(b.date));

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Bookings by Arrival Date</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium">Date</th>
                <th className="text-right py-3 px-4 font-medium">Confirmed</th>
                <th className="text-right py-3 px-4 font-medium">Pending</th>
                <th className="text-right py-3 px-4 font-medium">Cancelled</th>
                <th className="text-right py-3 px-4 font-medium">Total</th>
                <th className="text-right py-3 px-4 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {dateStats.map((stat) => (
                <tr key={stat.date} className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4">{stat.date}</td>
                  <td className="py-3 px-4 text-right">{stat.confirmed}</td>
                  <td className="py-3 px-4 text-right">{stat.pending}</td>
                  <td className="py-3 px-4 text-right">{stat.cancelled}</td>
                  <td className="py-3 px-4 text-right">{stat.total}</td>
                  <td className="py-3 px-4 text-right">${stat.totalAmount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
