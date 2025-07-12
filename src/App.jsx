import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";

import Signup from "./component/Validate/Signup.jsx";
import Login from "./component/Validate/Login.jsx";

import CardsPage from "./component/Pages/CardsPage.jsx";
import Homepage from "./component/Pages/Homepage.jsx";
import CardDetailsPage from "./component/Pages/CardDetailsPage.jsx";
import Search from "./component/Pages/Search.jsx";
import Results from "./component/Pages/Results.jsx";
import Dashboard from "./component/Pages/Dashboard.jsx";
import ForgetPassword from "./component/Validate/ForgetPassword.jsx";
import AddMovie from "./component/Pages/AddMovie.jsx";
import Caress from "./component/Pages/Caress.jsx";
import Apply from "./component/Ui/Apply.jsx";
import Information from "./component/Pages/Information.jsx";
import Rules from "./component/Pages/Rules.jsx";
import Footer from "./component/Footer.jsx";
import Favorites from "./component/Pages/Favorite.jsx";
import NotFound from "./component/Pages/NotFound.jsx";
import BuyTicket from "./component/Pages/BuyTicket.jsx";
import SubscriptionPanel from "./component/Pages/SubscriptionPanel.jsx";

export default function App() {
  return (
    <div className="font-vazir">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subpanel" element={<SubscriptionPanel />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/searching" element={<Search />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/information" element={<Information />} />
          <Route path="/caress" element={<Caress />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/addmovie" element={<AddMovie />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/search/:query" element={<Results />} />
          <Route path="/khareji" element={<CardsPage title={"خارجی"} />} />
          <Route path="/irani" element={<CardsPage title={"ایرانی"} />} />
          <Route path="/collection" element={<CardsPage title={"مجموعه"} />} />
          <Route path="/school" element={<CardsPage title={"فیلیمومدرسه"} />} />
          <Route path="/movie/:id" element={<CardDetailsPage />} />
          <Route path="/buy-ticket" element={<BuyTicket />} />
          <Route path="/:category/:genre" element={<CardsPage />} />
          <Route path="/:category/:genre" element={<CardsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
