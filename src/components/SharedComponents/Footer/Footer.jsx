import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Coffee Shop & Coffee POS
        </p>

        {/* Right */}
        <div className="flex gap-4 text-sm">
          <span className="hover:text-white cursor-pointer">Privacy</span>
          <span className="hover:text-white cursor-pointer">Terms</span>
          <span className="hover:text-white cursor-pointer">Contact</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
