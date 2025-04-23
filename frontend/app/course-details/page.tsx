"use client"

import { useState } from "react"
import HeroSection from "@/app/common/hero-section"
import Video from "@/app/course-details/-components/video/video"
import Live from "@/app/course-details/-components/live-stream/live"
import Footer from "@/app/common/footer"

const page = () => {
    const [tab, setTab] = useState("video")

    return (
        <div>
            <HeroSection />
            <div className="border-b border-gray-200 mt-4 flex gap-6 px-6">
        <button
          className={`pb-2 font-medium ${tab === "video" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"}`}
          onClick={() => setTab("video")}
        >
          Video
        </button>
        <button
          className={`pb-2 font-medium ${tab === "live" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"}`}
          onClick={() => setTab("live")}
        >
          Live Stream
        </button>
      </div>
      <div className="px-6 py-4">
        {tab === "video" ? <Video /> : <Live />}
      </div>

            <Footer />
        </div>
    )
}

export default page