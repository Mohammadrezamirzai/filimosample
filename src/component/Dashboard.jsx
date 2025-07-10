import { useEffect, useState } from "react";
import profileIcon from "../assets/svg/profile.svg";
import { useNavigate } from "react-router-dom";
import githubIcon from "../assets/svg/icons8-github.svg";
import linkedinIcon from "../assets/svg/icons8-linkedin.svg";
import instagramIcon from "../assets/svg/icons8-instagram.svg";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // Optionally redirect to signup if not logged in
      // navigate("/signup");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] flex items-center justify-center py-12 px-4">
      <div className="relative max-w-lg w-full">
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 flex flex-col items-center space-y-6">
          {/* Profile Icon */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center shadow-lg mb-4">
            <img src={profileIcon} alt="پروفایل" className="w-16 h-16" />
          </div>
          {/* Welcome Message */}
          <h2 className="text-2xl font-bold  mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            خوش آمدید به داشبورد
          </h2>
          <p className="text-gray-300 text-center text-base mb-4">
            اینجا می‌توانید اطلاعات حساب کاربری خود را مشاهده و مدیریت کنید.
          </p>
          {/* User Info */}
          {user ? (
            <div className="w-full bg-white/10 rounded-xl p-4 flex flex-col items-center space-y-2">
              <div className="text-white font-semibold">نام: <span className="text-green-400">{user.firstName}</span></div>
              <div className="text-white font-semibold">نام خانوادگی: <span className="text-green-400">{user.lastName}</span></div>
              <div className="text-white font-semibold">ایمیل: <span className="text-green-400">{user.email}</span></div>
              <div className="text-white font-semibold">شماره تلفن: <span className="text-green-400">{user.phone}</span></div>
            </div>
          ) : (
            <div className="text-orange-400 font-bold text-lg mt-4">اطلاعات کاربری یافت نشد.</div>
          )}
          {/* Actions Placeholder */}
          <div className="w-full flex flex-col md:flex-row gap-4 mt-6">
            <button className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold shadow hover:from-green-600 hover:to-blue-600 transition-all">
              ویرایش پروفایل
            </button>
            <button className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold shadow hover:from-orange-600 hover:to-pink-600 transition-all"
              onClick={() => { localStorage.removeItem("user"); navigate("/signup"); }}>
              خروج از حساب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
