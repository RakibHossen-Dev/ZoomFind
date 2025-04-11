import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import Wishlist from "../src/wishlist.jsx";
import { Toaster } from "react-hot-toast";
import { WishlistProvider } from "./context/WishlistContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WishlistProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </WishlistProvider>
  </StrictMode>
);
