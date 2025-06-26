import infoImg from "../assets/img/tamash.png";

export default function Info1() {
  return (
    <section className="relative flex flex-col md:flex-row-reverse items-center justify-center gap-10 px-4 md:px-10 py-16 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border-t-4 border-orange-400 mx-2 md:mx-0">
      <div className="md:w-1/2 flex items-center justify-center">
        <img src={infoImg} className="w-72 h-72 md:w-80 md:h-80 rounded-2xl shadow-lg object-contain" alt="تماشای فیلیمو" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <h5 className="text-white text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg text-center">تماشای فیلیمو با همه دستگاه‌ها</h5>
        <p className="text-gray-200 text-lg md:text-xl font-bold text-center mb-6 max-w-md">
          می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل، تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید
        </p>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center justify-center gap-3 group">
            <span className="text-gray-100 font-bold text-base md:text-lg">کامپیوتر و لپ تاپ</span>
            <img src="/svg/tv.svg" width="32" height="32" alt="tv" />
          </div>
          <p className="text-gray-400 text-xs text-center">windows PC - MacOS - Chrome OS</p>
          <div className="flex items-center justify-center gap-3 group">
            <span className="text-gray-100 font-bold text-base md:text-lg">موبایل و تبلت</span>
            <img src="/svg/tablet.svg" width="32" height="32" alt="tablet" />
          </div>
          <p className="text-gray-400 text-xs text-center">Android Phone & Tablets - iPhone and iPad - Amazon Fire Tablets</p>
          <div className="flex items-center justify-center gap-3 group">
            <span className="text-gray-100 font-bold text-base md:text-lg">کنسول‌های بازی</span>
            <img src="/svg/console.svg" width="32" height="32" alt="console" />
          </div>
          <p className="text-gray-400 text-xs text-center">Xbox Series S - Xbox Series X - PS5 - PS4</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 px-8 py-3 mt-10 rounded-xl shadow-lg duration-200 cursor-pointer text-white font-extrabold text-lg transition-all">
          خرید اشتراک و تماشا
          <img src="/svg/play-btn.svg" width="18" height="18" alt="play" />
        </button>
      </div>
    </section>
  );
}
