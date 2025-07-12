import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] py-12 px-4">
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-10 flex flex-col items-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-2">صفحه پیدا نشد</h2>
        <p className="text-gray-300 mb-6 text-center">متاسفیم، صفحه‌ای که به دنبال آن بودید پیدا نشد.</p>
        <Link to="/" className="px-6 py-2 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold shadow-lg hover:from-green-600 hover:to-blue-600 transition-all text-base">
          بازگشت به خانه
        </Link>
      </div>
    </div>
  );
}
