import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import CircularProgress from "@/components/ui/circular-progress"
import { EllipsisVertical } from "lucide-react"
interface Course {
    title: string
    objective: string
    category: string
    status: string
    progress: number
    compHrs: string
    score: string
    lastUsed: string
}

const courses: Course[] = [
    {
        title: "Advanced CSS",
        objective: "Techriques",
        category: "Development",
        status: "Completed",
        progress: 100,
        compHrs: "8 of 16 hrs",
        score: "95%",
        lastUsed: "Apr 2, 2025",
    },
    {
        title: "React Hooks",
        objective: "Masterclass",
        category: "Dereelpmni",
        status: "In Progress",
        progress: 50,
        compHrs: "2 of 16 hrs",
        score: "95%",
        lastUsed: "Apr 1, 2025",
    },
    {
        title: "Mobile Development",
        objective: "",
        category: "Devkoptend",
        status: "Juod Slarled",
        progress: 10,
        compHrs: "12 of12 hrs",
        score: "95%",
        lastUsed: "Apr 1, 2025",
    }

]

export default function Courses() {


    return (
        <div className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">My Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course, index) => (
                    <Card key={index}>
                        <CardContent className="space-y-4 p-4">
                            <div className="flex flex-col  justify-between">
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold">{course.title}</h3>
                                        <p className="text-sm text-gray-600">{course.category}</p>
                                        <p className="text-sm text-gray-500">{course.status}</p>
                                    </div>
                                    <div>
                                        <EllipsisVertical size={32} />
                                    </div>
                                </div>
                                <div className="flex space-x-4 mt-4 text-sm">
                                    <CircularProgress value={course.progress} size={50} />
                                    <div className="flex flex-col">
                                        <span>Progress</span>
                                        <span>{course.compHrs}</span>
                                    </div>
                                    <div className="flex flex-col ml-auto">
                                        <span>{course.score}</span>
                                        <span>Quiz Score</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <Badge className={
                                    course.status === "Completed"
                                        ? "bg-green-500 text-white"
                                        : course.status === "In Progress"
                                            ? "bg-yellow-500 text-black"
                                            : "bg-gray-400 text-white"
                                }>{course.status}</Badge>
                                <p className="text-xs text-gray-400">Last used: {course.lastUsed}</p>
                            </div>

                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
