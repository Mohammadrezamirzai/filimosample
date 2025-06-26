import { useState } from "react";

export default function Accordianval({ title, description, linkText }) {
  const [accordian, setAccordian] = useState(false);

  return (
    <div
      className="mb-4 flex flex-col w-full max-w-[600px] duration-300 bg-white/10 backdrop-blur-lg border border-orange-400 rounded-2xl shadow-lg px-4 py-3 cursor-pointer hover:shadow-2xl group transition-all"
      onClick={() => setAccordian(!accordian)}
    >
      <div className="flex items-center justify-between px-2 py-2 select-none">
        <h5
          className={`text-lg font-bold transition-colors duration-200 ${accordian ? "text-orange-400" : "text-white"}`}
        >
          {title}
        </h5>
        <span
          className={`transform transition-transform duration-300 ${accordian ? "rotate-90 text-orange-400" : "rotate-0 text-white"}`}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </span>
      </div>
      <div
        className={`grid transition-all duration-300 ease-in-out ${accordian ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 mt-0"}`}
      >
        <div className={`${accordian ? "py-2" : "overflow-hidden"} duration-300 bg-black/30 rounded-xl px-3`}>
          <p className="text-gray-200 text-end text-base leading-7">{description}</p>
          {linkText && (
            <a className="cursor-pointer block text-end">
              <p className="text-orange-300 pt-2 text-sm underline hover:text-orange-400 transition-colors">{linkText}</p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
