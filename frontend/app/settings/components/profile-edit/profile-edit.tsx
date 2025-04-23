import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ProfileTab() {
  return (
    <div className="space-y-6 mt-6">
       <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="w-20 h-20 bg-muted rounded-md flex items-center justify-center">
          <span className="text-muted-foreground">📷</span>
        </div>
        <div className="space-y-2">
          <p className="font-medium">Rebecca Vivian</p>
          <p className="text-sm text-muted-foreground">rebeccavivian@gmail.com</p>
        </div>
        <Button className="sm:ml-auto bg-blue-500">Update Profile Picture</Button>
      </div>

       <p className="text-sm text-muted-foreground">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <Label>First Name</Label>
          <Input defaultValue="Rebecca" />
        </div>
        <div className="space-y-3">
          <Label>Last Name</Label>
          <Input defaultValue="Vivian" />
        </div>
        <div className='space-y-3'>
          <Label>Date of Birth</Label>
          <Input type="date" defaultValue="2022-07-19" />
        </div>
        <div className="space-y-3">
          <Label>Country</Label>
          <Select defaultValue="indonesia">
            <SelectTrigger>
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="indonesia">Indonesia</SelectItem>
              <SelectItem value="india">India</SelectItem>
              <SelectItem value="usa">USA</SelectItem>
              {/* Add more as needed */}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button  className="mt-6 bg-blue-100 text-blue-600">Logout Account</Button>
    </div>
  );
}
