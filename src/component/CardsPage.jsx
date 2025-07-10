import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import getData, { getSelectedGenre } from "../utils/api/api";

const genreTitles = {
  action: "اکشن",
  comedy: "کمدی",
  romance: "عاشقانه",
  science: "علمی تخیلی",
  horror: "ترسناک",
  criminal: "جنایی",
  drama: "درام",
  history: "تاریخی",
  // add more as needed
};

const categoryTitles = {
  series: "سریال",
  films: "فیلم",
  irani: "ایرانی",
  khareji: "خارجی",
  // add more as needed
};

const genreApiMap = {
  criminal: 1,
  comedy: 2,
  romance: 3,
  science: 4,
  horror: 5,
  action: 6,
  drama: 7,
  history: 8,
};

const CardsPage = ({title}) => {
  const { category, genre } = useParams();
  const titleCt = categoryTitles[category?.toLowerCase()];
  const titleGn = genreTitles[genre?.toLowerCase()];

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      setError(null);
      try {
        let res;
        if (genre && genreApiMap[genre.toLowerCase()]) {
          res = await getSelectedGenre(genreApiMap[genre.toLowerCase()]);
        } else {
          res = await getData();
        }
        const movieList =
          res?.data?.data ||
          res?.data?.movies ||
          res?.data?.results ||
          res?.data ||
          [];
        setMovies(movieList);
      } catch (err) {
        setError("مشکلی در دریافت اطلاعات رخ داد.");
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [genre, category]);

  let heading = "";
  if (titleCt && titleGn) {
    heading = `${titleCt} های ${titleGn}`;
  }
  if(title){
    heading = title
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] mt-16 py-12 px-4 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-white drop-shadow-lg tracking-tight sticky top-0 z-20 bg-transparent">
        {heading}
      </h1>
      {loading && (
        <div className="min-h-screen mt-24 text-orange-500 text-2xl font-bold text-center">
          در حال بارگذاری...
        </div>
      )}
      {error && <div className="text-red-500 text-center">{error}</div>}
      {!loading && !error && (
        <div className="w-full max-w-7xl rounded-2xl bg-white/5 backdrop-blur-md shadow-xl p-6 md:p-10 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.length === 0 ? (
            <div className="col-span-full text-center text-gray-300">
              نتیجه‌ای یافت نشد.
            </div>
          ) : (
            movies.map((movie, idx) => (
              <div key={idx} className="flex justify-center">
                <Card
                  id={movie.id}
                  image={movie.poster || movie.image || movie.posterUrl}
                  title={movie.title}
                  imdbRating={
                    movie.imdb_rating || movie.imdbRating || movie.rating
                  }
                  year={
                    movie.year || (movie.released && movie.released.slice(0, 4))
                  }
                  genre={
                    movie.genre ||
                    (Array.isArray(movie.genres)
                      ? movie.genres.join(", ")
                      : undefined)
                  }
                  director={movie.director}
                  description={movie.plot || movie.description}
                />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CardsPage;
