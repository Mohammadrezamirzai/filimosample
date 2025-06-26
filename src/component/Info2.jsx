import infoImg2 from "../assets/img/tamasha2.png";
export default function Info2() {
  return (
    <section className="relative flex flex-col md:flex-row-reverse items-center justify-center gap-10 px-4 md:px-10 py-16 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border-t-4 border-orange-400 mx-2 md:mx-0">
      <div className="md:w-1/2 flex items-center justify-center">
        <img src={infoImg2} className="w-72 h-72 md:w-80 md:h-80 rounded-2xl shadow-lg object-contain" alt="تماشا با تلویزیون" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <h6 className="text-3xl md:text-4xl text-white font-extrabold mb-4 drop-shadow-lg text-center">
          چطور با تلویزیون، فیلیمو تماشا کنم؟
        </h6>
        <p className="text-gray-200 text-lg md:text-xl font-bold text-center mb-6 max-w-md">
          ما برای راحتی شما و تماشای فیلیمو روی تلویزیون‌های مختلف 6 روش را فراهم کردیم. هرکدام از این 6 روش یک ویدیو آموزشی دارند که می‌توانید از لینک زیر، آن‌ها را تماشا کنید و روشی که با تلویزیون شما سازگار است را انتخاب کنید.
        </p>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center justify-center gap-3 group">
            <span className="text-gray-100 font-bold text-base md:text-lg">تلویزیون</span>
            <img src="/svg/tv.svg" width="32" height="32" alt="tv" />
          </div>
          <p className="text-gray-400 text-xs text-center">Amazon Fire TV - LG TVs - Chrome Cast - Apple TV - Android TV devices - Samsung</p>
          <div className="flex items-center justify-center gap-3 group">
            <span className="text-gray-100 font-bold text-base md:text-lg">موبایل و تبلت</span>
            <img src="/svg/tablet.svg" width="32" height="32" alt="tablet" />
          </div>
          <p className="text-gray-400 text-xs text-center">NVIDIA - amazon - xiaomi - minix - skystream - turewell - ematic - humax - matricom</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 px-8 py-3 mt-10 rounded-xl shadow-lg duration-200 cursor-pointer text-white font-extrabold text-lg transition-all">
          <img src="/svg/chevron-left.svg" width="18" height="18" alt="chevron left" />
          ویدیو های اموزشی تماشا با تلویزیون
        </button>
      </div>
    </section>
  );
}
