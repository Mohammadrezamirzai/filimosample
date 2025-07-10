import { useState, useEffect, useRef } from "react";
import Logo from "../assets/img/logo--color-white@128px.png";
import SubscriptionPanel from "./SubscriptionPanel";
import getData from "../utils/api/api";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "../assets/svg/profile.svg";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null); // 'series' or 'film' or null
  const [showSubscription, setShowSubscription] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem("user"));
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileMenuRef = useRef(null);

  // Update isLoggedIn state on login/logout (including multi-tab)
  useEffect(() => {
    const handler = () => setIsLoggedIn(!!localStorage.getItem("user"));
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  // Close profile menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    }
    if (showProfileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showProfileMenu]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setShowProfileMenu(false);
    navigate("/");
  };

  const navigate = useNavigate();


  return (
    <>
      <header className="flex px-8 z-100 fixed top-0 left-0 bg-black w-full h-[64px] opacity-90 ">
        {/* Hamburger for mobile */}
        <div className="md:hidden flex items-center w-[25%]">
          <button
            className="text-white focus:outline-none cursor-pointer"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="منوی موبایل">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>
        </div>
        {/* Buttons for desktop */}
        <div className="w-[25%] hidden md:flex items-center space-x-2 ">
          {isLoggedIn ? (
            <div className="relative" ref={profileMenuRef}>
              <button
                onClick={() => setShowProfileMenu((v) => !v)}
                className="flex items-center justify-center h-[40px] w-[40px] bg-gray-700 rounded-full shadow-md cursor-pointer hover:bg-gray-800">
                <img src={ProfileIcon} alt="Profile" className="h-7 w-7" />
              </button>
              {showProfileMenu && (
                <div
                  className="absolute right-0 mt-3 min-w-[160px] max-w-[220px] bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl z-50 border border-white/10 p-3 animate-fade-in-down"
                  style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)', marginRight: '-10px' }}
                >
                  {/* Arrow */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '18px',
                      width: 0,
                      height: 0,
                      borderLeft: '10px solid transparent',
                      borderRight: '10px solid transparent',
                      borderBottom: '10px solid rgba(255,255,255,0.05)',
                      filter: 'drop-shadow(0 -2px 4px rgba(0,0,0,0.10))',
                    }}
                  ></div>
                  <button
                    onClick={() => { setShowProfileMenu(false); navigate("/dashboard"); }}
                    className="block w-full text-right px-4 py-2 rounded-xl hover:bg-white/10 hover:text-green-400 transition-colors duration-150 font-medium text-sm mb-1 text-white">
                    داشبورد
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-right px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white transition-colors duration-150 font-medium text-sm border-t border-white/10 mt-1 text-white">
                    خروج
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("signup")}
                className="flex font-bold text-white text-xs md:text-sm h-[40px] px-4 md:px-3 items-center bg-gray-700 rounded-sm shadow-md duration-200 cursor-pointer hover:bg-gray-800 justify-center">
                ثبت نام
              </button>
              <button
                onClick={() => navigate("login")}
                className="flex font-bold text-white text-xs md:text-sm h-[40px] px-4 md:px-3 items-center bg-blue-600 rounded-sm shadow-md duration-200 cursor-pointer hover:bg-blue-700 justify-center">
                ورود
              </button>
            </>
          )}
          <button
            onClick={() => setShowSubscription(true)}
            className="flex font-bold text-white text-xs md:text-sm h-[40px] px-4 md:px-3 items-center bg-green-500 rounded-sm shadow-md duration-200 cursor-pointer hover:bg-green-800 justify-center">
            خرید اشتراک
          </button>
        </div>
        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="absolute top-[64px] right-0 w-full bg-black bg-opacity-95 flex flex-col items-center py-4 space-y-3 z-50 md:hidden animate-fade-in-down">
            {isLoggedIn ? (
              <div className="w-11/12 flex flex-col items-center">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/dashboard");
                  }}
                  className="w-full flex items-center justify-center font-bold text-white text-base py-3 bg-gray-700 rounded shadow-md duration-200 cursor-pointer hover:bg-gray-800 mb-2">
                  <img src={ProfileIcon} alt="Profile" className="h-7 w-7 mr-2" />
                  پروفایل
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleLogout();
                  }}
                  className="w-full font-bold text-white text-base py-3 bg-red-600 rounded shadow-md duration-200 cursor-pointer hover:bg-red-700">
                  خروج
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("signup");
                  }}
                  className="w-11/12 font-bold text-white text-base py-3 bg-gray-700 rounded shadow-md duration-200 cursor-pointer hover:bg-gray-800">
                  ثبت نام
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("login");
                  }}
                  className="w-11/12 font-bold text-white text-base py-3 bg-blue-600 rounded shadow-md duration-200 cursor-pointer hover:bg-blue-700">
                  ورود
                </button>
              </>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShowSubscription(true);
              }}
              className="w-11/12 font-bold text-white text-base py-3 bg-green-500 rounded shadow-md duration-200 cursor-pointer hover:bg-green-800">
              خرید اشتراک
            </button>
          </div>
        )}

        <div className="w-[75%]  flex items-center justify-end  space-x-6 text-white font-bold">
          <div className="hidden md:flex space-x-4 lg:space-x-6 text-sm md:text-md lg:text-lg">
            <div className="duration-200 hover:text-orange-400 cursor-pointer mr-4" onClick={()=>navigate("/searching")}>
              جستجو
            </div>
            <div className="duration-200 hover:text-orange-400 cursor-pointer" onClick={()=> navigate("/school")}>
              فیلیمو مدرسه
            </div>
            <div className="duration-200 hover:text-orange-400 cursor-pointer" onClick={()=> navigate("/collection")}>
              مجموعه ها
            </div>
            <div
              className="duration-200 hover:text-orange-400 cursor-pointer"
              onClick={() => navigate("/khareji")}>
              خارجی
            </div>
            <div
              className="duration-200 hover:text-orange-400 cursor-pointer"
              onClick={() => navigate("/irani")}>
              ایرانی
            </div>

            <div
              className="duration-200 hover:text-orange-400 cursor-pointer"
              onMouseEnter={() => setOpenDropdown("series")}
              onMouseLeave={() => setOpenDropdown(null)}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}>
              سریال
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "inline", marginRight: "4px" }}>
                <path
                  d="M7 7L10 10L13 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {openDropdown === "series" && (
                <div
                  className="absolute right-0 top-0 w-40 bg-gray-900 text-gray-100 rounded shadow-lg z-50 animate-fade-in-down border border-gray-700"
                  onMouseEnter={() => setOpenDropdown("series")}
                  onMouseLeave={() => setOpenDropdown(null)}>
                  <div
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigate("/series/action")}>
                    اکشن
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigate("/series/romance")}>
                    عاشقانه
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigate("/series/comedy")}>
                    کمدی
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigate("/series/drama")}>
                    درام
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigate("/series/history")}>
                    تاریخی
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigate("/series/criminal")}>
                    جنایی
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigate("/series/science")}>
                    علمی تخیلی
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigate("/series/horror")}>
                    ترسناک
                  </div>
                </div>
              )}
            </div>
            <div
              className=" hover:text-orange-400 cursor-pointer mr-2"
              onMouseEnter={() => setOpenDropdown("film")}
              onMouseLeave={() => setOpenDropdown(null)}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}>
              فیلم
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "inline", marginRight: "4px" }}>
                <path
                  d="M7 7L10 10L13 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {openDropdown === "film" && (
                <div
                  className="absolute right-0 top-0 w-40 bg-gray-900 text-gray-100 rounded shadow-lg z-50 animate-fade-in-down border border-gray-700"
                  onMouseEnter={() => setOpenDropdown("film")}
                  onMouseLeave={() => setOpenDropdown(null)}>
                  <div
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigate("/films/action")}>
                    اکشن
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigate("/films/romance")}>
                    عاشقانه
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigate("/films/comedy")}>
                    کمدی
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigate("/films/drama")}>
                    درام
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigate("/films/history")}>
                    تاریخی
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigate("/films/criminal")}>
                    جنایی
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigate("/films/science")}>
                    علمی تخیلی
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigate("/films/horror")}>
                    ترسناک
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Language toggle and logo */}
          <div className="flex items-center gap-2 mr-3">

            <div
              onClick={() => navigate("/")}
              className="cursor-pointer flex duration-200 hover:text-orange-400 "
            >
              <img src={Logo} className="h-[36px] w-[90px] " onClick={getData} />
            </div>
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
