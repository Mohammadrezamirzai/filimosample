import imgKids from "../../assets/img/bg-kids.png";

export default function KudakSection() {
  return (
    <section className="relative flex flex-col md:flex-row-reverse items-center justify-center gap-10 px-4 md:px-10 py-16 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border-t-4 border-pink-400 mx-2 md:mx-0">
      <div className="md:w-1/2 flex items-center justify-center">
        <img src={imgKids} className="w-72 h-72 md:w-80 md:h-80 rounded-2xl shadow-lg object-cover border-4 border-pink-300" alt="فیلیمو کودک" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <h5 className="text-3xl md:text-4xl text-pink-400 font-extrabold mb-4 drop-shadow-lg text-center flex items-center gap-2">
          <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none' viewBox='0 0 24 24'><path fill='#f472b6' d='M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3.5 5.5V17a2 2 0 0 1-4 0v-2.5C6.5 13.5 5 11.5 5 9a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5c0 1.7 1 3.1 2.5 3.7l.5.2V17a.5.5 0 0 0 1 0v-6.1l.5-.2A4.01 4.01 0 0 0 17 9a5 5 0 0 0-5-5Z'/></svg>
          دنیایی متنوع از فیلم و کارتون‌های کودکانه
        </h5>
        <p className="text-gray-200 text-lg md:text-xl font-bold text-center mb-6 max-w-md">
          ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک فضای امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را ببیند و به بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد.
        </p>
        <div className="mt-8 flex gap-6 w-full justify-center">
          <button className="flex items-center gap-2 bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 px-6 py-3 rounded-xl shadow-lg duration-200 cursor-pointer text-white font-extrabold text-base transition-all">
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='white' viewBox='0 0 16 16'><path d='M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm0 13A6 6 0 1 1 8 2a6 6 0 0 1 0 12Z'/><path d='M10.93 6.588a.5.5 0 0 0-.683-.183L8 7.882 5.753 6.405a.5.5 0 1 0-.53.846l2.5 1.5a.5.5 0 0 0 .53 0l2.5-1.5a.5.5 0 0 0 .183-.683Z'/></svg>
            فیلیمو کودک بساز
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-yellow-300 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600 px-6 py-3 rounded-xl shadow-lg duration-200 cursor-pointer text-gray-900 font-extrabold text-base transition-all">
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' viewBox='0 0 16 16'><path d='M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z'/><path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z'/></svg>
            تماشای فیلیمو کودک
          </button>
        </div>
      </div>
    </section>
  );
}
