'use client';
import React, { useEffect, useState } from "react";
import { assets, productsDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";
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
    <div className="flex-1 min-h-screen flex flex-col justify-between bg-gradient-to-br from-green-50 via-lime-50 to-green-100">
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full md:p-10 p-4">
          <h2 className="pb-4 text-2xl font-semibold text-green-800">All Products</h2>

          {/* Desktop Table */}
          <div className="hidden md:block max-w-6xl w-full mx-auto overflow-hidden rounded-xl shadow-md bg-gradient-to-r from-green-100 via-lime-50 to-green-200 border border-green-200">
            <div className="overflow-y-auto max-h-[70vh]">
              <table className="table-fixed w-full">
                <thead className="text-gray-900 text-sm text-left bg-green-200 sticky top-0 z-10 shadow-sm">
                  <tr>
                    <th className="w-2/5 px-6 py-3 font-semibold truncate">Product</th>
                    <th className="px-4 py-3 font-semibold truncate">Category</th>
                    <th className="px-4 py-3 font-semibold truncate">Price</th>
                    <th className="px-4 py-3 font-semibold truncate">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-800">
                  {products.map((product) => (
                    <motion.tr
                      key={product._uniqueId}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.01, backgroundColor: "#dcfce7" }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-gray-300"
                    >
                      <td className="px-6 py-4 flex items-center space-x-3">
                        <div className="bg-gray-100 rounded p-2">
                          <Image
                            src={product.image[0]}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded"
                            width={64}
                            height={64}
                          />
                        </div>
                        <span className="truncate font-medium text-gray-900">{product.name}</span>
                      </td>
                      <td className="px-4 py-4">{product.category}</td>
                      <td className="px-4 py-4 font-semibold text-green-700">${product.offerPrice}</td>
                      <td className="px-4 py-4 flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => router.push(`/product/${product._uniqueId}`)}
                          className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
                        >
                          Visit
                          <Image className="h-4 w-4" src={assets.redirect_icon} alt="redirect" />
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
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden flex flex-col gap-4 mt-4">
            {products.map((product) => (
              <motion.div
                key={product._uniqueId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-green-100 via-lime-50 to-green-200 rounded-xl shadow-md p-4 flex flex-col gap-3 border border-green-200"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 rounded p-2">
                    <Image
                      src={product.image[0]}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-green-800 truncate">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.category}</p>
                    <p className="text-sm text-green-700 font-medium">${product.offerPrice}</p>
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
