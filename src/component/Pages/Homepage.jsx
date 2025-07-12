import Navbar from "../Navbar.jsx";
import FirstSection from "../HomepageComponents/FirstSection.jsx";
import PopularFilimo from "../HomepageComponents/PopularFilimo.jsx";
import Info1 from "../HomepageComponents/Info1.jsx";
import Info2 from "../HomepageComponents/Info2.jsx";
import RayeganSection from "../HomepageComponents/RayeganSection.jsx";
import KudakSection from "../HomepageComponents/KudakSection.jsx";
import CinemaSection from "../HomepageComponents/CinemaSection.jsx";
import CommentSection from "../HomepageComponents/CommentSection.jsx";
import Accordian from "../HomepageComponents/Accordian.jsx";
import Ticket from "../HomepageComponents/Ticket.jsx";

const Homepage = () => (
  <main className="overflow-x-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] min-h-screen">
    {/* Animated background elements */}
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
    </div>
    <div className="relative z-10">
      <Navbar />
      {/* Hero Section */}
      <div className="relative">
        <FirstSection />
      </div>
      {/* Content Sections */}
      <div className="relative z-20">
        <PopularFilimo />
        {/* Info Sections with modern spacing */}
        <div className="py-16">
          <div className="flex flex-col items-center justify-center space-y-16">
            <Info1 />
            <Info2 />
          </div>
        </div>
        {/* Content Sections with enhanced spacing */}
        <div className="space-y-20">
          <RayeganSection />
          <KudakSection />
          <CinemaSection />
          <CommentSection />
        </div>
        {/* FAQ Section */}
        <div className="py-16">
          <Accordian />
        </div>
      </div>
    </div>
  </main>
);

export default Homepage;
