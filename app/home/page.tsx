import HeroSection from "../common/hero-section"
import CategorySection from "./components/category-section"
import TrendingNow from "./components/trending-now"
import MostWatched from "./components/most-watched"
import Sidebar from "./components/sidebar"
import CommunityDiscussions from "./components/community-discussion"
import Footer from "../common/footer"
 
const Homepage = () => {
  return (
    <div>
      <div className="">
      <HeroSection />
      <div className=" px-4 mx-3 sm:mx-5 md:mx-8"> 
        <CategorySection />
        <div className="flex flex-col lg:flex-row justify-between">
            <div>
                <TrendingNow />
                <MostWatched />
            </div>
            <div className="mt-5">
                <Sidebar />
            </div>
        </div>
      </div>
      <div className="bg-white lg:px-[10rem] py-8 mt-5">
        <CommunityDiscussions />
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Homepage