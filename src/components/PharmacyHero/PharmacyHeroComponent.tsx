"use client";
import React, { useState } from "react";
import { Search, Pill, Clock, Truck, Shield, Star } from "lucide-react";

export default function PharmacyHeroComponent() {
  const [searchQuery, setSearchQuery] = useState("");

  const features = [
    {
      icon: Truck,
      text: "Free Delivery on Orders Above ₹500",
      color: "text-green-600",
    },
    { icon: Clock, text: "24/7 Customer Support", color: "text-blue-600" },
    { icon: Shield, text: "100% Genuine Medicines", color: "text-purple-600" },
    { icon: Star, text: "Trusted by 5M+ Customers", color: "text-orange-600" },
  ];

  const quickCategories = [
    "Vitamins & Supplements",
    "Personal Care",
    "Baby Care",
    "Diabetic Care",
    "Ayurvedic",
    "Women Care",
  ];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50"
      data-aos="fade-up"
    >
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 px-4 text-center text-sm">
        <span className="font-medium">
          🎉 Grand Opening Sale: Get 25% OFF on your first order! Use code:
          WELCOME25
        </span>
      </div>

      {/* Main Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        {/* Hero Content */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-2xl">
              <Pill className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Your Trusted{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Health Partner
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Order medicines online with guaranteed quality and fastest delivery.
            Your wellness is our priority.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative flex items-center bg-white rounded-2xl shadow-xl border-2 border-gray-100 hover:border-blue-300 transition">
                <Search className="w-6 h-6 text-gray-400 ml-6" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for medicines, health products, or ask anything..."
                  className="flex-1 px-4 py-5 text-lg outline-none rounded-2xl"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 m-1 rounded-xl font-semibold hover:shadow-lg transition transform hover:scale-105"
                >
                  Search
                </button>
              </div>
            </div>
          </form>

          {/* Quick Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {quickCategories.map((category, idx) => (
              <button
                data-aos="fade-up"
                data-aos-delay={`${idx * 100}`}
                key={category}
                className="px-5 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-blue-500 hover:text-blue-600 hover:shadow-md transition transform hover:-translate-y-0.5"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div
              data-aos="zoom-in--up"
              data-aos-delay={`${idx * 100}`}
              key={feature.text}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100"
            >
              <div className={`${feature.color} mb-3`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <p className="text-gray-800 font-medium">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 shadow-2xl"
          data-aos="flip-down"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100 text-sm">Medicines Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5M+</div>
              <div className="text-blue-100 text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100 text-sm">Customer Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100 text-sm">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
