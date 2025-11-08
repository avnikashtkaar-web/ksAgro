// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { assets } from "@/assets/assets";
// import Link from "next/link";
// import Image from "next/image";
// import { Leaf, ShoppingBag, Phone, Info, HomeIcon } from "lucide-react";
// import { FaVolumeUp, FaVolumeMute, FaChevronDown } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { useAppContext } from "@/context/AppContext";

// const Navbar = () => {
//   const { isSeller, router } = useAppContext();
//   const audioRef = useRef(null);
//   const dropdownRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [language, setLanguage] = useState("hi");
//   const [langDropdownOpen, setLangDropdownOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const audioFiles = {
//     hi: "/farming-hindi.mp3",
//     en: "/farming-english.mp3",
//   };

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleAudioToggle = () => {
//     if (!audioRef.current) return;
//     if (isPlaying) {
//       audioRef.current.pause();
//       setIsPlaying(false);
//     } else {
//       audioRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   const handleLanguageSelect = (lang) => {
//     setLanguage(lang);
//     if (!audioRef.current) return;

//     audioRef.current.pause();
//     audioRef.current.currentTime = 0;
//     audioRef.current.src = audioFiles[lang];
//     audioRef.current.load();

//     const playAudio = () => {
//       audioRef.current
//         .play()
//         .then(() => setIsPlaying(true))
//         .catch(() => setIsPlaying(false));
//       audioRef.current.removeEventListener("canplaythrough", playAudio);
//     };

//     audioRef.current.addEventListener("canplaythrough", playAudio);
//     setLangDropdownOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setLangDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const navLinkClass =
//     "relative flex items-center gap-1 text-white no-underline transition-all duration-300 whitespace-nowrap " +
//     "after:content-[''] after:absolute after:w-0 after:h-[3px] after:left-0 after:-bottom-1 " +
//     "after:bg-gradient-to-r after:from-pink-500 after:via-yellow-400 after:to-green-400 " +
//     "hover:after:w-full after:transition-all after:duration-500 rounded " +
//     "hover:after:animate-gradient-move";

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 w-full z-50 bg-green-800 shadow-md border-b border-green-700 ${
//           scrolled ? "py-2" : "py-3"
//         }`}
//       >
//         <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-16">
//           {/* LEFT: Logo + Audio */}
//           <div className="flex items-center gap-4">
//             <div className="relative flex flex-col items-center" ref={dropdownRef}>
//               <motion.button
//                 onClick={() => setLangDropdownOpen(!langDropdownOpen)}
//                 animate={isPlaying ? { scale: [1, 1.2, 1] } : { scale: 1 }}
//                 transition={{ repeat: isPlaying ? Infinity : 0, duration: 1.2 }}
//                 className="p-2 rounded-full bg-green-600 text-white flex items-center justify-center w-10 h-10"
//                 title="Click to play/pause"
//                 onMouseDown={handleAudioToggle}
//               >
//                 {isPlaying ? <FaVolumeMute /> : <FaVolumeUp />}
//                 <FaChevronDown size={10} className="ml-1" />
//               </motion.button>

//               <AnimatePresence>
//                 {langDropdownOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute top-full mt-1 bg-green-100 border border-green-300 rounded shadow-md flex flex-col w-20 z-50"
//                   >
//                     <button
//                       onClick={() => handleLanguageSelect("hi")}
//                       className="px-2 py-1 hover:bg-green-200 text-green-700 text-sm flex items-center justify-center"
//                     >
//                       Hi
//                     </button>
//                     <button
//                       onClick={() => handleLanguageSelect("en")}
//                       className="px-2 py-1 hover:bg-green-200 text-green-700 text-sm flex items-center justify-center"
//                     >
//                       En
//                     </button>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Logo */}
//             <Link
//               href="/Kisan Agro book.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 no-underline"
//             >
//               <Leaf className={`text-white ${scrolled ? "w-6 h-6" : "w-8 h-8"}`} />
//               <motion.span
//                 animate={{ fontSize: scrolled ? "1.25rem" : "1.75rem" }}
//                 transition={{ duration: 0.3, ease: "easeInOut" }}
//                 className="relative font-extrabold text-white tracking-wide cursor-pointer no-underline
//                 after:content-[''] after:absolute after:w-0 after:h-[3px] after:left-0 after:-bottom-1
//                 after:bg-gradient-to-r after:from-pink-500 after:via-yellow-400 after:to-green-400
//                 hover:after:w-full after:transition-all after:duration-500 hover:after:animate-gradient-move"
//               >
//                 KashtkaarAgroBioCare
//               </motion.span>
//             </Link>
//           </div>

//           {/* MIDDLE: Nav Links */}
//           <div className="hidden md:flex items-center gap-10 font-medium">
//             <Link href="/" className={navLinkClass}>
//               <HomeIcon className="w-4 h-4" /> Home
//             </Link>
//             <Link href="/shop" className={navLinkClass}>
//               <ShoppingBag className="w-4 h-4" /> Shop
//             </Link>
//             <Link href="/about" className={navLinkClass}>
//               <Info className="w-4 h-4" /> About Us
//             </Link>
//             <Link href="/contact" className={navLinkClass}>
//               <Phone className="w-4 h-4" /> Contact
//             </Link>
//           </div>

//           {/* RIGHT: Admin, Search, Account */}
//           <div className="flex items-center gap-4 flex-shrink-0">
//             {isSeller && (
//               <motion.button
//                 onClick={() => router.push("/admindashboard")}
//                 className="text-sm bg-green-600 text-white px-4 py-2 rounded-full shadow"
//                 animate={{ scale: scrolled ? 0.95 : 1 }}
//                 transition={{ duration: 0.3 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 Admin Dashboard
//               </motion.button>
//             )}

//             <motion.div
//               className="flex items-center justify-center p-2 bg-green-600 text-white rounded-full shadow"
//               animate={{ scale: scrolled ? 0.95 : 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Image src={assets.search_icon} alt="search" width={24} height={24} />
//             </motion.div>

//             <motion.div
//               onClick={() => router.push("/account")}
//               className="flex items-center gap-2 px-4 py-2 min-w-[120px] bg-green-600 text-white rounded-full shadow cursor-pointer hover:bg-green-700 transition"
//               animate={{ scale: scrolled ? 0.95 : 1 }}
//               transition={{ duration: 0.3 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <Image src={assets.user_icon} alt="user" width={24} height={24} />
//               Account
//             </motion.div>
//           </div>
//         </div>
//       </nav>

//       <audio ref={audioRef} src={audioFiles[language]} />
//       <div className="h-20"></div>

//       <style jsx global>{`
//         @keyframes gradientMove {
//           0% {
//             background-position: 0% 50%;
//           }
//           100% {
//             background-position: 100% 50%;
//           }
//         }
//         .animate-gradient-move {
//           background-size: 200% 200%;
//           animation: gradientMove 2s linear infinite;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;
"use client";
import React, { useRef, useState, useEffect } from "react";
import { assets } from "@/assets/assets";
//import useTranslation from "@/components/useTranslation";
import Link from "next/link";
import Image from "next/image";
import {
  Leaf,
  ShoppingBag,
  Phone,
  Info,
  HomeIcon,
  Menu,
  X,
  Globe,
} from "lucide-react";
import { FaVolumeUp, FaVolumeMute, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "@/context/AppContext";
import { useLanguage } from "@/context/LanguageContext";


const Navbar = () => {
  const { isSeller, router } = useAppContext();
  const audioRef = useRef(null);
  const audioDropdownRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [language, setLanguage] = useState("hi");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [siteLang, setSiteLang] = useState("English");
  const [siteLangOpen, setSiteLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 const { translations, toggleLanguage } = useLanguage();

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
      if (
        audioDropdownRef.current &&
        !audioDropdownRef.current.contains(event.target)
      ) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkClass =
    "relative flex items-center gap-1 text-white no-underline transition-all duration-300 whitespace-nowrap " +
    "after:content-[''] after:absolute after:w-0 after:h-[3px] after:left-0 after:-bottom-1 " +
    "after:bg-gradient-to-r after:from-pink-500 after:via-yellow-400 after:to-green-400 " +
    "hover:after:w-full after:transition-all after:duration-500 rounded " +
    "hover:after:animate-gradient-move";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-green-800 shadow-md border-b border-green-700 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-3 sm:px-6 md:px-16">
          {/* LEFT: Audio + Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className="relative flex flex-col items-center"
              ref={audioDropdownRef}
            >
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
                      className="px-2 py-1 hover:bg-green-200 text-green-700 text-sm"
                    >
                      Hi
                    </button>
                    <button
                      onClick={() => handleLanguageSelect("en")}
                      className="px-2 py-1 hover:bg-green-200 text-green-700 text-sm"
                    >
                      En
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Logo */}
            <Link
              href="/Kisan Agro book.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 no-underline"
            >
              <Leaf
                className={`text-white ${scrolled ? "w-6 h-6" : "w-8 h-8"}`}
              />
              <motion.span
                animate={{ fontSize: scrolled ? "1.25rem" : "1.75rem" }}
                transition={{ duration: 0.3 }}
                className="relative font-extrabold text-white tracking-wide cursor-pointer no-underline 
                after:content-[''] after:absolute after:w-0 after:h-[3px] after:left-0 after:-bottom-1 
                after:bg-gradient-to-r after:from-pink-500 after:via-yellow-400 after:to-green-400 
                hover:after:w-full after:transition-all after:duration-500 hover:after:animate-gradient-move"
              >
                {/* KashtkaarAgroBioCare */}{translations.brand}
              </motion.span>
            </Link>
          </div>

          {/* Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              className="text-white bg-green-700 p-2 rounded-md"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* MIDDLE: Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link href="/" className={navLinkClass}>
              <HomeIcon className="w-4 h-4" /> {translations.home}
            </Link>
            <Link href="/shop" className={navLinkClass}>
              <ShoppingBag className="w-4 h-4" /> {translations.shop}
            </Link>
            <Link href="/about" className={navLinkClass}>
              <Info className="w-4 h-4" /> {translations.about}
            </Link>
            <Link href="/contact" className={navLinkClass}>
              <Phone className="w-4 h-4" /> {translations.contact}
            </Link>

            {/* New Language Button */}
           <div className="relative ml-3">
  <button
    onClick={() => setSiteLangOpen(!siteLangOpen)}
    className="flex items-center gap-1 text-white bg-green-600 px-3 py-1.5 rounded-full hover:bg-green-700 transition text-sm"
  >
    <Globe className="w-4 h-4" /> {translations.language}{" "}
    <FaChevronDown size={10} />
  </button>

  <AnimatePresence>
    {siteLangOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full mt-1 bg-green-100 border border-green-300 rounded shadow-md flex flex-col w-24 z-50"
      >
        <button
          onClick={() => {
            toggleLanguage("English");
            setSiteLangOpen(false);
          }}
          className="px-3 py-1 hover:bg-green-200 text-green-700 text-sm"
        >
          {translations.english}
        </button>

        <button
          onClick={() => {
            toggleLanguage("Hindi");
            setSiteLangOpen(false);
          }}
          className="px-3 py-1 hover:bg-green-200 text-green-700 text-sm"
        >
          {translations.hindi}
        </button>
      </motion.div>
    )}
  </AnimatePresence>
</div>

          </div>
          {/*old code for opening admin and account pages
          RIGHT: Admin + Search + Account
           <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            {isSeller && (
              <motion.button
                onClick={() => router.push("/admindashboard")}
                className="text-sm bg-green-600 text-white px-4 py-2 rounded-full shadow"
                whileHover={{ scale: 1.05 }}
              >
                Admin
              </motion.button>
            )}

            <motion.div className="flex items-center justify-center p-2 bg-green-600 text-white rounded-full shadow">
              <Image src={assets.search_icon} alt="search" width={24} height={24} />
            </motion.div>

            <motion.div
              onClick={() => router.push("/account")}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full shadow cursor-pointer hover:bg-green-700 transition"
              whileHover={{ scale: 1.05 }}
            >
              <Image src={assets.user_icon} alt="user" width={24} height={24} />
              Account
            </motion.div>
          </div> */}

          {/* RIGHT: Admin + Search + Account */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0 relative z-[9999]">
            {/* Admin Button */}
            {isSeller && (
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
              >
                <button
                  disabled
                  className="text-sm bg-green-600 text-white px-4 py-2 rounded-full shadow cursor-not-allowed opacity-90 relative z-[60]"
                >
               {translations.admin}
                </button>

                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-green-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-[9999] shadow-lg">
                  {translations.comingSoon  }
                </div>
              </motion.div>
            )}

            {/* Search Icon */}
            <motion.div
              className="flex items-center justify-center p-2 bg-green-600 text-white rounded-full shadow relative z-[60]"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={assets.search_icon}
                alt="search"
                width={24}
                height={24}
              />
            </motion.div>

            {/* Account Button */}
            <motion.div
              className="relative group flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full shadow cursor-not-allowed opacity-90 relative z-[60]"
              whileHover={{ scale: 1.05 }}
            >
              <Image src={assets.user_icon} alt="user" width={24} height={24} />
           {translations.account}
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-green-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-[9999] shadow-lg">
               {translations.comingSoon }
              </div>
            </motion.div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-green-700 text-white px-6 py-4 space-y-3 shadow-lg w-full min-h-screen flex flex-col items-start"
            >
              <Link
                href="/"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                <HomeIcon className="w-4 h-4" />{translations.home}
              </Link>
              <Link
  href="/shop"
  className={navLinkClass}
  onClick={() => setMenuOpen(false)}
>
  <ShoppingBag className="w-4 h-4" /> {translations.shop}
</Link>

<Link
  href="/about"
  className={navLinkClass}
  onClick={() => setMenuOpen(false)}
>
  <Info className="w-4 h-4" /> {translations.about}
</Link>
              <Link
                href="/contact"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                <Phone className="w-4 h-4" /> {translations.contact}
              </Link>

              {/* Language Button Mobile */}
              <div className="relative w-full">
                <button
                  onClick={() => setSiteLangOpen(!siteLangOpen)}
                  className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-full hover:bg-green-700 transition w-fit"
                >
                  <Globe className="w-4 h-4" /> {siteLang}{" "}
                  <FaChevronDown size={10} />
                </button>
                {siteLangOpen && (
                  <div className="absolute top-full mt-1 bg-green-100 border border-green-300 rounded shadow-md flex flex-col w-24 z-50">
                    <button
                      onClick={() => {
                        setSiteLang("English");
                        setSiteLangOpen(false);
                      }}
                      className="px-3 py-1 hover:bg-green-200 text-green-700 text-sm"
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setSiteLang("Hindi");
                        setSiteLangOpen(false);
                      }}
                      className="px-3 py-1 hover:bg-green-200 text-green-700 text-sm"
                    >
                      Hindi
                    </button>
                  </div>
                )}
              </div>

              {isSeller && (
                <motion.button
                  onClick={() => {
                    router.push("/admindashboard");
                    setMenuOpen(false);
                  }}
                  className="bg-green-600 w-fit px-4 py-2 rounded-full shadow hover:bg-green-700 transition text-sm"
                >
                 {translations.admin}
                </motion.button>
              )}

              <div className="flex flex-wrap items-center gap-3 mt-3">
                <button
                  onClick={() => {
                    router.push("/search");
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-2 bg-green-600 px-3 py-2 rounded-full shadow hover:bg-green-700 transition"
                >
                  <Image
                    src={assets.search_icon}
                    alt="Search"
                    width={18}
                    height={18}
                  />
                </button>

                <motion.button
                  onClick={() => {
                    router.push("/account");
                    setMenuOpen(false);
                  }}
                  className="bg-green-600 px-4 py-2 rounded-full shadow hover:bg-green-700 transition text-sm"
                >
                  {translations.account}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <audio ref={audioRef} src={audioFiles[language]} />
      {/* <div className="h-20"></div> */}
      <div className="h-10 sm:h-20"></div>

      <style jsx global>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradientMove 2s linear infinite;
        }

        @media (max-width: 476px) {
          nav {
            padding: 0.5rem 0.75rem !important;
          }
          .text-white {
            font-size: 0.9rem !important;
          }
          button,
          a {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
