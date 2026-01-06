import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FiLogOut } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logOutUser();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-4 sm:px-8 z-50">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between relative">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2935/2935307.png"
            alt="Coffee Logo"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </div>
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 text-lg sm:text-xl font-semibold text-[#6F4E37] pacifico-regular"
        >
          Coffee Shop & Coffee POS
        </Link>

        <div className="flex items-center gap-3">
          {user ? (
            <div className="relative group flex items-center gap-2 cursor-pointer">
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border object-cover border-gray-300"
              />

              <div className="border border-[#6F4E37] rounded-full p-2 sm:p-3">
                <FiLogOut
                  className="text-[#6F4E37] hover:text-[#5A3E2B] text-lg sm:text-xl transition"
                  onClick={handleLogout}
                />
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-[#6F4E37] hover:bg-[#5A3E2B] text-white px-4 py-2 rounded-lg text-sm sm:text-base transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
