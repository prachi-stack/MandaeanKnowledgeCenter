import Footer from "../common/footer"
import HeroSection from "../common/hero-section"
import CategorySection from "../home/components/category-section"
import SettingsPage from "./components/settings"

 
const page = () => {
  return (
    <div>
        <HeroSection />
        <div className="mx-4 px-3 sm:px-5 md:px-8" >
          <CategorySection />
        </div>
         <SettingsPage />
        <Footer />
    </div>
  )
}

export default page