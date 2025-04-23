import HeroSection from "@/app/common/hero-section"
import CategorySection from "@/app/home/components/category-section"
import TrendingNow from "@/app/home/components/trending-now"
import MostWatched from "@/app/home/components/most-watched"
import Sidebar from "@/app/home/components/sidebar"
import CommunityDiscussions from "@/app/home/components/community-discussion"
import Footer from "@/app/common/footer"
 
const Homepage = () => {
  return (
    <div>
      <div className="mx-4 sm:mx-11">
      <HeroSection />
        <CategorySection />
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-2">
            <div>
                <TrendingNow />
                <MostWatched />
            </div>
            <div>
                <Sidebar />
            </div>
        </div>
        <CommunityDiscussions />
      </div>
       
        <Footer />
    </div>
  )
}

export default Homepage