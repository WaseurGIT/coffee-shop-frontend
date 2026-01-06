import React, { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-transparent opacity-100 text-white rounded-2xl p-6 sm:p-8">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2935/2935307.png"
            alt="Coffee Logo"
            className="w-14 h-14"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-center text-gray-300 mb-6 text-sm">
          Login to Coffee Shop & Coffee POS
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium  mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium  mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600 relative"
            />
            <span
              className="absolute right-11 bottom-[132px] text-xl cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
            </span>
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full bg-[#6F4E37] hover:bg-[#5A3E2B] text-white py-2 rounded-lg font-medium transition"
          >
            Login
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-4 text-center text-sm">
          <span className="">Don’t have an account?</span>{" "}
          <Link to="/register" className="hover:text-[#6F4E37] hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
