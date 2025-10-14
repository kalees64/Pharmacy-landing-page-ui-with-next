"use client";
import "./PharmacyAdsBannerComponent.css";
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  Droplets,
  Sparkles,
  Heart,
  Activity,
} from "lucide-react";

export default function PharmacyAdsBannerComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const banners = [
    {
      id: 1,
      type: "whatsapp",
      gradient: "from-orange-100 via-amber-50 to-orange-100",
      accentColor: "from-green-500 to-emerald-600",
    },
    {
      id: 2,
      type: "wellness",
      gradient: "from-teal-50 via-emerald-50 to-cyan-100",
      accentColor: "from-teal-600 to-cyan-700",
    },
    {
      id: 3,
      type: "diabetes",
      gradient: "from-blue-50 via-indigo-50 to-purple-100",
      accentColor: "from-blue-600 to-indigo-700",
    },
    {
      id: 4,
      type: "skincare",
      gradient: "from-pink-50 via-rose-50 to-purple-100",
      accentColor: "from-pink-500 to-purple-600",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const renderBanner = (banner: any) => {
    switch (banner.type) {
      case "whatsapp":
        return (
          <div
            className={`relative h-full bg-gradient-to-r ${banner.gradient} rounded-3xl overflow-hidden`}
            data-aos="zoom-in-left"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-10 right-20 w-64 h-64 bg-green-300 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-10 left-20 w-72 h-72 bg-orange-300 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* Floating Icons */}
            <MessageCircle className="absolute top-16 right-32 w-10 h-10 text-green-400 opacity-40 animate-float" />
            <Phone className="absolute bottom-20 left-24 w-8 h-8 text-orange-400 opacity-30 animate-float-delayed" />

            <div className="relative h-full flex items-center justify-between px-12 py-8">
              <div className="flex-1 animate-slide-in-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce-slow">
                    <span className="text-3xl">💊</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">
                      Yay! Now you can
                    </p>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      WHATSAPP TO ORDER
                    </h2>
                  </div>
                </div>
                <p className="text-gray-700 text-lg mb-6 max-w-md">
                  Quick and easy ordering right from your WhatsApp
                </p>
                <button
                  className={`bg-gradient-to-r ${banner.accentColor} text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition transform hover:scale-105 flex items-center gap-3 group`}
                >
                  <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition" />
                  <span className="text-lg">WhatsApp 📱 91 - 9353247743</span>
                </button>
              </div>

              <div className="hidden lg:block animate-slide-in-right">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                  <div className="relative w-80 h-64 bg-white bg-opacity-50 backdrop-blur-md rounded-3xl p-6 border-2 border-white shadow-2xl">
                    <div className="flex gap-4">
                      <div className="flex-1 space-y-4 animate-fade-in">
                        <div className="bg-white rounded-2xl p-4 shadow-lg transform hover:scale-105 transition">
                          <div className="text-4xl mb-2">👨‍⚕️</div>
                          <div className="text-xs text-gray-600">
                            Expert Consultation
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-4 shadow-lg text-white transform hover:scale-105 transition">
                          <div className="text-4xl mb-2">💬</div>
                          <div className="text-xs">24/7 Support</div>
                        </div>
                      </div>
                      <div
                        className="flex-1 space-y-4 animate-fade-in"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <div className="bg-white rounded-2xl p-4 shadow-lg transform hover:scale-105 transition mt-8">
                          <div className="text-4xl mb-2">🚚</div>
                          <div className="text-xs text-gray-600">
                            Fast Delivery
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "wellness":
        return (
          <div
            className={`relative h-full bg-gradient-to-br ${banner.gradient} rounded-3xl overflow-hidden`}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 left-40 w-96 h-96 bg-teal-300 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>

            {/* Decorative Elements */}
            <Sparkles className="absolute top-20 right-40 w-12 h-12 text-teal-400 opacity-40 animate-float" />
            <Heart className="absolute bottom-32 left-32 w-10 h-10 text-cyan-400 opacity-30 animate-float-delayed" />

            <div className="relative h-full flex items-center px-12 py-8">
              <div className="flex-1 animate-slide-in-left">
                <div className="inline-block bg-white bg-opacity-60 backdrop-blur-sm px-4 py-2 rounded-full text-teal-700 text-sm font-bold mb-4 shadow-lg animate-bounce-slow">
                  ✨ Premium Wellness
                </div>
                <h2 className="text-5xl font-bold text-gray-900 mb-4">
                  Health &{" "}
                  <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Wellness
                  </span>
                </h2>
                <p className="text-gray-700 text-xl mb-6 max-w-xl">
                  Your journey to complete well-being starts here with our
                  curated wellness solutions
                </p>
                <button
                  className={`bg-gradient-to-r ${banner.accentColor} text-white font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-teal-500/50 transition transform hover:scale-105`}
                >
                  Explore Wellness Range
                </button>
              </div>

              <div className="hidden lg:flex items-center animate-slide-in-right">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                  <div className="relative w-96 h-80 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 rounded-3xl overflow-hidden shadow-2xl transform hover:rotate-3 transition duration-500">
                    <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm"></div>
                    <div className="relative h-full flex items-center justify-center">
                      <div className="text-center animate-float">
                        <div className="text-9xl mb-4">🧘‍♀️</div>
                        <div className="text-white text-2xl font-bold">
                          UR Life
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "diabetes":
        return (
          <div
            className={`relative h-full bg-gradient-to-br ${banner.gradient} rounded-3xl overflow-hidden`}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 right-20 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-10 left-40 w-96 h-96 bg-indigo-300 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* Medical Icons */}
            <Droplets className="absolute top-24 right-32 w-10 h-10 text-blue-400 opacity-40 animate-float" />
            <Activity className="absolute bottom-24 left-24 w-12 h-12 text-indigo-400 opacity-30 animate-float-delayed" />

            <div className="relative h-full px-12 py-8">
              <div className="animate-slide-in-left mb-8">
                <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg mb-4">
                  🩺 Complete Diabetes Care
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  OneTouch Diabetes Management
                </h2>
                <p className="text-gray-700 text-lg max-w-2xl">
                  Professional glucose monitoring solutions for better diabetes
                  management
                </p>
              </div>

              {/* Product Cards */}
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {[
                  {
                    name: "OneTouch Select Plus",
                    price: "₹817",
                    discount: "24% off",
                    emoji: "📱",
                  },
                  {
                    name: "OneTouch Test Strips",
                    price: "₹1054",
                    discount: "5% off",
                    emoji: "🧪",
                  },
                  {
                    name: "OneTouch Verio Strips",
                    price: "₹1108.7",
                    discount: "8% off",
                    emoji: "📊",
                  },
                  {
                    name: "OneTouch Delica Plus",
                    price: "₹164",
                    discount: "-",
                    emoji: "💉",
                  },
                ].map((product, idx) => (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={`${idx * 100}`}
                    key={product.name}
                    className="flex-shrink-0 w-56 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 animate-fade-in border-2 border-blue-100"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="p-5">
                      <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-6xl">{product.emoji}</span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h4>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-xl font-bold text-gray-900">
                          {product.price}
                        </span>
                        {product.discount !== "-" && (
                          <span className="text-xs text-green-600 font-semibold">
                            {product.discount}
                          </span>
                        )}
                      </div>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition transform hover:scale-105">
                        ADD
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "skincare":
        return (
          <div
            className={`relative h-full bg-gradient-to-br ${banner.gradient} rounded-3xl overflow-hidden`}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 left-20 w-80 h-80 bg-pink-300 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-0 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1.2s" }}
              ></div>
            </div>

            {/* Decorative */}
            <Sparkles className="absolute top-16 right-40 w-10 h-10 text-pink-400 opacity-40 animate-float" />
            <Heart className="absolute bottom-28 left-40 w-10 h-10 text-purple-400 opacity-30 animate-float-delayed" />

            <div className="relative h-full px-12 py-8">
              <div className="animate-slide-in-left mb-8">
                <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg mb-4">
                  ✨ Dermatologist Recommended
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  Best of Skincare by{" "}
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    CeraVe
                  </span>
                </h2>
                <p className="text-gray-700 text-lg max-w-2xl">
                  Premium skincare solutions developed with dermatologists for
                  healthy, radiant skin
                </p>
              </div>

              {/* Product Cards */}
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {[
                  {
                    name: "CeraVe Moisturising Lotion",
                    price: "₹1400",
                    discount: "20% off",
                    emoji: "🧴",
                  },
                  {
                    name: "CeraVe Foaming Cleanser",
                    price: "₹1369.5",
                    discount: "10% off",
                    emoji: "🧼",
                  },
                  {
                    name: "CeraVe Moisturising Cream",
                    price: "₹1520",
                    discount: "25% off",
                    emoji: "💆",
                  },
                  {
                    name: "CeraVe Hydrating Cleanser",
                    price: "₹657",
                    discount: "10% off",
                    emoji: "✨",
                  },
                ].map((product, idx) => (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={`${idx * 100}`}
                    key={product.name}
                    className="flex-shrink-0 w-56 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 animate-fade-in border-2 border-pink-100"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="p-5">
                      <div className="w-full h-32 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-6xl">{product.emoji}</span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h4>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-xl font-bold text-gray-900">
                          {product.price}
                        </span>
                        <span className="text-xs text-green-600 font-semibold">
                          {product.discount}
                        </span>
                      </div>
                      <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 rounded-xl hover:from-pink-600 hover:to-purple-700 transition transform hover:scale-105">
                        ADD
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative">
        {/* Carousel Container */}
        <div className="relative h-96 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
          {banners.map((banner, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              key={banner.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              {renderBanner(banner)}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 backdrop-blur-sm hover:bg-opacity-100 rounded-full p-3 shadow-xl hover:shadow-2xl transition transform hover:scale-110 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 backdrop-blur-sm hover:bg-opacity-100 rounded-full p-3 shadow-xl hover:shadow-2xl transition transform hover:scale-110 z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-6">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-12 h-3 bg-gradient-to-r from-blue-600 to-purple-600"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
