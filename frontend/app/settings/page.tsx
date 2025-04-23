import Footer from "@/app/common/footer"
import HeroSection from "@/app/common/hero-section"
import SettingsPage from "@/app/settings/components/settings"

 
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