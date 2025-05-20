import { Button } from "@/components/ui/button";
 import InputGroup from "./input-group";
import SelectGroup from "./select-group";
import {Camera} from "lucide-react"

export default function ProfileTab() {
  return (
    <div className="space-y-6 mt-6">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="w-20 h-20  rounded-md flex items-center justify-center bg-stone-300">
           <Camera />
        </div>
        <div className="space-y-1">
          <p className="font-medium text-xl"> Rebecca Vivian</p>
          <p className="text-gray-500"> rebeccavivian@gmail.com</p>
        </div>
        <Button className="sm:ml-auto text-white bg-sky-600">Update Profile Picture</Button>
      </div>
      <div>
        <p>Profile</p>
        <p className="text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputGroup label="First Name" defaultValue="Rebecca" />
        <InputGroup label="Last Name" defaultValue="Vivian" />
        <InputGroup label="Date of Birth" defaultValue="19/07/2022" />
         <SelectGroup  
          label="Country"
          defaultValue="indonesia"
          options={[
            { label: "Indonesia", value: "indonesia" },
            { label: "India", value: "india" },
            { label: "USA", value: "usa" },
          ]} />
      </div>

      <Button className="mt-6 bg-violet-100 text-indigo-600">Logout Account</Button>
    </div>
  );
}
