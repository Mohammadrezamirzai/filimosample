import imgKids from "../assets/img/bg-kids.png";

export default function KudakSection() {
  return (
    <section className="bg-linear-to-tr from-[#111] from-50% to-[#00191b]  flex flex-col md:flex-row-reverse items-center justify-center py-10 space-y-8 md:space-y-0 md:space-x-10 px-10">
      <div className="flex items-center justify-ceter md:flex-row">
        <img src={imgKids} className="w-80 h-80 " />
      </div>
      <div className="flex flex-col items-center justify-center md:pr-3">
        <h5 className="text-xl text-white font-bold pb-2 ">
          دنیایی متنوع از فیلم و کارتون‌های کودکانه
        </h5>
        <p className="text-gray-300  text-sm text-end mt-4 w-[400px] h-[80px]">
          ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک فضای
          امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را ببیند و به
          بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="w-[120px] cursor-pointer h-[40px] font-bold  text-xs text-black bg-gray-300 rounded-md shadow-md hover:bg-gray-500 hover:text-gray-900 duration-200">
            فیلیمو کودک بساز
          </button>
          <button className="w-[120px] cursor-pointer h-[40px] font-bold text-xs text-black bg-gray-300 rounded-md shadow-md hover:bg-gray-500 hover:text-gray-900 duration-200">
            تماشای فیلیمو کودک
          </button>
        </div>
      </div>
    </section>
  );
}
