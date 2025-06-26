import Ticket from "./Ticket.jsx";

export default function CinemaSection() {
  return (
    <section className="py-10  flex  flex-col items-center justify-center space-y-4 my-8">
      <h3 className="text-3xl text-white pb-4">سینما انلاین فیلیمو</h3>
      <div className="flex flex-col md:flex-row items-center md:space-y-0 md:space-x-6 text-gray-200 text-sm space-y-4">
        <div className="flex items-center space-x-1">
          <h6>فیلم های روز سینمای ایران</h6>
          <img src="/svg/check-circle-fill.svg" width="12" height="12" alt="check" />
        </div>
        <div className="flex items-center space-x-1">
          <h6>ساعت زمان برای مشاهده فیلم در هر کجا</h6>
          <img src="/svg/check-circle-fill.svg" width="12" height="12" alt="check" />
        </div>
        <div className="flex items-center space-x-1">
          <h6>خرید یک بلیت برای تماشا همراه خانواده</h6>
          <img src="/svg/check-circle-fill.svg" width="12" height="12" alt="check" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row px-10 "></div>
    </section>
  );
}
