import HeroSection from "../common/hero-section"
import FiltersSidebar from "./components/filters-sidebar"
import LibrarySection from "./components/library-section"
import Footer from "../common/footer"
import CategorySection from "../home/components/category-section"

const page = () => {
  return (
    <div>
      <HeroSection />
      <div className="mx-4 px-3 sm:px-5 md:px-8">
        <CategorySection />
      </div>
       <LibrarySection />
      <Footer />
    </div>
  )
}

export default page