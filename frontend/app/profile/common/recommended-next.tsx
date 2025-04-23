
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

type Course = {
  title: string
  progress: number
  iconColor: string
}

const recommendedCourses: Course[] = [
  {
    title: "Complete Backend Development",
    progress: 30,
    iconColor: "text-purple-500",
  },
  {
    title: "Continue React Hooks Masterclass",
    progress: 50,
    iconColor: "text-blue-500",
  },
]

export default function RecommendedCourses() {
  return (
    <Card className="w-full p-4 mt-4">
      <CardContent className="space-y-4">
        <p className="text-md font-semibold">Recommended Next</p>
        {recommendedCourses.map((course, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <BookOpen className={`h-5 w-5 ${course.iconColor}`} />
            </div>
            <div className="space-y-2">
              <p>{course.title}</p>
              <div className="flex items-center space-x-4">
              <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${course.progress}%` }}
              />
              </div>
              <div>
              <p className="text-xs text-gray-500">{course.progress}%</p>

              </div>
              </div>

            </div>

          </div>
        ))}
      </CardContent>
    </Card>
  )
}
