// import React from "react";
// import ProductCard from "./ProductCard";
// import { useAppContext } from "@/context/AppContext";

// const HomeProducts = () => {

//   const { products, router } = useAppContext()

//   return (
//     <div className="flex flex-col items-center pt-14">
//       <p className="text-2xl font-medium text-left w-full">Popular products</p>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-6 pb-14 w-full">
//         {products.map((product, index) => <ProductCard key={index} product={product} />)}
//       </div>
//       <button onClick={() => { router.push('/all-products') }} className="px-12 py-2.5 border rounded text-gray-500/70 hover:bg-slate-50/90 transition">
//         See more
//       </button>
//     </div>
//   );
// };

// export default HomeProducts;
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
          { _id: "p1", name: "Kohinoor 1", description: "Desc", image: [assets.kohinoor], offerPrice: 450 },
          { _id: "p2", name: "Kohinoor 2", description: "Desc", image: [assets.kohinoor1], offerPrice: 460 },
          { _id: "p3", name: "Kohinoor 3", description: "Desc", image: [assets.kohinoor2], offerPrice: 470 },
          { _id: "p4", name: "Kohinoor 4", description: "Desc", image: [assets.kohinoor], offerPrice: 480 },
          { _id: "p5", name: "Kohinoor 5", description: "Desc", image: [assets.kohinoor1], offerPrice: 490 },
          { _id: "p6", name: "Kohinoor 6", description: "Desc", image: [assets.kohinoor2], offerPrice: 500 },
          { _id: "p7", name: "Kohinoor 7", description: "Desc", image: [assets.kohinoor], offerPrice: 510 },
          { _id: "p8", name: "Kohinoor 8", description: "Desc", image: [assets.kohinoor1], offerPrice: 520 },
          { _id: "p9", name: "Kohinoor 9", description: "Desc", image: [assets.kohinoor2], offerPrice: 530 },
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
    <div className="flex flex-col items-center pt-14 w-full pb-14">
      <p className="text-2xl font-medium text-left w-full px-4 md:px-0">Popular Products</p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 px-4 md:px-0 w-full">
        {visibleProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Always show the button if there are more products */}
      {visibleProducts.length < products.length && (
        <div className="w-full flex justify-center mt-8">
          <button
            onClick={handleSeeMore}
            className="px-12 py-2.5 border rounded bg-green-600 text-white hover:bg-green-700 transition"
          >
            See more
          </button>
        </div>
      )}
    </div>
  );
};

export default HomeProducts;
