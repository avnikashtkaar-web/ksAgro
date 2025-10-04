"use client";

import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Kohinoor Powder 1",
      offer: "Boost Your Crops with Star Plus",
      buttonText1: "Buy Now",
      buttonText2: "Learn More",
      imgSrc: assets.kohinoor,
    },
    {
      id: 2,
      title: "Kohinoor Powder 2",
      offer: "Nourish Your Plants Effectively",
      buttonText1: "Buy Now",
      buttonText2: "Learn More",
      imgSrc: assets.kohinoor1,
    },
    {
      id: 3,
      title: "Kohinoor Powder 3",
      offer: "Essential Nutrients for Healthier Plants",
      buttonText1: "Buy Now",
      buttonText2: "Learn More",
      imgSrc: assets.kohinoor2,
    },
    {
      id: 4,
      title: "Kohinoor Powder 1 Extra",
      offer: "Perfect Growth Guaranteed",
      buttonText1: "Buy Now",
      buttonText2: "Learn More",
      imgSrc: assets.kohinoor,
    },
    {
      id: 5,
      title: "Kohinoor Powder 2 Extra",
      offer: "Strong Roots, Healthy Leaves",
      buttonText1: "Buy Now",
      buttonText2: "Learn More",
      imgSrc: assets.kohinoor1,
    },
    {
      id: 6,
      title: "Kohinoor Powder 3 Extra",
      offer: "Rich in Essential Nutrients",
      buttonText1: "Buy Now",
      buttonText2: "Learn More",
      imgSrc: assets.kohinoor2,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-green-100 via-green-200 to-green-100 py-8 md:py-14 md:px-14 px-5 mt-6 rounded-xl shadow-lg min-w-full"
          >
            <div className="md:pl-8 mt-8 md:mt-0">
              <p className="md:text-base text-green-700 font-semibold pb-1">{slide.offer}</p>
              <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-bold text-green-900">
                {slide.title}
              </h1>
              <div className="flex items-center mt-5 md:mt-6 gap-4">
                <button className="md:px-10 px-7 md:py-2.5 py-2 bg-green-700 hover:bg-green-800 rounded-full text-white font-medium transition">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center gap-2 px-6 py-2.5 font-medium text-green-900 hover:text-green-700 transition">
                  {slide.buttonText2}
                  <Image
                    className="group-hover:translate-x-1 transition"
                    src={assets.arrow_icon}
                    alt="arrow_icon"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center">
              <Image
                className="md:w-80 md:h-80 w-60 h-60 rounded-xl shadow-md object-cover"
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
                width={400}
                height={400}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2.5 w-2.5 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-green-700" : "bg-gray-500/30"
            } transition`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
