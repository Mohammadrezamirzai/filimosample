import { useState } from "react";

export default function Accordianval({ title, description, linkText }) {
  const [accordian, setAccordian] = useState(false);

  return (
    <div
      onClick={() => setAccordian(!accordian)}
      className="mb-2 flex flex-col  w-[400px] md:w-[600px] duration-300 bg-[#ffffff05] border border-gray-800 rounded-md shadow-md px-2  py-2 ">
      <div className="flex items-center justify-between px-2 ">
        <span
          className={`${
            accordian ? "text-white" : "text-orange-400"
          }    font-bold`}>
          +
        </span>
        <h5
          className={`${
            accordian ? "text-orange-400" : "text-white"
          } text-sm  font-bold`}>
          {title}
        </h5>
      </div>
      <div
        className={`${
          accordian
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        } grid  transition-all duration-300 ease-in-out flex-col mt-3`}>
        <div className={`${accordian ? " " : "overflow-hidden"} duration-300`}>
          <p className="text-gray-300 text-end text-xs font">{description}</p>
          <a className="cursor-pointer">
            <p className="text-end text-yellow-300 pt-1 text-xs ">{linkText}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
