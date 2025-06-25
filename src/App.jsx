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

export default function App() {
  return (
    <main className="overflow-x-hidden bg-[#151515]">
      <Navbar />
      <FirstSection />
      <PopularFilimo />
      <div className="flex flex-col items-center justify-center ">
        <Info1 />
        <Info2 />
      </div>
      <RayeganSection />
      <KudakSection />
      <CinemaSection />
      <CommentSection />
      <Accordian />
      <Footer />
    </main>
  );
}
