"use client";

import React from "react";
import { QRCodeSVG } from "qrcode.react";

const QrCode = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 px-4 bg-white">
      <h2 className="mb-5 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
        Scan to Visit Google
      </h2>

      <div className="p-3 bg-gray-100 rounded-2xl shadow-md">
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center">
          <QRCodeSVG
            value="https://www.google.com" // <-- Your URL here
            width="100%"
            height="100%"
            bgColor="#ffffff"
            fgColor="#000000"
          />
        </div>
      </div>

      <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xs sm:max-w-md">
        Point your camera at the QR code to open Agrokashtkaar instantly.
      </p>
    </div>
  );
};

export default QrCode;
