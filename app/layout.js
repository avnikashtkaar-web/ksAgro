import "../i18n";
import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext"; // ✅ Add this line

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "Kashtkaar Agro BioCare",
  description: "Kashtkaar Agro BioCare PVT. LTD",
  icons: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased text-gray-700 bg-green-50`}
      >
        <Toaster />
        <LanguageProvider> {/* ✅ Now it’s defined */}
          <AppContextProvider>
            {/* Navbar on every page */}
            <Navbar />

            {/* Page content */}
            <main className="mt-6">{children}</main>

            {/* Footer on every page */}
            <Footer />
          </AppContextProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
