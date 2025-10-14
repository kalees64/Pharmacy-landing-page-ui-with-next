"use client";
import "./PharmacyFaqAndContactComponent.css";
import React, { useState } from "react";
import {
  ShoppingCart,
  Truck,
  Shield,
  Award,
  Clock,
  MapPin,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MessageCircle,
  MapPinned,
  Send,
  Heart,
  Star,
  Package,
  Users,
} from "lucide-react";
import { TfiEmail } from "react-icons/tfi";

export default function PharmacyFaqAndContactComponent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const features = [
    {
      icon: Truck,
      title: "Super-Fast Delivery",
      description:
        "Get your medicines delivered in as fast as 1 day in select cities. No more waiting!",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Shield,
      title: "100% Genuine Medicines",
      description:
        "Every product is thoroughly inspected and verified for authenticity and quality.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Award,
      title: "Trusted for 39+ Years",
      description:
        "India's largest pharmacy chain with over 5,600 stores nationwide.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Star,
      title: "Attractive Deals",
      description:
        "Exclusive discounts and offers on medicines and healthcare products.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Browse Products",
      description:
        "Explore our wide variety of medicines and healthcare products",
      icon: Package,
    },
    {
      number: "02",
      title: "Add to Cart",
      description: "Select your products and add them to cart",
      icon: ShoppingCart,
    },
    {
      number: "03",
      title: "Complete Payment",
      description: "Secure checkout with multiple payment options",
      icon: CheckCircle,
    },
    {
      number: "04",
      title: "Doorstep Delivery",
      description: "Sit back and relax while we deliver to you",
      icon: Truck,
    },
  ];

  const stats = [
    { number: "5,600+", label: "Pharmacy Stores", icon: MapPin },
    { number: "39+", label: "Years of Trust", icon: Award },
    { number: "50,000+", label: "Products Available", icon: Package },
    { number: "5M+", label: "Happy Customers", icon: Users },
  ];

  const faqs = [
    {
      question: "How fast can I get my medicines delivered?",
      answer:
        "We offer super-fast delivery! In select cities, your medicines can be delivered in as little as 1 day. For urgent orders, same-day delivery is available in major metropolitan areas. Our extensive network of 5,600+ stores ensures quick dispatch and delivery.",
    },
    {
      question: "Are all medicines sold on your platform genuine?",
      answer:
        "Absolutely! We guarantee 100% genuine medicines. All products are procured from verified sources and thoroughly inspected for authenticity and quality. Every medicine complies with Central Drugs Standard Control Organization (CDSCO) regulations.",
    },
    {
      question: "What are Health Credits and how can I earn them?",
      answer:
        "Health Credits are reward points you earn on every purchase (excluding discounted products). These credits can be redeemed on your next purchase, giving you additional savings. You earn credits on both medicines and other healthcare products.",
    },
    {
      question: "Do you offer doctor consultation services?",
      answer:
        "Yes! We offer online doctor consultations across 70+ specialties. You can also use our symptom checker, book diagnostic tests, and digitize your health records - all on our platform.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major payment methods including credit/debit cards, UPI, net banking, and digital wallets. We also offer Cash on Delivery (COD) for select locations.",
    },
    {
      question: "Can I return medicines if I ordered by mistake?",
      answer:
        "Due to the nature of pharmaceutical products, returns are subject to strict guidelines. However, if you receive damaged or wrong products, please contact our customer support within 24 hours for immediate assistance.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-white">
      {/* Hero Content Section */}
      <section
        className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              🏥 India's Most Trusted Online Pharmacy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Effortless Online Medicine Orders
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ordering medicines online doesn't have to be complicated. At
              MedEase Pharmacy, we make healthcare accessible, affordable, and
              absolutely hassle-free.
            </p>
          </div>

          {/* How It Works Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="relative group animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 transform hover:-translate-y-2">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <step.icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-300 to-green-300"></div>
                )}
              </div>
            ))}
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`${feature.bgColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in border border-gray-200`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-3xl p-10 shadow-2xl animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="transform hover:scale-110 transition-transform"
                >
                  <stat.icon className="w-12 h-12 mx-auto mb-3 opacity-90" />
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose MedEase Pharmacy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 39 years, we've been providing genuine medicines
              round-the-clock through 5,600+ pharmacies across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition group">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    100% Genuine Products
                  </h3>
                  <p className="text-gray-600">
                    Every medicine is inspected thoroughly to ensure
                    authenticity. We comply with CDSCO regulations and source
                    only from verified manufacturers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition group">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Lightning-Fast Delivery
                  </h3>
                  <p className="text-gray-600">
                    Need medicines urgently? We deliver in as fast as 1 day. Our
                    vast network ensures your order reaches you on time, every
                    time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition group">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Health Credits & Rewards
                  </h3>
                  <p className="text-gray-600">
                    Earn Health Credits on every purchase and use them for
                    future orders. Plus, enjoy exclusive deals and discounts
                    regularly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition group">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Complete Healthcare Platform
                  </h3>
                  <p className="text-gray-600">
                    Beyond medicines, get doctor consultations, diagnostic
                    tests, symptom checker, and digital health records - all in
                    one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-16 bg-gradient-to-br from-blue-50 to-purple-50"
        data-aos="flip-up"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers!
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                data-aos="zoom-out"
                data-aos-delay={`${idx * 100}`}
                key={faq.question}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden animate-fade-in"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  >
                    {openFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-white" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === idx ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-8 pb-6 pt-2 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              We're here to help! Reach out to us anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Cards */}
            <div
              className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: "0s" }}
              data-aos="zoom-in-left"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Call Us</h3>
              <p className="text-blue-100 mb-4">
                Available 24/7 for your queries
              </p>
              <a
                href="tel:+919353247743"
                className="text-white font-semibold text-lg hover:underline"
              >
                +91 93532 47743
              </a>
            </div>

            <div
              className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
              data-aos="zoom-in-up"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Email Us</h3>
              <p className="text-green-100 mb-4">
                We'll respond within 24 hours
              </p>
              <a
                href="mailto:support@medease.com"
                className="text-white font-semibold text-lg hover:underline"
              >
                support@medease.com
              </a>
            </div>

            <div
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
              data-aos="zoom-in-right"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Live Chat</h3>
              <p className="text-purple-100 mb-4">Chat with our support team</p>
              <button className="text-white font-semibold text-lg hover:underline">
                Start Chat →
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="max-w-3xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-2xl"
            data-aos="fade-up"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Send Us a Message
            </h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                ></textarea>
              </div>
              <button
                onClick={(e: any) => {
                  handleSubmit(e);
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>

          {/* Location Map Placeholder */}
          <div
            className="mt-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-12 text-center"
            data-aos="zoom-in"
          >
            <MapPinned className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Visit Our Stores
            </h3>
            <p className="text-gray-700 text-lg">
              With 5,600+ stores across India, find one near you!
            </p>
            <button className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition transform hover:scale-105">
              Find Nearest Store
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
