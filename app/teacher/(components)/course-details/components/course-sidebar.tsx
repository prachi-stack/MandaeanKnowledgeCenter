import {
    BookOpen,
    Download,
    MonitorPlay,
  } from 'lucide-react'
  import Image from 'next/image'
  
  const CourseSidebar = () => {
    return (
      <div className="border rounded-xl p-4 w-full max-w-sm border-[#ECEAEE] pb-[6rem]">
         <div className="rounded-lg overflow-hidden mb-4">
          <Image
            src="/teacher/coursethumbnail.png"
            alt="Course Thumbnail"
            width={350}
            height={200}
            className="object-cover w-full h-[200px]"
          />
        </div>
  
         <h3 className="text-lg font-semibold mb-4">This course includes:</h3>
  
         <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-2">
            <MonitorPlay strokeWidth={3} size={18} />
            <span>15.5 hours on-demand video</span>
          </li>
          <li className="flex items-center gap-2">
            <Download strokeWidth={3} size={18} />
            <span>26 downloadable resources</span>
          </li>
          <li className="flex items-center gap-2">
            <BookOpen strokeWidth={3} size={18} />
            <span>Certificate of completion</span>
          </li>
        </ul>
      </div>
    )
  }
  
  export default CourseSidebar
  