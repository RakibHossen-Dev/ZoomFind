// import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useWishlist } from "./context/WishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  return (
    <div className="pt-24 min-h-screen ">
      <h2 className="text-3xl font-bold text-center mb-10 text-red-600">
        Your Wishlist ({wishlist.length})
      </h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-11/12 mx-auto">
          {wishlist.map((car) => (
            <div
              key={car._id}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              {/* Remove from Wishlist Button */}
              <button
                onClick={() => removeFromWishlist(car._id)}
                className="absolute top-3 right-3 bg-white border border-red-500 text-red-500 p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition duration-300"
                title="Remove from Wishlist"
              >
                <RxCross1 size={18} />
              </button>

              {/* Car Image */}
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-52 object-cover"
              />

              {/* Car Details */}
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-bold text-gray-800">
                  {car.brand} {car.model}
                </h3>
                <p className="text-gray-600 text-sm">{car.description}</p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-red-600 font-semibold text-lg">
                    ${car.price}
                  </span>
                  <span className="text-sm text-gray-500">{car.fuelType}</span>
                </div>

                <p className="text-sm text-gray-500">
                  Seats: {car.seatingCapacity}
                </p>

                <button className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
