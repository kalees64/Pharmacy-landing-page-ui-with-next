"use client";
import React, { useState } from "react";
import {
  ShoppingCart,
  User,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Settings,
} from "lucide-react";

interface SubMenuCategory {
  title: string;
  items: string[];
}

interface SubMenu {
  categories: SubMenuCategory[];
}

export default function PharmacyHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  let timeoutId: NodeJS.Timeout;

  const menuItems = [
    { name: "Apollo Products", key: "apollo" },
    { name: "Baby Care", key: "babycare" },
    { name: "Nutritional Drinks & Supplements", key: "nutritional" },
    { name: "Women Care", key: "women" },
    { name: "Personal Care", key: "personal" },
    { name: "Ayurveda", key: "ayurveda" },
    { name: "Health Devices", key: "healthdevices" },
    { name: "Home Essentials", key: "homeessentials" },
    // { name: "Health Condition", key: "healthcondition" },
  ];

  const subMenus: Record<string, SubMenu> = {
    apollo: {
      categories: [
        {
          title: "Featured Products",
          items: ["Product 1", "Product 2", "Product 3"],
        },
        { title: "New Arrivals", items: ["Product 4", "Product 5"] },
      ],
    },
    babycare: {
      categories: [
        {
          title: "Baby Food",
          items: ["Infant Formula", "Cereals", "Purees", "Snacks"],
        },
        {
          title: "Diapers & Wipes",
          items: ["Diapers", "Baby Wipes", "Diaper Cream", "Changing Mats"],
        },
        {
          title: "Baby Care",
          items: ["Baby Oil", "Baby Powder", "Shampoo", "Soap", "Lotion"],
        },
      ],
    },
    nutritional: {
      categories: [
        {
          title: "Nutritional Drinks",
          items: [
            "Adult Nutrition",
            "Kids Nutrition",
            "Meal Replacements",
            "Protein Shakes",
          ],
        },
        {
          title: "Sports Nutrition",
          items: ["Protein", "Pre-Workout", "BCAA", "Creatine", "Mass Gainers"],
        },
        {
          title: "Vitamins & Supplements",
          items: [
            "Vitamin C",
            "Vitamin D",
            "Multivitamins",
            "Omega 3",
            "Probiotics",
          ],
        },
        {
          title: "Minerals",
          items: ["Calcium", "Iron", "Magnesium", "Zinc", "Potassium"],
        },
        {
          title: "Omega & Fish Oil",
          items: ["Fish Oil", "Omega 3-6-9", "Krill Oil", "Flaxseed Oil"],
        },
      ],
    },
    women: {
      categories: [
        {
          title: "Feminine Care",
          items: ["Sanitary Pads", "Tampons", "Panty Liners"],
        },
        {
          title: "Personal Hygiene",
          items: ["Sanitizers", "Soaps", "Shower Gels"],
        },
        { title: "Health & Wellness", items: ["Supplements", "Skincare"] },
      ],
    },
    personal: {
      categories: [
        {
          title: "Oral Care",
          items: ["Toothpaste", "Mouthwash", "Toothbrushes"],
        },
        { title: "Hair Care", items: ["Shampoo", "Conditioner", "Hair Oil"] },
        { title: "Skin Care", items: ["Face Wash", "Moisturizers", "Lotions"] },
      ],
    },
    ayurveda: {
      categories: [
        {
          title: "Herbal Supplements",
          items: ["Ashwagandha", "Tulsi", "Triphala"],
        },
        { title: "Oils & Balms", items: ["Massage Oil", "Pain Balm"] },
        { title: "Skin & Hair", items: ["Herbal Shampoo", "Face Packs"] },
      ],
    },
    healthdevices: {
      categories: [
        {
          title: "Diagnostic Devices",
          items: ["Thermometers", "Blood Pressure Monitors", "Glucometers"],
        },
        { title: "Fitness Devices", items: ["Smart Watches", "Step Counters"] },
        { title: "Home Care", items: ["Nebulizers", "Massagers"] },
      ],
    },
    homeessentials: {
      categories: [
        {
          title: "Household",
          items: ["Cleaning Supplies", "Detergents", "Soaps"],
        },
        {
          title: "Kitchen",
          items: ["Cookware", "Storage Containers", "Utensils"],
        },
        { title: "Personal Care", items: ["Towels", "Soaps", "Sanitizers"] },
      ],
    },
    healthcondition: {
      categories: [
        {
          title: "Cold & Flu",
          items: ["Cough Syrups", "Paracetamol", "Vapor Rubs"],
        },
        {
          title: "Digestive Health",
          items: ["Antacids", "Probiotics", "Laxatives"],
        },
        {
          title: "Pain Relief",
          items: ["Pain Killers", "Muscle Rubs", "Spray"],
        },
      ],
    },
  };

  return (
    <header
      className="w-full bg-white shadow-md sticky top-0 z-50 relative"
      data-aos="fade-down"
    >
      {/* Layer 1: Top Bar */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-white rounded-lg p-1.5">
              <svg
                className="w-8 h-8 text-teal-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 14h2v2h-2v-2zm0-8h2v6h-2V8z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold">MediCare Plus</h1>
              <p className="text-xs opacity-90">Your Health Partner</p>
            </div>

            {/* Location */}
            <div className="hidden md:flex items-center space-x-2 cursor-pointer hover:bg-teal-700 px-3 py-2 rounded-lg transition-colors">
              <MapPin className="w-5 h-5" />
              <div>
                <p className="text-xs opacity-90">Delivery Address</p>
                <p className="text-sm font-semibold flex items-center">
                  Select Address <ChevronDown className="w-4 h-4 ml-1" />
                </p>
              </div>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="relative hover:bg-teal-700 p-2 rounded-lg transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                2
              </span>
            </button>
            <button className="hidden md:flex items-center space-x-2 bg-white text-teal-600 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
              <User className="w-5 h-5" />
              <span>Login</span>
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Layer 2: Main Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className=" w-full mx-auto px-4 flex justify-center">
          <ul className="hidden md:flex items-center space-x-1">
            {[
              { name: "Buy Medicines", badge: null },
              { name: "Find Doctors", badge: null },
              { name: "Lab Tests", badge: null },
              { name: "Circle Membership", badge: null },
              { name: "Health Records", badge: null },
              { name: "Credit Card", badge: "New" },
              { name: "Buy Insurance", badge: "New" },
            ].map((item, idx) => (
              <li key={item.name}>
                <button className="relative px-4 py-4 text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-colors font-medium text-sm whitespace-nowrap cursor-pointer">
                  {item.name}
                  {item.badge && (
                    <span className="absolute top-0.5 right-[-5px] bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Layer 3: Sub Navigation */}
      <div className="bg-teal-700 text-white">
        <div className="w-full mx-auto px-4">
          <div className="hidden md:flex items-center justify-center space-x-1 overflow-x-auto">
            {menuItems.map((item) => (
              <div key={item.key} className="">
                <button
                  onMouseEnter={() => {
                    clearTimeout(timeoutId);
                    setActiveDropdown(item.key);
                  }}
                  onMouseLeave={() => {
                    timeoutId = setTimeout(() => setActiveDropdown(null), 200);
                  }}
                  aria-haspopup={!!subMenus[item.key]}
                  aria-expanded={activeDropdown === item.key}
                  className="px-4 py-3 hover:bg-teal-600 transition-colors text-sm whitespace-nowrap flex items-center"
                >
                  {item.name}
                  {subMenus[item.key] && (
                    <ChevronDown className="w-4 h-4 ml-1" />
                  )}
                </button>

                {/* Dropdown Mega Menu */}
                {subMenus[item.key] && (
                  <div
                    onMouseEnter={() => {
                      clearTimeout(timeoutId);
                      setActiveDropdown(item.key);
                    }}
                    onMouseLeave={() => {
                      timeoutId = setTimeout(
                        () => setActiveDropdown(null),
                        200
                      );
                    }}
                    className={`absolute top-full left-0 bg-white shadow-2xl rounded-b-lg min-w-[800px] p-6 text-gray-800 transition-all duration-200 transform ${
                      activeDropdown === item.key
                        ? "opacity-100 translate-y-0 z-50"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="grid grid-cols-5 gap-6">
                      {subMenus[item.key].categories.map((category, cIdx) => (
                        <div key={cIdx}>
                          <h3 className="font-bold text-teal-700 mb-3 pb-2 border-b border-gray-200">
                            {category.title}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((subItem, sIdx) => (
                              <li key={sIdx}>
                                <a
                                  href="#"
                                  className="text-sm text-gray-600 hover:text-teal-600 hover:underline"
                                >
                                  {subItem}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 max-h-screen overflow-y-auto">
          <div className="p-4 space-y-2">
            <div className="flex items-center space-x-2 p-3 bg-teal-50 rounded-lg mb-4">
              <MapPin className="w-5 h-5 text-teal-600" />
              <div>
                <p className="text-xs text-gray-600">Delivery Address</p>
                <p className="text-sm font-semibold text-teal-600">
                  Select Address
                </p>
              </div>
            </div>

            <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
              <User className="w-5 h-5 text-gray-600" />
              <span className="font-medium">Login / Register</span>
            </button>

            {[
              "Buy Medicines",
              "Find Doctors",
              "Lab Tests",
              "Circle Membership",
              "Health Records",
              "Credit Card",
              "Buy Insurance",
            ].map((item, idx) => (
              <button
                key={item}
                className="w-full text-left p-3 hover:bg-gray-50 rounded-lg font-medium text-gray-700"
              >
                {item}
              </button>
            ))}

            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="font-bold text-gray-700 mb-2 px-3">Categories</h3>
              {[
                "Apollo Products",
                "Baby Care",
                "Nutritional Drinks & Supplements",
                "Women Care",
                "Personal Care",
                "Ayurveda",
                "Health Devices",
                "Home Essentials",
                "Health Condition",
              ].map((item, idx) => (
                <button
                  key={item}
                  className="w-full text-left p-3 hover:bg-gray-50 rounded-lg text-sm text-gray-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
