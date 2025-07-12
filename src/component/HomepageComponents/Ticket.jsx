import { films } from "../../data/films";
import { useNavigate } from 'react-router-dom';


export default function Ticket({ name, img, director, zhanr }) {
  const navigate = useNavigate();
  const ticketData = { name, img, director, zhanr };
  return (
    <div className="w-full max-w-xl mx-auto cursor-pointer flex flex-row gap-6 h-64 border border-white/10 rounded-2xl m-4 shadow-2xl backdrop-blur-2xl bg-gradient-to-br from-white/10 via-[#1a1a2e]/40 to-[#16213e]/70 hover:shadow-3xl hover:scale-[1.025] hover:border-pink-400/40 transition-all duration-300">
      {/* Poster */}
      <figure className="h-full w-1/3 rounded-2xl overflow-hidden flex items-center justify-center bg-black/20 shadow-xl">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/10 hover:border-pink-400/30 transition-all duration-300"
        />
      </figure>
      {/* Details */}
      <div className="flex-1 flex flex-col justify-between py-6 pr-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-extrabold text-white tracking-wide line-clamp-1 drop-shadow-lg font-sans">{name}</h3>
            <div className="flex items-center gap-2 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 rounded-full px-4 py-1 text-xs text-white font-bold shadow-lg
            border border-white/20 ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="white"
                viewBox="0 0 16 16"
                className="inline-block mr-1 drop-shadow"
              >
                <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z" />
              </svg>
              اکران آنلاین
            </div>
          </div>
          <p className="text-gray-300 text-base mb-2 font-medium">کارگردان: <span className="font-semibold text-white">{director}</span></p>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold shadow border-2 border-white/20">
              {zhanr}
            </span>
          </div>
        </div>
        <div className="border-t border-white/10 ml-4 pt-2 flex justify-end">
          <button
            className="flex cursor-pointer items-center gap-2 px-7 py-2 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white font-extrabold shadow-lg hover:from-orange-600 hover:to-pink-600 hover:scale-105 transition-all text-base drop-shadow-lg"
            onClick={() => navigate('/buy-ticket', { state: { ticket: ticketData } })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2m12 0v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9m12 0H5" />
            </svg>
            خرید بلیت
          </button>
        </div>
      </div>
    </div>
  );
}
