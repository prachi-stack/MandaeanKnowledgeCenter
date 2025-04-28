import NextClass from "@/app/profile/upcoming/next-class"
import UserCalender from "@/app/profile/upcoming/user-calender"
import UserProfile from "@/app/profile/common/user-profile"
import UpcomingClasses from "@/app/profile/upcoming/upcoming-classes"
import HeroSection from "@/app/common/hero-section"
import Footer from "@/app/common/footer"

const UpcomingClass = () => {
    return (
        <div>
            <HeroSection />
            <div className="flex flex-col sm:flex-row px-4 mx-3 sm:mx-5 md:mx-8 my-8 sm:gap-6">
                <div className="flex flex-col gap-4">
                    <UserProfile />
                    <UserCalender />
                    <NextClass />
                </div>
                <div>
                    <UpcomingClasses />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UpcomingClass