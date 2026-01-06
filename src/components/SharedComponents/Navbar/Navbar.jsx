import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-4 sm:px-8">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2935/2935307.png"
            alt="Coffee Logo"
            className="w-8 h-8"
          />
        </div>

        {/* Center - Title */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg sm:text-xl font-semibold text-gray-800">
          Coffee Shop & Coffee POS
        </h1>

        {/* Right - Login Button */}
        <button className="bg-brown-600 hover:bg-brown-700 text-white px-4 py-2 rounded-lg text-sm sm:text-base transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
