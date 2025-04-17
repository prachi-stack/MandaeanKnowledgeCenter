import HeroSection from "@/components/homepage/hero-section"
import CategorySection from "@/components/homepage/category-section"
import TrendingNow from "@/components/homepage/trending-now"
import MostWatched from "@/components/homepage/most-watched"
import Sidebar from "@/components/homepage/sidebar"
import CommunityDiscussions from "@/components/homepage/community-discussion"
import Footer from "@/components/homepage/footer"
 
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