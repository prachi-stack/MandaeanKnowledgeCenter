import BeforeLogin from "./student/auth/before-login/page"
import Navbar from "./student/common/navbar"
export default function Home() {
  return <div className="container mx-auto">
    <Navbar />
    <BeforeLogin />
  </div>
}
