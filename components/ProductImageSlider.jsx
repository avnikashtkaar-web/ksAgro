"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transformOrigin, setTransformOrigin] = useState("center center");
  const [isZoomed, setIsZoomed] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* 🔍 Main Image with Zoom */}
      <div
        className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg border bg-white"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <Image
          src={images[currentIndex]}
          alt={`Product ${currentIndex + 1}`}
          width={800}
          height={800}
          className="object-contain w-full h-full transition-transform duration-300"
          style={{
            transformOrigin,
            transform: isZoomed ? "scale(2)" : "scale(1)",
          }}
        />

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -translate-y-1/2 left-2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 -translate-y-1/2 right-2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* 🖼️ Thumbnail Row */}
      <div className="flex gap-2 mt-3 overflow-x-auto">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer border rounded-md p-1 ${
              index === currentIndex ? "border-green-600" : "border-gray-300"
            }`}
          >
            <Image
              src={img}
              alt={`thumb-${index}`}
              width={70}
              height={70}
              className="object-contain w-16 h-16 rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;
