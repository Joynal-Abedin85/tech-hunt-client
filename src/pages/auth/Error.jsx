import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
      <p className="text-2xl md:text-3xl font-semibold mt-4">
        Oops! Page not found.
      </p>
      <p className="mt-2 text-gray-600 text-center">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
