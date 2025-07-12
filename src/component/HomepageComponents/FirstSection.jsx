import { useState, useEffect } from "react";

import img1 from "../../assets/img/1.jpeg";
import img2 from "../../assets/img/2.jpeg";
import img3 from "../../assets/img/3.jpeg";
import img4 from "../../assets/img/4.jpeg";
import img5 from "../../assets/img/5.jpeg";
import img6 from "../../assets/img/6.jpeg";
import { Navigate } from "react-router-dom";

export default function FirstSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden mt-16 pt-10">
      {/* Background Images with Smooth Transitions */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === activeImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Subtitle with Animation */}
          <div className="mb-6 animate-fade-in-up">
            <p className="text-lg sm:text-xl text-orange-400 font-semibold tracking-wide">
              با فیلیمو بی وقفه فیلم ببین
            </p>
          </div>

          {/* Main Title with Gradient */}
          <div className="mb-12 animate-fade-in-up animation-delay-200">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-wide">
              کنترل همیشه دست{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                توست
              </span>
              !
            </h1>
          </div>

          {/* Features List */}
          <div className="mb-12 animate-fade-in-up animation-delay-400">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <h5 className="text-sm text-gray-100 font-medium">
                  نود و پنج هزار اپیزود فیلم و سریال برای تماشا داری
                </h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#1cb561"
                  className="bi bi-check-circle-fill flex-shrink-0"
                  viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>

              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <h5 className="text-sm text-gray-100 font-medium">
                  میتونی دانلود کنی بعدا بدون اینترنت نگاه کنی
                </h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#1cb561"
                  className="bi bi-check-circle-fill flex-shrink-0"
                  viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>

              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <h5 className="text-sm text-gray-100 font-medium">
                  میتونی یک عضو مخصوص تماشا کودک بسازی
                </h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#1cb561"
                  className="bi bi-check-circle-fill flex-shrink-0"
                  viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-600">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => Navigate("/subpanel")}
                className=" group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer font-bold text-lg">
                <span className="relative z-10">خرید اشتراک و تماشا</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-gift-fill"
                  viewBox="0 0 16 16">
                  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07M9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
                </svg>
                <p className="text-gray-200 text-sm font-semibold">
                  تخفیف ویژه برای کاربران جدید
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeImageIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
