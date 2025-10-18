"use client";
import React, { useRef, useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";
import { Leaf, ShoppingBag, Phone, Info, HomeIcon } from "lucide-react";
import { FaVolumeUp, FaVolumeMute, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "@/context/AppContext";

const Navbar = () => {
  const { isSeller, router } = useAppContext();
  const audioRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [language, setLanguage] = useState("hi");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const audioFiles = {
    hi: "/farming-hindi.mp3",
    en: "/farming-english.mp3",
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAudioToggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    audioRef.current.src = audioFiles[lang];
    audioRef.current.load();

    const playAudio = () => {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
      audioRef.current.removeEventListener("canplaythrough", playAudio);
    };

    audioRef.current.addEventListener("canplaythrough", playAudio);
    setLangDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Tailwind gradient underline class
 const navLinkClass =
  "relative flex items-center gap-1 text-white no-underline transition-all duration-300 whitespace-nowrap " +
  "after:content-[''] after:absolute after:w-0 after:h-[3px] after:left-0 after:-bottom-1 " +
  "after:bg-gradient-to-r after:from-pink-500 after:via-yellow-400 after:to-green-400 " +
  "hover:after:w-full after:transition-all after:duration-500 rounded " +
  "hover:after:animate-gradient-move";

  return (
    <>
<<<<<<< HEAD
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 bg-green-800 border-b border-green-700 shadow-md">
        {/* LOGO / BRAND */}
        <div className="flex items-center gap-2">
          <a
            href="/Kisan Agro book.pdf" // PDF inside public folder
            target="_blank"
            rel="noopener noreferrer"
            title="Click here"
            className="flex items-center gap-2"
          >
            <Leaf className="w-8 h-8 text-white hover:text-green-200 transition-colors" />
            <span className="text-2xl md:text-3xl font-extrabold text-white tracking-wide hover:text-green-200 transition-colors">
              KashtkaarAgroBioCare
            </span>
          </a>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-6 font-medium text-white">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-green-200 transition-colors"
          >
            <HomeIcon className="w-4 h-4" /> Home
          </Link>
          <Link
            href="/shop"
            className="flex items-center gap-1 hover:text-green-200 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" /> Shop
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-1 hover:text-green-200 transition-colors"
          >
            <Info className="w-4 h-4" /> About Us
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-1 hover:text-green-200 transition-colors"
          >
            <Phone className="w-4 h-4" /> Contact
          </Link>
=======
      <nav className={`fixed top-0 left-0 w-full z-50 bg-green-800 shadow-md border-b border-green-700`}>
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-16 py-3">
          
          {/* LEFT: Logo + Audio */}
          <div className="flex items-center gap-4">
            <div className="relative flex flex-col items-center" ref={dropdownRef}>
              <motion.button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                animate={isPlaying ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ repeat: isPlaying ? Infinity : 0, duration: 1.2 }}
                className="p-2 rounded-full bg-green-600 text-white flex items-center justify-center w-10 h-10"
                title="Click to play/pause"
                onMouseDown={handleAudioToggle}
              >
                {isPlaying ? <FaVolumeMute /> : <FaVolumeUp />}
                <FaChevronDown size={10} className="ml-1" />
              </motion.button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-1 bg-green-100 border border-green-300 rounded shadow-md flex flex-col w-20 z-50"
                  >
                    <button
                      onClick={() => handleLanguageSelect("hi")}
                      className="px-2 py-1 hover:bg-green-200 text-green-700 text-sm flex items-center justify-center"
                    >
                      Hi
                    </button>
                    <button
                      onClick={() => handleLanguageSelect("en")}
                      className="px-2 py-1 hover:bg-green-200 text-green-700 text-sm flex items-center justify-center"
                    >
                      En
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
>>>>>>> faaebc0c1f116b97a3da387416443f366735bdad

            {/* Logo */}
 <Link
  href="/Kisan Agro book.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 no-underline"
>
  <Leaf className={`text-white ${scrolled ? "w-6 h-6" : "w-8 h-8"}`} />
  <motion.span
  animate={{ fontSize: scrolled ? "1.25rem" : "1.75rem" }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
  className="relative font-extrabold text-white tracking-wide cursor-pointer no-underline after:content-[''] after:absolute after:w-0 after:h-[3px] after:left-0 after:-bottom-1 after:bg-gradient-to-r after:from-pink-500 after:via-yellow-400 after:to-green-400 hover:after:w-full after:transition-all after:duration-500 hover:after:animate-gradient-move"
>
  KashtkaarAgroBioCare
</motion.span>
</Link>
          </div>

          {/* MIDDLE: Nav Links */}
          <div className="hidden md:flex items-center gap-10 font-medium">
            <Link href="/" className={navLinkClass}>
              <HomeIcon className="w-4 h-4" /> Home
            </Link>
            <Link href="/shop" className={navLinkClass}>
              <ShoppingBag className="w-4 h-4" /> Shop
            </Link>
            <Link href="/about" className={navLinkClass}>
              <Info className="w-4 h-4" /> About Us
            </Link>
            <Link href="/contact" className={navLinkClass}>
              <Phone className="w-4 h-4" /> Contact
            </Link>
          </div>

          {/* RIGHT: Admin, Search, Account */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {isSeller && (
              <motion.button
                onClick={() => router.push("/admindashboard")}
                className="text-sm bg-green-600 text-white px-4 py-2 rounded-full shadow"
                animate={{ scale: scrolled ? 0.95 : 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                Admin Dashboard
              </motion.button>
            )}

            <motion.div
              className="flex items-center justify-center p-2 bg-green-600 text-white rounded-full shadow"
              animate={{ scale: scrolled ? 0.95 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={assets.search_icon} alt="search" width={24} height={24} />
            </motion.div>

            <motion.div
              onClick={() => router.push("/account")}
              className="flex items-center gap-2 px-4 py-2 min-w-[120px] bg-green-600 text-white rounded-full shadow cursor-pointer hover:bg-green-700 transition"
              animate={{ scale: scrolled ? 0.95 : 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image src={assets.user_icon} alt="user" width={24} height={24} />
              Account
            </motion.div>
          </div>
        </div>
      </nav>

<<<<<<< HEAD
      {/* Optional: Space below navbar */}
      <div className="mt-6 md:mt-8"></div>
=======
      <audio ref={audioRef} src={audioFiles[language]} />
      <div className="h-20"></div>

      <style jsx global>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradientMove 2s linear infinite;
        }
      `}</style>
>>>>>>> faaebc0c1f116b97a3da387416443f366735bdad
    </>
  );
};

export default Navbar;
