export default function Rules() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-white mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          قوانین و مقررات فیلیمو
        </h1>
        <div className="text-gray-200 text-lg leading-relaxed space-y-4">
          <p>
            به فیلیمو خوش آمدید! استفاده از این سرویس به معنای پذیرش قوانین و مقررات زیر است. لطفاً قبل از استفاده، این موارد را با دقت مطالعه فرمایید.
          </p>
          <ul className="list-disc pr-6 space-y-2">
            <li>استفاده از حساب کاربری فقط برای شخص ثبت‌نام‌کننده مجاز است و انتقال یا اشتراک‌گذاری حساب ممنوع می‌باشد.</li>
            <li>هرگونه کپی‌برداری، ضبط یا انتشار محتوای فیلیمو بدون اجازه کتبی ممنوع است.</li>
            <li>رعایت حقوق مالکیت معنوی و احترام به قوانین کپی‌رایت الزامی است.</li>
            <li>در صورت مشاهده هرگونه سوءاستفاده، حساب کاربری بدون اطلاع قبلی مسدود خواهد شد.</li>
            <li>اطلاعات شخصی کاربران نزد فیلیمو محفوظ بوده و بدون اجازه کاربر منتشر نخواهد شد.</li>
            <li>کاربران موظف به رعایت ادب و احترام در بخش نظرات و ارتباط با پشتیبانی هستند.</li>
            <li>فیلیمو حق تغییر قوانین را در هر زمان برای خود محفوظ می‌داند. تغییرات از طریق سایت اطلاع‌رسانی خواهد شد.</li>
            <li>استفاده از سرویس برای افراد زیر ۱۸ سال فقط با اجازه والدین مجاز است.</li>
            <li>در صورت بروز مشکل یا سوال، با پشتیبانی فیلیمو تماس بگیرید.</li>
          </ul>
          <p>
            با ثبت‌نام و استفاده از فیلیمو، شما با تمامی قوانین فوق موافقت می‌نمایید.
          </p>

          {/* Privacy Policy Section */}
          <h2 className="text-2xl font-bold text-green-300 mt-8 mb-2">حریم خصوصی کاربران</h2>
          <p>
            فیلیمو متعهد به حفظ حریم خصوصی کاربران است. اطلاعات شخصی شما فقط برای ارائه خدمات بهتر و ارتباط با شما استفاده می‌شود و هرگز بدون اجازه شما در اختیار شخص ثالث قرار نخواهد گرفت. اطلاعات حساس مانند رمز عبور به صورت رمزنگاری‌شده ذخیره می‌شود.
          </p>
          <ul className="list-disc pr-6 space-y-2">
            <li>اطلاعات تماس شما فقط برای اطلاع‌رسانی و پشتیبانی استفاده می‌شود.</li>
            <li>در صورت درخواست مراجع قانونی، اطلاعات لازم مطابق با قوانین کشور ارائه خواهد شد.</li>
            <li>شما می‌توانید در هر زمان درخواست حذف حساب کاربری خود را ثبت کنید.</li>
          </ul>

          {/* User Responsibilities Section */}
          <h2 className="text-2xl font-bold text-green-300 mt-8 mb-2">مسئولیت‌های کاربران</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>کاربران موظف به حفظ امنیت اطلاعات حساب کاربری خود هستند.</li>
            <li>هرگونه فعالیت مشکوک یا غیرمجاز باید فوراً به پشتیبانی اطلاع داده شود.</li>
            <li>کاربران نباید از سرویس برای مقاصد غیرقانونی یا مغایر با عرف جامعه استفاده کنند.</li>
            <li>در صورت نقض قوانین، مسئولیت عواقب آن بر عهده کاربر خواهد بود.</li>
          </ul>

          {/* Service Limitations Section */}
          <h2 className="text-2xl font-bold text-green-300 mt-8 mb-2">محدودیت‌های سرویس</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>فیلیمو ممکن است به دلایل فنی یا به‌روزرسانی، به طور موقت در دسترس نباشد.</li>
            <li>در صورت بروز مشکلات زیرساختی یا قطع اینترنت، مسئولیتی متوجه فیلیمو نخواهد بود.</li>
            <li>برخی محتواها ممکن است به دلایل قانونی یا سیاست‌های داخلی حذف یا محدود شوند.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
