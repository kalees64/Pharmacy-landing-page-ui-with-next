import "./PharmacyFooterComponent.css";
import React from "react";
import { ChevronRight, Smartphone } from "lucide-react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";

export default function PharmacyFooter() {
  const footerSections = [
    {
      title: "MediCare Plus",
      links: [
        "About Us",
        "Blog",
        "Careers",
        "Contact Us",
        "Delivery",
        "Franchise",
        "Health Insurance",
        "Healthcare Professionals",
        "Investor Relations",
        "Medicine and Consumables",
        "Privacy Policy",
        "Return & Refunds",
        "Terms and Conditions",
        "Patient Clinical Resources",
        "Editorial Policy",
        "Corporate Partnerships",
        "GSTIN: 27AADCA1234A1Z5",
        "ISO 27001:2013 - 8596",
        "NABH: 2019-21 - 9982",
      ],
    },
    {
      title: "Services",
      links: [
        "Online Doctor Consultation",
        "Apollo Pro Health Program",
        "My Health App",
        "Consult Physicians",
        "Consult Cardiologists",
        "Consult Dermatologists",
        "Consult Gynecologists",
        "Consult Psychiatrists",
        "Consult Gastroenterologists",
        "Consult ENT Specialists",
        "Consult Mental Health",
        "Consult Sexologists",
        "Apollo Health Services",
        "Apollo Premium Checkups",
        "International Patients Login",
        "Apollo Telemed - Tele Consultations",
        "Apollo 360 Acute Care Clinic",
        "Apollo 360 Care Programs",
        "Weight Management",
      ],
    },
    {
      title: "Lab Tests",
      links: [
        "All Tests by Alphabet",
        "Book Lab Tests at Home",
        "Search By CITY, DPP, CPT & LDT",
        "Hemogram Test",
        "Liver Profile Test",
        "Health Check Up By Health",
        "D-Dimer Test",
        "Urine Culture Test",
        "Complete Blood Count (CBC) Test",
        "Widal Test",
        "Liver Function Test (LFT) Pack",
      ],
    },
    {
      title: "Categories",
      links: [
        "View All Categories",
        "View All Products",
        "View All Brands",
        "View 3D Medicine",
        "Health Food",
        "Health Devices",
        "Diabetes Care",
        "Baby Care",
        "Skin Care",
        "Mom & Baby",
        "Beauty Products",
        "Sexual Wellness",
        "Covid Essentials",
        "Winter Care",
        "Personal Grooming Kit",
        "Homeopathic Products",
      ],
    },
    {
      title: "Top Values",
      links: [
        "Preventive Health &",
        "Diagnostics",
        "Pregnancy Store 2",
        "Pregnancy Store 3",
        "Pregnancy Store 4",
        "Pregnancy Store 6",
        "Pregnancy Store 8",
        "Pregnancy Store 9",
        "Pregnancy Store 11",
        "Pregnancy Week 1",
        "Pregnancy Week 2",
        "Pregnancy Week 3",
        "Pregnancy Week 4",
      ],
    },
    {
      title: "Most Searched",
      links: [
        "Vitamins",
        "Nutrition",
        "Hair Care",
        "Body Massager",
        "General Wellness",
        "Elderly Care",
        "Diabetes Care",
        "Blackberry & Emeralis",
        "Women Care",
        "Pregnancy",
        "Cardiac Care",
        "Ayurveda",
        "Diabetes Education",
        "Pregnancy & New Baby",
        "Health Library",
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-blue-50 border-t-4 border-blue-600">
      {/* Show More Button */}
      <div className="bg-white border-b border-gray-200" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition">
            Show more
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {footerSections.map((section, idx) => (
            <div
              key={section.title}
              className="animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li
                    key={link}
                    data-aos="fade-up"
                    data-aos-delay={`${idx * 100}`}
                  >
                    <a
                      href="/"
                      className="text-sm text-gray-600 hover:text-blue-600 hover:underline transition duration-200 block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white border-t border-gray-200" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo Section */}
            <div
              className="flex justify-center md:justify-start"
              data-aos="fade-left"
            >
              <div className="group cursor-pointer">
                <div className="flex items-center gap-3 transform hover:scale-105 transition">
                  <div className="bg-gradient-to-br from-blue-600 to-green-600 p-3 rounded-2xl shadow-lg">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                      MediCare Plus
                    </div>
                    <div className="text-xs text-gray-500">
                      Healthcare Simplified
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* App Download Section */}
            <div className="text-center" data-aos="fade-up">
              <h4 className="text-sm font-bold text-gray-900 mb-3">
                Get MediCare Plus App on
              </h4>
              <div className="flex gap-3 justify-center">
                <a href="/" className="transform hover:scale-105 transition">
                  <div className="bg-black rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-800 transition">
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">GET IT ON</div>
                      <div className="text-sm font-semibold text-white">
                        Google Play
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/" className="transform hover:scale-105 transition">
                  <div className="bg-black rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-800 transition">
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">
                        Download on the
                      </div>
                      <div className="text-sm font-semibold text-white">
                        App Store
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="text-center md:text-right">
              <h4 className="text-sm font-bold text-gray-900 mb-3">
                Find us on
              </h4>
              <div className="flex gap-3 justify-center md:justify-end">
                <a
                  href="/"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition transform hover:scale-110 shadow-lg"
                  data-aos="zoom-in-right"
                >
                  <FaFacebook className="w-5 h-5 text-white" fill="white" />
                </a>
                <a
                  href="/"
                  className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition transform hover:scale-110 shadow-lg"
                  data-aos="zoom-in-right"
                >
                  <IoLogoTwitter className="w-5 h-5 text-white" fill="white" />
                </a>
                <a
                  href="/"
                  className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition transform hover:scale-110 shadow-lg"
                  data-aos="zoom-in-right"
                >
                  <FaLinkedin className="w-5 h-5 text-white" fill="white" />
                </a>
                <a
                  href="/"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition transform hover:scale-110 shadow-lg"
                  data-aos="zoom-in-right"
                >
                  <FaYoutube className="w-5 h-5 text-white" fill="white" />
                </a>
                <a
                  href="/"
                  className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center hover:opacity-90 transition transform hover:scale-110 shadow-lg"
                  data-aos="zoom-in-right"
                >
                  <AiOutlineInstagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div
            className="mt-8 pt-6 border-t border-gray-200 text-center"
            data-aos="fade-up"
          >
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} MediCare Plus Pharmacy. All rights
              reserved. |
              <a href="/" className="text-blue-600 hover:underline ml-1">
                Privacy Policy
              </a>{" "}
              |
              <a href="/" className="text-blue-600 hover:underline ml-1">
                Terms of Service
              </a>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              The content provided on this website is for informational purposes
              only and is not intended to be a substitute for professional
              medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
