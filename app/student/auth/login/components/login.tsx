"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

type LoginProps = {
    switchToSignup: () => void
    switchToForgot: () => void
}

function Login({ switchToSignup, switchToForgot }: LoginProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="mx-8">
            <div className="py-5">
                <h1 className="text-center text-2xl text-[#183B56] mb-7">Log In</h1>
                <Button className="bg-blue-600 flex items-center justify-between p-1 rounded w-full">
                    <div className="bg-white rounded">
                        <Image src="/google.png" alt="google" width={30} height={30} />
                    </div>
                    <h3 className="text-white font-medium flex-1 text-center">Sign in with Google</h3>
                </Button>
                <div className="flex items-center justify-center my-4 text-sm text-gray-500">
                    <hr className="w-1/4 border-[#E5EAF4] border-[1.5px]" />
                    <span className="text-[#183B56] text-xs mx-2">Or, sign in with your email</span>
                    <hr className="w-1/4 border-[#E5EAF4] border-[1.5px]" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email" className="font-normal text-slate-500">Email address</Label>
                    <Input
                        id="email"
                        placeholder="gilroybworn@gmail.com |"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-slate-300 placeholder:text-[#183B56] text-sm"
                    />
                </div>
                <div className="space-y-2 mt-3">
                    <Label htmlFor="password" className="font-normal text-slate-500">Password</Label>
                    <Input
                        id="password"
                        placeholder="Enter password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-slate-300 placeholder:text-slate-400 text-sm "
                    />
                </div>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="remember" className="border-[#E5EAF4]" />
                        <Label htmlFor="remember" className="font-normal text-slate-500">Keep me sign in</Label>
                    </div>
                    <Button onClick={switchToForgot} className="text-blue-600 px-0">
                        Forgot password?
                    </Button>
                </div>
                <Link href="/student/home">
                    <Button className="w-full bg-blue-600 mt-4 py-5 text-white font-medium">
                        Sign In
                    </Button>
                </Link>
                <p>
                    <span className="text-sm mt-2 text-gray-500">
                        Don’t have an account?
                    </span>
                    <Button className="text-blue-600 font-medium px-2" onClick={switchToSignup}>
                        Sign up now
                    </Button>
                </p>
            </div>
        </div>
    )
}

export default Login