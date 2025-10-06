"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CustomerForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    // TODO: Add actual password reset logic
    alert("Password reset link sent to your email!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-200 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="bg-green-100 rounded-3xl shadow-2xl p-10 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Forgot Password
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your email to reset your password.
        </p>

        <form onSubmit={handleReset} className="space-y-4">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Send Reset Link
          </motion.button>
        </form>

        <div className="mt-4 text-center text-sm text-green-700">
          Remember your password?{" "}
          <Link
            href="/account/login/customer"
            className="font-semibold hover:underline"
          >
            Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
