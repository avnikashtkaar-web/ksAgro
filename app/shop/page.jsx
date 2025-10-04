"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const shopProducts = [
  { src: assets.kohinoor, title: "Kohinoor Powder 1", description: "Essential nutrients for healthier plants." },
  { src: assets.kohinoor1, title: "Kohinoor Powder 2", description: "Enhances growth and productivity." },
  { src: assets.kohinoor2, title: "Kohinoor Powder 3", description: "Perfect for all types of crops." },
  { src: assets.kohinoor, title: "Kohinoor Powder 4", description: "High-quality fertilizer for your farm." },
  { src: assets.kohinoor1, title: "Kohinoor Powder 5", description: "Boost your harvest with nutrients." },
  { src: assets.kohinoor2, title: "Kohinoor Powder 6", description: "Sustainable farming made easy." },
];

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-green-50 py-14 px-6 md:px-16">
      <h1 className="text-4xl font-bold text-green-900 text-center mb-10">Our Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {shopProducts.map(({ src, title, description }, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
            onClick={() => setSelectedProduct({ src, title, description })}
          >
            <Image
              src={src}
              alt={title}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-900/80 to-transparent p-4 text-white space-y-1">
              <p className="font-semibold text-lg">{title}</p>
              <p className="text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="relative max-w-3xl w-full">
            <Image
              src={selectedProduct.src}
              alt={selectedProduct.title}
              width={800}
              height={600}
              className="rounded-xl object-contain w-full h-auto"
            />
            <div
              className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </div>
            <div className="text-white mt-4 text-center">
              <p className="font-bold text-2xl">{selectedProduct.title}</p>
              <p className="text-sm">{selectedProduct.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
