"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaMobileAlt,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-green-800 text-white relative">
      <div className="flex flex-col md:flex-row items-start justify-between px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-green-700">
        {/* Brand Name & Description */}
        <div className="w-full md:w-1/3">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            KashtkaarAgroBioCare
          </h1>
          <p className="mt-6 text-sm text-green-100">
            We provide high-quality fertilizers to ensure your crops grow
            healthy and abundant. Our products help farmers achieve maximum
            yield with sustainable practices.
          </p>
        </div>

        {/* Company Links */}
        <div className="w-full md:w-1/4">
          <h2 className="font-semibold text-lg mb-5">Company</h2>
          <ul className="space-y-2 text-green-100 text-sm">
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
        <div className="w-full md:w-1/4">
          <h2 className="font-semibold text-lg mb-5">Get in Touch</h2>
          <div className="text-green-100 text-sm space-y-2">
            <p>📞 6263895372 , 9131654462</p>
            <p>✉️ kashtkaaragrobiocare@gmail.com</p>
            <p>🏢 32 Shivani Home, Bypass Road</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Karond Bhopal - 462038 (M.P)</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-100 hover:text-white text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-100 hover:text-white text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-100 hover:text-white text-xl"
            >
              <FaYoutube />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-100 hover:text-white text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-100 hover:text-white text-xl"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-4 text-center text-green-200 text-xs md:text-sm">
        © 2025 KashtkaarAgroBioCare. All Rights Reserved.
      </div>

      {/* ✅ Floating Buttons: WhatsApp + Missed Call */}
{pathname !== "/whatsapp" && (
  <div className="fixed bottom-5 left-5 z-50 flex flex-col items-center gap-1">

    {/* WhatsApp Button */}
    <div className="flex flex-col items-center group">
      <span className="mb-0.5 px-3 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Chat on WhatsApp
      </span>
      <a
        href={`https://wa.me/919752538725?text=${encodeURIComponent(
          "🙏🏻 Namaste! I am Khashtkaar Agro Bio Care Assistant How can I help you today?"
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors animate-pulse"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>

    {/* Missed Call Button with Mobile Icon */}
    <div className="flex flex-col items-center group">
      <span className="mb-0.5 px-3 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Missed Call / Call Us
      </span>
      <a
        href="tel:+919752538725"
        className="w-16 h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center shadow-2xl hover:bg-yellow-600 transition-colors animate-pulse"
        title="Call us"
      >
        <FaMobileAlt size={28} /> {/* Mobile phone icon */}
      </a>
    </div>

  </div>
)}
    </footer>
  );
};

export default Footer;
