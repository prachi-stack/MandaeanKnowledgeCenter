import MeetingCenter from "./components/meeting-center"
import UpcomingMeetings from "./components/upcoming-meetings"
import HeroSection from "../common/hero-section"
import Footer from "../common/footer"
import CategorySection from "../home/components/category-section"

const page = () => {
    return (
      <main className="bg-gray-100" >
         <HeroSection />
         <div className="px-4 mx-3 sm:mx-5 md:mx-8">
          <CategorySection />
       <MeetingCenter />
        <UpcomingMeetings />
        </div>
        
        <Footer />
      </main>
    )
  }
  
  export default page