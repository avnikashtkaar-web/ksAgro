
"use client";

import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const ProductCard = ({ product }) => {
  const { currency, router } = useAppContext();
  const [zoomStyle, setZoomStyle] = useState({
    transformOrigin: "center center",
    transform: "scale(1)",
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2.8)", // 👈 Big readable zoom level
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: "center center",
      transform: "scale(1)",
    });
  };

  return (
    <div
      onClick={() => {
        router.push("/product/" + product._id);
        scrollTo(0, 0);
      }}
      className="flex flex-col items-start gap-1 w-full sm:max-w-[240px] md:max-w-[260px] cursor-pointer transition-transform hover:scale-[1.02]"
    >
      {/* Product Image Container */}
      <div
        className="relative group bg-gradient-to-b from-[#B2E6B0] to-[#6FCF6A] rounded-lg w-full h-44 sm:h-52 md:h-56 flex items-center justify-center overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Limited Stock Badge */}
        <span className="absolute top-2 left-2 bg-yellow-300 text-yellow-900 px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded shadow">
          Limited Stock
        </span>

        {/* Zoomable Product Image */}
        <Image
          src={product.image[0]}
          alt={product.name}
          width={800}
          height={800}
          unoptimized
          style={zoomStyle}
          className="transition-transform duration-300 ease-out object-contain w-[85%] h-[85%] sm:w-full sm:h-full rounded-lg"
        />

        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 bg-white p-1.5 sm:p-2 rounded-full shadow-md hover:scale-110 transition-transform">
          <Image
            className="h-3 w-3 sm:h-4 sm:w-4"
            src={assets.heart_icon}
            alt="heart_icon"
          />
        </button>
      </div>

      {/* Product Name */}
      <p className="text-sm sm:text-base font-medium pt-2 w-full truncate">
        {product.name}
      </p>

      {/* Description */}
      <p className="w-full text-xs text-gray-500/70 hidden sm:block truncate">
        {product.description}
      </p>

      {/* Ratings */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <p className="text-xs sm:text-sm">4.5</p>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              className="h-3 w-3 sm:h-4 sm:w-4"
              src={index < 4 ? assets.star_icon : assets.star_dull_icon}
              alt="star_icon"
            />
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between w-full mt-1 sm:mt-2">
        <p className="text-sm sm:text-base font-semibold text-green-700">
          {/* {currency}{product.offerPrice} */}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
