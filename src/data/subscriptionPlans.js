export const subscriptionPlans = [
  {
    id: "basic",
    name: "اشتراک پایه",
    price: "۴۹,۰۰۰",
    period: "ماهانه",
    features: [
      "دسترسی به تمام فیلم‌ها و سریال‌ها",
      "کیفیت HD",
      "حذف تبلیغات",
      "دانلود محدود",
      "پشتیبانی ایمیلی"
    ],
    popular: false,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "premium",
    name: "اشتراک پریمیوم",
    price: "۸۹,۰۰۰",
    period: "ماهانه",
    features: [
      "تمام امکانات اشتراک پایه",
      "کیفیت 4K",
      "دانلود نامحدود",
      "پشتیبانی تلفنی",
      "دسترسی به محتوای انحصاری",
      "پروفایل‌های متعدد"
    ],
    popular: true,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "family",
    name: "اشتراک خانوادگی",
    price: "۱۲۹,۰۰۰",
    period: "ماهانه",
    features: [
      "تمام امکانات پریمیوم",
      "تا ۶ پروفایل همزمان",
      "کنترل والدین",
      "محدودیت سنی",
      "گزارش تماشا",
      "پشتیبانی ۲۴/۷"
    ],
    popular: false,
    color: "from-green-500 to-green-600"
  }
];

// Helper function to find a plan by ID
export const findPlanById = (planId) => {
  return subscriptionPlans.find(plan => plan.id === planId);
};

// Helper function to get popular plans
export const getPopularPlans = () => {
  return subscriptionPlans.filter(plan => plan.popular);
};

// Helper function to get all plan IDs
export const getAllPlanIds = () => {
  return subscriptionPlans.map(plan => plan.id);
};
