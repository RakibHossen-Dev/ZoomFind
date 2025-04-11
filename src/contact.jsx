import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-20 mb-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-600">
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full p-3 border border-gray-300 h-[70px]  rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + Social Media */}
          {/* Contact Info + Social Media */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b border-red-600 pb-2">
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Whether you have a question about our cars, services, pricing, or
              anything else — our team is ready to assist you.
            </p>
            <ul className="space-y-4 text-gray-700 text-base mb-6">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-600 mt-1" />
                <span>
                  <strong>Address:</strong> 123 Car Street, Auto City, BD
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-red-600 mt-1" />
                <span>
                  <strong>Phone:</strong> +880 1234-567890
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-red-600 mt-1" />
                <span>
                  <strong>Email:</strong> support@zoomfinder.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="text-red-600 mt-1" />
                <span>
                  <strong>Hours:</strong> Sunday to Friday | 9AM - 8PM
                </span>
              </li>
            </ul>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Follow Us
              </h4>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
