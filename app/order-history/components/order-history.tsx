

import { Button } from '@/components/ui/button';
import Search from '@/components/ui/input-search';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Card } from '@/components/ui/card';
import {
  Download,
  Calendar,
  ChevronDown,
  CreditCard,
  ReceiptText,
  Eye
} from 'lucide-react';

type Order = {
  id: string;
  status: 'In Progress' | 'Completed' | 'Cancelled';
  price: string;
  date: string;
  method: 'Credit Card' | 'Paypal';
};

const orders: Order[] = [
  { id: 'ORD-2024-001', status: 'In Progress', price: '$99.99', date: 'Jan 15, 2024', method: 'Credit Card' },
  { id: 'ORD-2024-002', status: 'Completed', price: '$99.99', date: 'Jan 15, 2024', method: 'Paypal' },
  { id: 'ORD-2024-003', status: 'Cancelled', price: '$99.99', date: 'Jan 15, 2024', method: 'Credit Card' },
  { id: 'ORD-2024-004', status: 'Completed', price: '$99.99', date: 'Jan 15, 2024', method: 'Credit Card' },
];

export default function OrderHistoryPage() {
  return (
    <div className="px-4 py-8 mx-3 sm:mx-5 md:mx-8 space-y-6">
      <div className='flex flex-col sm:flex-row items-center justify-between'>
        <div>
          <h2 className="text-2xl font-semibold">Order History</h2>
          <p className="text-sm text-muted-foreground my-4 max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Download All
        </Button>
      </div>

      <div className="flex justify-between my-9">
        <div className="flex flex-wrap gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Date Range
                <ChevronDown className="ml-1 w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>This Month</DropdownMenuItem>
              <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Status
                <ChevronDown className="ml-1 w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>In Progress</DropdownMenuItem>
              <DropdownMenuItem>Completed</DropdownMenuItem>
              <DropdownMenuItem>Cancelled</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Search placeholder="Search..." className="lg:w-[43rem]" />
      </div>

      
      <div className="space-y-4">
        
        <div className="hidden sm:grid grid-cols-5 px-4 text-sm font-semibold text-muted-foreground">
          <div>Order ID</div>
          <div>Status</div>
          <div>Price & Purchased On</div>
          <div>Payment Method</div>
          <div className="text-right">Actions</div>
        </div>

        {/* Data Rows */}
        {orders.map((order, index) => (
          <Card key={index} className="p-4 sm:grid grid-cols-5 gap-4 items-center">
            <div className="flex sm:items-start items-center gap-3">
              <Checkbox />
              <div>
                <div className="font-medium">{order.id}</div>
              </div>
            </div>

            <div className={`text-sm font-semibold ${order.status === 'Completed' ? 'text-green-600' : order.status === 'In Progress' ? 'text-yellow-600' : 'text-red-600'}`}>
              {order.status}
            </div>

            <div className='flex flex-col items-center sm:items-start'>
              <div className="text-sm font-medium">{order.price}</div>
              <div className="text-xs text-muted-foreground">Purchased {order.date}</div>
            </div>

            <div className="flex items-center gap-1 text-sm">
              <CreditCard className="w-4 h-4" />
              {order.method}
            </div>

            <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm" className='px-2 sm:px-4'>
          <Download className="mr-2" />
          Invoice
        </Button>
              <Button size="sm" variant="outline" className='bg-blue-400 px-2 sm:px-4'>
                 View Course
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
