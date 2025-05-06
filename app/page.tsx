import BeforeLogin from "./student/auth/before-login/page"
import Navbar from "./student/common/navbar"
export default function Home() {
  return <div className="bg-gray-100 container">
    <Navbar />
    <BeforeLogin />
  </div>
}
