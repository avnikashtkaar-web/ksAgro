"use client";
import React from "react";
import { motion } from "framer-motion";
import { Leaf, Users, Award } from "lucide-react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chatbot from "@/components/Chatbot";


const About = () => {
  const sliderData = [
    { src: "/images/agrozyme.png", heading: "Empowering Farmers", subtitle: "Sustainable solutions for healthier crops." },
    { src: "/images/kohinoor.png", heading: "Boosting Productivity", subtitle: "Innovative bio-products for maximum yield." },
    { src: "/images/kohinoor.png", heading: "Eco-Friendly Agriculture", subtitle: "Protecting soil and environment together." },
    { src: "/images/kohinoor.png", heading: "Trusted by Farmers", subtitle: "Delivering quality products for every farm." },
  ];
// base branch
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1200,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const cardData = [
    {
      img: "/images/kohinoor.png",
      title: "Eco Solutions",
      desc: "We offer eco-friendly fertilizers and bio-care solutions.",
    },
    {
      img: "/images/agrozyme.png",
      title: "Farmer Support",
      desc: "Helping farmers grow with knowledge and innovation.",
    },
    {
      img: "/images/starplus.png",
      title: "Trusted Quality",
      desc: "Delivering excellence with every product we provide.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 via-white to-green-100 min-h-screen">
      {/* About Us Pre-Header */}
      <section className="text-center py-6 bg-green-50">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-green-800"
        >
          ABOUT US
        </motion.h2>
      </section>

      {/* Hero Slider */}
      <section className="relative container mx-auto rounded-2xl overflow-hidden shadow-2xl px-0">
        <Slider {...sliderSettings}>
          {sliderData.map((slide, index) => (
            <div key={index} className="relative h-[300px] sm:h-[400px] md:h-[500px]">
              <Image src={slide.src} alt={`Slide ${index + 1}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-3 text-center">
                <motion.h1
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
                >
                  {slide.heading}
                </motion.h1>
                <motion.p
                  key={`subtitle-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="mt-3 sm:mt-4 text-sm sm:text-lg md:text-2xl text-white/90"
                >
                  {slide.subtitle}
                </motion.p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Mission & Vision */}
      <section className="container py-16">
        <div className="row align-items-center g-5">
          <motion.div
            className="col-12 col-md-6"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/kohinoor.png"
              alt="Farmers"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-100 object-contain"
            />
          </motion.div>

          <motion.div
            className="col-12 col-md-6"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-green-800">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to provide high-quality fertilizers and bio-products that ensure
                healthier crops, higher yields, and sustainable farming practices.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-green-800">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To become a trusted partner for every farmer by revolutionizing agriculture with
                innovation, care, and responsibility.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-4 md:px-10 py-16 bg-green-800 text-white rounded-t-3xl">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="row g-4">
            {[
              {
                icon: <Leaf className="w-10 h-10 text-lime-400" />,
                title: "Sustainability",
                desc: "We promote eco-friendly solutions that protect soil and environment.",
              },
              {
                icon: <Users className="w-10 h-10 text-lime-400" />,
                title: "Community",
                desc: "We empower farming communities with knowledge and resources.",
              },
              {
                icon: <Award className="w-10 h-10 text-lime-400" />,
                title: "Excellence",
                desc: "We strive for innovation and excellence in every product we deliver.",
              },
            ].map((val, i) => (
              <div key={i} className="col-12 col-md-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-700 rounded-xl p-8 shadow-lg text-center space-y-4 h-100"
                >
                  {val.icon}
                  <h3 className="font-semibold text-xl">{val.title}</h3>
                  <p className="text-sm">{val.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <motion.section
        className="container py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="row g-4">
          {cardData.map((card, i) => (
            <div key={i} className="col-12 col-md-4">
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
                className="bg-white rounded-xl shadow-lg text-center overflow-hidden h-100"
              >
                <div className="relative h-48 w-full">
                  <Image src={card.img} alt={card.title} fill className="object-cover" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-lg">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <section className="text-center py-16 px-4">
        <motion.h2
          className="text-3xl font-bold text-green-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Join Us on Our Journey
        </motion.h2>
        <p className="mt-4 text-gray-700 max-w-xl mx-auto">
          Together, let’s create a greener, healthier, and more sustainable future for farming.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-8 py-3 bg-green-700 text-white rounded-full shadow hover:bg-green-800 transition"
        >
          Learn More
        </motion.button>
      </section>

      <Chatbot />
    </div>
  );
};

export default About;
