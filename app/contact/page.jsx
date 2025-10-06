"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const Contact = () => {
  // Load Google Maps JS API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [isMounted, setIsMounted] = useState(false);
  const center = { lat: 23.2599, lng: 77.4126 }; // Bhopal coordinates

  // Ensures map only renders on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-5xl"
      >
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-800 text-center mb-8">
          Get in Touch With Us
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Have questions about our products or need assistance? We’d love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left - Contact Info + Map */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-5 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <Phone className="w-6 h-6 text-green-700" />
              <span className="text-gray-700">+91 3165 4462 , 6263895371</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-5 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <Mail className="w-6 h-6 text-green-700" />
              <span className="text-gray-700">contact@kashtkaaragro.com</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-5 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <MapPin className="w-6 h-6 text-green-700" />
              <span className="text-gray-700">
                23, Shivani Homes Bypass Road, Karond, Bhopal, India
              </span>
            </motion.div>

            {/* Google Map */}
            {isMounted && (
              <div className="w-full h-64 mt-4 rounded-xl overflow-hidden shadow-md">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    center={center}
                    zoom={16}
                  >
                    <Marker position={center} />
                  </GoogleMap>
                ) : (
                  <p className="text-center text-gray-500 mt-24">Loading Map...</p>
                )}
              </div>
            )}
          </div>

          {/* Right - Contact Form */}
          <motion.form
            whileHover={{ scale: 1.01 }}
            className="bg-green-50 p-6 rounded-xl shadow-sm flex flex-col gap-4"
          >
            <div>
              <label className="block text-sm font-medium text-green-800">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-green-800">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-green-800">Message</label>
              <textarea
                rows={4}
                placeholder="Your Message..."
                className="mt-1 w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none transition"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 w-full bg-green-700 text-white py-3 rounded-lg shadow-md hover:bg-green-800 transition"
            >
              <Send className="w-5 h-5" /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
