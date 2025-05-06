import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Camera } from "lucide-react";

type Field = {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
};

const fields: Field[] = [
  { id: "firstName", label: "First Name", placeholder: "Samantha" },
  { id: "lastName", label: "Last Name", placeholder: "William" },
  { id: "email", label: "Email", placeholder: "sam.william@mail.com", type: "email" },
  { id: "phone", label: "Phone Number", placeholder: "+12 345 67890" },
  // We'll insert Expertise manually right here
  { id: "username", label: "Username", placeholder: "samanthawill" },
  { id: "password", label: "Password", placeholder: "", type: "password" },
  { id: "confirmPassword", label: "Confirm Password", type: "password" },
];

export default function General() {
  return (
    <div>
      <h2 className="text-lg font-medium mb-6">General</h2>
      <div className="flex space-x-6">
        <div className="bg-[#C4C4C4] w-35 h-40 rounded-lg flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
            <Camera />
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.slice(0, 4).map(({ id, label, placeholder, type }) => (
            <div key={id} className="space-y-2">
              <Label htmlFor={id} className="font-normal">{label}</Label>
              <Input
                id={id}
                placeholder={placeholder}
                type={type}
                className="bg-gray-50"
              />
            </div>
          ))}

          {/* Expertise inserted at original position */}
          <div className="space-y-2">
            <Label htmlFor="expertise" className="font-normal">Expertise</Label>
            <Select defaultValue="ui-ux">
              <SelectTrigger className="bg-gray-50 border-none text-gray-400 text-xs">
                <SelectValue placeholder="Select expertise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ui-ux">Design &gt; UI/UX Design</SelectItem>
                <SelectItem value="graphic">Graphic Design</SelectItem>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="product">Product Design</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {fields.slice(4).map(({ id, label, placeholder, type }) => (
            <div key={id} className="space-y-2">
              <Label htmlFor={id} className="font-normal">{label}</Label>
              <Input
                id={id}
                placeholder={placeholder}
                type={type}
                className="bg-gray-50"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
