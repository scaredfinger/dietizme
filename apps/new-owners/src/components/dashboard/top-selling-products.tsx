import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Table, { TableColumn } from '@/components/ui/table';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  sales: number;
  revenue: number;
};

const mockProducts: Product[] = [
  { id: 1, name: 'Product A', category: 'Electronics', price: 199.99, sales: 120, revenue: 23998.80 },
  { id: 2, name: 'Product B', category: 'Clothing', price: 49.99, sales: 200, revenue: 9998.00 },
  { id: 3, name: 'Product C', category: 'Home & Kitchen', price: 129.99, sales: 85, revenue: 11049.15 },
  { id: 4, name: 'Product D', category: 'Beauty', price: 29.99, sales: 300, revenue: 8997.00 },
  { id: 5, name: 'Product E', category: 'Sports', price: 89.99, sales: 90, revenue: 8099.10 },
];

export default function TopSellingProducts() {
  // Define columns for the Table component
  const columns: TableColumn<Product>[] = [
    {
      key: 'name',
      header: 'Name',
    },
    {
      key: 'category',
      header: 'Category',
    },
    {
      key: 'price',
      header: 'Price',
      className: 'py-3 px-4 text-right',
      cell: (product) => `$${product.price.toFixed(2)}`,
    },
    {
      key: 'sales',
      header: 'Sales',
      className: 'py-3 px-4 text-right',
      cell: (product) => product.sales.toString(),
    },
    {
      key: 'revenue',
      header: 'Revenue',
      className: 'py-3 px-4 text-right',
      cell: (product) => `$${product.revenue.toFixed(2)}`,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Selling Products</CardTitle>
      </CardHeader>
      <CardContent>
        <Table
          data={mockProducts}
          columns={columns}
          tableClassName="w-full text-sm"
          theadClassName="border-b"
          trClassName="border-b hover:bg-muted/50"
          thClassName="py-3 px-4 font-medium text-left"
          emptyState={<p className="text-center py-4">No products found</p>}
        />
      </CardContent>
    </Card>
  );
}
