"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AdminSignup() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-blue-200 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="bg-blue-100 rounded-3xl shadow-lg p-10 w-full max-w-md border border-blue-300"
      >
        <h1 className="text-4xl font-extrabold text-blue-900 mb-2 text-center">
          Create Admin Account
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Join as an admin to manage your platform efficiently ⚙️
        </p>

        {/* Signup Form */}
        <form className="space-y-4">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 transition"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 transition"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 transition"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 transition"
            required
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Redirect */}
        <div className="mt-6 text-center text-sm text-blue-700">
          Already have an account?{" "}
          <Link
            href="/account/login/admin"
            className="font-semibold hover:underline"
          >
            Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
