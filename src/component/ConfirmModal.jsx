import React from "react";

export default function ConfirmModal({ open, onConfirm, onCancel, message, confirmText, cancelText, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/10 p-8 max-w-xs w-full flex flex-col items-center animate-fade-in-down">
        <div className="mb-4 text-lg text-white font-bold text-center">
          {children || message || "آیا از حذف این مورد مطمئن هستید؟"}
        </div>
        <div className="flex gap-4 mt-4">
          <button
            onClick={onConfirm}
            className="px-6 py-2 cursor-pointer rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold shadow hover:from-red-600 hover:to-pink-600 transition-all text-base"
          >
            {confirmText || "تایید"}
          </button>
          <button
            onClick={onCancel}
            className="px-6 py-2 cursor-pointer rounded-xl bg-gradient-to-r from-gray-500 to-gray-700 text-white font-bold shadow hover:from-gray-600 hover:to-gray-800 transition-all text-base"
          >
            {cancelText || "انصراف"}
          </button>
        </div>
      </div>
    </div>
  );
}
