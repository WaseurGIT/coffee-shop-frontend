import React, { useContext, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password must have at least 6 characters");
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Password must contain at least one special character");
      return;
    } else {
      setError("");
    }

    try {
      const result = await createUser(email, password);
      const user = result.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Account Created Successfully",
        showConfirmButton: false,
        timer: 2000,
      });

      form.reset();
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(error.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };

  return (
    <div
      className="min-h-screen relative bg-cover bg-center px-4 pt-16 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute top-16 left-0 right-0 bottom-0 bg-black/60"></div>

      <div className="relative z-10 w-full max-w-md bg-transparent text-white rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2935/2935307.png"
            alt="Coffee Logo"
            className="w-14 h-14"
          />
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">Create Account</h2>
        <p className="text-center text-gray-300 mb-6 text-sm">
          Register to Coffee Shop & Coffee POS
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 border bg-transparent text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              required
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-2 border bg-transparent text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border bg-transparent text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 border bg-transparent text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
            </span>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="cursor-pointer w-full bg-[#6F4E37] hover:bg-[#5A3E2B] text-white py-2 rounded-lg font-medium transition"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          <span>Already have an account?</span>{" "}
          <Link to="/login" className="hover:text-[#6F4E37] hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
