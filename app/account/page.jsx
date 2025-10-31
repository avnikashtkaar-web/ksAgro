"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const AccountPage = () => {
  return (
    <div className="relative min-vh-100 d-flex align-items-center justify-content-center overflow-hidden bg-gradient-to-br from-green-100 via-white to-green-200 px-3 py-5">
      {/* Floating Gradient Blobs */}
      <motion.div
        className="position-absolute rounded-circle bg-gradient-to-r from-green-300 to-green-500 opacity-40 blur-3xl"
        initial={{ x: -100, y: -100 }}
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{
          width: "300px",
          height: "300px",
          top: "10%",
          left: "5%",
          zIndex: 0,
        }}
      />
      <motion.div
        className="position-absolute rounded-circle bg-gradient-to-r from-lime-300 to-green-400 opacity-40 blur-3xl"
        initial={{ x: 100, y: 100 }}
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{
          width: "250px",
          height: "250px",
          bottom: "10%",
          right: "5%",
          zIndex: 0,
        }}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-4 shadow-2xl p-4 p-md-5 w-100 text-center position-relative"
        style={{ maxWidth: "420px", zIndex: 5 }}
      >
        <h1 className="fw-bold mb-3 fs-2 text-success">Account Login</h1>
        <p className="text-muted mb-4">Choose your login type:</p>

        <div className="d-flex flex-column gap-3">
          {/* Customer Login */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/account/login/customer"
              className="btn btn-success w-100 py-2 fw-semibold rounded-3 shadow-sm"
            >
              Customer Login
            </Link>
          </motion.div>

          {/* Seller Login */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/account/login/seller"
              className="btn text-white w-100 py-2 fw-semibold rounded-3 shadow-sm"
              style={{ backgroundColor: "#84cc16" }}
            >
              Seller Login
            </Link>
          </motion.div>

          {/* Admin Login */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/account/login/admin"
              className="btn btn-primary w-100 py-2 fw-semibold rounded-3 shadow-sm"
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
