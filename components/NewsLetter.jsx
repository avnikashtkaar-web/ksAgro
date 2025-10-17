"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "", type: "success" });

  const phoneNumber = "919752538725"; // WhatsApp number
  const defaultMsg = "🙏🏻 Namaste! I am Khashtkaar Agro Bio Care Assistant How can I help you today?";

  const showToast = (message, type = "success") => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast({ visible: false, message: "", type }), 3000);
  };

  const handleSubscribe = async () => {
    if (!email) {
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
    <div className="flex flex-col items-center justify-center text-center space-y-4 pt-8 pb-14 px-4">
      <h1 className="md:text-4xl text-2xl font-medium">
        Subscribe now & get 20% off
      </h1>

      {/* Styled two-line description with darker text */}
      <p className="md:text-base text-gray-700/90 pb-4 text-center">
        Stay updated with the latest farming tips, sustainable practices, and exclusive discounts on our high-quality fertilizers. <br />
        <span className="font-semibold text-green-700">Subscribe now and boost your crop yield!</span>
      </p>

      {/* Inline Toast Notification */}
      {toast.visible && (
        <div
          className={`px-5 py-3 rounded-lg shadow-lg text-white w-full max-w-md text-center ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <span>{toast.message}</span>
            <button
              onClick={() => setToast({ visible: false, message: "", type: toast.type })}
              className="text-white"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      {/* Email input + subscribe button */}
      <div className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12 mt-2">
        <input
          className="border border-gray-500/30 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-700"
          type="email"
          placeholder="Enter your email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubscribe}
          disabled={loading}
          className="md:px-12 px-8 h-full text-white bg-orange-600 rounded-md rounded-l-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Subscribe"}
        </button>
      </div>

      {/* WhatsApp button appears after successful subscription */}
      {toast.visible && toast.type === "success" && (
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center gap-2 text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          <FaWhatsapp size={20} /> Chat with us on WhatsApp
        </a>
      )}
    </div>
  );
};

export default NewsLetter;
