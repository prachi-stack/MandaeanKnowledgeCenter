import {
    BookOpen,
    Download,
    Globe,
    MonitorPlay,
  } from 'lucide-react'
  import Image from 'next/image'
  
  const CourseSidebar = () => {
    return (
      <div className="border rounded-xl p-4 w-full max-w-sm border-[#ECEAEE]">
        {/* Image */}
        <div className="rounded-lg overflow-hidden mb-4">
          <Image
            src="/teacher/coursethumbnail.png" // Replace with actual image path
            alt="Course Thumbnail"
            width={350}
            height={200}
            className="object-cover w-full h-[200px]"
          />
        </div>
  
        {/* Title */}
        <h3 className="text-md font-semibold mb-4">This course includes:</h3>
  
        {/* Features List */}
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-center gap-2">
            <MonitorPlay size={16} />
            <span>15.5 hours on-demand video</span>
          </li>
          <li className="flex items-center gap-2">
            <Download size={16} />
            <span>26 downloadable resources</span>
          </li>
          <li className="flex items-center gap-2">
            <Globe size={16} />
            <span>Full lifetime access</span>
          </li>
          <li className="flex items-center gap-2">
            <BookOpen size={16} />
            <span>Certificate of completion</span>
          </li>
        </ul>
      </div>
    )
  }
  
  export default CourseSidebar
  