// import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router";
import { useWishlist } from "../context/WishlistContext";

const Navbar = () => {
  const { wishlist } = useWishlist();

  return (
    <nav className="bg-gradient-to-r from-red-600 to-red-500 shadow-md fixed top-0 left-0 z-10 w-full">
      <div className="max-w-6xl mx-auto px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold tracking-wide">
          <Link to="/">ZoomFind</Link>
        </h1>

        {/* Right Side Items */}
        <div className="flex items-center gap-5">
          {/* Wishlist Icon */}
          <Link to="/wishlist" className="relative ">
            <FaRegHeart className="text-white text-2xl hover:scale-110 transition" />
            <span className="absolute -top-2 -right-2 bg-white text-red-600 text-xs px-1.5 py-0.5 rounded-full font-bold ">
              {wishlist.length}
            </span>
          </Link>

          {/* Login Button */}
          <Link to="/contact">
            <button className="bg-white text-red-600 hover:bg-red-100 border border-white px-4 py-1.5 rounded-md text-sm font-medium transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
