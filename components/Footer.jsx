"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaMobileAlt,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-green-800 text-white relative">
      {/* Main Footer Section */}
      <div className="flex flex-col md:flex-row items-start justify-between px-6 sm:px-10 md:px-16 lg:px-32 gap-10 py-14 border-b border-green-700">
        {/* Brand Name & Description */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            KashtkaarAgroBioCare
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-green-100 leading-relaxed">
            We provide high-quality fertilizers to ensure your crops grow
            healthy and abundant. Our products help farmers achieve maximum
            yield with sustainable practices.
          </p>
        </div>

        {/* Company Links */}
        <div className="w-full sm:w-1/2 md:w-1/4 text-center md:text-left">
          <h2 className="font-semibold text-lg mb-4 sm:mb-5">Company</h2>
          <ul className="space-y-2 text-green-100 text-sm sm:text-base">
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="/about">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="/contact">
                Contact Us
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/Kisan Agro book.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                KashtkaarAgro PDF
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info + Social Media */}
        <div className="w-full sm:w-1/2 md:w-1/4 text-center md:text-left">
          <h2 className="font-semibold text-lg mb-4 sm:mb-5">Get in Touch</h2>
          <div className="text-green-100 text-sm sm:text-base space-y-1 sm:space-y-2">
            <p>📞 6263895372 , 9131654462</p>
            <p>✉️ kashtkaaragrobiocare@gmail.com</p>
            <p>🏢 32 Shivani Home, Bypass Road</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Karond Bhopal - 462038 (M.P)</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start items-center gap-3 sm:gap-4 mt-5 sm:mt-6 flex-wrap">
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-100 hover:text-white text-lg sm:text-xl transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-100 hover:text-white text-lg sm:text-xl transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-100 hover:text-white text-lg sm:text-xl transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-100 hover:text-white text-lg sm:text-xl transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-100 hover:text-white text-lg sm:text-xl transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-4 text-center text-green-200 text-xs sm:text-sm">
        © 2025 KashtkaarAgroBioCare. All Rights Reserved.
      </div>

      {/* ✅ Floating Buttons: Left side, well-separated */}
      {pathname !== "/whatsapp" && (
        <div className="fixed bottom-28 left-6 z-50 flex flex-col items-center gap-6 sm:gap-7">
          {/* 📞 Call Button (top) */}
          <div className="flex flex-col items-center group">
            <span className="mb-1 px-3 py-1 rounded bg-black text-white text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
              Missed Call / Call Us
            </span>
            <a
              href="tel:+919752538725"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center shadow-2xl hover:bg-yellow-600 transition-colors animate-pulse"
              title="Call us"
            >
              <FaMobileAlt size={22} className="sm:size-[28px]" />
            </a>
          </div>

          {/* 💬 WhatsApp Button (below) */}
          <div className="flex flex-col items-center group">
            <span className="mb-1 px-3 py-1 rounded bg-black text-white text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
              Chat on WhatsApp
            </span>
            <a
              href={`https://wa.me/919752538725?text=${encodeURIComponent(
                "🙏🏻 Namaste! I am Kashtkaar Agro Bio Care Assistant. How can I help you today?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors animate-pulse"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp size={24} className="sm:size-[30px]" />
            </a>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
