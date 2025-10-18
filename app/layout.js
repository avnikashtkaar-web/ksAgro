// import { Outfit } from "next/font/google";
// import "./globals.css";
//hkjhkjhkj// import { AppContextProvider } from "@/context/AppContext";
// import { Toaster } from "react-hot-toast";
// // Import slick slider CSS
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })

// export const metadata = {
//   title: "Kashtkaar Agro BioCare",
//   description: "Kashtkaar Agro BioCare PVT. LTD",
// };

// export default function RootLayout({ children }) {
//   return (
//       <html lang="en">
//         <body className={`${outfit.className} antialiased text-gray-700`} >
//           <Toaster />
//           <AppContextProvider>
//             {children}
//           </AppContextProvider>
//         </body>
//       </html>
//   );
// }
import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
// Import slick slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Import Navbar & Footer
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "Kashtkaar Agro BioCare",
  description: "Kashtkaar Agro BioCare PVT. LTD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased text-gray-700 bg-green-50`}>
        <Toaster />
        <AppContextProvider>
          {/* Navbar on every page */}
          <Navbar />

          {/* Page content */}
          <main className="mt-6">{children}</main>

          {/* Footer on every page */}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
