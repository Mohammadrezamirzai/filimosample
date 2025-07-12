import Ticket from "./Ticket.jsx";
import checkCircleFill from '../../assets/svg/check-circle-fill.svg';
import { films } from '../../data/films';

export default function CinemaSection() {
  return (
    <section className="py-10  flex  flex-col items-center justify-center space-y-4 my-8">
      <h3 className="text-3xl text-white pb-4">سینما انلاین فیلیمو</h3>
      <div className="flex flex-col md:flex-row items-center md:space-y-0 md:space-x-6 text-gray-200 text-sm space-y-4">
        <div className="flex items-center space-x-1">
          <h6>فیلم های روز سینمای ایران</h6>
          <img
            src={checkCircleFill}
            width="12"
            height="12"
            alt="check"
          />
        </div>
        <div className="flex items-center space-x-1">
          <h6>ساعت زمان برای مشاهده فیلم در هر کجا</h6>
          <img
            src={checkCircleFill}
            width="12"
            height="12"
            alt="check"
          />
        </div>
        <div className="flex items-center space-x-1">
          <h6>خرید یک بلیت برای تماشا همراه خانواده</h6>
          <img
            src={checkCircleFill}
            width="12"
            height="12"
            alt="check"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center xl:flex-row xl:gap-8 ">
        <Ticket
          name={films[0].name}
          img={films[0].img}
          director={films[0].kargardan}
          zhanr={films[0].zhanr}
        />
        <Ticket
          name={films[5].name}
          img={films[5].img}
          director={films[5].kargardan}
          zhanr={films[5].zhanr}
        />
      </div>
    </section>
  );
}
