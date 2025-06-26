import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SwiperButton from "./SwiperButton.jsx";
import Comment from "./Comment.jsx";

export default function CommentSection() {
  return (
    <div className="flex flex-col mb-10 items-center justify-center bg-gradient-to-br from-[#232526] via-[#414345] to-[#232526] rounded-3xl py-10 px-4 shadow-xl">
      <h4 className="text-gray-100 font-extrabold text-3xl mb-6 tracking-tight drop-shadow-lg">
        نظرات کاربران بعد از تماشای فیلیمو
      </h4>
      <div className="w-[700px] md:w-full h-[220px] flex items-center justify-center px-4 md:px-10">
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
          className="flex items-center justify-center relative rounded-2xl overflow-visible">
          <SwiperSlide>
            <Comment
              name={"احسان"}
              description={"عالیه فیلم و سریال های قشنگی داره"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Comment
              name={"سالار"}
              description={
                "عالیییییییییییییییی پیشنهاد میکنم نصب کنید فیلم های رایگان هم داره پس نصب کنید"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Comment
              name={"fateme"}
              description={
                "😚 خیلی برنامه عالیه😻😻 من ۵ سال این برنانه رو دارم...🌹 درسته یکم اشتراکاش گرونه ولی هنوزم خوبه.💙❤ ولی اینترنتش نیمبهاست🌹🌹😻ن🌹❤"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Comment
              name={"Ali"}
              description={
                " این برنامه خیلی خوبه من داخل این فیلم نگاه می کنم کلی مامانم فیلم های بزرگسالان نگاه می‌کنه"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Comment
              name={"Taha"}
              description={"از وقتی فیلی مو نصب کردم دیگه تلویزیون نگاه نمیکنم"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Comment
              name={"سالار"}
              description={
                "عالییییییییییییییی پیشنهاد میکنم نصب کنید فیلم های رایگان هم داره پس نصب کنید"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Comment
              name={"سالار"}
              description={
                "عالییییییییییییییی پیشنهاد میکنم نصب کنید فیلم های رایگان هم داره پس نصب کنید"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Comment
              name={"Taha"}
              description={"از وقتی فیلی مو نصب کردم دیگه تلویزیون نگاه نمیکنم"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Comment
              name={"Taha"}
              description={"از وقتی فیلی مو نصب کردم دیگه تلویزیون نگاه نمیکنم"}
            />
          </SwiperSlide>

          <SwiperButton />
        </Swiper>
      </div>
    </div>
  );
}
