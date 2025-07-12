import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/search/${encodeURIComponent(searchValue.trim())}`);
      setSearchValue("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] px-4">
      <form
        onSubmit={handleSearch}
        className="bg-white/5 backdrop-blur-md shadow-xl rounded-2xl p-8 flex flex-col md:flex-row items-center gap-4 w-full max-w-lg"
      >
        <input
          type="text"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder="جستجو..."
          className="rounded px-4 py-2 cursor-pointer text-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full md:w-auto flex-1"
        />
        <button
          type="submit"
          className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-6 py-2 rounded text-lg font-bold transition-colors w-xs md:w-auto"
        >
          جستجو
        </button>
      </form>
    </div>
  );
}
