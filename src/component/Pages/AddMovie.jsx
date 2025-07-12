import { useState } from "react";

export default function AddMovie() {
  const user = typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const [formData, setFormData] = useState({
    title: "",
    imdb_id: "",
    country: "",
    year: "",
    director: "",
    imdb_rating: "",
    poster: null,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.imdb_id) newErrors.imdb_id = "IMDB ID is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.year) newErrors.year = "Year is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setTimeout(() => {
      // Simulate API call
      const movieData = { ...formData };
      if (movieData.poster) movieData.poster = movieData.poster.name;
      alert("Movie added! Check console for data.");
      console.log(movieData);
      setIsLoading(false);
    }, 1200);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]">
        <div className="bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/10 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">برای افزودن فیلم باید ابتدا ثبت‌نام کنید</h2>
          <p className="text-gray-300 mb-4">لطفاً ابتدا ثبت‌نام یا وارد حساب کاربری خود شوید.</p>
          <a href="/signup" className="inline-block px-6 py-2 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold shadow-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200">ثبت‌نام</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-md w-full">
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 space-y-8">
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">افزودن فیلم جدید</h2>
            <p className="text-gray-300 text-sm">فرم افزودن فیلم به لیست</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-200">عنوان فیلم *</label>
              <input id="title" name="title" type="text" value={formData.title} onChange={handleInputChange} className={`w-full px-4 py-3 border rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200 ${errors.title ? "border-red-500/50" : "border-white/10"}`} placeholder="عنوان فیلم" />
              {errors.title && <p className="text-sm text-red-400 flex items-center">{errors.title}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="imdb_id" className="block text-sm font-medium text-gray-200">IMDB ID *</label>
              <input id="imdb_id" name="imdb_id" type="text" value={formData.imdb_id} onChange={handleInputChange} className={`w-full px-4 py-3 border rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200 ${errors.imdb_id ? "border-red-500/50" : "border-white/10"}`} placeholder="مثال: tt1234567" />
              {errors.imdb_id && <p className="text-sm text-red-400 flex items-center">{errors.imdb_id}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="country" className="block text-sm font-medium text-gray-200">کشور سازنده *</label>
              <input id="country" name="country" type="text" value={formData.country} onChange={handleInputChange} className={`w-full px-4 py-3 border rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200 ${errors.country ? "border-red-500/50" : "border-white/10"}`} placeholder="کشور" />
              {errors.country && <p className="text-sm text-red-400 flex items-center">{errors.country}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="year" className="block text-sm font-medium text-gray-200">سال تولید *</label>
              <input id="year" name="year" type="number" value={formData.year} onChange={handleInputChange} className={`w-full px-4 py-3 border rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200 ${errors.year ? "border-red-500/50" : "border-white/10"}`} placeholder="سال" />
              {errors.year && <p className="text-sm text-red-400 flex items-center">{errors.year}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="director" className="block text-sm font-medium text-gray-200">کارگردان</label>
              <input id="director" name="director" type="text" value={formData.director} onChange={handleInputChange} className="w-full px-4 py-3 border rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200 border-white/10" placeholder="کارگردان (اختیاری)" />
            </div>
            <div className="space-y-2">
              <label htmlFor="imdb_rating" className="block text-sm font-medium text-gray-200">IMDB امتیاز</label>
              <input id="imdb_rating" name="imdb_rating" type="number" step="0.1" value={formData.imdb_rating} onChange={handleInputChange} className="w-full px-4 py-3 border rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200 border-white/10" placeholder="امتیاز (اختیاری)" />
            </div>
            <div className="space-y-2">
              <label htmlFor="poster" className="block text-sm font-medium text-gray-200">پوستر فیلم</label>
              <input id="poster" name="poster" type="file" accept="image/*" onChange={handleInputChange} className="w-full px-4 py-3 border rounded-xl bg-white/5 text-white file:text-white file:bg-green-500/20 file:border-0 file:rounded-lg file:px-3 file:py-2 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200 border-white/10" />
              {formData.poster && <p className="text-xs text-green-300 mt-1">فایل انتخاب شده: {formData.poster.name}</p>}
            </div>
            <div>
              <button type="submit" disabled={isLoading} className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer">
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    در حال افزودن...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    افزودن فیلم
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
