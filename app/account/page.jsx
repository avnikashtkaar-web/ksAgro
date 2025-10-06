"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const AccountPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md text-center"
      >
        <h1 className="text-3xl font-bold text-green-800 mb-6">Account Login</h1>
        <p className="mb-6 text-gray-600">Choose your login type:</p>

        <div className="flex flex-col gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/account/login/customer"
              className="block bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Customer Login
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/account/login/seller"
              className="block bg-lime-500 text-white py-3 rounded-lg font-semibold hover:bg-lime-600 transition"
            >
              Seller Login
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/account/login/admin"
              className="block bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Admin Login
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AccountPage;
