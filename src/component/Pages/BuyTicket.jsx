import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BuyTicket() {
  const location = useLocation();
  const navigate = useNavigate();
  const ticket = location.state?.ticket;
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [isBuying, setIsBuying] = useState(false);
  const [success, setSuccess] = useState(false);
  const user = typeof window !== "undefined" ? localStorage.getItem("user") : null;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]">
        <div className="bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/10 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">برای خرید بلیت باید ابتدا ثبت‌نام کنید</h2>
          <p className="text-gray-300 mb-4">لطفاً ابتدا ثبت‌نام یا وارد حساب کاربری خود شوید.</p>
          <a href="/signup" className="inline-block px-6 cursor-pointer py-2 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold shadow-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200">ثبت‌نام</a>
        </div>
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]">
        <div className="bg-white/10 p-8 rounded-2xl shadow-2xl text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            بلیت انتخاب نشده است
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 cursor-pointer rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold shadow-lg hover:from-green-600 hover:to-blue-600 transition-all text-base">
            بازگشت
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer((prev) => ({ ...prev, [name]: value }));
  };

  const handleBuy = (e) => {
    e.preventDefault();
    setIsBuying(true);
    setTimeout(() => {
      setIsBuying(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen mt-16 flex items-center justify-center bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] py-12 px-4">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 p-0 md:p-0 flex flex-col md:flex-row gap-0 md:gap-8 overflow-hidden">
        {/* Ticket Preview Card */}
        <div className="w-full md:w-1/3 bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 flex flex-col items-center justify-center p-8 md:p-6">
          <figure className="h-60 w-100 md:h-60 md:w-40 rounded-2xl overflow-hidden flex items-center justify-center bg-black/20 shadow-xl mb-4">
            {ticket.img ? (
              <img
                src={ticket.img}
                alt={ticket.name}
                className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/10"
              />
            ) : (
              <svg
                className="w-24 h-24 text-purple-400 opacity-80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 48 48"
                aria-label="اشتراک"
              >
                <rect x="8" y="16" width="32" height="20" rx="4" fill="#a78bfa" fillOpacity="0.2" />
                <rect x="8" y="16" width="32" height="20" rx="4" stroke="#a78bfa" strokeWidth="2" />
                <path d="M16 24h16M16 28h8" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
                <circle cx="24" cy="22" r="2" fill="#a78bfa" />
              </svg>
            )}
          </figure>
          <h2 className="text-2xl font-extrabold trac text-white mb-2 drop-shadow-lg text-center">
            {ticket.name}
          </h2>
          <div className="flex items-center justify-center space-x-6 md:flex-col md:space-x-0">
            {ticket.director && <p className="text-gray-300 mb-1 text-center">
              کارگردان:{" "}
              <span className="font-semibold text-white">
                {ticket.director}
              </span>
            </p>}
            <span className="inline-block mb-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold shadow border-2 border-white/20">
              {ticket.zhanr}
            </span>
          </div>
        </div>
        {/* Buy Form / Success */}
        <div className="flex-1 flex flex-col justify-center p-8  md:p-12 bg-white/5">
          {!success ? (
            <>
              <h3 className="text-2xl font-extrabold text-white mb-6 drop-shadow-lg text-center">
                فرم خرید بلیت
              </h3>
              <form
                className="space-y-6 flex flex-col items-center justify-center"
                onSubmit={handleBuy}>
                <input
                  type="text"
                  name="name"
                  value={buyer.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200"
                  placeholder="نام و نام خانوادگی"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={buyer.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200"
                  placeholder="ایمیل"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={buyer.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200 text-end"
                  placeholder="شماره تلفن"
                  required
                />
                <button
                  type="submit"
                  disabled={isBuying || success}
                  className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer mt-2">
                  {isBuying ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                      در حال خرید...
                    </span>
                  ) : (
                    "خرید بلیت"
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
              <div className="bg-green-500/90 rounded-full p-6 mb-6 shadow-lg animate-bounce">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-green-400 mb-2">
                خرید موفق!
              </h3>
              <p className="text-gray-200 mb-4 text-center">
                بلیت شما با موفقیت خریداری شد. اطلاعات خرید به ایمیل شما ارسال
                خواهد شد.
              </p>
              <button
                onClick={() => navigate("/")}
                className="px-6 py-2 cursor-pointer rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold shadow-lg hover:from-green-600 hover:to-blue-600 transition-all text-base mt-2">
                بازگشت به خانه
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
