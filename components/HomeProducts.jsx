import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";
import { assets } from "@/assets/assets";

const HomeProducts = () => {
  const { products: contextProducts = [] } = useAppContext();

  const productsPerRow = 4;
  const initialRows = 2;

  // Fallback dummy products if context is empty
  const products =
    contextProducts.length > 0
      ? contextProducts
      : [
          { _id: "p1", name: "Kohinoor", description: "Desc", image: [assets.kohinoor], offerPrice: 450 },
          { _id: "p2", name: "Agrozyme", description: "Desc", image: [assets.agrozyme], offerPrice: 460 },
          { _id: "p3", name: "Fungi Killer", description: "Desc", image: [assets.fungi_killer], offerPrice: 470 },
          { _id: "p4", name: "Starplus", description: "Desc", image: [assets.starplus], offerPrice: 480 },
          { _id: "p5", name: "Vijay Growing", description: "Desc", image: [assets.vijay_growing], offerPrice: 490 },
          { _id: "p6", name: "Kohinoor 6", description: "Desc", image: [assets.kohinoor], offerPrice: 500 },
          { _id: "p7", name: "Kohinoor 7", description: "Desc", image: [assets.kohinoor], offerPrice: 510 },
          { _id: "p8", name: "Kohinoor 8", description: "Desc", image: [assets.kohinoor], offerPrice: 520 },
          { _id: "p9", name: "Kohinoor 9", description: "Desc", image: [assets.kohinoor], offerPrice: 530 },
          { _id: "p10", name: "Kohinoor 10", description: "Desc", image: [assets.kohinoor], offerPrice: 540 },
          { _id: "p11", name: "Kohinoor 11", description: "Desc", image: [assets.kohinoor], offerPrice: 550 },
          { _id: "p12", name: "Kohinoor 12", description: "Desc", image: [assets.kohinoor], offerPrice: 560 },
          { _id: "p13", name: "Kohinoor 13", description: "Desc", image: [assets.kohinoor], offerPrice: 570 },
        ];

  const [rowsVisible, setRowsVisible] = useState(initialRows);
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    const count = rowsVisible * productsPerRow;
    setVisibleProducts(products.slice(0, count));
  }, [rowsVisible, products]);

  const handleSeeMore = () => {
    setRowsVisible(rowsVisible + 1);
  };

  return (
    <div className="flex flex-col items-center pt-12 pb-16 w-full bg-white">
      {/* Section title */}
      <p className="text-2xl sm:text-3xl font-semibold text-gray-800 text-left w-full px-4 sm:px-8 lg:px-16">
        Popular Products
      </p>

      {/* Product grid */}
      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          gap-4 sm:gap-6 
          mt-8 
          w-full 
          px-4 sm:px-8 lg:px-16
        "
      >
        {visibleProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* See More button */}
      {visibleProducts.length < products.length && (
        <div className="w-full flex justify-center mt-10">
          <button
            onClick={handleSeeMore}
            className="
              px-10 py-3 
              text-sm sm:text-base 
              rounded-lg 
              bg-green-600 
              text-white 
              hover:bg-green-700 
              transition-all 
              duration-200 
              shadow-md
            "
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default HomeProducts;
