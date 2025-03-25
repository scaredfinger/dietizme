import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Table, { TableColumn } from '@/components/ui/table';

type Booking = {
  id: number;
  date: string;
  customer: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  amount: number;
};

type DateStat = {
  date: string;
  confirmed: number;
  pending: number;
  cancelled: number;
  total: number;
  totalAmount: number;
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

  // Define columns for the Table component
  const columns: TableColumn<DateStat>[] = [
    {
      key: 'date',
      header: 'Date',
    },
    {
      key: 'confirmed',
      header: 'Confirmed',
      className: 'py-3 px-4 text-right',
      cell: (stat) => stat.confirmed.toString(),
    },
    {
      key: 'pending',
      header: 'Pending',
      className: 'py-3 px-4 text-right',
      cell: (stat) => stat.pending.toString(),
    },
    {
      key: 'cancelled',
      header: 'Cancelled',
      className: 'py-3 px-4 text-right',
      cell: (stat) => stat.cancelled.toString(),
    },
    {
      key: 'total',
      header: 'Total',
      className: 'py-3 px-4 text-right',
      cell: (stat) => stat.total.toString(),
    },
    {
      key: 'totalAmount',
      header: 'Amount',
      className: 'py-3 px-4 text-right',
      cell: (stat) => `$${stat.totalAmount.toFixed(2)}`,
    },
  ];

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Bookings by Arrival Date</CardTitle>
      </CardHeader>
      <CardContent>
        <Table
          data={dateStats}
          columns={columns}
          tableClassName="w-full text-sm"
          theadClassName="border-b"
          trClassName="border-b hover:bg-muted/50"
          thClassName="py-3 px-4 font-medium text-left"
          emptyState={<p className="text-center py-4">No bookings found</p>}
        />
      </CardContent>
    </Card>
  );
}
