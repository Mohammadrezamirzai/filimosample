import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const fallbackImage = null; // You can use a static image path here if you have one, or null for a styled div

const Card = ({ id, image, title, imdbRating, year, genre, director, description }) => {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="relative w-60 h-80 rounded-xl overflow-hidden shadow-lg bg-gray-800 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ backgroundImage: imgError ? undefined : `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      onClick={() => navigate(`/movie/${id}`)}
    >
      {/* Overlay for details on hover */}
      <div className={`absolute inset-0 flex flex-col items-center justify-end transition-opacity duration-300 ${hovered ? 'bg-black/70 opacity-100' : 'opacity-0'}`}>
        <div className="w-full p-3 flex flex-col items-center">
          <h3 className="font-bold text-gray-200 text-center min-h-[48px] text-base mb-1 line-clamp-2">{title}</h3>
          <div className="flex items-center justify-center gap-2 w-full mb-2">
            {imdbRating && (
              <span className="flex items-center gap-1 text-yellow-400 font-semibold bg-yellow-900/30 rounded px-2 py-0.5 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                {imdbRating}
              </span>
            )}
            {year && (
              <span className="text-gray-200 bg-gray-700 rounded px-2 py-0.5 text-sm font-medium">{year}</span>
            )}
          </div>
          {genre && (
            <div className="text-xs text-gray-300 mb-1 truncate w-full text-center">ژانر: {genre}</div>
          )}
          {director && (
            <div className="text-xs text-gray-300 mb-1 truncate w-full text-center">کارگردان: {director}</div>
          )}
          {description && (
            <div className="text-xs text-gray-400 mt-1 line-clamp-3 text-center">{description}</div>
          )}
        </div>
      </div>
      {/* Fallback for accessibility: invisible img for SEO/alt text, or show fallback if error */}
      {imgError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-700 text-white text-lg font-bold">
          بدون عکس
        </div>
      ) : (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-0"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );
};

export default Card;
