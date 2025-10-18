"use client";

import { FaWhatsapp, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function WhatsAppPage() {
  const router = useRouter();
  const phoneNumber = "919752538725"; // Your WhatsApp number
  const message = "Hello! I want to contact you."; // Pre-filled message
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-700 animate-fadeIn">
        Chat with us on WhatsApp
      </h1>
      <p className="mb-8 text-gray-700 max-w-md animate-fadeIn delay-150">
        Click the button below to open WhatsApp and start chatting with us instantly!
      </p>

      {/* WhatsApp Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all transform hover:scale-105 mb-8 animate-pulse"
        title="Open WhatsApp Chat"
      >
        <FaWhatsapp size={36} />
      </a>

      {/* Go Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 px-5 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors shadow-md"
      >
        <FaArrowLeft /> Go Back
      </button>
    </div>
  );
}
