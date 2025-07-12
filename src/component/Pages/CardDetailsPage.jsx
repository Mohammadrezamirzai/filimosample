import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CardDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if movie is favorite on mount or when movie changes
  useEffect(() => {
    if (!movie) return;
    try {
      const favs = JSON.parse(localStorage.getItem('favorites')) || [];
      setIsFavorite(favs.some(f => f.id === movie.id));
    } catch {
      setIsFavorite(false);
    }
  }, [movie]);

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`https://moviesapi.ir/api/v1/movies/${id}`);
        setMovie(res.data);
      } catch (err) {
        setError("مشکلی در دریافت اطلاعات رخ داد.");
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [id]);

  if (loading) return <div className="text-white text-center mt-20">در حال بارگذاری...</div>;
  if (error) return <div className="text-red-500 text-center mt-20">{error}</div>;
  if (!movie) return null;

  return (
    <div className="min-h-screen justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] py-16 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row gap-8">
        <img
          src={movie.poster || movie.image || movie.posterUrl}
          alt={movie.title}
          className="w-full md:w-72 h-96 object-cover rounded-xl shadow-lg mx-auto md:mx-0"
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-4 drop-shadow-lg">{movie.title}</h2>
            <div className="flex flex-wrap gap-3 mb-4">
              {movie.imdb_rating && (
                <span className="flex items-center gap-1 text-yellow-400 font-semibold bg-yellow-900/30 rounded px-2 py-0.5 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  {movie.imdb_rating}
                </span>
              )}
              {/* Heart icon for favorite */}
              <button
                type="button"
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700/70 hover:bg-red-100/80 transition-colors mx-1"
                onClick={e => {
                  e.stopPropagation();
                  setIsFavorite(fav => {
                    let updated;
                    try {
                      const favs = JSON.parse(localStorage.getItem('favorites')) || [];
                      if (!fav) {
                        // Add to favorites
                        updated = [...favs, movie];
                      } else {
                        // Remove from favorites
                        updated = favs.filter(f => f.id !== movie.id);
                      }
                      localStorage.setItem('favorites', JSON.stringify(updated));
                    } catch {
                      // fallback: do nothing
                    }
                    return !fav;
                  });
                }}
              >
                {isFavorite ? (
                  // Modern filled heart
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ef4444" className="w-7 h-7">
                    <path d="M12.001 4.529c2.349-2.532 6.15-2.532 8.498 0 2.28 2.46 2.28 6.445 0 8.905l-7.071 7.626a1.25 1.25 0 01-1.855 0l-7.071-7.626c-2.28-2.46-2.28-6.445 0-8.905 2.348-2.532 6.149-2.532 8.499 0z"/>
                  </svg>
                ) : (
                  // Modern outline heart
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ef4444" strokeWidth={2} className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.001 4.529c2.349-2.532 6.15-2.532 8.498 0 2.28 2.46 2.28 6.445 0 8.905l-7.071 7.626a1.25 1.25 0 01-1.855 0l-7.071-7.626c-2.28-2.46-2.28-6.445 0-8.905 2.348-2.532 6.149-2.532 8.499 0z"/>
                  </svg>
                )}
              </button>
              {movie.year && (
                <span className="text-gray-200 bg-gray-700 rounded px-2 py-0.5 text-sm font-medium">{movie.year}</span>
              )}
              {movie.genre && (
                <span className="text-gray-200 bg-gray-700 rounded px-2 py-0.5 text-sm font-medium">ژانر: {movie.genre}</span>
              )}
              {movie.language && (
                <span className="text-gray-200 bg-gray-700 rounded px-2 py-0.5 text-sm font-medium">زبان: {movie.language}</span>
              )}
              {movie.popularity && (
                <span className="text-gray-200 bg-gray-700 rounded px-2 py-0.5 text-sm font-medium">محبوبیت: {movie.popularity}</span>
              )}
              {movie.release_date && (
                <span className="text-gray-200 bg-gray-700 rounded px-2 py-0.5 text-sm font-medium">تاریخ انتشار: {movie.release_date}</span>
              )}
              {movie.duration && (
                <span className="text-gray-200 bg-gray-700 rounded px-2 py-0.5 text-sm font-medium">مدت: {movie.duration} دقیقه</span>
              )}
              {movie.director && (
                <span className="text-gray-200 bg-gray-700 rounded px-2 py-0.5 text-sm font-medium">کارگردان: {movie.director}</span>
              )}
            </div>
            {movie.plot || movie.description ? (
              <p className="text-gray-300 mb-4 leading-relaxed">
                {movie.plot || movie.description}
              </p>
            ) : null}
            {/* ژانرها */}
            {movie.genres && Array.isArray(movie.genres) && movie.genres.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genres.map((g, idx) => (
                  <span key={idx} className="bg-gray-700 text-gray-200 rounded px-2 py-0.5 text-xs font-medium">{g}</span>
                ))}
              </div>
            )}
            {/* بازیگران */}
            {movie.actors && (
              <div className="mb-2 text-gray-300 text-sm">
                <span className="font-bold text-gray-200">بازیگران:</span> {movie.actors}
              </div>
            )}
            {/* نویسندگان */}
            {movie.writers && (
              <div className="mb-2 text-gray-300 text-sm">
                <span className="font-bold text-gray-200">نویسندگان:</span> {movie.writers}
              </div>
            )}
            {/* تهیه‌کنندگان */}
            {movie.producers && (
              <div className="mb-2 text-gray-300 text-sm">
                <span className="font-bold text-gray-200">تهیه‌کنندگان:</span> {movie.producers}
              </div>
            )}
            {/* اطلاعات فنی */}
            {movie.country && (
              <div className="mb-2 text-gray-300 text-sm">
                <span className="font-bold text-gray-200">کشور:</span> {movie.country}
              </div>
            )}
            {movie.awards && (
              <div className="mb-2 text-gray-300 text-sm">
                <span className="font-bold text-gray-200">جوایز:</span> {movie.awards}
              </div>
            )}
            {movie.boxoffice && (
              <div className="mb-2 text-gray-300 text-sm">
                <span className="font-bold text-gray-200">فروش:</span> {movie.boxoffice}
              </div>
            )}
            {/* فیلدهای بیشتر */}
          </div>
          {/* گالری تصاویر */}
          {movie.images && Array.isArray(movie.images) && movie.images.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-bold text-white mb-2">تصاویر</h3>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {movie.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`تصویر ${idx + 1}`}
                    className="w-40 h-28 object-cover rounded-lg shadow"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetailsPage;
