import { useState, useMemo, useCallback } from "react";

import Details from "./Details.jsx";
import Poster from "./Poster.jsx";




import { series } from "../../data/series.js";
import { seriesPosters } from "../../data/posters.js";

export default function Series({ status }) {
  const [focusIndex, setFocusIndex] = useState(3);
  const handleFocus = useCallback((index) => {
    setFocusIndex(index);
  }, []);

  const posterList = useMemo(() => seriesPosters.map((poster, idx) => (
    <Poster
      key={idx}
      focus={() => handleFocus(poster.x)}
      focusNumber={focusIndex}
      img={poster.img}
      x={poster.x}
    />
  )), [seriesPosters, focusIndex, handleFocus]);

  const detailsList = useMemo(() => series.map((item, idx) => (
    <Details key={idx} {...item} show={focusIndex} />
  )), [series, focusIndex]);


  return (
    <>
      <section className={`${status === 2 ? "hidden" : "flex"}`}>
        <div className=" flex items-center  justify-ceter mx-10 overflow-x-scroll  w-full px-8">
          <div className=" flex my-20 space-x-20">
            {posterList}
          </div>
        </div>
      </section>
      <div className={`${status === 2 ? "hidden" : "flex"}`}>
        {detailsList}
      </div>
    </>
  );
}
