import { useState } from "react";
import { useLocation } from "react-router-dom";
import { careers } from "../../data/caress";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Apply() {
  const query = useQuery();
  const jobId = parseInt(query.get("id"), 10);
  const job = careers.find((j) => j.id === jobId);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    resume: null,
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
    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setTimeout(() => {
      const applyData = { ...formData };
      if (applyData.resume) applyData.resume = applyData.resume.name;
      alert("Application submitted! Check console for data.");
      console.log({ job, ...applyData });
      setIsLoading(false);
    }, 1200);
  };

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        شغل مورد نظر پیدا نشد.
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
            <h2 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              درخواست برای: {job.title}
            </h2>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-200">
                نام *
              </label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                value={formData.firstname}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200 ${
                  errors.firstname ? "border-red-500/50" : "border-white/10"
                }`}
                placeholder="نام"
              />
              {errors.firstname && (
                <p className="text-sm text-red-400 flex items-center">
                  {errors.firstname}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-200">
                نام خانوادگی *
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                value={formData.lastname}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200 ${
                  errors.lastname ? "border-red-500/50" : "border-white/10"
                }`}
                placeholder="نام خانوادگی"
              />
              {errors.lastname && (
                <p className="text-sm text-red-400 flex items-center">
                  {errors.lastname}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200">
                ایمیل *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200 ${
                  errors.email ? "border-red-500/50" : "border-white/10"
                }`}
                placeholder="ایمیل"
              />
              {errors.email && (
                <p className="text-sm text-red-400 flex items-center">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-200">
                شماره تماس *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200 ${
                  errors.phone ? "border-red-500/50" : "border-white/10"
                }`}
                placeholder="شماره تماس"
              />
              {errors.phone && (
                <p className="text-sm text-red-400 flex items-center">
                  {errors.phone}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-200">
                رزومه
              </label>
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-xl bg-white/5 text-white file:text-white file:bg-green-500/20 file:border-0 file:rounded-lg file:px-3 file:py-2 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200 border-white/10"
              />
              {formData.resume && (
                <p className="text-xs text-green-300 mt-1">
                  فایل انتخاب شده: {formData.resume.name}
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer">
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    در حال ارسال...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    ارسال درخواست
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
