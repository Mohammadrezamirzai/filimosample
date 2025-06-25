import Logo from "../assets/img/logo--color-white@128px.png";


export default function Navbar() {
  return (
    <header className="flex px-8  z-100 fixed top-0 left-0 bg-black w-full h-[50px]">
      <div className="w-[25%] flex items-center space-x-2 ">
        <button className="flex font-bold  text-white text-xs h-[30px] px-2 items-center bg-gray-700 rounded-sm shadow-md duration-200 cursor-pointer hover:bg-gray-800">
          ورود
        </button>
        <button className="flex font-bold  text-white text-xs h-[30px]  px-2 items-center bg-green-500 rounded-sm shadow-md duration-200 cursor-pointer hover:bg-green-800">
          خرید اشتراک
        </button>
      </div>

      <div className="w-[75%]  flex items-center justify-end  space-x-6 text-white font-bold">
        <div className="hidden md:flex space-x-4 text-sm">
          <div className="duration-200 hover:text-orange-400 cursor-pointer mr-4">
            جستجو
          </div>
          <div className="duration-200 hover:text-orange-400 cursor-pointer">
            فیلیمو مدرسه
          </div>
          <div className="duration-200 hover:text-orange-400 cursor-pointer">
            مجموعه ها
          </div>
          <div className="duration-200 hover:text-orange-400 cursor-pointer">
            خارجی
          </div>
          <div className="duration-200 hover:text-orange-400 cursor-pointer">
            ایرانی
          </div>
          <div className="duration-200 hover:text-orange-400 cursor-pointer">
            سریال
          </div>
          <div className="duration-200 hover:text-orange-400 cursor-pointer mr-2">
            فیلم
          </div>
        </div>
        <div className="cursor-pointer flex  duration-200 hover:text-orange-400 ">
          <img src={Logo} className="h-[25px] w-[70px] " />
        </div>
      </div>
    </header>
  );
}
