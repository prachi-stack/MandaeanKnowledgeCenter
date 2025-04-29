"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="">
            <div className="px-8">
                <h1 className="text-center text-3xl mb-7">Log In</h1>
                <div className="bg-blue-600 flex items-center space-x-[10rem] p-1 rounded">
                    <div className="bg-white rounded">
                        <Image src="/google.png" alt="google" width={30} height={30} />
                    </div>
                    <div>
                        <h3 className="text-white text-sm font-medium">Sign in with Google</h3>
                    </div>
                </div>
                <div className="flex items-center justify-between my-4 text-sm text-gray-500">
                    <hr className="w-1/4" />
                    <span>Or, sign in with your email</span>
                    <hr className="w-1/4" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                        id="email"
                        placeholder="gilroybworn@gmail.com |"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="space-y-2 mt-3">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        placeholder="Enter password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between mt-2 text-sm">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Keep me sign in</Label>
                    </div>
                    <Link href="/forgot-password" className="text-blue-600 hover:underline text-sm">
                        Forgot password?
                    </Link>
                </div>
                <Button className="w-full bg-blue-600 my-4">
                    Sign In
                </Button>
                <p className="text-sm mt-2 text-gray-500">
                    Don’t have an account?{" "}
                    <Link href="/signup" className="text-blue-600 hover:underline">
                        Sign up now
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login