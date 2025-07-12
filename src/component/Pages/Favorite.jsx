import { useState, useEffect } from 'react';
import ConfirmModal from '../ConfirmModal';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingRemoveIdx, setPendingRemoveIdx] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
      } catch {
        setFavorites([]);
      }
    }
  }, []);

  const handleRemove = (idxToRemove) => {
    setPendingRemoveIdx(idxToRemove);
    setModalOpen(true);
  };

  const confirmRemove = () => {
    if (pendingRemoveIdx === null) return;
    const newFavorites = favorites.filter((_, idx) => idx !== pendingRemoveIdx);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setModalOpen(false);
    setPendingRemoveIdx(null);
  };

  const cancelRemove = () => {
    setModalOpen(false);
    setPendingRemoveIdx(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] py-12 px-4">
      <div className="max-w-2xl w-full bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">موارد علاقه‌مندی</h2>
        {favorites.length === 0 ? (
          <div className="text-center text-gray-300 text-lg py-12">
            هیچ موردی به علاقه‌مندی‌ها اضافه نشده است.
          </div>
        ) : (
          <ul className="space-y-4">
            {favorites.map((item, idx) => (
              <li key={idx} className="bg-white/10 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between shadow gap-2">
                <span className="text-white font-semibold text-lg">{item.title || item.name || 'آیتم بدون عنوان'}</span>
                {item.year && <span className="text-gray-400 text-sm mt-2 sm:mt-0">{item.year}</span>}
                <button
                  onClick={() => handleRemove(idx)}
                  className="mt-2 cursor-pointer sm:mt-0 px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold shadow hover:from-red-600 hover:to-pink-600 transition-all text-sm"
                >
                  حذف
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ConfirmModal
        open={modalOpen}
        onConfirm={confirmRemove}
        onCancel={cancelRemove}
        message={
          pendingRemoveIdx !== null && favorites[pendingRemoveIdx]
            ? `آیا از حذف «${favorites[pendingRemoveIdx].title || favorites[pendingRemoveIdx].name || 'آیتم بدون عنوان'}» مطمئن هستید؟`
            : 'آیا از حذف این مورد مطمئن هستید؟'
        }
      />
    </div>
  );
}
