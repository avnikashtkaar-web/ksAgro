// import React from 'react'
// import { assets } from '@/assets/assets'
// import Image from 'next/image';
// import { useAppContext } from '@/context/AppContext';

// const ProductCard = ({ product }) => {

//     const { currency, router } = useAppContext()

//     return (
//         <div
//             onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0) }}
//             className="flex flex-col items-start gap-0.5 max-w-[200px] w-full cursor-pointer"
//         >
//             <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center">
//                 <Image
//                     src={product.image[0]}
//                     alt={product.name}
//                     className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
//                     width={800}
//                     height={800}
//                 />
//                 <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
//                     <Image
//                         className="h-3 w-3"
//                         src={assets.heart_icon}
//                         alt="heart_icon"
//                     />
//                 </button>
//             </div>

//             <p className="md:text-base font-medium pt-2 w-full truncate">{product.name}</p>
//             <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">{product.description}</p>
//             <div className="flex items-center gap-2">
//                 <p className="text-xs">{4.5}</p>
//                 <div className="flex items-center gap-0.5">
//                     {Array.from({ length: 5 }).map((_, index) => (
//                         <Image
//                             key={index}
//                             className="h-3 w-3"
//                             src={
//                                 index < Math.floor(4)
//                                     ? assets.star_icon
//                                     : assets.star_dull_icon
//                             }
//                             alt="star_icon"
//                         />
//                     ))}
//                 </div>
//             </div>

//             <div className="flex items-end justify-between w-full mt-1">
//                 <p className="text-base font-medium">{currency}{product.offerPrice}</p>
//                 <button className=" max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition">
//                     Buy now
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default ProductCard
"use client";

import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const ProductCard = ({ product }) => {
  const { currency, router } = useAppContext();

  return (
    <div
      onClick={() => {
        router.push("/product/" + product._id);
        scrollTo(0, 0);
      }}
      className="flex flex-col items-start gap-1 w-full sm:max-w-[240px] md:max-w-[260px] cursor-pointer transition-transform hover:scale-[1.02]"
    >
      {/* Product Image Container */}
      <div className="relative group bg-gray-100 rounded-lg w-full h-44 sm:h-52 md:h-56 flex items-center justify-center overflow-hidden">
        {/* Limited Stock Badge */}
        <span className="absolute top-2 left-2 bg-yellow-300 text-yellow-900 px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded shadow">
          Limited Stock
        </span>

        {/* Product Image */}
        <Image
          src={product.image[0]}
          alt={product.name}
          width={800}
          height={800}
          unoptimized
          className="group-hover:scale-105 transition-transform duration-500 object-contain w-4/5 h-4/5 sm:w-full sm:h-full rounded-lg"
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

      {/* Description (Hidden on small screens) */}
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
              src={
                index < Math.floor(4)
                  ? assets.star_icon
                  : assets.star_dull_icon
              }
              alt="star_icon"
            />
          ))}
        </div>
      </div>

      {/* Price + Button */}
      <div className="flex items-center justify-between w-full mt-1 sm:mt-2">
        <p className="text-sm sm:text-base font-semibold text-green-700">
          {/* {currency}
          {product.offerPrice} */}
        </p>
        {/* <button className="hidden sm:block px-3 sm:px-4 py-1.5 text-white bg-green-600 border border-green-600 rounded-full text-xs sm:text-sm hover:bg-green-700 transition">
          Buy now
        </button> */}
      </div>
    </div>
  );
};

export default ProductCard;
