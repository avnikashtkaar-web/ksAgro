"use client";
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QrCode from "@/components/QrCode"; // Import QR code component
import Chatbot from "@/components/Chatbot";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      {/* <div className="px-6 md:px-16 lg:px-32"> */}
      <div className="px-6 md:px-16 lg:px-32 space-y-16 md:space-y-24">
        <HeaderSlider />
        <HomeProducts />
        <FeaturedProduct />
        <Banner />
        <NewsLetter />

        {/* Responsive QR Code Section */}
        <div className="my-10">
          <QrCode />
        </div>
      </div>
      {/* <Footer /> */}
        <Chatbot />
    </>
  );
};

export default Home;
