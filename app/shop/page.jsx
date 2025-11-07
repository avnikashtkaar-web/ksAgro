"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Chatbot from "@/components/Chatbot";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const shopProducts = [
  {
    src: assets.kohinoor,
    title: "Kohinoor",
    description:
      "Kohinoor Powder delivers essential nutrients for healthier, greener, and more productive plants.",
  },
  {
    src: assets.agrozyme,
    title: "Agrozyme",
    description:
      "Agrozyme enhances plant growth, improves soil fertility, and boosts yield naturally.",
  },
  {
    src: assets.shakti,
    title: "Shakti",
    description:
      "Shakti improves soil fertility and strengthens plant growth for higher yield.",
  },
  {
    src: assets.starplus,
    title: "Starplus",
    description:
      "Starplus enhances crop health and boosts yield with balanced nutrients.",
  },
  {
    src: assets.vijay_growing,
    title: "Vijay Growing",
    description:
      "Milk Magic boosts soil fertility and promotes healthy, sustainable crop growth.",
  },
  {
    src: assets.fungi_killer,
    title: "Fungi Killer",
    description:
      "Fungi Killer protects crops from fungal infections, ensuring healthy plant growth.",
  },
];

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
const { translations } = useLanguage();
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100 py-14 px-3 md:px-16">
      {/* Header */}
     <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 text-center mb-10">
  {translations.ourProductsTitle}
</h1>

      {/* Product Grid */}
      <div className="row g-4 justify-content-center">
        {shopProducts.map(({ src, title, description }, index) => (
          <motion.div
            key={index}
            className="col-12 col-sm-6 col-lg-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelectedProduct({ src, title, description })}
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition duration-300 h-100">
              <Image
                src={src}
                alt={title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-900/85 to-transparent p-4 space-y-1">
                <p className="font-semibold text-lg text-yellow-300 drop-shadow-md">
                  {title}
                </p>
                <p className="text-sm text-green-100 leading-snug drop-shadow-sm">
                  {description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative bg-transparent rounded-xl overflow-hidden w-full max-w-3xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedProduct.src}
              alt={selectedProduct.title}
              width={800}
              height={600}
              className="rounded-xl object-contain w-full h-auto max-h-[80vh] sm:max-h-[90vh]"
            />
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-4 text-white text-3xl font-bold hover:text-green-300 transition"
            >
              &times;
            </button>
            <div className="text-center px-3 mt-5">
              <p className="font-bold text-2xl text-green-300 drop-shadow-lg">
                {selectedProduct.title}
              </p>
              <p className="text-sm text-gray-200 mt-1 max-w-2xl mx-auto leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Shop;
