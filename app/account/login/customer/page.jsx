"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CustomerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/account/dashboard/customer");
  };

  const handleLogout = () => {
    // Here you can also clear any auth tokens or context if needed
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md transform hover:scale-105 transition-transform duration-300"
      >
        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Customer Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center text-xs text-gray-500">
          <Link
            href="/account/forgot-password/customer"
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
