import { useState, useEffect } from "react";
import { validateSignupForm, clearFieldError, hasErrors } from "../utils/validation";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Signup component mounted");
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    clearFieldError(errors, name, setErrors);
  };

  const validateForm = () => {
    const newErrors = validateSignupForm(formData);
    setErrors(newErrors);
    return !hasErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form", formData);
    if (!validateForm()) {
      console.log("Validation failed", errors);
      return;
    }
    setIsLoading(true);
    setSuccess("");
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      setSuccess("ثبت نام با موفقیت انجام شد! در حال انتقال به داشبورد...");
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      alert("خطا در ثبت نام. لطفا دوباره تلاش کنید.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div style={{color: 'red', fontWeight: 'bold'}}>DEBUG SIGNUP COMPONENT</div>
      {/* Background decorative elements */}
      <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-md w-full">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 space-y-8">
            {/* Success Message */}
            {success && (
              <div className="w-full text-center py-3 px-4 mb-4 rounded-xl bg-green-600/80 text-white font-bold text-lg animate-fade-in">
                {success}
              </div>
            )}
            {/* Header */}
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                ثبت نام در فیلیمو
              </h2>
              <p className="text-gray-300 text-sm">حساب کاربری جدید ایجاد کنید</p>
            </div>
            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-gray-200">نام</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-xl bg-white/5 text-white"
                    placeholder="نام"
                  />
                  {errors.firstName && <p className="text-sm text-red-400">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-gray-200">نام خانوادگی</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-xl bg-white/5 text-white"
                    placeholder="نام خانوادگی"
                  />
                  {errors.lastName && <p className="text-sm text-red-400">{errors.lastName}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-200">ایمیل</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl bg-white/5 text-white"
                  placeholder="example@email.com"
                />
                {errors.email && <p className="text-sm text-red-400">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm text-gray-200">شماره تلفن</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl bg-white/5 text-white"
                  placeholder="09123456789"
                />
                {errors.phone && <p className="text-sm text-red-400">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm text-gray-200">رمز عبور</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl bg-white/5 text-white"
                  placeholder="حداقل ۶ کاراکتر"
                />
                {errors.password && <p className="text-sm text-red-400">{errors.password}</p>}
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm text-gray-200">تکرار رمز عبور</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl bg-white/5 text-white"
                  placeholder="رمز عبور را تکرار کنید"
                />
                {errors.confirmPassword && <p className="text-sm text-red-400">{errors.confirmPassword}</p>}
              </div>
              <div className="flex items-center">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-green-500"
                />
                <label htmlFor="agreeToTerms" className="ml-2 text-gray-300">قوانین و مقررات را می‌پذیرم</label>
                {errors.agreeToTerms && <p className="text-sm text-red-400 ml-4">{errors.agreeToTerms}</p>}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold mt-4"
              >
                {isLoading ? "در حال ثبت نام..." : "ثبت نام"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
