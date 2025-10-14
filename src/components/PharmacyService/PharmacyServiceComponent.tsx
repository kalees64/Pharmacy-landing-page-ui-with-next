import React from "react";
import {
  FaStore,
  FaClipboardList,
  FaUserMd,
  FaShieldAlt,
  FaFlask,
  FaSyringe,
  FaHeartbeat,
  FaTooth,
  FaLungs,
  FaVenus,
  FaWalking,
  FaShieldVirus,
} from "react-icons/fa";

import { GiStomach, GiHealthNormal } from "react-icons/gi";
import { ChevronRight } from "lucide-react";

export default function PharmacyServiceComponent() {
  const quickServices = [
    {
      icon: <FaStore className="w-8 h-8 text-teal-600" />,
      title: "Pharmacy Near Me",
      subtitle: "FIND STORE",
      bgColor: "bg-gray-50",
    },
    {
      icon: <FaClipboardList className="w-8 h-8 text-teal-600" />,
      title: "Get 20%* off on Medicines",
      subtitle: "UPLOAD NOW",
      bgColor: "bg-blue-50",
    },
    {
      icon: <FaUserMd className="w-8 h-8 text-teal-600" />,
      title: "Doctor Appointment",
      subtitle: "BOOK NOW",
      bgColor: "bg-purple-50",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-orange-600" />,
      title: "Health Insurance",
      subtitle: "EXPLORE PLANS",
      badge: "New",
      bgColor: "bg-orange-50",
    },
    {
      icon: <FaFlask className="w-8 h-8 text-purple-600" />,
      title: "Lab Tests",
      subtitle: "AT HOME",
      bgColor: "bg-purple-50",
    },
  ];

  const healthConditions = [
    {
      icon: <FaSyringe className="w-10 h-10 text-orange-500" />,
      title: "Diabetes Care",
      bgColor: "bg-orange-50",
    },
    {
      icon: <FaHeartbeat className="w-10 h-10 text-red-500" />,
      title: "Cardiac Care",
      bgColor: "bg-red-50",
    },
    {
      icon: <GiStomach className="w-10 h-10 text-yellow-600" />,
      title: "Stomach Care",
      bgColor: "bg-yellow-50",
    },
    {
      icon: <GiHealthNormal className="w-10 h-10 text-blue-500" />,
      title: "Pain Relief",
      bgColor: "bg-blue-50",
    },
    {
      icon: <GiStomach className="w-10 h-10 text-amber-600" />,
      title: "Liver Care",
      bgColor: "bg-amber-50",
    },
    {
      icon: <FaTooth className="w-10 h-10 text-cyan-600" />,
      title: "Oral Care",
      bgColor: "bg-cyan-50",
    },
    {
      icon: <FaLungs className="w-10 h-10 text-teal-600" />,
      title: "Respiratory",
      bgColor: "bg-teal-50",
    },
    {
      icon: <FaVenus className="w-10 h-10 text-pink-600" />,
      title: "Sexual Health",
      bgColor: "bg-pink-50",
    },
    {
      icon: <FaWalking className="w-10 h-10 text-indigo-600" />,
      title: "Elderly Care",
      bgColor: "bg-indigo-50",
    },
    {
      icon: <FaShieldVirus className="w-10 h-10 text-green-600" />,
      title: "Cold & Immunity",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Quick Services Section */}
      <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {quickServices.map((service, idx) => (
            <div
              data-aos="fade-left"
              data-aos-delay={`${idx * 100}`}
              key={service.title}
              className={`${service.bgColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-teal-200 relative`}
            >
              {service.badge && (
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {service.badge}
                </span>
              )}
              <div className="flex flex-col items-start space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-base mb-1 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-purple-600 uppercase tracking-wide">
                    {service.subtitle}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Browse by Health Conditions Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Browse by Health Conditions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {healthConditions.map((condition, idx) => (
            <div
              data-aos="fade-down"
              data-aos-delay={`${idx * 100}`}
              key={condition.title}
              className={`${condition.bgColor} rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-teal-300 hover:-translate-y-1`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-white p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                  {condition.icon}
                </div>
                <h3 className="font-semibold text-gray-800 text-sm group-hover:text-teal-700 transition-colors">
                  {condition.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
