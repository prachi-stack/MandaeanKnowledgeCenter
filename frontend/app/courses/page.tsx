import Footer from "../common/footer"
import HeroSection from "../common/hero-section"
import CoursesList from "./components/courses-list"

const page = () => {
  return (
    <div>
        <HeroSection />
        <CoursesList />
        <Footer />
    </div>
  )
}

export default page