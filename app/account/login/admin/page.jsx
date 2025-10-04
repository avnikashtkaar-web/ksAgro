"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add real authentication
    router.push("/account/dashboard/admin");
  };

  const handleLogout = () => {
    // Clear auth tokens or context if needed
    router.push("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-blue-200 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="bg-blue-100 rounded-3xl shadow-2xl p-10 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Admin Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign In
          </motion.button>
        </form>

        <div className="mt-4 text-center text-sm text-blue-700">
          Don't have an account?{" "}
          <Link
            href="/account/signup/admin"
            className="font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </div>

        <div className="mt-2 text-center text-xs text-gray-500">
          <Link
            href="/account/forgot-password/admin"
            className="hover:underline cursor-pointer"
          >
            Forgot password? Reset here
          </Link>
        </div>

        {/* Logout / Sign Out Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Sign Out
          </button>
        </div>
      </motion.div>
    </div>
  );
}
