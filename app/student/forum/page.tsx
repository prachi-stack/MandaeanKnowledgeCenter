import HeroSection from "../common/hero-section"
import ForumLayout from "./components/forum-layout"

const page = () => {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <ForumLayout />
    </div>
  )
}

export default page