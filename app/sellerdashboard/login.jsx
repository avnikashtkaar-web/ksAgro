"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";

const SellerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: handle seller login logic here
    alert(`Seller Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Seller Login</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-green-600" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-3 border rounded-lg border-green-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-green-600" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-3 py-3 border rounded-lg border-green-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link href="/account/seller/forgot-password" className="text-green-600 hover:underline text-sm">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 hover:scale-105 transition transform"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/account/seller/signup" className="text-green-600 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;
