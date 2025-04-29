import Footer from "../common/footer"
import HeroSection from "../common/hero-section"
import SettingsPage from "./components/settings"

 
const page = () => {
  return (
    <div>
        <HeroSection />
        <SettingsPage />
        <Footer />
    </div>
  )
}

export default page