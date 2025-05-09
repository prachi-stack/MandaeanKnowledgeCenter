"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EyeIcon, EyeOffIcon } from "lucide-react"
 import { FaGoogle } from "react-icons/fa6"

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(true)

  return (
    <div className="flex p-4">
   <div className="w-[50%]">

   </div>
    <div className="space-y-7 w-[50%] px-4">
      <div className="flex justify-end">
        <Link href="/teacher/auth/login">
        <Button size="sm" className="text-white bg-blue-600 px-8">Login</Button>
        </Link>
      </div>
      <div className="space-y-2 px-6 text-[#3F3F44]">
        <h1 className="text-3xl">
          Let&apos;s Join <span className="font-bold">10,000+</span>
        </h1>
        <h2 className="text-3xl">
          Other <span className="text-blue-600 font-semibold">Teachers</span>
        </h2>
      </div>

      <div className="flex space-y-8">
        <form className="space-y-6 border-r border-gray-400 py-3 flex-[2] px-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Your Name
            </label>
            <Input id="name" type="text" placeholder="Enter your Full Name" className="h-12 px-4 bg-gray-100" />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <Input id="email" type="email" placeholder="youremail@guru.com" className="h-12 px-4 bg-gray-100" />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="h-12 px-4 bg-gray-100 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium">
            Sign Up
          </Button>
        </form>
        <div className="space-y-7 px-6 flex-[1]">
          <div className="space-y-3 w-30">
          <p className="text-gray-500 bg-white">Or sign up with</p>
          <Button type="button" variant="outline" className="w-full  py-7 border-none bg-gray-200 rounded-xl">
            <FaGoogle className="h-5 w-5 mr-2" />
          </Button>
          </div>
          <div>
          <p className="text-gray-600 font-medium">
          Already have<br /> an account?
          </p>
            <Link  href="/teacher/auth/login" className="font-medium text-blue-600 underline">
              Login
            </Link>
          </div>
         
        </div>
      </div>
    </div>
    </div>
  )
}
