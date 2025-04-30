import HeroSection from "../common/hero-section"
import CategorySection from "../home/components/category-section"
import ForumLayout from "./components/forum-layout"

const page = () => {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <div className="mx-4 px-3 sm:px-5 md:px-8">
        <CategorySection />
      </div>
       <ForumLayout />
    </div>
  )
}

export default page