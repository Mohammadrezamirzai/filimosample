import { useState } from "react";
import { subscriptionPlans, findPlanById } from "../data";

export default function SubscriptionPanel({ isOpen, onClose }) {
  const [selectedPlan, setSelectedPlan] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4 mt-10">
      <div className="bg-gray-900 rounded-2xl p-8 max-w-4xl w-full max-h-[85vh]  border border-gray-700 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">انتخاب اشتراک</h2>
          <p className="text-gray-400">بهترین پلن را برای خود انتخاب کنید</p>
          <button
            onClick={onClose}
            className="absolute top-4 left-4 text-gray-400 hover:text-white text-2xl cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-gray-800 rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer hover:scale-105 ${
                selectedPlan === plan.id
                  ? "border-orange-500 shadow-lg shadow-orange-500/20"
                  : "border-gray-700 hover:border-gray-600"
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    محبوب
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm mr-1">تومان</span>
                  <div className="text-gray-400 text-sm">{plan.period}</div>
                </div>

                <ul className="text-right space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <span className="text-green-500 ml-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all duration-300 cursor-pointer ${
                    selectedPlan === plan.id
                      ? "bg-gradient-to-r from-orange-500 to-red-500 shadow-lg"
                      : `bg-gradient-to-r ${plan.color} hover:shadow-lg`
                  }`}
                >
                  انتخاب پلن
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Plan Summary */}
        {selectedPlan && (
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">خلاصه انتخاب شما:</h3>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-300">
                  {findPlanById(selectedPlan)?.name} - {findPlanById(selectedPlan)?.price} تومان
                </p>
                <p className="text-gray-400 text-sm">پرداخت ماهانه</p>
              </div>
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 cursor-pointer">
                ادامه خرید
              </button>
            </div>
          </div>
        )}


      </div>
    </div>
  );
}
