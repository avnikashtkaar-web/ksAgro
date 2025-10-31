"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Chatbot from "@/components/Chatbot";

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen w-100 bg-gradient-to-br from-green-50 via-white to-green-100 d-flex align-items-center justify-content-center px-3 px-sm-5 py-5 py-md-5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-4 shadow-lg p-4 p-sm-5 p-md-5 w-100"
        style={{ maxWidth: "1200px" }}
      >
        {/* Title Section */}
        <h1 className="text-center fw-bold text-success mb-3 fs-3 fs-md-2">
          Get in Touch With Us
        </h1>
        <p className="text-center text-secondary mb-4 fs-6 fs-md-5">
          Have questions about our products or need assistance? We’d love to hear from you!
        </p>

        {/* Grid layout (Bootstrap + Tailwind mix) */}
        <div className="row g-4">
          {/* Left Column - Info & Map */}
          <div className="col-12 col-md-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="d-flex align-items-center gap-3 p-3 rounded-3 bg-green-50 shadow-sm mb-3 hover:shadow-md transition"
            >
              <Phone className="text-success" size={22} />
              <span className="text-secondary fs-6">+91 3165 4462 , 6263895371</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="d-flex align-items-center gap-3 p-3 rounded-3 bg-green-50 shadow-sm mb-3 hover:shadow-md transition"
            >
              <Mail className="text-success" size={22} />
              <span className="text-secondary fs-6">contact@kashtkaaragro.com</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="d-flex align-items-center gap-3 p-3 rounded-3 bg-green-50 shadow-sm hover:shadow-md transition"
            >
              <MapPin className="text-success" size={22} />
              <span className="text-secondary fs-6">
                23, Shivani Homes Bypass Road, Karond, Bhopal, India
              </span>
            </motion.div>

            {/* Embedded Google Map */}
            {isMounted && (
              <div className="w-100 mt-4 rounded-4 overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14754.95683332803!2d77.38750065!3d23.2599001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4265e9e23dbf%3A0x90259cdb1849f6d2!2sShivani%20Homes%2C%20Karond%2C%20Bhopal%2C%20Madhya%20Pradesh%20462038!5e0!3m2!1sen!2sin!4v1698679000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kashtkaar Agro Location"
                ></iframe>
              </div>
            )}
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-12 col-md-6">
            <motion.form
              whileHover={{ scale: 1.01 }}
              className="bg-green-50 rounded-3 p-4 shadow-sm"
            >
              <div className="mb-3">
                <label className="form-label fw-semibold text-success">Name</label>
                <input
                  type="text"
                  className="form-control border-success-subtle"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold text-success">Email</label>
                <input
                  type="email"
                  className="form-control border-success-subtle"
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold text-success">Message</label>
                <textarea
                  rows="4"
                  className="form-control border-success-subtle"
                  placeholder="Your Message..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn btn-success w-100 py-2 d-flex align-items-center justify-content-center gap-2 shadow-sm"
              >
                <Send size={18} /> Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.div>

      {/* Floating Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Contact;
