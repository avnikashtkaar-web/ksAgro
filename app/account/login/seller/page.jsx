
//this code belong to disable dashboard button
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";

// export default function SellerLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
//   const router = useRouter();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // TODO: Replace with real authentication
//     setIsLoggedIn(true); // Mark as logged in
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false); // Reset login state
//     router.push("/");
//   };

//   const goToDashboard = () => {
//     router.push("/account/dashboard/seller");
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-lime-200 px-4 py-10">
//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         whileHover={{ scale: 1.02 }}
//         className="bg-lime-100 rounded-3xl shadow-2xl p-10 w-full max-w-md"
//       >
//         <h1 className="text-3xl font-bold text-lime-800 mb-6 text-center">
//           Seller Login
//         </h1>

//         {!isLoggedIn ? (
//           <form onSubmit={handleLogin} className="space-y-4">
//             <motion.input
//               whileFocus={{ scale: 1.02 }}
//               type="email"
//               placeholder="Email"
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-lime-600 transition"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <motion.input
//               whileFocus={{ scale: 1.02 }}
//               type="password"
//               placeholder="Password"
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-lime-600 transition"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="w-full bg-lime-500 text-white p-3 rounded-lg font-semibold hover:bg-lime-600 transition"
//             >
//               Sign In
//             </motion.button>

//             <div className="mt-4 text-center text-sm text-lime-700">
//               Don't have an account?{" "}
//               <Link
//                 href="/account/signup/seller"
//                 className="font-semibold hover:underline"
//               >
//                 Sign Up
//               </Link>
//             </div>

//             <div className="mt-2 text-center text-xs text-gray-500">
//               <Link
//                 href="/account/forgot-password/seller"
//                 className="hover:underline cursor-pointer"
//               >
//                 Forgot password? Reset here
//               </Link>
//             </div>
//           </form>
//         ) : (
//           <div className="space-y-4 text-center">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={goToDashboard}
//               className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
//             >
//               Go to Dashboard
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleLogout}
//               className="w-full bg-red-500 text-white p-3 rounded-lg font-semibold hover:bg-red-600 transition"
//             >
//               Sign Out
//             </motion.button>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SellerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Replace with real authentication
    router.push("/account/dashboard/seller");
  };

  const handleLogout = () => {
    // Clear auth tokens or context if needed
    router.push("/");
  };

  const goToDashboard = () => {
    router.push("/account/dashboard/seller");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-lime-200 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="bg-lime-100 rounded-3xl shadow-2xl p-10 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-lime-800 mb-6 text-center">
          Seller Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-lime-600 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-lime-600 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-lime-500 text-white p-3 rounded-lg font-semibold hover:bg-lime-600 transition"
          >
            Sign In
          </motion.button>
        </form>

        <div className="mt-4 text-center text-sm text-lime-700">
          Don't have an account?{" "}
          <Link
            href="/account/signup/seller"
            className="font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </div>

        <div className="mt-2 text-center text-xs text-gray-500">
          <Link
            href="/account/forgot-password/seller"
            className="hover:underline cursor-pointer"
          >
            Forgot password? Reset here
          </Link>
        </div>

        {/* Dashboard Button */}
        
        <div className="mt-4 text-center">
  <Link href="/sellerdashboard">
    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
      Go to Dashboard
    </button>
  </Link>
</div>

        {/* Logout / Sign Out Button */}
        <div className="mt-4 text-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Sign Out
          </button>
        </div>
      </motion.div>
    </div>
  );
}
