import React from "react";
import { ChevronRight } from "lucide-react";

export default function PharmacyHotSellersComponent() {
  const minimumDeals = [
    {
      badge: "Buy 2, +5% OFF",
      image: "🧴",
      name: "Loreal Total Repair Serum, 80 ml",
      originalPrice: 399,
      currentPrice: 189.5,
      discount: "50% off",
    },
    {
      badge: "Bestseller",
      image: "💨",
      name: "Nivea Men Fresh Active Deodorant Spray, 150 ml",
      originalPrice: 315,
      currentPrice: 157.5,
      discount: "50% off",
    },
    {
      badge: "Buy 2, +5% OFF",
      image: "☀️",
      name: "Lacto Calamine SPF 50 PA+++ EVA-UVB Sunscreen",
      originalPrice: 399,
      currentPrice: 199.5,
      discount: "50% off",
    },
    {
      badge: "Buy 2, +5% OFF",
      image: "🦷",
      name: "Dabur Red Toothpaste Family Pack 250 gm, (3×1...",
      originalPrice: 260,
      currentPrice: 156.5,
      discount: "40% off",
    },
    {
      badge: "Buy 2, +5% OFF",
      image: "🌞",
      name: "Vaseline Healthy Bright SPF 30 Multivitamin UV Lotion",
      originalPrice: 585,
      currentPrice: 292.5,
      discount: "50% off",
    },
    {
      badge: "Buy 2, +5% OFF",
      image: "🧼",
      name: "Garnier Bright Complete Vitamin C Face Wash 100",
      originalPrice: 299,
      currentPrice: 174.5,
      discount: "50% off",
    },
  ];

  const hotSellers = [
    {
      image: "🎁",
      name: "The Man Company Rouge Eau De Toilette Perfume, ...",
      originalPrice: 449,
      currentPrice: 224.8,
      discount: "75% off",
    },
    {
      image: "🌿",
      name: "Dabur Vatika Henna & Amla Health Shampoo, 180 ml",
      originalPrice: 151,
      currentPrice: 51,
      discount: "90% off",
    },
    {
      image: "💆",
      name: "Loreal Total Repair Serum, 80 ml",
      originalPrice: 399,
      currentPrice: 199.5,
      discount: "50% off",
    },
    {
      image: "🪥",
      name: "Apollo Pharmacy Charcoal Slim Soft Toothbrushes...",
      originalPrice: 249,
      currentPrice: 100,
      discount: "44% off",
    },
    {
      image: "👨",
      name: "The Man Company Sky Eau De Perfume, 50 ml",
      originalPrice: 699,
      currentPrice: 187.3,
      discount: "70% off",
    },
    {
      image: "👶",
      name: "Little's Premium Comfy Baby Diaper Pants Large, ...",
      originalPrice: 999,
      currentPrice: 585.3,
      discount: "50% off",
    },
  ];

  const renderProductCard = (product: any, index: number) => (
    <div
      data-aos="zoom-in"
      data-aos-delay={`${index * 100}`}
      key={index}
      className="bg-white rounded-xl border border-gray-200 hover:shadow-xl transition group"
    >
      <div className="p-3 sm:p-4">
        {/* Badge - only for minimum deals */}
        {product.badge && (
          <div
            className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-semibold mb-2 sm:mb-3 ${
              product.badge === "Bestseller"
                ? "bg-orange-100 text-orange-600"
                : "bg-purple-100 text-purple-600"
            }`}
          >
            {product.badge}
          </div>
        )}

        {/* Product Image */}
        <div className="bg-gray-50 rounded-lg p-3 sm:p-6 mb-2 sm:mb-4 flex items-center justify-center group-hover:bg-gray-100 transition h-24 sm:h-32">
          <div className="text-4xl sm:text-6xl">{product.image}</div>
        </div>

        {/* Product Name */}
        <h4 className="text-xs sm:text-sm text-gray-800 font-medium mb-2 sm:mb-3 line-clamp-2 h-9 sm:h-10">
          {product.name}
        </h4>

        {/* Price Section */}
        <div className="mb-3 sm:mb-4">
          <div className="flex items-baseline gap-1 sm:gap-2 mb-1">
            <span className="text-lg sm:text-xl font-bold text-gray-900">
              ₹{product.currentPrice}
            </span>
            <span className="text-xs text-gray-400 line-through">
              MRP ₹{product.originalPrice}
            </span>
          </div>
          <span className="text-xs sm:text-sm text-green-600 font-semibold">
            {product.discount}
          </span>
        </div>

        {/* Add Button */}
        <button className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 sm:py-3 text-sm rounded-lg transition transform hover:scale-105">
          ADD
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Minimum 50 Percent Off Section */}
        <div className="mb-8 sm:mb-12">
          <div className="mb-4 sm:mb-6 flex items-center justify-between gap-2">
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
              Minimum 50 Percent Off
            </h3>
            <button className="text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-1 text-sm sm:text-base">
              View All
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
            {minimumDeals.map((deal, idx) => (
              <div key={deal.name}>{renderProductCard(deal, idx)}</div>
            ))}
          </div>
        </div>

        {/* Hot Sellers Section */}
        <div>
          <div className="mb-4 sm:mb-6 flex items-center justify-between gap-2">
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
              Hot Sellers
            </h3>
            <button className="text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-1 text-sm sm:text-base">
              View All
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
            {hotSellers.map((product, idx) => (
              <div key={product.name}>{renderProductCard(product, idx)}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
