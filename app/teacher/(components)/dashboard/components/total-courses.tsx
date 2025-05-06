import { TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const info = [
    {title: "Active Students", number: "400"},
    {title: "Asssignments to Review", number: "5"},
    {title: "Hours Taught", number: "14hr"}
]

const TotalCourses = () => {
    return (
        <div className="flex flex-col space-y-4 pt-4 bg-gray-100 rounded-2xl">
            <div className="flex justify-between px-4">
            <h1 className="font-semibold text-lg">Total Courses</h1>
            <TrendingUp />
            </div>
            <div className="flex justify-between px-4">
            {info.map((i, idx) => (
                 <div key={idx} className="flex flex-col items-start gap-1 w-20 ">
                    <p className="text-xs">{i.title}</p>
                    <p className="text-lg">{i.number}</p>
                </div>
            ))}
            </div>
            <div className="flex justify-between bg-[#3F3F44] rounded-b-2xl px-4 py-5 ">
                <div className="">
                    <p className="text-white text-xs">Student Progress</p>
                    <p className="text-emerald-500">76%</p>
                </div>
                <div className="flex items-center justify-center">
                    <Button size="sm" className="bg-blue-600 text-white text-xs">Manage Assignment</Button>
                </div>
            </div>
        </div>
    )
}

export default TotalCourses