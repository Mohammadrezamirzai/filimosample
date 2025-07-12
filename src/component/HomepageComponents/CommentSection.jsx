import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SwiperButton from "../Ui/SwiperButton.jsx";
import Comment from "./Comment.jsx";
import { comment } from "../../data/comment.js";

export default function CommentSection() {
  return (
    <div className="flex flex-col mb-10 max-w-7xl mx-auto px-10 items-center justify-center bg-gradient-to-br from-[#232526] via-[#414345] to-[#232526] rounded-3xl py-10  shadow-xl">
      <h4 className="text-gray-100 font-extrabold text-3xl mb-6 tracking-tight drop-shadow-lg">
        نظرات کاربران بعد از تماشای فیلیمو
      </h4>
      <div className="w-[700px] md:w-full h-[220px] flex items-center justify-center px-4 ">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: false,
          }}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="flex items-center justify-center relative rounded-2xl overflow-visible">
          {comment.map((item) => (
            <SwiperSlide key={item.id}>
              <Comment name={item.name} description={item.description} />
            </SwiperSlide>
          ))}

          <SwiperButton />
        </Swiper>
      </div>
    </div>
  );
}
