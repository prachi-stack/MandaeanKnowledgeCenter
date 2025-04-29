 import { EllipsisVertical, Dot } from "lucide-react"
 import { MultiSegmentProgress } from "@/components/ui/multisegment-progress"
const CourseState = () => {
    return (
        <div className="shadow px-2 py-11">
            <div className="flex justify-between mb-5">
                <h1 className="text-lg font-semibold">Course State </h1>
                <EllipsisVertical />
            </div>
            <div className="flex items-center justify-center">
                 <MultiSegmentProgress
                  segments={[
                    { value: 40, color: "#10b981",},
                    { value: 30, color: "#3b82f6", },
                    {value: 30, color: "#F6F6F6"}
                  ]} size={100} strokeWidth={16}
                  centerContent={<div className="text-xl font-bold">70%</div>}
                />

            </div>
            <ul className="text-xs whitespace-nowrap list-disc list-inside mx-7">
                <li className="marker:text-xl marker:text-[#10b981]">
                     Conversion Goal - 40%
                </li>
                <li className="marker:text-xl marker:text-[#3b82f6]">
                    Course Engagement - 30%
                </li>
            </ul>
        </div>
    )
}

export default CourseState