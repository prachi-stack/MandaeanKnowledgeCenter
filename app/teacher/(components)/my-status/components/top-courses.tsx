import { Star } from "lucide-react"

export default function TopCourses() {
    const courses = [
        {
            id: 1,
            title: "UI/UX Prototyping with Proto.io",
            students: 10,
            rating: 4.5,
            color: "bg-gray-800",
        },
        {
            id: 2,
            title: "How to Make UX Case Study for Beginner",
            students: 32,
            rating: 4.5,
            color: "bg-emerald-500",
        },
        {
            id: 3,
            title: "How to Conduct User Research from Scratch",
            students: 12,
            rating: 4.5,
            color: "bg-blue-500",
        },
    ]

    return (
        <div className="rounded-xl bg-white p-4 ">
            <h2 className="text-lg font-medium mb-4">Top Courses</h2>
            <div className="space-y-8">
                {courses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className={`w-9 h-10 rounded-lg ${course.color}`} />
                            <h4 className="text-xs font-medium w-35">{course.title}</h4>
                        </div>
                        <div className="flex items-center space-x-9">
                            <span className="text-xs font-medium">{course.students}</span>
                            <div className="flex items-center">
                                <span className="text-xs mr-1">{course.rating}</span>
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
