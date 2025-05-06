import { Progress } from "@/components/ui/progress"
import { TrendingUp } from "lucide-react"

export default function EngagementRate() {
    return (
        <div className="w-full max-w-4xl mx-auto mt-8">
            <div className="bg-[#2A2A2A] rounded-xl p-4">
                <h2 className="text-white text-xs mb-2">Your Engagement Rate</h2>
                <div className="bg-gray-200 rounded">
                    <Progress className="w-[70%] bg-emerald-600" />
                </div>
                <div className="bg-white rounded-xl px-4 py-3 mt-4">
                    <div className="flex items-center">
                        <div className="text-lg font-medium text-[#4361ee]">70.5%</div>
                        <TrendingUp className="h-6 w-6 ml-2 text-orange-400" />
                    </div>
                    <p className="text-xs text-gray-500 whitespace-nowrap">*Based on student interactions in your sessions</p>
                </div>
            </div>
        </div>
    )
}
