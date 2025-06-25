import { useState } from "react";
import Films from "./Films.jsx";
import Series from "./Series.jsx";

export default function PopularFilimo() {
  const [toggle, setToggle] = useState(2);

  function show(index) {
    setToggle(index);
  }

  return (
    <section className="mt-12 ">
      <div className="flex items-center justify-center mx-4  space-x-4 md:space-x-8 text-gray-100">
        <div className="flex items-center justify-center px-2 py-1 space-x-6 border border-gray-200 rounded-full">
          <div
            onClick={() => show(1)}
            className={`${
              toggle === 1 ? "bg-green-500" : "bg-inherit"
            } font-bold  rounded-full px-5 py-1 cursor-pointer`}>
            سریال
          </div>
          <div
            onClick={() => show(2)}
            className={`${
              toggle === 2 ? "bg-green-500" : "bg-inherit"
            } font-bold  rounded-full px-5 py-1 cursor-pointer`}>
            فیلم
          </div>
        </div>
        <h2 className="text-2xl font-bold flex items-center justify-center  tracking-wide">
          محیوبترین های فیلیمو
        </h2>
      </div>
      <Series status={toggle} />
      <Films status={toggle} />
    </section>
  );
}
