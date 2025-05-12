import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Image } from "lucide-react"

export default function SocialAccounts() {
    return (
        <div className="mt-4">
            <div className="rounded-xl">
                <h2 className="text-lg font-medium mb-4">Social Accounts</h2>

                <div className="space-y-4 bg-[#F7F7F7]">
                <div className="flex items-center bg-white h-15 px-2 justify-between">
                        <div className="flex items-center space-x-2">
                            <Image size={20} />
                        <span className="text-xs">Facebook</span>
                        </div>  
                        <div className="">
                            <Button size="sm" className="bg-blue-600 text-white rounded-md px-5 text-xs font-medium">Link</Button>
                        </div>
                    </div>

                    <div className="flex items-center bg-white h-15 px-2 justify-between">
                        <div className="flex items-center space-x-2">
                            <Image size={20} />
                        <span className="text-xs">Instagram</span>
                        </div>  
                        <div className="">
                            <Button size="sm" className="rounded-md px-5 text-xs font-medium">samanthawill<X /></Button>
                        </div>
                    </div>

                    <div className="flex items-center bg-white h-15 px-2 justify-between">
                        <div className="flex items-center space-x-2">
                            <Image size={20} />
                        <span className="text-xs">Twitter</span>
                        </div>  
                        <div className="">
                            <Button size="sm" className="bg-blue-600 text-white rounded-md px-5 py-1 text-xs font-medium">Link</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
