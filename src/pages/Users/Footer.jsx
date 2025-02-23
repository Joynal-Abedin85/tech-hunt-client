import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () =>{
  return (
    <footer className="bg-[#d1a0fc] text-[#46007f] mt-20 py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo and Description */}
        <div className="flex flex-col items-start">
          <h1 className="text-white text-2xl font-bold mb-2">TechHUNT</h1>
          <p className="text-sm">
            Building the future with innovative solutions, cutting-edge tutorials, and tech resources.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li>
              <a  className="hover:text-white">About Us</a>
            </li>
            <li>
              <a className="hover:text-white">Services</a>
            </li>
            <li>
              <a  className="hover:text-white">Blog</a>
            </li>
            <li>
              <a  className="hover:text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Newsletter and Social Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-2">Stay Connected</h2>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md bg-gray-800 border border-gray-700 text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        © {new Date().getFullYear()} TechSphere. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer
