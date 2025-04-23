import MeetingCenter from "@/app/meeting/components/meeting-center"
import UpcomingMeetings from "@/app/meeting/components/upcoming-meetings"
import HeroSection from "@/app/common/hero-section"
import Footer from "@/app/common/footer"

const page = () => {
    return (
      <main>
        <HeroSection />
        <MeetingCenter />
        <UpcomingMeetings />
        <Footer />
      </main>
    )
  }
  
  export default page