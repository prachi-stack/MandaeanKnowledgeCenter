import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Image, Star } from "lucide-react"


const courseData = [
    {
        name: "UI/UX Prototyping with Proto.io",
        impressions: "17,913",
        rating: "4.5",
        enrollment: 62,
        completions: 20,
        iconBg: "bg-stone-600",
    },
    {
        name: "How to Make UX Case Study for Beginner",
        impressions: "64,142",
        rating: "4.5",
        enrollment: 21,
        completions: 20,
        iconBg: "bg-emerald-500",
    },
    {
        name: "How to Conduct User Research from Scratch",
        impressions: "38,841",
        rating: "4.5",
        enrollment: 21,
        completions: 20,
        iconBg: "bg-blue-500",
    },
    {
        name: "Creating Design System for Easier and Faster Design",
        impressions: "53,814",
        rating: "4.5",
        enrollment: 21,
        completions: 20,
        iconBg: "bg-emerald-500",
    },
    {
        name: "Designing with User Centered Approach",
        impressions: "21,741",
        rating: "4.5",
        enrollment: 62,
        completions: 20,
        iconBg: "bg-stone-600",
    },
    {
        name: "Intro to UI/UX Design for Graphic Designer",
        impressions: "18,853",
        rating: "4.5",
        enrollment: 21,
        completions: 20,
        iconBg: "bg-blue-500",
    },
]

export default function CourseTable() {
    return (
        <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="font-medium">Course Status</h1>
                <div className="flex items-center text-gray-500">
                    <Button className="">Sort by<ChevronDown /></Button>
                    <Button>Last 12 Month<ChevronDown /></Button>
                </div>
            </div>
            <Table>
                <TableHeader className="">
                    <TableRow className="border-none bg-gray-100 rounded text-gray-500" >
                        <TableHead className="w-[300px]">Course Name</TableHead>
                        <TableHead>Impressions</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Enrollment</TableHead>
                        <TableHead>Completions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {courseData.map((course, i) => (
                        <TableRow key={i} className="border-none text-zinc-700">
                            <TableCell className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-md ${course.iconBg} flex items-center justify-center`}>
                                    <Image className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-medium">{course.name}</span>
                            </TableCell>
                            <TableCell>{course.impressions}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-1">
                                    {course.rating} <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                </div>
                            </TableCell>
                            <TableCell className="text-center">{course.enrollment}</TableCell>
                            <TableCell className="text-center">{course.completions}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
