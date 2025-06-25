import infoImg from "../assets/img/tamash.png";

export default function Info1() {
  return (
    <section className="flex flex-col px-10 py-16 gap-10 md:flex-row-reverse items-center justify-center ">
      <div className=" md:w-1/2 items-center justify-center">
        <img src={infoImg} className="w-80 h-80 items-center justify-center" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <h5 className="text-white text-xl  ">تماشای فیلیمو با همه دستگاه‌ها</h5>
        <p className="text-gray-300 text-sm pt-4 w-[400px]   font-bold text-center ">
          می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل،
          تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید
        </p>
        <div className="mt-4 text-gray-200 flex items-center justify-center  space-x-2 pt-5 font-bold   ">
          <p>کامپیوتر و لپ تاپ</p>
          <svg
            className="mx-3 "
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#bbb5b5"
            class="bi bi-tv"
            viewBox="0 0 16 16">
            <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2" />
          </svg>
        </div>
        <p className="text-gray-300 text-[9px] pt-2">
          windows PC - MacOS - Chorom OS
        </p>
        <div className="flex items-center space-x-2 text-gray-200 pt-5 font-bold ">
          <p>موبایل و تبلت</p>
          <svg
            className="mx-3 "
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#bbb5b5"
            class="bi bi-tablet"
            viewBox="0 0 16 16">
            <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
          </svg>
        </div>
        <p className="text-gray-300  text-[9px] pt-2">
          Android Phone & Tablets - Iphone and Ipad - Amazon Fire Tablets
        </p>
        <div className="flex items-center text-gray-200 pt-5  space-x-2 justify-center font-bold  ">
          <p>کنسول‌های بازی </p>
          <svg
            className="mx-3 "
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#bbb5b5"
            class="bi bi-controller"
            viewBox="0 0 16 16">
            <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1" />
            <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
          </svg>
        </div>
        <p className="text-gray-300 text-[9px] pt-2">
          Xbox Series S - Xbox Seris X - PS5 - PS4
        </p>
        <button className="flex items-center  gap-1 bg-green-500 px-4 py-2 mt-8 rounded-md shadow-md duration-200 hover:bg-green-700  cursor-pointer text-gray-200">
          خرید اشتراک و تماشا
          <svg
            className="m-1 "
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="white"
            class="bi bi-play-btn"
            viewBox="0 0 16 16">
            <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
