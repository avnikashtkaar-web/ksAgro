"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CustomerSignup() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-green-50 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md"
      >
        <h1 className="text-4xl font-extrabold text-green-800 mb-2 text-center">
          Create Customer Account
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center text-xs text-gray-500">
          Forgot password?{" "}
          <Link
            href="/account/forgot-password/customer"
            className="hover:underline"
          >
            Reset here
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
