import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[550px] w-full">
      {/* Banner Image */}
      <img
        className="h-full w-full object-cover"
        src="/src/assets/carBanner.jpg"
        alt="Car Banner"
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Find Your Dream Car
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl drop-shadow-md">
          Search, compare, and explore a wide range of cars tailored to your
          needs — by brand, fuel type, price and more!
        </p>
      </div>
    </div>
  );
};

export default Banner;
