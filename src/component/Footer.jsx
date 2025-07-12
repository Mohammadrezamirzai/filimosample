import github from "../assets/svg/icons8-github.svg";
import instagram from "../assets/svg/icons8-instagram.svg";
import linkedin from "../assets/svg/icons8-linkedin.svg";

export default function Footer() {
  return (
    <footer className="bg-[#111112] border-t-4 border-orange-500 font-bold flex flex-col pt-10 pb-20 px-4 md:px-16">
      <h1 className="text-5xl text-center font-extrabold text-white py-8 tracking-tight">
        فیلیمو
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-300 mb-10">
        {/* About Section */}
        <div>
          <h3 className="text-lg text-orange-400 mb-3 font-extrabold">
            درباره فیلیمو
          </h3>
          <p className="text-sm leading-7 text-gray-400">
            فیلیمو بزرگ‌ترین سرویس تماشای آنلاین فیلم و سریال ایرانی و خارجی
            است. با هزاران عنوان متنوع و پشتیبانی ۲۴ ساعته، تجربه‌ای متفاوت از
            تماشا را برای شما فراهم می‌کند.
          </p>
        </div>
        {/* Links Section */}
        <div>
          <h3 className="text-lg text-orange-400 mb-3 font-extrabold">
            لینک‌های مفید
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/information"
                className="hover:text-orange-400 duration-200">
                راهنما
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-orange-400 duration-200">
                فرصت های شغلی
              </a>
            </li>
            <li>
              <a href="/rules" className="hover:text-orange-400 duration-200">
                قوانین و مقررات
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Section */}
        <div>
          <h3 className="text-lg text-orange-400 mb-3 font-extrabold">
            ارتباط با ما
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              ایمیل:{" "}
              <a
                href="mailto:support@filimo.com"
                className="hover:text-orange-400 duration-200">
                support@filimo.com
              </a>
            </li>
            <li>
              تلفن: <span className="text-gray-400">۰۲۱-۱۲۳۴۵۶۷۸</span>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 duration-200">
                تماس با پشتیبانی
              </a>
            </li>
          </ul>
        </div>
        {/* Social & CTA Section */}
        <div className="flex flex-col items-center justify-between h-full space-y-6 md:space-y-0 md:justify-between">
          <button className="flex items-center space-x-2 bg-green-500 hover:bg-green-700 rounded-md shadow-md text-gray-100 px-8 py-3 duration-200 cursor-pointer mb-6">
            <svg
              className="mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="white"
              viewBox="0 0 16 16">
              <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
            </svg>
            <span>خرید اشتراک و تماشا</span>
          </button>
          <div className="flex items-center space-x-8 mt-4">
            <a
              href="https://www.linkedin.com/in/mohammadrezamirzai/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src={linkedin}
                className="h-8 w-8 ficon hover:scale-110 duration-200"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/Mohammadrezamirzai"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src={github}
                className="h-8 w-8 ficon hover:scale-110 duration-200"
                alt="GitHub"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={instagram}
                className="h-8 w-8 ficon hover:scale-110 duration-200"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <h4 className="text-gray-500 text-base font-normal">
          Coded By Mohammadreza Mirzai
        </h4>
        <span className="text-gray-700 text-xs mt-2">
          &copy; {new Date().getFullYear()} Filimo. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
