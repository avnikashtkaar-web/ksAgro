"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { assets } from "@/assets/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const kohinoorImages = [
  { src: assets.kohinoor || "/images/kohinoor.png", title: "Kohinoor", description: "Essential nutrients for healthier plants." },
  { src: assets.agrozyme || "/images/agrozyme.png", title: "Agrozyme", description: "Boosts growth and productivity." },
  { src: assets.shakti || "/images/shakti.png", title: "Shakti", description: "Perfect for all soil types." },
  { src: assets.starplus || "/images/starplus.png", title: "Starplus", description: "Enhances plant immunity." },
  { src: assets.fungi_killer || "/images/fungi_killer.png", title: "Fungi Killer", description: "Rich in micronutrients." },
  { src: assets.vijay_growing || "/images/vijay_growing.png", title: "Vijay Growing", description: "Improves yield and quality." },
];

const FeaturedProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return (
    <div className="mt-14 w-full px-3 sm:px-6 lg:px-12 xl:px-20 py-10 bg-green-100 rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900">Featured Products</p>
        <div className="w-24 sm:w-28 h-1 bg-green-600 mt-2 rounded-full"></div>
      </div>

      {/* Slider */}
      <div className="mt-10 sm:mt-12">
        <Slider {...settings}>
          {kohinoorImages.map(({ src, title, description }, index) => {
            const validSrc = typeof src === "string" && src.trim() !== "" ? src : null;

            return (
              <div key={index} className="px-2 sm:px-3">
                <div
                  className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition duration-300 bg-white"
                  onClick={() => validSrc && setSelectedImage({ src: validSrc, title, description })}
                >
                  {validSrc ? (
                    <Image
                      src={validSrc}
                      alt={title || "Product Image"}
                      width={400}
                      height={250}
                      className="object-contain w-full h-52 sm:h-64 md:h-72 lg:h-80"
                      unoptimized
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
                      Image not found
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-800/90 to-transparent p-3 sm:p-4 text-white space-y-1">
                    <p className="font-semibold text-base sm:text-lg">{title}</p>
                    <p className="text-xs sm:text-sm">{description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-3 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full">
            {selectedImage?.src ? (
              <Image
                src={selectedImage.src}
                alt={selectedImage.title || "Selected Image"}
                className="rounded-xl object-contain w-full h-auto transform hover:scale-105 transition duration-500"
                width={800}
                height={600}
                unoptimized
              />
            ) : (
              <div className="text-white text-center py-10">No image available</div>
            )}

            {/* Close Button */}
            <div
              className="absolute top-2 right-4 sm:top-4 sm:right-6 text-white text-3xl sm:text-4xl font-bold cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </div>

            {/* Caption */}
            <div className="text-white mt-4 text-center px-2">
              <p className="font-bold text-lg sm:text-2xl">{selectedImage.title}</p>
              <p className="text-xs sm:text-sm mt-1">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProduct;
