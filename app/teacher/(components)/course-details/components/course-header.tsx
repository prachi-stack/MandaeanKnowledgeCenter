import { Clock, Star, User } from 'lucide-react'

const CourseHeader = () => {
  return (
    <div className="rounded-xl p-6 mx-auto mb-6">
      <h2 className="text-lg font-medium mb-1">Master Digital Product Design: UX Research & UI Design</h2>
      <p className="text-gray-500 text-sm mb-4">
        A complete design education for product designers: Research the user experience, then design a great user interface
      </p>

      <div className="flex flex-wrap items-center gap-6 text-sm mb-2">
        {/* Ratings */}
        <div className="flex items-center space-x-1">
          <p className="font-medium">4.6</p>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#FACC15" stroke="#FACC15" />
            ))}
          </div>
          <p className="text-gray-600 font-medium">(2,104 ratings)</p>
        </div>

        {/* Students */}
        <p className="text-gray-600">12,034 students</p>
      </div>

      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700">
        <div className="flex items-center space-x-2">
          <Clock size={16} />
          <p>25.5 total hour</p>
        </div>
        <div className="flex items-center space-x-2">
          <Star size={16} />
          <p>Intermediate</p>
        </div>
        <div className="flex items-center space-x-2">
          <User size={16} />
          <p>by Elijah Snyder</p>
        </div>
      </div>
    </div>
  )
}

export default CourseHeader
