"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import Image from "next/image"
import { FaGoogle } from "react-icons/fa6"
import { useRouter } from "next/navigation"

interface User {
  src: string
  alt: string
}

const users: User[] = [
  { src: "", alt: "User 1" },
  { src: "/teacher/login/Ellipse18.png", alt: "User 2" },
  { src: "", alt: "User 3" },
  { src: "/teacher/login/Ellipse20.png", alt: "User 4" },
]

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(true)

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push("/teacher/dashboard")
  }

  return (
    <div className="flex p-4">
      <div className="w-[50%]">

      </div>
      <div className="space-y-7 w-[50%] px-4">
        <div className="flex justify-end">
          <Link href="/teacher/auth/signup">
            <Button size="sm" className="text-white bg-blue-600 px-8 ">Register</Button>
          </Link>
        </div>
        <div className="space-y-2 pl-6 text-[#3F3F44]">
          <h1 className="text-3xl ">
            Hi, <span className="font-bold">Welcome Back</span>
          </h1>
          <h2 className="text-3xl">
            Ready to <span className="text-blue-600 font-semibold">Teach</span> Today?
          </h2>
        </div>

        <div className="flex space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6 border-r border-gray-400 py-3 flex-[2] px-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Your email or phone number
              </label>
              <Input id="email" type="email" placeholder="youremail@guru.com" className="h-12 px-4 bg-gray-100" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm font-medium">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link href="/teacher/auth/login/forgot-password">Forgot Password?</Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="h-12 px-4 bg-gray-100 pr-10"
                />
                <Button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                </Button>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium">
              Login
            </Button>
          </form>

          <div className="space-y-7 px-6 flex-[1]">
            <div className="space-y-3 w-30">
              <p className="text-gray-500 bg-white">Or continue with</p>
              <Button type="button" variant="outline" className="w-full  py-7 border-none bg-gray-200 rounded-xl">
                <FaGoogle className="h-5 w-5 mr-2" />
              </Button>
            </div>
            <div>
              <p className="text-gray-600 font-medium mb-1">
                Don't have an<br />account?
              </p>
              <p className="text-gray-600">
                Join 10,000+ other
                <br />
                teachers <Link href="/teacher/auth/signup" className="font-medium text-gray-800 underline">
                  here
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center px-6 mb-4">
          {users.map((user, index) => (
            user.src ? (
              <Image
                key={index}
                src={user.src}
                alt={user.alt}
                width={80}
                height={80}
                className={`rounded-full object-cover border-2 border-white ${index !== 0 ? "-ml-8" : ""
                  }`}
              />
            ) : (
              <div
                key={index}
                className={`w-20 h-20 rounded-full bg-gray-200 border-2 border-white ${index !== 0 ? "-ml-8" : ""
                  }`}
              />
            )
          ))}
        </div>
      </div>
    </div>
  )
}
