import infoImg2 from "../assets/img/tamasha2.png";
export default function Info2() {
  return (
    <section className="flex flex-col px-10 py-16 gap-10 md:flex-row-reverse items-center justify-center">
      <div className="flex flex-col items-center justify-center md:w-1/2">
        <h6 className="text-xl text-white  ">
          چطور با تلویزیون، فیلیمو تماشا کنم؟
        </h6>
        <p className="text-sm font-bold w-100   text-center pt-4 text-gray-300 ">
          ما برای راحتی شما و تماشای فیلیمو روی تلویزیون‌های مختلف 6 روش را
          فراهم کردیم. هرکدام از این 6 روش یک ویدیو آموزشی دارند که می‌توانید از
          لینک زیر، آن‌ها را تماشا کنید و روشی که با تلویزیون شما سازگار است را
          انتخاب کنید.
        </p>
        <div className="flex items-center text-white font-bold pt-8 ">تلویزیون</div>
        <p className="pt-2 text-gray-300 text-[9px]">
          Amazon Fire TV - LG TVs - Chrome Cast - Apple TV - Android TV devices
          - Samsung
        </p>
        <div className="flex items-center text-white font-bold  pt-8">
          موبایل و تبلت
        </div>
        <p className="pt-2 text-gray-300 text-[9px] mb-4">
          NVIDIA - amazon - xiaomi - minix - skystream - turewell - ematic -
          humax - matricom
        </p>
        <button className="mt-8 text-xs text-gray-50 font-semibold flex items-center bg-gray-500 px-4 py-2 duration-200 rounded-md shadow-md hover:bg-gray-700 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            class="bi bi-chevron-left"
            viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
          ویدیو های اموزشی تماشا با تلویزیون
        </button>
      </div>
      <div className="flex md:w-1/2">
        <img src={infoImg2} className="w-100 h-80" />
      </div>
    </section>
  );
}
