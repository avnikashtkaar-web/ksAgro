// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Leaf, Users, Target, Award } from "lucide-react";
// import Image from "next/image";

// const About = () => {
//   return (
//     <div className="bg-gradient-to-b from-green-50 via-white to-green-100 min-h-screen">
//       {/* Hero Section */}
//       <section className="relative py-20 text-center">
//         <motion.h1
//           className="text-4xl md:text-6xl font-extrabold text-green-800"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           About Us
//         </motion.h1>
//         <motion.p
//           className="mt-6 max-w-2xl mx-auto text-lg text-gray-600"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           At <span className="font-bold text-green-700">KashtkaarAgroBioCare</span>, 
//           we are committed to empowering farmers with sustainable, eco-friendly solutions 
//           that boost productivity and protect the environment.
//         </motion.p>
//       </section>

//       {/* Mission & Vision */}
//       <section className="px-6 md:px-20 lg:px-32 py-16 grid md:grid-cols-2 gap-12 items-center">
//         <motion.div
//           initial={{ x: -80, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           <Image
//             src="/images/farmers.jpg" // replace with your image
//             alt="Farmers"
//             width={600}
//             height={400}
//             className="rounded-2xl shadow-lg"
//           />
//         </motion.div>
//         <motion.div
//           initial={{ x: 80, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.7 }}
//           className="space-y-6"
//         >
//           <h2 className="text-3xl font-bold text-green-800">Our Mission</h2>
//           <p className="text-gray-700 leading-relaxed">
//             Our mission is to provide high-quality fertilizers and bio-products 
//             that ensure healthier crops, higher yields, and sustainable farming practices.
//           </p>

//           <h2 className="text-3xl font-bold text-green-800">Our Vision</h2>
//           <p className="text-gray-700 leading-relaxed">
//             To become a trusted partner for every farmer by revolutionizing agriculture 
//             with innovation, care, and responsibility.
//           </p>
//         </motion.div>
//       </section>

//       {/* Core Values */}
//       <section className="px-6 md:px-20 lg:px-32 py-16 bg-green-800 text-white rounded-t-3xl">
//         <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
//         <div className="grid md:grid-cols-3 gap-10">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="bg-green-700 rounded-xl p-8 shadow-lg flex flex-col items-center text-center space-y-4"
//           >
//             <Leaf className="w-10 h-10 text-lime-400" />
//             <h3 className="font-semibold text-xl">Sustainability</h3>
//             <p className="text-sm">
//               We promote eco-friendly solutions that protect soil and environment.
//             </p>
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="bg-green-700 rounded-xl p-8 shadow-lg flex flex-col items-center text-center space-y-4"
//           >
//             <Users className="w-10 h-10 text-lime-400" />
//             <h3 className="font-semibold text-xl">Community</h3>
//             <p className="text-sm">
//               We empower farming communities with knowledge and resources.
//             </p>
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="bg-green-700 rounded-xl p-8 shadow-lg flex flex-col items-center text-center space-y-4"
//           >
//             <Award className="w-10 h-10 text-lime-400" />
//             <h3 className="font-semibold text-xl">Excellence</h3>
//             <p className="text-sm">
//               We strive for innovation and excellence in every product we deliver.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="text-center py-16 px-6">
//         <motion.h2
//           className="text-3xl font-bold text-green-800"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           Join Us on Our Journey
//         </motion.h2>
//         <p className="mt-4 text-gray-700 max-w-xl mx-auto">
//           Together, let’s create a greener, healthier, and more sustainable future for farming.
//         </p>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           className="mt-8 px-8 py-3 bg-green-700 text-white rounded-full shadow hover:bg-green-800 transition"
//         >
//           Learn More
//         </motion.button>
//       </section>
//     </div>
//   );
// };

// export default About;
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Leaf, Users, Award } from "lucide-react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const sliderData = [
    { src: "/images/kohinoor.jpg", heading: "Empowering Farmers", subtitle: "Sustainable solutions for healthier crops." },
    { src: "/images/kohinoor.jpg", heading: "Boosting Productivity", subtitle: "Innovative bio-products for maximum yield." },
    { src: "/images/kohinoor.jpg", heading: "Eco-Friendly Agriculture", subtitle: "Protecting soil and environment together." },
    { src: "/images/kohinoor.jpg", heading: "Trusted by Farmers", subtitle: "Delivering quality products for every farm." },
    { src: "/images/kohinoor.jpg", heading: "Innovation in Farming", subtitle: "Modern techniques for sustainable growth." },
    { src: "/images/kohinoor.jpg", heading: "Healthy Crops", subtitle: "Better yield, better livelihood." },
    { src: "/images/kohinoor.jpg", heading: "Community Support", subtitle: "Empowering farmers with knowledge and care." },
    { src: "/images/kohinoor.jpg", heading: "Sustainable Growth", subtitle: "Eco-conscious solutions for farming." },
    { src: "/images/kohinoor.jpg", heading: "Innovation & Excellence", subtitle: "Quality products for modern agriculture." },
    { src: "/images/kohinoor.jpg", heading: "Your Farming Partner", subtitle: "Together towards a greener future." },
  ];

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
      img: "/images/kohinoor.jpg", // Place your first card image here
      title: "Eco Solutions",
      desc: "We offer eco-friendly fertilizers and bio-care solutions.",
    },
    {
      img: "/images/kohinoor.jpg", // Place your second card image here
      title: "Farmer Support",
      desc: "Helping farmers grow with knowledge and innovation.",
    },
    {
      img: "/images/kohinoor.jpg", // Place your third card image here
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
      <section className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
        <Slider {...sliderSettings}>
          {sliderData.map((slide, index) => (
            <div key={index} className="relative h-[500px]">
              <Image src={slide.src} alt={`Slide ${index + 1}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
                <motion.h1
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
                >
                  {slide.heading}
                </motion.h1>
                <motion.p
                  key={`subtitle-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="mt-4 text-lg md:text-2xl text-white/90"
                >
                  {slide.subtitle}
                </motion.p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 md:px-20 lg:px-32 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ x: -80, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
          <Image src="/images/kohinoor.jpg" alt="Farmers" width={600} height={400} className="rounded-2xl shadow-lg" />
        </motion.div>
        <motion.div initial={{ x: 80, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="space-y-6">
          <h2 className="text-3xl font-bold text-green-800">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide high-quality fertilizers and bio-products that ensure healthier crops, higher yields, and sustainable farming practices.
          </p>
          <h2 className="text-3xl font-bold text-green-800">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To become a trusted partner for every farmer by revolutionizing agriculture with innovation, care, and responsibility.
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="px-6 md:px-20 lg:px-32 py-16 bg-green-800 text-white rounded-t-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-green-700 rounded-xl p-8 shadow-lg flex flex-col items-center text-center space-y-4">
            <Leaf className="w-10 h-10 text-lime-400" />
            <h3 className="font-semibold text-xl">Sustainability</h3>
            <p className="text-sm">We promote eco-friendly solutions that protect soil and environment.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-green-700 rounded-xl p-8 shadow-lg flex flex-col items-center text-center space-y-4">
            <Users className="w-10 h-10 text-lime-400" />
            <h3 className="font-semibold text-xl">Community</h3>
            <p className="text-sm">We empower farming communities with knowledge and resources.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-green-700 rounded-xl p-8 shadow-lg flex flex-col items-center text-center space-y-4">
            <Award className="w-10 h-10 text-lime-400" />
            <h3 className="font-semibold text-xl">Excellence</h3>
            <p className="text-sm">We strive for innovation and excellence in every product we deliver.</p>
          </motion.div>
        </div>
      </section>

      {/* Three Cards Before Footer - With Images + Stagger + Hover */}
      <motion.section
        className="px-6 md:px-20 lg:px-32 py-16 grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cardData.map((card, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
            className="bg-white rounded-xl shadow-lg text-center cursor-pointer overflow-hidden"
          >
            <div className="relative h-48 w-full">
              <Image src={card.img} alt={card.title} fill className="object-cover" />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-bold text-lg">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Call to Action */}
      <section className="text-center py-16 px-6">
        <motion.h2 className="text-3xl font-bold text-green-800" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
          Join Us on Our Journey
        </motion.h2>
        <p className="mt-4 text-gray-700 max-w-xl mx-auto">
          Together, let’s create a greener, healthier, and more sustainable future for farming.
        </p>
        <motion.button whileHover={{ scale: 1.05 }} className="mt-8 px-8 py-3 bg-green-700 text-white rounded-full shadow hover:bg-green-800 transition">
          Learn More
        </motion.button>
      </section>
    </div>
  );
};

export default About;
