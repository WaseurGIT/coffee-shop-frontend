import React, { useContext, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await loginUser(email, password);
      //   const user = result.user;

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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const res = await googleLogin();

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: `Welcome ${res.user.displayName}`,
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full max-w-md bg-transparent opacity-100 text-white rounded-2xl p-6 sm:p-8">
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2935/2935307.png"
            alt="Coffee Logo"
            className="w-14 h-14"
          />
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-center text-gray-300 mb-6 text-sm">
          Login to Coffee Shop & Coffee POS
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600"
            />
            <span
              className="absolute right-3 top-2/3 transform -translate-y-1/2 text-xl cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
            </span>
          </div>
          <div className="flex justify-end text-sm">
            <Link>Forget Password!</Link>
          </div>
          <button
            type="submit"
            className="cursor-pointer w-full bg-[#6F4E37] hover:bg-[#5A3E2B] text-white py-2 rounded-lg font-medium transition"
          >
            Login
          </button>
        </form>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full mt-4 bg-white text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-100 transition cursor-pointer"
        >
          <FcGoogle className="mr-2 text-red-500" />
          Login with Google
        </button>

        <div className="mt-4 text-center text-sm">
          <span>Don’t have an account?</span>{" "}
          <Link to="/register" className="hover:text-[#6F4E37] hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
