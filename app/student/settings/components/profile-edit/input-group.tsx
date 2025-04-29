import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { InputHTMLAttributes } from "react";

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
  }

 export default function InputGroup({ label, ...props }:InputGroupProps) {
    return (
      <div className="space-y-3">
        <Label className="font-normal">{label}</Label>
        <Input {...props}  className="border-none bg-gray-100"/>
      </div>
    );
  }
  