 "use client"

import { useState } from "react"
import HeroSection from "@/app/common/hero-section"
import LiveClasses from "@/app/profile/live-classes/live-classes"
import Footer from "@/app/common/footer"
import UpcomingClasses from "@/app/profile/upcoming/upcoming-classes"
import UserProfile from "./common/user-profile"
import ProfileStats from "./common/profile-status"
import RecommendedCourses from "./common/recommended-next"
import MyCourses from "./my-courses/my-courses"

const Page = () => {
  const [activeTab, setActiveTab] = useState("myCourses")

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "liveClasses":
        return <LiveClasses />
      case "upcoming":
        return <UpcomingClasses />
      default:
        return <MyCourses />
    }
  }

  const tabClass = (tab: string) =>
    `text-sm font-medium px-4 py-2 cursor-pointer ${
      activeTab === tab ? "text-blue-600" : "text-gray-500 border-transparent"
    }`

  return (
    <div>
      <HeroSection />
      <div className="flex px-4 py-6 gap-4">
        <div className="w-1/4">
          <UserProfile />
          <ProfileStats />
          <RecommendedCourses />
        </div>
        <div className="w-3/4">
          <div className="flex mb-4">
            <button className={tabClass("myCourses")} onClick={() => setActiveTab("myCourses")}>
              MY COURSES
            </button>
            <button className={tabClass("liveClasses")} onClick={() => setActiveTab("liveClasses")}>
              LIVE CLASSES
            </button>
            <button className={tabClass("upcoming")} onClick={() => setActiveTab("upcoming")}>
              UPCOMING CLASSES
            </button>
          </div>
          {renderActiveComponent()}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Page
