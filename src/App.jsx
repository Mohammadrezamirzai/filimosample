import { useState } from "react";
import Navbar from "./component/Navbar.jsx";
import FirstSection from "./component/FirstSection.jsx";
import PopularFilimo from "./component/PopularFilimo.jsx";
import Footer from "./component/Footer.jsx";
import Accordian from "./component/Accordian.jsx";
import CinemaSection from "./component/CinemaSection.jsx";
import KudakSection from "./component/KudakSection.jsx";
import Info1 from "./component/Info1.jsx";
import Info2 from "./component/Info2.jsx";
import RayeganSection from "./component/RayeganSection.jsx";
import CommentSection from "./component/CommentSection.jsx";
import Signup from "./component/Signup.jsx";
import Login from "./component/Login.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home"); // "home", "signup", "login"

  const renderPage = () => {
    switch (currentPage) {
      case "signup":
        return <Signup />;
      case "login":
        return <Login />;
      default:
        return (
          <main className="overflow-x-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] min-h-screen">
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10">
              <Navbar onNavigate={setCurrentPage} />

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

                {/* Footer */}
                <Footer />
              </div>
            </div>
          </main>
        );
    }
  };

  return (
    <div className="font-vazir">
      {renderPage()}

      {(currentPage === "signup" || currentPage === "login") && (
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setCurrentPage("home")}
            className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer backdrop-blur-sm border border-white/10"
          >
            بازگشت به خانه
          </button>
        </div>
      )}
    </div>
  );
}
