import github from "../assets/svg/icons8-github.svg";
import instagram from "../assets/svg/icons8-instagram.svg";
import linkedin from "../assets/svg/icons8-linkedin.svg";

export default function Footer() {
  return (
    <div className="bg-stone-900 font-bold flex flex-col pt-10 pb-20">
      <h1 className="text-6xl text-center  font-bold text-white py-8">
        فیلیمو
      </h1>
      <div className="pt-8 flex flex-col items-center justify-center md:flex-row space-y-6 md:space-y-0 md:space-x-2 lg:space-x-8 text-gray-300">
        <div className="flex items-center  space-x-2">
          <p> هزاران فیلم و سریال خارجی</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#1cb561"
            class="bi bi-check-circle-fill"
            viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </div>
        <div className="flex items-center  space-x-2">
          <p> هزاران انیمیشن و کارتون برای کودکان</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#1cb561"
            class="bi bi-check-circle-fill"
            viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </div>
        <div className="flex items-center  space-x-2">
          <p>پشتیبانی 24 ساعته برای راهنمایی شما</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#1cb561"
            class="bi bi-check-circle-fill"
            viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </div>
      </div>
      <div className="flex justify-center items-center py-12">
        <button className="flex items-center space-x-2 bg-green-500 hover:bg-green-700 rounded-md shadow-md text-gray-100 px-10 py-3 duration-200 cursor-pointer ">
          <svg
            className="mt-1"
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            fill="white"
            class="bi bi-play-btn"
            viewBox="0 0 16 16">
            <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
          </svg>
          <p>خرید اشتراک و تماشا</p>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center space-y-10">
        <h4 className="text-white text-xl ">Coded By Mohammadreza Mirzai</h4>
        <div className="flex items-center space-x-12">
          <a href="https://www.linkedin.com/in/mohammadrezamirzai/">
            <img src={linkedin} className="h-10 w-10 ficon" />
          </a>
          <a href="https://github.com/Mohammadrezamirzai">
            <img src={github} className="h-10 w-10 ficon" />
          </a>
          <a href="">
            <img src={instagram} className="h-10 w-10 ficon" />
          </a>
        </div>
      </div>
    </div>
  );
}
