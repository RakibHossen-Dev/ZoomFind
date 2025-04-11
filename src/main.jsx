import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import Wishlist from "../src/wishlist.jsx";
import { Toaster } from "react-hot-toast";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import CarDetails from "../src/carDetails.jsx";
import Contact from "../src/contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WishlistProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/carDetails/:id" element={<CarDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </WishlistProvider>
  </StrictMode>
);
