import { useSwiper } from "swiper/react";

export default function SwiperButton() {
  const swiper = useSwiper();
  return (
    <div className="w-full flex items-center justify-between  absolute bottom-[40%] z-[900]">
      <button
        className="w-[40px] h-[40px] bg-[#000000b5] text-white rounded-full flex items-center justify-center"
        onClick={() => swiper.slidePrev()}>
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
      </button>
      <button
        className="w-[40px] h-[40px] bg-[#000000b5] text-white rounded-full flex items-center justify-center"
        onClick={() => swiper.slideNext()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
  );
}
