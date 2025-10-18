"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { assets } from "@/assets/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const kohinoorImages = [
  { src: assets.kohinoor, title: "Kohinoor Powder 1", description: "Essential nutrients for healthier plants." },
  { src: assets.kohinoor1, title: "Kohinoor Powder 2", description: "Boosts growth and productivity." },
  { src: assets.kohinoor2, title: "Kohinoor Powder 3", description: "Perfect for all soil types." },
  { src: assets.kohinoor, title: "Kohinoor Powder 4", description: "Enhances plant immunity." },
  { src: assets.kohinoor1, title: "Kohinoor Powder 5", description: "Rich in micronutrients." },
  { src: assets.kohinoor2, title: "Kohinoor Powder 6", description: "Improves yield and quality." },
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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="mt-14 max-w-[1200px] mx-auto px-4 py-10 bg-green-100 rounded-2xl shadow-lg">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-bold text-green-900">Featured Products</p>
        <div className="w-28 h-1 bg-green-600 mt-2 rounded-full"></div>
      </div>

      <div className="mt-12">
        <Slider {...settings}>
          {kohinoorImages.map(({ src, title, description }, index) => (
            <div key={index} className="px-3">
              <div
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
                onClick={() => setSelectedImage({ src, title, description })}
              >
                <Image
                  src={src}
                  alt={title}
                  className="object-cover w-full h-64"
                  width={400}
                  height={250}
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-800/80 to-transparent p-4 text-white space-y-1">
                  <p className="font-semibold text-lg">{title}</p>
                  <p className="text-sm">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              className="rounded-xl object-contain w-full h-auto transform hover:scale-105 transition duration-500"
              width={800}
              height={600}
            />
            <div
              className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </div>
            <div className="text-white mt-4 text-center">
              <p className="font-bold text-2xl">{selectedImage.title}</p>
              <p className="text-sm">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProduct;
