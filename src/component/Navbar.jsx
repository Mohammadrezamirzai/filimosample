import { useState } from "react";
import Logo from "../assets/img/logo--color-white@128px.png";
import SubscriptionPanel from "./SubscriptionPanel";

export default function Navbar({ onNavigate }) {
  const [showSubscription, setShowSubscription] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="flex px-8 z-100 fixed top-0 left-0 bg-black w-full h-[64px] opacity-90 ">
        {/* Hamburger for mobile */}
        <div className="md:hidden flex items-center w-[25%]">
          <button
            className="text-white focus:outline-none cursor-pointer"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="منوی موبایل"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>
        </div>
        {/* Buttons for desktop */}
        <div className="w-[25%] hidden md:flex items-center space-x-2 ">
          <button
            onClick={() => onNavigate && onNavigate("signup")}
            className="flex font-bold text-white text-xs md:text-sm h-[40px] px-4 md:px-3 items-center bg-gray-700 rounded-sm shadow-md duration-200 cursor-pointer hover:bg-gray-800 justify-center"
          >
            ثبت نام
          </button>
          <button
            onClick={() => onNavigate && onNavigate("login")}
            className="flex font-bold text-white text-xs md:text-sm h-[40px] px-4 md:px-3 items-center bg-blue-600 rounded-sm shadow-md duration-200 cursor-pointer hover:bg-blue-700 justify-center"
          >
            ورود
          </button>
          <button
            onClick={() => setShowSubscription(true)}
            className="flex font-bold text-white text-xs md:text-sm h-[40px] px-4 md:px-3 items-center bg-green-500 rounded-sm shadow-md duration-200 cursor-pointer hover:bg-green-800 justify-center"
          >
            خرید اشتراک
          </button>
        </div>
        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="absolute top-[64px] right-0 w-full bg-black bg-opacity-95 flex flex-col items-center py-4 space-y-3 z-50 md:hidden animate-fade-in-down">
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate && onNavigate("signup"); }}
              className="w-11/12 font-bold text-white text-base py-3 bg-gray-700 rounded shadow-md duration-200 cursor-pointer hover:bg-gray-800"
            >
              ثبت نام
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate && onNavigate("login"); }}
              className="w-11/12 font-bold text-white text-base py-3 bg-blue-600 rounded shadow-md duration-200 cursor-pointer hover:bg-blue-700"
            >
              ورود
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); setShowSubscription(true); }}
              className="w-11/12 font-bold text-white text-base py-3 bg-green-500 rounded shadow-md duration-200 cursor-pointer hover:bg-green-800"
            >
              خرید اشتراک
            </button>
          </div>
        )}

        <div className="w-[75%]  flex items-center justify-end  space-x-6 text-white font-bold">
          <div className="hidden md:flex space-x-4 text-sm md:text-md lg:text-xl">
            <div className="duration-200 hover:text-orange-400 cursor-pointer mr-4">
              جستجو
            </div>
            <div className="duration-200 hover:text-orange-400 cursor-pointer">
              فیلیمو مدرسه
            </div>
            <div className="duration-200 hover:text-orange-400 cursor-pointer">
              مجموعه ها
            </div>
            <div className="duration-200 hover:text-orange-400 cursor-pointer">
              خارجی
            </div>
            <div className="duration-200 hover:text-orange-400 cursor-pointer">
              ایرانی
            </div>
            <div className="duration-200 hover:text-orange-400 cursor-pointer">
              سریال
            </div>
            <div className="duration-200 hover:text-orange-400 cursor-pointer mr-2">
              فیلم
            </div>
          </div>
          <div
            onClick={() => onNavigate && onNavigate("home")}
            className="cursor-pointer flex  duration-200 hover:text-orange-400 "
          >
            <img src={Logo} className="h-[36px] w-[90px] " />
          </div>
        </div>
      </header>

      <SubscriptionPanel
        isOpen={showSubscription}
        onClose={() => setShowSubscription(false)}
      />
    </>
  );
}
