"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SellerSignup() {
  return (
    <div className="relative min-vh-100 d-flex align-items-center justify-content-center overflow-hidden bg-gradient-to-br from-lime-100 via-white to-lime-200 px-3 py-5">
      {/* Floating Gradient Blobs */}
      <motion.div
        className="position-absolute rounded-circle bg-gradient-to-r from-lime-400 to-yellow-400 opacity-40 blur-3xl"
        initial={{ x: -100, y: -100 }}
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -60, 60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{
          width: "280px",
          height: "280px",
          top: "10%",
          left: "5%",
          zIndex: 0,
        }}
      />
      <motion.div
        className="position-absolute rounded-circle bg-gradient-to-r from-yellow-300 to-lime-400 opacity-40 blur-3xl"
        initial={{ x: 100, y: 100 }}
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{
          width: "240px",
          height: "240px",
          bottom: "10%",
          right: "5%",
          zIndex: 0,
        }}
      />

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-4 shadow-2xl p-4 p-md-5 w-100 text-center position-relative border border-lime-300"
        style={{ maxWidth: "420px", zIndex: 5 }}
      >
        <h1 className="fw-bold text-lime-800 mb-2 fs-2">
          Create Seller Account
        </h1>
        <p className="text-muted mb-4">
          Join as a seller and start growing your business 🌿
        </p>

        {/* Signup Form */}
        <form className="d-flex flex-column gap-3">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            placeholder="Full Name"
            className="form-control rounded-3 border border-lime-300 p-3 focus-ring focus-ring-lime"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Email"
            className="form-control rounded-3 border border-lime-300 p-3 focus-ring focus-ring-lime"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="password"
            placeholder="Password"
            className="form-control rounded-3 border border-lime-300 p-3 focus-ring focus-ring-lime"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="password"
            placeholder="Confirm Password"
            className="form-control rounded-3 border border-lime-300 p-3 focus-ring focus-ring-lime"
            required
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="btn btn-success w-100 py-2 fw-semibold rounded-3 shadow-sm bg-lime-500 border-0 hover:bg-lime-600 text-white"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Redirect */}
        <div className="mt-4 text-center text-sm text-lime-700 fw-medium">
          Already have an account?{" "}
          <Link
            href="/account/login/seller"
            className="fw-semibold text-decoration-underline"
          >
            Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
