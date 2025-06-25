import Ticket from "./Ticket.jsx";

export default function CinemaSection() {
  return (
    <section className="py-10  flex  flex-col items-center justify-center space-y-4 my-8">
      <h3 className="text-3xl text-white pb-4">سینما انلاین فیلیمو</h3>
      <div className="flex flex-col md:flex-row items-center md:space-y-0 md:space-x-6 text-gray-200 text-sm space-y-4">
        <div className="flex items-center space-x-1">
          <h6>فیلم های روز سینمای ایران</h6>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="#1cb561"
            class="bi bi-check-circle-fill"
            viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </div>
        <div className="flex items-center space-x-1">
          <h6>ساعت زمان برای مشاهده فیلم در هر کجا</h6>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="#1cb561"
            class="bi bi-check-circle-fill"
            viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </div>
        <div className="flex items-center space-x-1">
          <h6>خرید یک بلیت برای تماشا همراه خانواده</h6>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="#1cb561"
            class="bi bi-check-circle-fill"
            viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row px-10 "></div>
    </section>
  );
}
