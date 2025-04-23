import { Button } from "@/components/ui/button"
import Search from "@/components/ui/input-search"
import SortButton from "@/components/ui/sort-button"
import CoursesGrid from "./courses-grid"

const CoursesList = () => {
  return (
    <div className="px-4 py-8 mx-3 sm:mx-5 md:mx-8">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 items-center justify-between mb-4">
        <div className="flex space-x-2">
            <Button className="bg-blue-500 px-2">Courses</Button>
            <Button className="bg-gray-300 text-black px-2">Be a teacher</Button>
            <Button className="px-2 bg-green-700">Donate</Button>
        </div>
        <div className="flex items-center space-x-2 mt-4">
            <Search placeholder="Search courses"/>
            <SortButton />
        </div>
        </div>
        <CoursesGrid />
    </div>
  )
}

export default CoursesList