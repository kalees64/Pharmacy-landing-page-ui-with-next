import React from "react";
import {
  ChevronRight,
  Droplets,
  Activity,
  TestTube,
  Heart,
  Plus,
  MessageCircle,
  Stethoscope,
  Baby,
  ShoppingBag,
} from "lucide-react";

export default function PharmacyBrandsAndTestsComponent() {
  const brands = [
    { name: "NIVEA", icon: "❄️", color: "bg-blue-900" },
    { name: "AVEENO", icon: "🌾", color: "bg-gray-100" },
    { name: "VOLINI", icon: "💪", color: "bg-gray-100" },
    { name: "REVITAL", icon: "⚡", color: "bg-red-600" },
    { name: "MAMYPOKO", icon: "👶", color: "bg-blue-100" },
    { name: "FAST&UP", icon: "⚡", color: "bg-blue-100" },
  ];

  const labTests = [
    {
      icon: Droplets,
      name: "CBC Test (Complete Blood Count)",
      included: "25 Tests Included",
      color: "text-red-500",
    },
    {
      icon: Activity,
      name: "HbA1c Test (Hemoglobin A1c)",
      included: "5 Tests Included",
      color: "text-orange-500",
    },
    {
      icon: TestTube,
      name: "FBS (Fasting Blood Sugar) Test",
      included: "1 Tests Included",
      color: "text-yellow-500",
    },
    {
      icon: Heart,
      name: "Lipid Profile Test",
      included: "8 Tests Included",
      color: "text-pink-500",
    },
  ];

  return (
    <div className="bg-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Shop By Brand Section */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Shop By Brand
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
            {brands.map((brand, idx) => (
              <div
                data-aos="zoom-in-right"
                data-aos-delay={`${idx * 100}`}
                key={brand.name}
                className="bg-white rounded-xl border-2 border-gray-200 hover:border-teal-500 hover:shadow-lg transition cursor-pointer group"
              >
                <div className="p-3 sm:p-4 flex flex-col items-center">
                  <div
                    className={`${brand.color} w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-2 sm:mb-4 text-3xl sm:text-4xl group-hover:scale-110 transition`}
                  >
                    {brand.icon}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800 text-center line-clamp-2">
                    {brand.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ask Apollo Banner */}
        <div
          className="mb-8 sm:mb-12 relative bg-gradient-to-br from-orange-600 via-red-500 to-pink-600 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group"
          data-aos="zoom-out-up"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-10 right-20 w-40 h-40 bg-yellow-300 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 right-10 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          {/* Floating Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Plus className="absolute top-12 right-32 w-8 sm:w-12 h-8 sm:h-12 text-white opacity-30 animate-float" />
            <Heart className="absolute bottom-16 left-24 w-8 sm:w-10 h-8 sm:h-10 text-white opacity-25 animate-float-delayed" />
            <MessageCircle
              className="absolute top-32 right-64 w-6 sm:w-8 h-6 sm:h-8 text-white opacity-20 animate-float"
              style={{ animationDelay: "1.5s" }}
            />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 gap-6">
            <div className="flex-1 z-10">
              <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-orange-400 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 animate-fade-in">
                ✨ AI-Powered Health Assistant
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 animate-slide-up">
                Ask anything about your health.
              </h2>
              <p
                className="text-white text-sm sm:text-lg mb-6 sm:mb-8 opacity-90 max-w-xl animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                Get trusted answers directly from Apollo's AI assistant.
                Available 24/7 for your health queries.
              </p>
              <button
                className="bg-white hover:bg-gray-100 text-orange-600 font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-full transition transform hover:scale-105 hover:shadow-2xl flex items-center gap-2 sm:gap-3 group animate-slide-up text-sm sm:text-base"
                style={{ animationDelay: "0.4s" }}
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition" />
                <span>Ask Apollo</span>
                <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
                  BETA
                </span>
              </button>
            </div>

            <div className="hidden lg:flex items-center justify-center relative">
              {/* Doctor Avatar with Glow */}
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-pink-400 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <div className="relative bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-8 border-2 border-white border-opacity-30">
                  <div className="w-48 h-48 bg-gradient-to-br from-orange-300 to-pink-400 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition duration-500">
                    <Stethoscope className="w-24 h-24 text-white animate-pulse" />
                  </div>
                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-2xl animate-bounce">
                    <Plus className="w-6 h-6 text-orange-600" />
                  </div>
                  <div
                    className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-2xl animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pregnancy Journey Banner */}
        <div
          className="mb-8 sm:mb-12 relative bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-orange-200 group shadow-xl hover:shadow-2xl transition duration-500"
          data-aos="zoom-out-up"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-pink-300 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-300 to-transparent rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Heart className="absolute top-8 right-16 w-6 sm:w-8 h-6 sm:h-8 text-pink-400 opacity-40 animate-float" />
            <Baby className="absolute bottom-12 left-20 w-8 sm:w-10 h-8 sm:h-10 text-orange-400 opacity-30 animate-float-delayed" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 gap-6">
            <div className="flex-1 z-10">
              <div className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 animate-fade-in shadow-lg">
                🎯 Complete Pregnancy Care
              </div>
              <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 animate-slide-up">
                <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Be in charge
                </span>{" "}
                from planning
                <br />
                your pregnancy to parenting.
              </h3>
              <p
                className="text-gray-600 text-sm sm:text-lg max-w-xl animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                Personalized guidance for every stage of your journey
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-4 xl:gap-8">
              {/* Step 1 */}
              <div
                className="text-center animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="relative mb-4 group/step cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-orange-400 rounded-3xl blur-xl opacity-50 group-hover/step:opacity-75 transition"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-white to-pink-50 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover/step:scale-110 group-hover/step:rotate-6 transition duration-300 border-2 border-pink-200">
                    <span className="text-5xl animate-bounce">🤰</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    1
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-semibold">
                  Open
                  <br />
                  Midwives
                </div>
              </div>

              <div className="text-orange-400 animate-pulse">
                <ChevronRight className="w-6 h-6 xl:w-8 xl:h-8" />
              </div>

              {/* Step 2 */}
              <div
                className="text-center animate-slide-up"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="relative mb-4 group/step cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl blur-xl opacity-50 group-hover/step:opacity-75 transition"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-white to-orange-50 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover/step:scale-110 group-hover/step:rotate-6 transition duration-300 border-2 border-orange-200">
                    <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 animate-pulse" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    2
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-semibold">
                  Choose
                  <br />
                  your stage
                </div>
              </div>

              <div
                className="text-orange-400 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              >
                <ChevronRight className="w-6 h-6 xl:w-8 xl:h-8" />
              </div>

              {/* Step 3 */}
              <div
                className="text-center animate-slide-up"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="relative mb-4 group/step cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-green-400 rounded-3xl blur-xl opacity-50 group-hover/step:opacity-75 transition"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-white to-yellow-50 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover/step:scale-110 group-hover/step:rotate-6 transition duration-300 border-2 border-yellow-200">
                    <Baby className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-600 animate-bounce" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    3
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-semibold">
                  Your custom
                  <br />
                  guide is ready
                </div>
              </div>

              <button
                className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:from-pink-600 hover:via-orange-600 hover:to-yellow-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition transform hover:scale-110 shadow-2xl ml-4 xl:ml-6 animate-slide-up hover:shadow-pink-500/50 flex items-center gap-2 text-sm sm:text-base"
                style={{ animationDelay: "0.9s" }}
              >
                <span>Begin Your Journey</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
              </button>
            </div>
          </div>
        </div>

        {/* Popular Lab Tests Section */}
        <div>
          <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Popular Lab Tests
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {labTests.map((test, idx) => (
              <div
                data-aos="fade-right"
                data-aos-delay={`${idx * 100}`}
                key={test.name}
                className="bg-white rounded-xl border-2 border-gray-200 hover:border-teal-500 hover:shadow-lg transition cursor-pointer group p-4 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`${test.color} bg-opacity-10 p-3 rounded-lg group-hover:scale-110 transition flex-shrink-0`}
                  >
                    <test.icon
                      className={`w-6 h-6 sm:w-8 sm:h-8 ${test.color}`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 line-clamp-2">
                      {test.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {test.included}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-teal-600 transition flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
