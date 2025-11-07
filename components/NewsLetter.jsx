"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
const NewsLetter = () => {
   const { translations } = useLanguage();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "", type: "success" });

  const phoneNumber = "919752538725";
  
const defaultMsg = "🙏🏻 Namaste! I am Khashtkaar Agro Bio Care Assistant. How can I help you today?";
  const showToast = (message, type = "success") => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast({ visible: false, message: "", type }), 3000);
  };

  const handleSubscribe = async () => {
    if (!email.trim()) {
      showToast("Please enter a valid email.", "error");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        showToast("Thank you for subscribing! 🎉");
        setEmail("");
      } else {
        showToast(data.error || "Something went wrong.", "error");
      }
    } catch (error) {
      console.error(error);
      showToast("Server error! Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 pt-10 pb-16 px-4 sm:px-6 md:px-10 bg-green-50 rounded-2xl shadow-md max-w-[1200px] mx-auto">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800">
        {/* Subscribe now & get 20% off */}
        {translations.heading}
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-700/90 leading-relaxed max-w-2xl">
        {/* Stay updated with the latest farming tips, sustainable practices, and exclusive discounts on our high-quality fertilizers. <br /> */}
        {translations.description1} <br />
        <span className="font-semibold text-green-700">
          {/* Subscribe now and boost your crop yield! */}
          {translations.description2}
        </span>
      </p>

      {/* Toast Notification */}
      {toast.visible && (
        <div
          className={`flex items-center justify-between gap-3 px-5 py-3 rounded-lg shadow-md text-white w-full max-w-md transition-all duration-300 ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <span className="text-sm sm:text-base">{toast.message}</span>
          <button
            onClick={() => setToast({ visible: false, message: "", type: toast.type })}
            className="text-white hover:opacity-80 transition"
          >
            <FaTimes />
          </button>
        </div>
      )}

      {/* Email input + button */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-2xl mt-2 gap-3 sm:gap-0">
        <input
          className="border border-gray-400/40 rounded-md sm:rounded-r-none h-12 w-full px-3 text-gray-700 outline-none focus:ring-2 focus:ring-green-500 transition"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubscribe}
          disabled={loading}
          className="w-full sm:w-auto px-8 sm:px-12 h-12 text-white bg-orange-600 rounded-md sm:rounded-l-none hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Subscribe"}
        </button>
      </div>

      {/* WhatsApp button (after success) */}
      {toast.visible && toast.type === "success" && (
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          <FaWhatsapp size={20} />
          <span className="text-sm sm:text-base font-medium">Chat with us on WhatsApp</span>
        </a>
      )}
    </div>
  );
};

export default NewsLetter;
