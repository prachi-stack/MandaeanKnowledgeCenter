"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import HeroSection from "../../common/hero-section"
import Image from "next/image"
import Login from "../login/page"
import RegisterForm from "../signup/page"
import ForgotPasswordPage from "../login/components/forgot-password"
import VerifyOTPPage from "../login/components/verify-otp"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogTitle, DialogContent, } from "@/components/ui/dialog"
import SetPasswordPage from "../login/components/set-password"
import SuccessPage from "../login/components/success-page"

type ModalState = "none" | "login" | "signup" | "forgot" | "otp" | "set-password" | "success"

const BeforeLogin = () => {
    const [modal, setModal] = useState<ModalState>("none")

    return (
        <div>
            <HeroSection />
            <div className="px-4 mx-3 sm:mx-5 md:mx-8 mt-8">
                <div className="flex items-center justify-between font-medium">

                    <Button onClick={() =>setModal("login")} size="sm" className="rounded-full bg-sky-600 text-white sm:px-5 sm:py-4">
                        Sign In
                    </Button>
                    <Dialog open={modal !== "none"} onOpenChange={() => setModal("none")}>
                        <DialogContent className="w-md p-0 bg-white border-none shadow-none">
                        <DialogTitle className="sr-only">Authentication Modal</DialogTitle>
                            {modal === "login" && (
                                <Login switchToSignup={() => setModal("signup")} switchToForgot={() => setModal("forgot")} />
                            )}
                            {modal === "signup" && (
                                <RegisterForm switchToLogin={() => setModal("login")} />
                            )}
                            {modal === "forgot" && (
                                <ForgotPasswordPage switchToOTP={() => setModal("otp")} />
                            )}
                            {modal === "otp" && (
                                <VerifyOTPPage onClose={() => setModal("set-password")} />
                            )}
                            {modal === "set-password" && <SetPasswordPage switchToSuccess={() => setModal("success")} />}
                            {modal === "success" && <SuccessPage backToLogin={() => setModal("login")} />}
                        </DialogContent>
                    </Dialog>

                    <div className="flex space-x-2">
                        <Button size="sm" className="rounded-full bg-green-500 sm:px-7 sm:py-5 text-white">Donate</Button>
                        <Button size="sm" className="rounded-full sm:px-7 sm:py-5 border border-gray-200">Contact</Button>
                    </div>
                </div>
                <div className="relative w-full mt-10 z-10">
                    <Image
                        src="/beforelogin.png"
                        alt="Working guy banner"
                        width={1200}
                        height={600}
                        className="w-full h-auto rounded-xl"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <Button className="bg-stone-400 rounded-4xl sm:w-15 sm:h-15 sm:rounded-full">
                            <Play fill="#FFFFFF" className="text-white" />
                        </Button>
                    </div>

                    <div className="absolute bottom-2 sm:bottom-10 left-4 sm:left-10 text-white text-xs sm:text-lg md:text-xl lg:text-4xl z-20">
                        <p>
                            Transforming Ideas Into Reality
                        </p>
                        <p>
                            Watch how we're making a difference in communities worldwide
                        </p>
                    </div>
                </div>
            </div>

            <div className="-mt-33 sm:-mt-60 md:-mt-80 lg:-mt-110 bg-black h-60 sm:h-80 md:h-110 lg:h-140 z-0 relative flex items-center justify-center">
                <div className="absolute bottom-8 sm:bottom-5 md:bottom-9 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <Button size="sm" className="border border-1 border-white text-white">
                        <ChevronLeft />
                    </Button>
                    <Button size="sm" className="bg-sky-600 text-white">
                        <ChevronRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default BeforeLogin