"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminForgotPassword() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    setShowModal(true);
    setEmail("");
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-3 py-5">
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-4 shadow-lg p-4 p-md-5 w-100"
        style={{ maxWidth: "420px" }}
      >
        {/* Title */}
        <h1 className="text-3xl fw-bold text-center text-primary mb-3">
          Forgot Password
        </h1>
        <p className="text-center text-muted mb-4">
          Enter your registered email to reset your password.
        </p>

        {/* Form */}
        <form onSubmit={handleReset} className="d-flex flex-column gap-3">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Email"
            className="form-control py-2 border border-primary-subtle rounded-3 shadow-sm focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="btn btn-primary py-2 fw-semibold rounded-3 shadow-sm"
          >
            Send Reset Link
          </motion.button>
        </form>

        {/* Footer */}
        <div className="text-center mt-4 small">
          <span className="text-secondary">Remember your password? </span>
          <Link
            href="/account/login/admin"
            className="text-primary fw-semibold text-decoration-underline"
          >
            Sign In
          </Link>
        </div>
      </motion.div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75 z-50 px-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-4 shadow-lg p-4 text-center"
              style={{ maxWidth: "350px", width: "100%" }}
            >
              <div className="text-success fs-1 mb-3">✅</div>
              <h4 className="fw-bold text-success">Success!</h4>
              <p className="text-muted mb-4">
                A password reset link has been sent to your email.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-success px-4 py-2 rounded-3"
                onClick={() => setShowModal(false)}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
