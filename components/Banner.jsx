// "use client";

// import React from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import { productsDummyData } from "@/assets/assets";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Banner = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: true,
//   };

//   // Get the first few products for the banner (or all if you want)
//   const slides = productsDummyData.slice(0, 3).map((product) => ({
//     src: product.image[0],
//     alt: product.name,
//     title: product.name,
//     description: product.description,
//   }));

//   return (
//     <div className="max-w-[1200px] mx-auto my-16 px-4">
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className="relative flex justify-center">
//             <Image
//               src={slide.src}
//               alt={slide.alt}
//               className="rounded-xl shadow-lg"
//               width={500}
//               height={400}
//               priority={index === 0}
//             />
//           </div>
//         ))}
//       </Slider>

//       <div className="text-center mt-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-3">
//           {slides[0]?.title || "Boost Your Crops with Star Plus"}
//         </h2>
//         <p className="max-w-[600px] mx-auto text-gray-700 mb-4">
//           {slides[0]?.description || "Kohinoor Powder delivers essential nutrients for healthier, greener, and more productive plants."}
//         </p>
//         <button className="px-16 py-3 bg-green-600 rounded-lg text-white font-semibold hover:bg-green-700 transition">
//           Buy Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Banner;
"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { assets } from "@/assets/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: assets.kohinoor,
      alt: "Kohinoor",
      title: "Kohinoor",
      description: "Kohinoor Powder delivers essential nutrients for healthier plants.",
    },
    {
      src: assets.agrozyme,
      alt: "Agrozyme",
      title: "Agrozyme",
      description: "Agrozyme enhances plant growth, improves soil fertility, and boosts yield naturally.",
    },
    {
      src: assets.starplus,
      alt: "starplus",
      title: "Starplus",
      description: "Starplus enhances crop health and boosts yield with balanced nutrients.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div className="max-w-[900px] mx-auto my-16 px-4">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative flex justify-center">
            <Image
              src={slide.src}
              alt={slide.alt}
              width={900} // smaller width
              height={400} // adjust height proportionally
              className="rounded-xl shadow-lg object-cover w-full h-[400px]"
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>

      <div className="text-center mt-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-3">
          {slides[currentSlide]?.title}
        </h2>
        <p className="max-w-[600px] mx-auto text-gray-700 mb-4">
          {slides[currentSlide]?.description}
        </p>
        {/* <button className="px-16 py-3 bg-green-600 rounded-lg text-white font-semibold hover:bg-green-700 transition">
          Buy Now
        </button> */}
      </div>
    </div>
  );
};

export default Banner;
