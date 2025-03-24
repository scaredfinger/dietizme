import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Selling Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium">Name</th>
                <th className="text-left py-3 px-4 font-medium">Category</th>
                <th className="text-right py-3 px-4 font-medium">Price</th>
                <th className="text-right py-3 px-4 font-medium">Sales</th>
                <th className="text-right py-3 px-4 font-medium">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {mockProducts.map((product) => (
                <tr key={product.id} className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4">{product.name}</td>
                  <td className="py-3 px-4">{product.category}</td>
                  <td className="py-3 px-4 text-right">${product.price.toFixed(2)}</td>
                  <td className="py-3 px-4 text-right">{product.sales}</td>
                  <td className="py-3 px-4 text-right">${product.revenue.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
