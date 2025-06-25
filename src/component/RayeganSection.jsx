import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SwiperButton from "./SwiperButton.jsx";

import ra1 from "../assets/img/ra1.jpg";
import ra2 from "../assets/img/ra2.jpg";
import ra3 from "../assets/img/ra3.jpg";
import ra4 from "../assets/img/ra4.jpg";
import ra5 from "../assets/img/ra5.jpg";
import ra6 from "../assets/img/ra6.jpg";
import ra7 from "../assets/img/ra7.jpg";
import ra8 from "../assets/img/ra8.jpg";
import ra9 from "../assets/img/ra9.jpg";
import ra10 from "../assets/img/ra10.jpg";

export default function RayeganSection() {
  return (
    <div className="mb-10 flex flex-col items-center justify-center ">
      <h4 className="text-3xl font-bold text-gray-100 text-center">
        فیلم های رایگان
      </h4>
      <div className="w-[700px] md:w-full h-[200px] flex items-center justify-center mt-15 px-10">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: false,
          }}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className=" flex items-center justify-center relative">
          <SwiperSlide>
            <img src={ra1} alt="" className="rounded-md cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ra2} alt="" className="rounded-md cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ra3} alt="" className="rounded-md cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ra4} alt="" className="rounded-md cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ra5} alt="" className="rounded-md cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ra6} alt="" className="rounded-md cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ra7} alt="" className="rounded-md cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ra8} alt="" className="rounded-md cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ra9} alt="" className="rounded-md cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ra10} alt="" className="rounded-md cursor-pointer" />
          </SwiperSlide>
          <SwiperButton />
        </Swiper>
      </div>
    </div>
  );
}
