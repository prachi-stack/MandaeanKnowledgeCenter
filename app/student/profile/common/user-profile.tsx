import Image from "next/image"
import {
  Mail,
  MapPin,
  IdCard,
  CalendarPlus2,
  PencilLine,
} from "lucide-react"

interface User {
  name: string
  role: string
  dob: string
  id: string
  address: string
  email: string
  avatar: string
  banner: string
}

const user: User = {
  name: "Charlie Richard",
  role: "Graphic Designer, UI Designer",
  dob: "14/09/1998",
  id: "123456789012",
  address: "7290 U.S. 43 Street, Guin City, Alaska",
  email: "MrSatan123@gmail.com",
  avatar: "/upcoming/avatar.png",
  banner: "/upcoming/background.png",
}

interface Userinfo{
  icon:React.ElementType;
  label:string;
  value:string;
  iconSize?:number;
}

const userInfo: Userinfo[] = [
  {
    icon: CalendarPlus2,
    label: "Birthday",
    value: user.dob,
  },
  {
    icon: IdCard,
    label: "ID",
    value: user.id,
  },
  {
    icon: MapPin,
    label: "Address",
    value: user.address,
   },
  {
    icon: Mail,
    label: "Email",
    value: user.email,
  },
]


const UserProfile = () => {
  return (
    <div className="rounded-xl bg-white">
      {/* Banner */}
      <div className="relative h-40 w-full">
        <Image
          src={user.banner}
          alt="Banner"
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <Image
            src={user.avatar}
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full border-4 border-white shadow-md"
          />
        </div>
      </div>

      {/* Content */}
      <div className="pt-12 px-5 pb-5 text-center">
        {/* Name and Role */}
        <h2 className="font-semibold text-md text-gray-800">{user.name}</h2>
        <p className="text-gray-500 text-sm mb-4">({user.role})</p>

        <div className="flex justify-between mb-3">
          <h3 className="text-md font-medium">Profile Information</h3>
          <PencilLine size={16} className="cursor-pointer" />
        </div>

        <div className="text-left space-y-3 text-sm text-black">
          {userInfo.map(({ icon: Icon, label, value, iconSize = 16 }, index) => (
            <div key={index} className="flex items-start gap-2">
              <Icon size={iconSize} className="min-w-[16px]" />
              <span>
                <span className="text-gray-500">{label}: </span><span className="font-medium">{value}</span> 
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default UserProfile
