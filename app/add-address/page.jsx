"use client";
import { assets } from "@/assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const AddAddress = () => {
  const [address, setAddress] = useState({
    fullName: "",
    phoneNumber: "",
    pincode: "",
    area: "",
    city: "",
    state: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("Address Saved:", address);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen d-flex flex-column flex-md-row align-items-center justify-content-center bg-gradient-to-br from-orange-50 via-white to-orange-100 py-5 px-3 px-md-5">
        {/* Form Section */}
        <motion.form
          onSubmit={onSubmitHandler}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-4 shadow-2xl p-4 p-md-5 w-100"
          style={{ maxWidth: "500px", zIndex: 5 }}
        >
          <h2 className="text-center fs-3 fw-bold text-orange-700 mb-3">
            Add Shipping Address
          </h2>
          <p className="text-center text-muted mb-4">
            Please enter your full delivery details below 🚚
          </p>

          {/* Input Fields */}
          <div className="d-flex flex-column gap-3">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Full Name"
              className="form-control py-2"
              onChange={(e) =>
                setAddress({ ...address, fullName: e.target.value })
              }
              value={address.fullName}
              required
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Phone Number"
              className="form-control py-2"
              onChange={(e) =>
                setAddress({ ...address, phoneNumber: e.target.value })
              }
              value={address.phoneNumber}
              required
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Pincode"
              className="form-control py-2"
              onChange={(e) =>
                setAddress({ ...address, pincode: e.target.value })
              }
              value={address.pincode}
              required
            />

            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              placeholder="Address (Area and Street)"
              rows="4"
              className="form-control py-2"
              onChange={(e) =>
                setAddress({ ...address, area: e.target.value })
              }
              value={address.area}
              required
            />

            <div className="d-flex flex-column flex-md-row gap-3">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="City/District/Town"
                className="form-control py-2"
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
                value={address.city}
                required
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="State"
                className="form-control py-2"
                onChange={(e) =>
                  setAddress({ ...address, state: e.target.value })
                }
                value={address.state}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="btn btn-warning w-100 mt-4 fw-semibold text-white py-2"
            style={{
              backgroundColor: "#f97316",
              borderColor: "#f97316",
            }}
          >
            Save Address
          </motion.button>
        </motion.form>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-5 mt-md-0 ms-md-5 d-flex justify-content-center"
        >
          <Image
            src={assets.my_location_image}
            alt="Location illustration"
            className="img-fluid rounded-3 shadow-lg"
            style={{
              maxWidth: "380px",
              height: "auto",
            }}
          />
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default AddAddress;
