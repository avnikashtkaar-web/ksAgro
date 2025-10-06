"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { Leaf, ShoppingBag, Phone, Info, HomeIcon } from "lucide-react";

const Navbar = () => {
  const { isSeller, router } = useAppContext();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 bg-green-800 border-b border-green-700 shadow-md">
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
          <Link href="/" className="flex items-center gap-1 hover:text-green-200 transition-colors">
            <HomeIcon className="w-4 h-4" /> Home
          </Link>
          <Link href="/shop" className="flex items-center gap-1 hover:text-green-200 transition-colors">
            <ShoppingBag className="w-4 h-4" /> Shop
          </Link>
          <Link href="/about" className="flex items-center gap-1 hover:text-green-200 transition-colors">
            <Info className="w-4 h-4" /> About Us
          </Link>
          <Link href="/contact" className="flex items-center gap-1 hover:text-green-200 transition-colors">
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

      {/* Spacer to prevent content hiding behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
