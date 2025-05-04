import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-hover/30 text-text mt-20 py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 px-6 gap-6">
        {/* Logo and Description */}
        <div className="flex flex-col items-start">
        <h1 className="  flex  text-2xl  text-text">TECH<span className="bg-text border text-primary">HUNT</span></h1>
          <p className="text-sm mt-5  text-text/80">
            Building the future with innovative solutions, cutting-edge
            tutorials, and tech resources. Building the future with innovative solutions, cutting-edge
            tutorials, and tech resources.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li>
              <h1 className="hover:text-hover w-max">About Us</h1>
            </li>
            <li>
              <h1 className="hover:text-hover w-max">Services</h1>
            </li>
            <li>
              <h1 className="hover:text-hover w-max">Blog</h1>
            </li>
            <li>
              <h1 className="hover:text-hover w-max">Contact</h1>
            </li>
          </ul>
        </div>

        {/* Newsletter and Social Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-2">
            Stay Connected
          </h2>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md bg-card border border-primary text-text/80 placeholder:text-text"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-hover text-white py-2 px-4 rounded-md"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <h1  className="hover:text-hover w-max">
              <FaTwitter size={20} />
            </h1>
            <h1 className="hover:text-hover w-max">
              <FaLinkedin size={20} />
            </h1>
            <h1 className="hover:text-hover w-max">
              <FaGithub size={20} />
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border mt-6 pt-4 text-center text-sm text-text/60">
        © {new Date().getFullYear()} joynal-abedin. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
