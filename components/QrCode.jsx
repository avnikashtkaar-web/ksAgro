"use client";

import React from "react";
import { QRCodeSVG } from "qrcode.react";

const QrCode = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <h2 className="mb-4 text-lg md:text-xl font-semibold text-gray-700">
        Scan to Visit Google
      </h2>
      <div className="w-40 h-40 md:w-56 md:h-56">
        <QRCodeSVG
          value="https://www.google.com" // <-- Your URL here
          width={224}
          height={224}
          bgColor="#ffffff"
          fgColor="#000000"
        />
      </div>
    </div>
  );
};

export default QrCode;
