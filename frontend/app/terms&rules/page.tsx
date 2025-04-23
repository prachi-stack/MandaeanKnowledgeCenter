import HeroSection from "@/app/common/hero-section"
import Footer from "@/app/common/footer"
import TermsRules from "@/app/terms&rules/components/page"
const page = () => {
  return (
    <div>
      <div className="px-11">
      <HeroSection />
        <TermsRules />
      </div>
      <Footer />
    </div>
  )
}

export default page