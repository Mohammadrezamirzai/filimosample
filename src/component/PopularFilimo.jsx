import { useState } from "react";
import Films from "./Films.jsx";
import Series from "./Series.jsx";

export default function PopularFilimo() {
  const [toggle, setToggle] = useState(2);

  function show(index) {
    setToggle(index);
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            {/* Modern Toggle Switch */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20 shadow-lg">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => show(1)}
                  className={`relative px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer ${
                    toggle === 1
                      ? "text-white bg-gradient-to-r from-green-500 to-green-600 shadow-lg"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  سریال
                  {toggle === 1 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full opacity-0 animate-pulse"></div>
                  )}
                </button>
                <button
                  onClick={() => show(2)}
                  className={`relative px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer ${
                    toggle === 2
                      ? "text-white bg-gradient-to-r from-green-500 to-green-600 shadow-lg"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  فیلم
                  {toggle === 2 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full opacity-0 animate-pulse"></div>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Title with Gradient */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            محبوب‌ترین‌های{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              فیلیمو
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            بهترین و محبوب‌ترین فیلم‌ها و سریال‌ها را در فیلیمو تماشا کنید
          </p>
        </div>

        {/* Content */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>

          {/* Content with glassmorphism */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-2xl">
            <Series status={toggle} />
            <Films status={toggle} />
          </div>
        </div>
      </div>
    </section>
  );
}
