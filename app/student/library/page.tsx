import HeroSection from "../common/hero-section"
import FiltersSidebar from "./components/filters-sidebar"
import LibrarySection from "./components/library-section"
import Footer from "../common/footer"

const page = () => {
  return (
    <div>
      <HeroSection />
      <LibrarySection />
      <Footer />
    </div>
  )
}

export default page