"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AdminSignup() {
  return (
    <div className="relative min-vh-100 d-flex align-items-center justify-content-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-200 px-3 py-5">
      {/* Floating Gradient Blobs */}
      <motion.div
        className="position-absolute rounded-circle bg-gradient-to-r from-blue-400 to-blue-600 opacity-40 blur-3xl"
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
        className="position-absolute rounded-circle bg-gradient-to-r from-cyan-300 to-blue-400 opacity-40 blur-3xl"
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
        className="bg-white rounded-4 shadow-2xl p-4 p-md-5 w-100 text-center position-relative border border-blue-300"
        style={{ maxWidth: "420px", zIndex: 5 }}
      >
        <h1 className="fw-bold text-primary mb-2 fs-2">
          Create Admin Account
        </h1>
        <p className="text-muted mb-4">
          Join as an admin to manage your platform efficiently ⚙️
        </p>

        {/* Form */}
        <form className="d-flex flex-column gap-3">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            placeholder="Full Name"
            className="form-control rounded-3 border border-primary-subtle p-3 focus-ring focus-ring-primary"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Email"
            className="form-control rounded-3 border border-primary-subtle p-3 focus-ring focus-ring-primary"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="password"
            placeholder="Password"
            className="form-control rounded-3 border border-primary-subtle p-3 focus-ring focus-ring-primary"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="password"
            placeholder="Confirm Password"
            className="form-control rounded-3 border border-primary-subtle p-3 focus-ring focus-ring-primary"
            required
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="btn btn-primary w-100 py-2 fw-semibold rounded-3 shadow-sm"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Redirect */}
        <div className="mt-4 text-center text-sm text-primary fw-medium">
          Already have an account?{" "}
          <Link
            href="/account/login/admin"
            className="fw-semibold text-decoration-underline"
          >
            Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
