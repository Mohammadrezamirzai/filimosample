import { useEffect, useState, useMemo } from "react";
import Card from "../Ui/Card";

export default function ApplyedMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("userMovies");
      if (stored) {
        setMovies(JSON.parse(stored));
      }
    } catch (e) {
      setMovies([]);
    }
  }, []);

  const memoizedCards = useMemo(() => (
    movies.map((movie, idx) => (
      <Card
        key={idx}
        id={movie.imdb_id || idx}
        image={null}
        title={movie.title}
        imdbRating={movie.imdb_rating}
        year={movie.year}
        genre={movie.country}
        director={movie.director}
        description={""}
      />
    ))
  ), [movies]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text ">فیلم‌های افزوده شده توسط شما</h1>
      {movies.length === 0 ? (
        <div className="text-lg text-gray-300 font-semibold mt-12">هنوز فیلمی به لیست خود اضافه نکرده‌اید.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {memoizedCards}
        </div>
      )}
    </div>
  );
}
