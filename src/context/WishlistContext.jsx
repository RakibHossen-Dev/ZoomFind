import React, { createContext, useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Add item to wishlist
  const addToWishlist = (item) => {
    const isAlreadyInWishlist = wishlist.some(
      (wishlistItem) => wishlistItem._id === item._id
    );

    if (!isAlreadyInWishlist) {
      const updatedWishlist = [...wishlist, item];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      toast.success("Item added to wishlist!");
    } else {
      toast.error("This item is already in your wishlist!");
    }
  };

  // Remove item from wishlist
  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((car) => car._id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
