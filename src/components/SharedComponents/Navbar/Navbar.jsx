import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-4 sm:px-8">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between relative">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2935/2935307.png"
            alt="Coffee Logo"
            className="w-8 h-8"
          />
        </div>

        {/* Center - Title */}
        <Link
          to="/"
          className="absolute left-1/2 transform -translate-x-1/2 text-lg sm:text-xl font-semibold text-gray-800"
        >
          Coffee Shop & Coffee POS
        </Link>

        {/* Right - Login Button */}
        <Link
          to="/login"
          className="bg-[#6F4E37] hover:bg-[#5A3E2B] text-white px-4 py-2 rounded-lg text-sm sm:text-base transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
