'use client';
import React, { useEffect, useState } from "react";
import { assets, productsDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";
//import Footer from "@/components/seller/Footer";
import Loading from "@/components/Loading";

const ProductList = () => {
  const { router } = useAppContext();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Assign unique IDs
  const generateUniqueProducts = (data) =>
    data.map((product, index) => ({ ...product, _uniqueId: `${index}-${product.name}` }));

  const fetchSellerProduct = async () => {
    const uniqueProducts = generateUniqueProducts(productsDummyData);
    setProducts(uniqueProducts);
    setLoading(false);
  };

  useEffect(() => {
    fetchSellerProduct();
  }, []);

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between bg-green-50">
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full md:p-10 p-4">
          <h2 className="pb-4 text-lg font-medium text-green-800">All Products</h2>

          {/* Desktop Table */}
          <div className="hidden md:block flex-col items-center max-w-5xl w-full overflow-hidden rounded-md bg-white border border-gray-300">
            <table className="table-fixed w-full overflow-hidden">
              <thead className="text-gray-900 text-sm text-left bg-green-100">
                <tr>
                  <th className="w-2/5 px-4 py-3 font-medium truncate">Product</th>
                  <th className="px-4 py-3 font-medium truncate">Category</th>
                  <th className="px-4 py-3 font-medium truncate">Price</th>
                  <th className="px-4 py-3 font-medium truncate">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {products.map((product) => (
                  <tr key={product._uniqueId} className="border-t border-gray-300">
                    <td className="px-4 py-3 flex items-center space-x-3">
                      <div className="bg-gray-200 rounded p-2">
                        <Image
                          src={product.image[0]}
                          alt={product.name}
                          className="w-16 h-16 object-cover"
                          width={64}
                          height={64}
                        />
                      </div>
                      <span className="truncate">{product.name}</span>
                    </td>
                    <td className="px-4 py-3">{product.category}</td>
                    <td className="px-4 py-3">${product.offerPrice}</td>
                    <td className="px-4 py-3 flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push(`/product/${product._uniqueId}`)}
                        className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
                      >
                        Visit
                        <Image
                          className="h-4 w-4"
                          src={assets.redirect_icon}
                          alt="redirect"
                        />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push(`/seller/edit-product/${product._uniqueId}`)}
                        className="px-3 py-2 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600 transition"
                      >
                        Edit
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => alert(`Delete ${product.name}`)}
                        className="px-3 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition"
                      >
                        Delete
                      </motion.button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden flex flex-col gap-4">
            {products.map((product) => (
              <motion.div
                key={product._uniqueId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gray-200 rounded p-2">
                    <Image
                      src={product.image[0]}
                      alt={product.name}
                      className="w-20 h-20 object-cover"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-green-800 truncate">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.category}</p>
                    <p className="text-sm text-green-700">${product.offerPrice}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push(`/product/${product._uniqueId}`)}
                    className="flex-1 bg-green-600 text-white py-2 rounded-md shadow hover:bg-green-700 transition"
                  >
                    Visit
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push(`/seller/edit-product/${product._uniqueId}`)}
                    className="flex-1 bg-yellow-500 text-white py-2 rounded-md shadow hover:bg-yellow-600 transition"
                  >
                    Edit
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => alert(`Delete ${product.name}`)}
                    className="flex-1 bg-red-500 text-white py-2 rounded-md shadow hover:bg-red-600 transition"
                  >
                    Delete
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      
    </div>
  );
};

export default ProductList;
