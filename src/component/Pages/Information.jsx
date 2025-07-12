export default function Information() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">درباره پروژه فیلیمو</h1>
          <p className="text-gray-300 text-lg mb-4">
            این پروژه یک نمونه وب‌اپلیکیشن برای نمایش فیلم‌ها، فرصت‌های شغلی، ثبت‌نام کاربران و امکانات دیگر است. هدف این پروژه تمرین و نمایش مهارت‌های توسعه رابط کاربری مدرن با React و TailwindCSS است.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <img src="/src/assets/img/filimo.png" alt="Filimo Logo" className="rounded-xl shadow-lg object-cover w-full h-32 bg-white/10" />
          <img src="/src/assets/img/filimo-seeklogo.png" alt="Filimo Seeklogo" className="rounded-xl shadow-lg object-cover w-full h-32 bg-white/10" />
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white mb-1">امکانات پروژه:</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>ثبت‌نام و ورود کاربران با اعتبارسنجی</li>
            <li>افزودن فیلم جدید با فرم پیشرفته</li>
            <li>نمایش فرصت‌های شغلی و امکان درخواست همکاری</li>
            <li>جستجو و مشاهده جزئیات فیلم‌ها</li>
            <li>رابط کاربری مدرن و واکنش‌گرا با TailwindCSS</li>
          </ul>
        </div>
        <div className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-white mb-1">تکنولوژی‌های استفاده شده:</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>React.js (ساخت رابط کاربری)</li>
            <li>TailwindCSS (استایل‌دهی سریع و مدرن)</li>
            <li>Vite (ابزار توسعه و بیلد سریع)</li>
            <li>JavaScript (منطق برنامه)</li>
            <li>LocalStorage (ذخیره‌سازی اطلاعات کاربر)</li>
          </ul>
        </div>
        <div className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-white mb-1">اهداف پروژه:</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>تمرین توسعه رابط کاربری با React و TailwindCSS</li>
            <li>ایجاد تجربه کاربری جذاب و واکنش‌گرا</li>
            <li>آشنایی با مدیریت وضعیت و فرم‌ها در React</li>
            <li>شبیه‌سازی امکانات یک وب‌سایت واقعی نمایش فیلم</li>
          </ul>
        </div>
        <div className="space-y-3 mt-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-1">ارتباط با من</h2>
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://github.com/Mohammadrezamirzai"target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><img src="/src/assets/svg/icons8-github.svg" alt="GitHub" className="w-8 h-8" /></a>
            <a href="https://www.linkedin.com/in/mohammadrezamirzai/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><img src="/src/assets/svg/icons8-linkedin.svg" alt="LinkedIn" className="w-8 h-8" /></a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><img src="/src/assets/svg/icons8-instagram.svg" alt="Instagram" className="w-8 h-8" /></a>
          </div>
        </div>
        <div className="mt-6 text-gray-400 text-sm text-center">
          <p>توسعه‌دهنده: <span className="text-green-300 font-bold">محمدرضا میرزایی</span></p>
          <p>سال: 2025</p>
        </div>
      </div>
    </div>
  );
}
