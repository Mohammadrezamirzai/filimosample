import { useState, useEffect } from "react";

import img1 from "../assets/img/1.jpeg";
import img2 from "../assets/img/2.jpeg";
import img3 from "../assets/img/3.jpeg";
import img4 from "../assets/img/4.jpeg";
import img5 from "../assets/img/5.jpeg";
import img6 from "../assets/img/6.jpeg";

export default function FirstSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImageIndex((prevIndex) => prevIndex + 1);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  if (activeImageIndex > 5) {
    setActiveImageIndex(0);
  }

  return (
    <section className=" h-[500px] ">
      <div>
        <img
          src={images[activeImageIndex]}
          alt=""
          className="absolute  w-full h-[500px] object-fill"
        />
      </div>
      <div className="bg-[#00000098] w-full h-[500px] absolute flex flex-col items-center justify-center ">
        <p className="pt-32  text-orange-400  font-bold">
          با فیلیمو بی وقفه فیلم ببین
        </p>
        <h3 className="flex text-4xl md:text-5xl text-center tracking-wide font-bold text-white py-8">
          ! کنترل همیشه دست توست
        </h3>
        <div className="text-gray-100 font-bold text-end mx-12 flex flex-col md:flex-row md:space-y-0  items-center justify-center space-y-6 md:space-x-10">
          <div className="flex items-center justify-center space-x-1">
            <h5 className="text-sm">
              نود و پنج هزار اپیزود فیلم و سریال برای تماشا داری
            </h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="#1cb561"
              class="bi bi-check-circle-fill"
              viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          </div>

          <div className="flex items-center justify-center space-x-1">
            <h5 className="text-sm">
              میتونی دانلود کنی بعدا بدون اینترنت نگاه کنی
            </h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="#1cb561"
              class="bi bi-check-circle-fill"
              viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <h5 className="text-sm">میتونی یک عضو مخصوص تماشا کودک بسازی</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="#1cb561"
              class="bi bi-check-circle-fill"
              viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center space-y-4">
          <button className="bg-green-600 px-10 py-3 text-white rounded-md shadow-md hover:bg-green-800 cursor-pointer duration-200 text-xl font-bold ">
            خرید اشتراک و تماشا
          </button>
          <div className="flex items-center space-x-1 pb-2">
            <p className="text-gray-200 text-xs font-semibold ">
              تخفیف ویزه برای کاربران جدید
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="white"
              class="bi bi-gift-fill"
              viewBox="0 0 16 16">
              <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07M9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
