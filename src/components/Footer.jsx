import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-500 text-gray-100 py-10 ">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and description */}
        <div>
          <h2 className="text-2xl font-bold text-white">ZoomFind</h2>
          <p className="mt-2 text-sm text-gray-100">
            Discover your perfect ride. Explore thousands of cars, filter your
            needs, and find the one that fits you best.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                All Cars
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-sm text-gray-100 mt-10 border-t border-white pt-5">
        © {new Date().getFullYear()} ZoomFind. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
