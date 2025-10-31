// "use client";

// import React, { useState, useEffect } from "react";
// import { assets } from "@/assets/assets";
// import Image from "next/image";

// const HeaderSlider = () => {
//   const sliderData = [
//     {
//       id: 1,
//       title: "Kohinoor Powder 1",
//       offer: "Boost Your Crops with Star Plus",
//       buttonText1: "Buy Now",
//       buttonText2: "Learn More",
//       imgSrc: assets.kohinoor,
//     },
//     {
//       id: 2,
//       title: "Kohinoor Powder 2",
//       offer: "Nourish Your Plants Effectively",
//       buttonText1: "Buy Now",
//       buttonText2: "Learn More",
//       imgSrc: assets.kohinoor1,
//     },
//     {
//       id: 3,
//       title: "Kohinoor Powder 3",
//       offer: "Essential Nutrients for Healthier Plants",
//       buttonText1: "Buy Now",
//       buttonText2: "Learn More",
//       imgSrc: assets.kohinoor2,
//     },
//     {
//       id: 4,
//       title: "Kohinoor Powder 1 Extra",
//       offer: "Perfect Growth Guaranteed",
//       buttonText1: "Buy Now",
//       buttonText2: "Learn More",
//       imgSrc: assets.kohinoor,
//     },
//     {
//       id: 5,
//       title: "Kohinoor Powder 2 Extra",
//       offer: "Strong Roots, Healthy Leaves",
//       buttonText1: "Buy Now",
//       buttonText2: "Learn More",
//       imgSrc: assets.kohinoor1,
//     },
//     {
//       id: 6,
//       title: "Kohinoor Powder 3 Extra",
//       offer: "Rich in Essential Nutrients",
//       buttonText1: "Buy Now",
//       buttonText2: "Learn More",
//       imgSrc: assets.kohinoor2,
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % sliderData.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [sliderData.length]);

//   const handleSlideChange = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="overflow-hidden relative w-full">
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {sliderData.map((slide, index) => (
//           <div
//             key={slide.id}
//             className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-green-100 via-green-200 to-green-100 py-8 md:py-14 md:px-14 px-5 mt-6 rounded-xl shadow-lg min-w-full"
//           >
//             <div className="md:pl-8 mt-8 md:mt-0">
//               <p className="md:text-base text-green-700 font-semibold pb-1">{slide.offer}</p>
//               <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-bold text-green-900">
//                 {slide.title}
//               </h1>
//               <div className="flex items-center mt-5 md:mt-6 gap-4">
//                 <button className="md:px-10 px-7 md:py-2.5 py-2 bg-green-700 hover:bg-green-800 rounded-full text-white font-medium transition">
//                   {slide.buttonText1}
//                 </button>
//                 <button className="group flex items-center gap-2 px-6 py-2.5 font-medium text-green-900 hover:text-green-700 transition">
//                   {slide.buttonText2}
//                   <Image
//                     className="group-hover:translate-x-1 transition"
//                     src={assets.arrow_icon}
//                     alt="arrow_icon"
//                     width={16}
//                     height={16}
//                   />
//                 </button>
//               </div>
//             </div>
//             <div className="flex items-center flex-1 justify-center">
//               <Image
//                 className="md:w-80 md:h-80 w-60 h-60 rounded-xl shadow-md object-cover"
//                 src={slide.imgSrc}
//                 alt={`Slide ${index + 1}`}
//                 width={400}
//                 height={400}
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Dots */}
//       <div className="flex items-center justify-center gap-2 mt-6">
//         {sliderData.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => handleSlideChange(index)}
//             className={`h-2.5 w-2.5 rounded-full cursor-pointer ${
//               currentSlide === index ? "bg-green-700" : "bg-gray-500/30"
//             } transition`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeaderSlider;
// "use client";

// import { useEffect, useState } from "react";
// import { assets } from "@/assets/assets";
// import Image from "next/image";

// const slides = [
//   // { id: 1, title: "Kohinoor Powder 1", offer: "Boost Your Crops with Star Plus", img: assets.banner},
//   // { id: 2, title: "Kohinoor Powder 2", offer: "Nourish Your Plants Effectively", img: assets.banner1 },
//   // { id: 3, title: "Kohinoor Powder 3", offer: "Essential Nutrients for Healthier Plants", img: assets.banner2 },
// { id: 1,  img: assets.banner,alt: "Kohinoor Powder Banner 1"},
//   { id: 2,  img: assets.banner1,alt: "Kohinoor Powder Banner 1" },
//   { id: 3,   img: assets.banner2,alt: "Kohinoor Powder Banner 1" },
// ];

// export default function HeaderSlider() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % slides.length);
//     }, 4000); // auto-slide every 4 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const prevSlide = () => {
//     setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const nextSlide = () => {
//     setActiveIndex((prev) => (prev + 1) % slides.length);
//   };

//   return (
//     <div className="relative w-full h-[100vh] md:h-[100vh] overflow-hidden">
//       {slides.map((slide, idx) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           <Image
//             src={slide.img}
//             alt={slide.alt}
//             fill
//             className="object-contain w-full h-full"
//           />
//           {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-black/0"></div>
//           <div className="absolute top-1/2 left-8 md:left-16 transform -translate-y-1/2 text-start">
//             <p className="text-green-300 font-semibold text-lg md:text-xl">{slide.offer}</p>
//             <h1 className="text-white font-bold text-3xl md:text-6xl mt-2">{slide.title}</h1>
//             <div className="mt-4 flex flex-col sm:flex-row gap-3">
//               <button className="btn btn-success me-3 px-6 py-3 md:px-8 md:py-3">Buy Now</button>
//               <button className="btn btn-outline-light px-6 py-3 md:px-8 md:py-3">Learn More</button>
//             </div>
//           </div> */}
//         </div>
//       ))}

//       {/* Dots */}
//       <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             className={`w-3 h-3 rounded-full ${
//               idx === activeIndex ? "bg-green-500" : "bg-green-300"
//             }`}
//             onClick={() => setActiveIndex(idx)}
//           />
//         ))}
//       </div>

//       {/* Arrows */}
//       <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-20 hover:bg-black/50 transition"
//         onClick={prevSlide}
//       >
//         &#10094;
//       </button>
//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-20 hover:bg-black/50 transition"
//         onClick={nextSlide}
//       >
//         &#10095;
//       </button>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const slides = [
  { id: 1, img: assets.banner, alt: "Kohinoor Powder Banner 1" },
  { id: 2, img: assets.banner1, alt: "Kohinoor Powder Banner 2" },
  { id: 3, img: assets.banner2, alt: "Kohinoor Powder Banner 3" },
];

export default function HeaderSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-[100vh] bg-gradient-to-b from-green-50 to-white overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
            idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.img}
              alt={slide.alt}
              fill
              priority
              className="object-contain w-full h-full"
              sizes="100vw"
            />
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              idx === activeIndex ? "bg-green-600 scale-125" : "bg-green-300"
            }`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        className="absolute top-1/2 left-3 sm:left-6 transform -translate-y-1/2 bg-black/30 text-white p-2 sm:p-3 rounded-full z-20 hover:bg-black/50 transition"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-3 sm:right-6 transform -translate-y-1/2 bg-black/30 text-white p-2 sm:p-3 rounded-full z-20 hover:bg-black/50 transition"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        &#10095;
      </button>
    </div>
  );
}
