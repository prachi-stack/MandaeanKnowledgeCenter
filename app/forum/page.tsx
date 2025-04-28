import HeroSection from "@/app/common/hero-section"
import ForumLayout from "@/app/forum/components/forum-layout"

const page = () => {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <ForumLayout />
    </div>
  )
}

export default page