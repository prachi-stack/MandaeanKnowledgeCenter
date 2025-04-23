import Image from "next/image"
import { SquarePlay  } from "lucide-react"

const CurrentVideo = () => {
  return (
    <div>
      <h2>Current Video</h2>
      <div className="relative">
      <Image src="/courseDetails/video.png" alt="video" width={400} height={60} />
      <SquarePlay size={37} className="absolute inset-0 text-white  rounded-full" />
      </div>
      <h2 className="font-bold ">Introduction to Advanced Concepts</h2>
      <h3>Learn the fundamentals and explore practical applications with our expert instructor,</h3>
    </div>
  )
}

export default CurrentVideo