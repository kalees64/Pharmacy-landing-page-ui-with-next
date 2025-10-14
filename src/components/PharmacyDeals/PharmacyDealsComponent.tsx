import React from "react";
import { ChevronRight } from "lucide-react";

export default function PharmacyDealsComponent() {
  const deals = [
    {
      badge: "Buy 1 Get 1",
      image: "🧼",
      name: "Apollo Pharmacy Activated Charcoal Soap, 250 gm",
      originalPrice: 342,
      currentPrice: 100,
      discount: "30% off",
    },
    {
      badge: "Bestseller",
      image: "🧴",
      name: "Apollo Essentials Aqua Blue Hand Wash, 500 ml (2×250 ml)",
      originalPrice: 330,
      currentPrice: 99.2,
      discount: "38% off",
    },
    {
      badge: "Buy 1 Get 1",
      image: "🚿",
      name: "Apollo Essentials Refreshing Body Wash, 400 ml",
      originalPrice: 200,
      currentPrice: 100,
      discount: "50% off",
    },
    {
      badge: "Buy 1 Get 1",
      image: "🧻",
      name: "Apollo Life Premium Citrus Refreshing Wet Wipes, 60 Count",
      originalPrice: 180,
      currentPrice: 99.2,
      discount: "38% off",
    },
    {
      badge: "Buy 1 Get 1",
      image: "🧴",
      name: "Apollo Life Aloe Vera Skin Care Gel, 200 gm (2×100 gm)",
      originalPrice: 180,
      currentPrice: 99.2,
      discount: "38% off",
    },
    {
      badge: "Buy 1 Get 1",
      image: "🧼",
      name: "Apollo Essentials Sandal Soap, 250 gm (2×125 gm)",
      originalPrice: 172,
      currentPrice: 100,
      discount: "44% off",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Promotional Banner */}
      <div
        className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-amber-900 rounded-2xl overflow-hidden mb-12 shadow-2xl"
        data-aos="zoom-out"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-60"></div>

        <div className="relative flex items-center justify-between p-8 md:p-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Save Up to 25% on Your Medicine Spends
            </h2>
            <p className="text-2xl md:text-3xl text-white mb-6">
              With{" "}
              <span className="text-amber-400 font-bold">
                Apollo SBI Card SELECT
              </span>
            </p>
            <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105 shadow-lg">
              Apply Now
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <div className="w-48 h-64 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-2xl shadow-2xl transform rotate-6">
                <div className="absolute inset-4 bg-black rounded-xl flex items-center justify-center">
                  <div className="text-6xl">💳</div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white text-xl font-semibold">
                Health Meets Happiness
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Value Deals Section */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900">
          Value Deals at Rs 100
        </h3>
        <button className="text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-1">
          View All
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Deals Grid */}
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {deals.map((deal, idx) => (
            <div
              data-aos="flip-up"
              data-aos-delay={`${idx * 100}`}
              key={deal.name}
              className="bg-white rounded-xl border border-gray-200 hover:shadow-xl transition group"
            >
              <div className="p-4">
                {/* Badge */}
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                    deal.badge === "Bestseller"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-purple-100 text-purple-600"
                  }`}
                >
                  {deal.badge}
                </div>

                {/* Product Image */}
                <div className="bg-gray-50 rounded-lg p-6 mb-4 flex items-center justify-center group-hover:bg-gray-100 transition">
                  <div className="text-6xl">{deal.image}</div>
                </div>

                {/* Product Name */}
                <h4 className="text-sm text-gray-800 font-medium mb-3 line-clamp-2 h-10">
                  {deal.name}
                </h4>

                {/* Price Section */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl font-bold text-gray-900">
                      ₹{deal.currentPrice}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      MRP ₹{deal.originalPrice}
                    </span>
                  </div>
                  <span className="text-sm text-green-600 font-semibold">
                    {deal.discount}
                  </span>
                </div>

                {/* Add Button */}
                <button className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105">
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
