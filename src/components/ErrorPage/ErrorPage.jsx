import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center text-white max-w-md">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-3">
          Oops! Page not found
        </h2>
        <p className="text-gray-200 mb-6">
          Looks like this page took a coffee break ☕  
          The page you’re looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="inline-block bg-brown-600 hover:bg-brown-700 transition px-6 py-3 rounded-lg font-medium"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
