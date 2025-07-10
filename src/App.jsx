import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Signup from "./component/Validate/Signup.jsx";
import Login from "./component/Validate/Login.jsx";
import Card from "./component/Card.jsx";
import CardsPage from "./component/CardsPage.jsx";
import Homepage from "./component/Homepage.jsx";
import CardDetailsPage from "./component/CardDetailsPage.jsx";
import Search from "./component/Search.jsx";
import Results from "./component/Results.jsx";
import Dashboard from "./component/Dashboard.jsx";
import ForgetPassword from "./component/Validate/ForgetPassword.jsx";

export default function App() {
  return (
    <div className="font-vazir">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/searching" element={<Search />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search/:query" element={<Results />} />
          <Route path="/khareji" element={<CardsPage title={"خارجی"} />} />
          <Route path="/irani" element={<CardsPage title={"ایرانی"} />} />
          <Route path="/collection" element={<CardsPage title={"مجموعه"} />} />
          <Route path="/school" element={<CardsPage title={"فیلیمومدرسه"} />} />
          <Route path="/movie/:id" element={<CardDetailsPage />} />
          <Route path="/:category/:genre" element={<CardsPage />} />
          <Route path="/:category/:genre" element={<CardsPage />} />
        </Routes>
      </Router>
    </div>
  );
}
