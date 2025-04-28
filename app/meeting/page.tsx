import MeetingCenter from "@/app/meeting/components/meeting-center"
import UpcomingMeetings from "@/app/meeting/components/upcoming-meetings"
import HeroSection from "@/app/common/hero-section"
import Footer from "@/app/common/footer"

const page = () => {
    return (
      <main className="bg-gray-100" >
         <HeroSection />
        <div className="px-4 mx-3 sm:mx-5 md:mx-8">
       <MeetingCenter />
        <UpcomingMeetings />
        </div>
        
        <Footer />
      </main>
    )
  }
  
  export default page