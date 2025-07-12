import { useState, useMemo, useCallback } from "react";
import Poster from "./Poster.jsx";
import Details from "./Details.jsx";
import {films} from "../../data/films.js";
import { filmPosters} from "../../data/posters.js";



export default function Films({ status }) {
  const [focusIndex, setFocusIndex] = useState(2);

  const handleFocus = useCallback((index) => {
    setFocusIndex(index);
  }, []);

  const posterList = useMemo(() => filmPosters.map((poster, idx) => (
    <Poster
      key={idx}
      focus={() => handleFocus(poster.x)}
      focusNumber={focusIndex}
      img={poster.img}
      x={poster.x}
    />
  )), [filmPosters, focusIndex, handleFocus]);

  const detailsList = useMemo(() => films.map((movie, idx) => (
    <Details key={idx} {...movie} show={focusIndex} />
  )), [films, focusIndex]);


  return (
    <>
      <section className={`${status === 1 ? "hidden" : "flex"}`}>
        <div className=" flex  items-center  justify-center mx-10 overflow-x-scroll  w-full px-8">
          <div className="flex my-20 space-x-20 ">
            {posterList}
          </div>
        </div>
      </section>
      <div className={`${status === 1 ? "hidden " : "flex "}`}>
        {detailsList}
      </div>
    </>
  );
}
