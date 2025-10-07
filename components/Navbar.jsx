<<<<<<< HEAD
// "use client";
// import React from "react";
// import { assets } from "@/assets/assets";
// import Link from "next/link";
// import { useAppContext } from "@/context/AppContext";
// import Image from "next/image";
// import { Leaf, ShoppingBag, Phone, Info, HomeIcon } from "lucide-react";

// const Navbar = () => {
//   const { isSeller, router } = useAppContext();

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 bg-green-800 border-b border-green-700 shadow-md">
//         {/* LOGO / BRAND */}
//         <div className="flex items-center gap-2">
//           <a
//             href="/Kisan Agro book.pdf" // PDF inside public folder
//             target="_blank"
//             rel="noopener noreferrer"
//             title="Click here"
//             className="flex items-center gap-2"
//           >
//             <Leaf className="w-8 h-8 text-white hover:text-green-200 transition-colors" />
//             <span className="text-2xl md:text-3xl font-extrabold text-white tracking-wide hover:text-green-200 transition-colors">
//               KashtkaarAgroBioCare
//             </span>
//           </a>
//         </div>

//         {/* NAV LINKS */}
//         <div className="hidden md:flex items-center gap-6 font-medium text-white">
//           <Link href="/" className="flex items-center gap-1 hover:text-green-200 transition-colors">
//             <HomeIcon className="w-4 h-4" /> Home
//           </Link>
//           <Link href="/shop" className="flex items-center gap-1 hover:text-green-200 transition-colors">
//             <ShoppingBag className="w-4 h-4" /> Shop
//           </Link>
//           <Link href="/about" className="flex items-center gap-1 hover:text-green-200 transition-colors">
//             <Info className="w-4 h-4" /> About Us
//           </Link>
//           <Link href="/contact" className="flex items-center gap-1 hover:text-green-200 transition-colors">
//             <Phone className="w-4 h-4" /> Contact
//           </Link>

//           {isSeller && (
//             <button
//               onClick={() => router.push("/admindashboard")}
//               className="text-sm bg-green-600 text-white px-5 py-2 rounded-full shadow hover:bg-green-700 transition"
//             >
//               Admin Dashboard
//             </button>
//           )}
//         </div>

//         {/* RIGHT SIDE ACTIONS */}
//         <ul className="hidden md:flex items-center gap-4">
//           <Link
//             href="/search"
//             className="flex items-center gap-2 p-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition-transform hover:scale-105"
//           >
//             <Image className="w-5 h-5" src={assets.search_icon} alt="search" />
//           </Link>
//           <Link
//             href="/account"
//             className="flex items-center gap-2 p-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition-transform hover:scale-105"
//           >
//             <Image className="w-5 h-5" src={assets.user_icon} alt="user" />
//             Account
//           </Link>
//         </ul>

//         {/* MOBILE MENU */}
//         <div className="md:hidden flex items-center gap-3">
//           {isSeller && (
//             <button
//               onClick={() => router.push("/seller")}
//               className="text-xs bg-green-600 text-white px-4 py-1.5 rounded-full shadow hover:bg-green-700 transition"
//             >
//               Seller
//             </button>
//           )}
//           <Link
//             href="/account"
//             className="flex items-center gap-2 px-3 py-1.5 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition-transform hover:scale-105"
//           >
//             <Image src={assets.user_icon} alt="user" className="w-5 h-5" />
//             Account
//           </Link>
//         </div>
//       </nav>

//       {/* Spacer to prevent content hiding behind fixed navbar */}
//       <div className="h-20"></div>
//     </>
//   );
// };

// export default Navbar;
"use client";
import React, { useRef, useState, useEffect } from "react";
=======
"use client";
import React from "react";
>>>>>>> 61ac7758d16b7b81e26e0f7c368119bf95a1756c
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
<<<<<<< HEAD
import { Leaf, ShoppingBag, Phone, Info, HomeIcon, Menu } from "lucide-react";
import { FaVolumeUp, FaVolumeMute, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
=======
import { Leaf, ShoppingBag, Phone, Info, HomeIcon } from "lucide-react";
>>>>>>> 61ac7758d16b7b81e26e0f7c368119bf95a1756c

const Navbar = () => {
  const { isSeller, router } = useAppContext();
  const audioRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("hi");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop width
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Play/Pause audio
  const handleAudioToggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  // Change audio src when language changes
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.src =
      language === "hi" ? "/farming-hindi.mp3" : "/farming-english.mp3";
    if (isPlaying) audioRef.current.play();
  }, [language]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll effect for logo
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass =
    "relative flex items-center gap-1 hover:text-green-200 transition-all duration-300 transform after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-green-400 after:to-white after:transition-all hover:after:w-full whitespace-nowrap";

  return (
    <>
<<<<<<< HEAD
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-green-900 shadow-xl border-green-700"
            : "bg-green-800 shadow-md border-green-700"
        }`}
      >
        <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between px-4 md:px-8 lg:px-16 py-3">

          {/* LEFT: Speaker + Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Speaker Dropdown */}
            <div
              className="relative flex flex-col items-center"
              ref={dropdownRef}
              onMouseEnter={() => isDesktop && setLangDropdownOpen(true)}
              onMouseLeave={() => isDesktop && setLangDropdownOpen(false)}
            >
              <motion.button
                onClick={() => !isDesktop && setLangDropdownOpen(!langDropdownOpen)}
                animate={isPlaying ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ repeat: isPlaying ? Infinity : 0, duration: 1.2 }}
                className="p-2 rounded-full bg-green-600 text-white relative flex items-center gap-1"
                onMouseDown={handleAudioToggle}
              >
                {isPlaying ? <FaVolumeMute /> : <FaVolumeUp />}
                <FaChevronDown size={12} />
                {showTooltip && (
                  <span className="absolute bottom-full mb-2 bg-green-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg z-50">
                    {language === "hi" ? "कृषि प्रस्तुति सुनें" : "Listen Farming Presentation"}
                  </span>
                )}
              </motion.button>

              {/* Dropdown menu with reduced width */}
              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-1 bg-green-100 border border-green-300 rounded shadow-md flex flex-col w-24 z-50"
                  >
                    <button
                      onClick={() => { setLanguage("hi"); setLangDropdownOpen(false); }}
                      className="px-2 py-1 hover:bg-green-200 text-green-700 text-sm flex items-center justify-between"
                    >
                      हिंदी {language === "hi" && <span className="w-2 h-2 bg-green-600 rounded-full"></span>}
                    </button>
                    <button
                      onClick={() => { setLanguage("en"); setLangDropdownOpen(false); }}
                      className="px-2 py-1 hover:bg-green-200 text-green-700 text-sm flex items-center justify-between"
                    >
                      EN {language === "en" && <span className="w-2 h-2 bg-green-600 rounded-full"></span>}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Logo */}
            <motion.a
              href="/Kisan Agro book.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Click here"
              className="flex items-center gap-2 flex-shrink-0"
              animate={{ scale: scrolled ? 0.9 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Leaf className="w-8 h-8 text-white hover:text-green-200 transition-colors" />
              <span
                className={`font-extrabold text-white tracking-wide whitespace-nowrap hover:text-green-200 transition-all duration-300 ${
                  scrolled ? "text-2xl md:text-2xl" : "text-2xl md:text-3xl"
                }`}
              >
                KashtkaarAgroBioCare
              </span>
            </motion.a>
          </div>

          {/* MIDDLE: Nav Links */}
          <div className="hidden sm:flex md:flex items-center gap-6 font-medium text-white whitespace-nowrap ml-6">
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

          {/* RIGHT: Admin Dashboard, Search, Account */}
          <div className="flex items-center gap-4 flex-shrink-0 ml-auto">
            {isSeller && (
              <motion.button
                onClick={() => router.push("/admindashboard")}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px #22c55e" }}
                whileTap={{ scale: 0.95 }}
                className="text-sm bg-green-600 text-white px-5 py-2 rounded-full shadow transition-transform"
              >
                Admin Dashboard
              </motion.button>
            )}

            <Link
              href="/search"
              className="flex items-center gap-2 p-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition-transform transform hover:scale-105"
            >
              <Image className="w-5 h-5" src={assets.search_icon} alt="search" />
            </Link>

            <Link
              href="/account"
              className="flex items-center gap-2 p-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition-transform transform hover:scale-105"
            >
              <Image src={assets.user_icon} alt="user" className="w-5 h-5" />
              Account
            </Link>
          </div>

          {/* MOBILE MENU */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-green-600 text-white shadow hover:bg-green-700 transition-transform"
            >
              <Menu />
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {mobileMenuOpen && (
          <div className="sm:hidden flex flex-col gap-3 p-4 bg-green-800 text-white shadow-md">
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
            {isSeller && (
              <motion.button
                onClick={() => router.push("/admindashboard")}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px #22c55e" }}
                whileTap={{ scale: 0.95 }}
                className="text-sm bg-green-600 text-white px-5 py-2 rounded-full shadow transition-transform"
              >
                Admin Dashboard
              </motion.button>
            )}
          </div>
        )}
      </nav>

      {/* Audio Player */}
      <audio ref={audioRef} />
      <div className="h-20"></div>
=======
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

          {isSeller && (
            <button
              onClick={() => router.push("/admindashboard")}
              className="text-sm bg-green-600 text-white px-5 py-2 rounded-full shadow hover:bg-green-700 transition"
            >
              Admin Dashboard
            </button>
          )}
        </div>

        {/* RIGHT SIDE ACTIONS */}
        <ul className="hidden md:flex items-center gap-4">
          <Link
            href="/search"
            className="flex items-center gap-2 p-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition-transform hover:scale-105"
          >
            <Image className="w-5 h-5" src={assets.search_icon} alt="search" />
          </Link>
          <Link
            href="/account"
            className="flex items-center gap-2 p-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition-transform hover:scale-105"
          >
            <Image className="w-5 h-5" src={assets.user_icon} alt="user" />
            Account
          </Link>
        </ul>

        {/* MOBILE MENU */}
        <div className="md:hidden flex items-center gap-3">
          {isSeller && (
            <button
              onClick={() => router.push("/seller")}
              className="text-xs bg-green-600 text-white px-4 py-1.5 rounded-full shadow hover:bg-green-700 transition"
            >
              Seller
            </button>
          )}
          <Link
            href="/account"
            className="flex items-center gap-2 px-3 py-1.5 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition-transform hover:scale-105"
          >
            <Image src={assets.user_icon} alt="user" className="w-5 h-5" />
            Account
          </Link>
        </div>
      </nav>

      {/* Optional: Space below navbar */}
      <div className="mt-6 md:mt-8"></div>
>>>>>>> 61ac7758d16b7b81e26e0f7c368119bf95a1756c
    </>
  );
};

export default Navbar;
<<<<<<< HEAD


=======
>>>>>>> 61ac7758d16b7b81e26e0f7c368119bf95a1756c
