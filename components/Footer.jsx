import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="flex flex-col md:flex-row items-start justify-between px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-green-700">
        {/* Brand Name & Description */}
        <div className="w-full md:w-1/3">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            KashtkaarAgroBioCare
          </h1>
          <p className="mt-6 text-sm text-green-100">
            We provide high-quality fertilizers to ensure your crops grow healthy
            and abundant. Our products help farmers achieve maximum yield with
            sustainable practices.
          </p>
        </div>

        {/* Company Links */}
        <div className="w-full md:w-1/4">
          <h2 className="font-semibold text-lg mb-5">Company</h2>
          <ul className="space-y-2 text-green-100 text-sm">
            <li>
              <a className="hover:text-white transition-colors" href="#">Home</a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#">About Us</a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#">Contact Us</a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/4">
          <h2 className="font-semibold text-lg mb-5">Get in Touch</h2>
          <div className="text-green-100 text-sm space-y-2">
            <p>📞 6263895372 , 9131654462</p>
            <p>✉️ kashtkaaragrobiocare@gmail.com</p>
            <p>🏢 32 Shivani Home,Bypass Road ,  </p>
             <p>&nbsp; &nbsp; &nbsp; &nbsp;Karond Bhopal - 462038 (M.P) </p>
          </div> 
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-4 text-center text-green-200 text-xs md:text-sm">
        © 2025 KashtkaarAgroBioCare. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
