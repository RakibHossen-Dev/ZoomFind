import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(
          `https://zoomfind-server.vercel.app/cars/${id}`
        );
        setCar(response.data);
      } catch (error) {
        console.error("Error fetching car details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-gray-700 border-dashed rounded-full animate-spin"></div>
      </div>
    );

  if (!car)
    return <div className="pt-20 text-center text-gray-700">Car not found</div>;

  return (
    <div className="pt-20 px-6">
      <div className="md:w-11/12 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="lg:w-1/2 h-fit  items-center lg:mt-20"
          />
          <div className="lg:w-1/2 p-6">
            <h1 className="text-4xl font-semibold text-gray-800">
              {car.brand} {car.model}
            </h1>
            <p className="text-xl text-red-500 mt-2">${car.price}</p>
            <p className="mt-4 text-gray-700">{car.description}</p>

            <div className="mt-6">
              <div className="flex justify-between">
                <p className="text-lg font-medium text-gray-800">Year:</p>
                <p className="text-lg text-gray-600">{car.year}</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-lg font-medium text-gray-800">
                  Transmission:
                </p>
                <p className="text-lg text-gray-600">{car.transmission}</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-lg font-medium text-gray-800">Mileage:</p>
                <p className="text-lg text-gray-600">{car.mileage} km/l</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-lg font-medium text-gray-800">Fuel Type:</p>
                <p className="text-lg text-gray-600">{car.fuelType}</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-lg font-medium text-gray-800">
                  Seating Capacity:
                </p>
                <p className="text-lg text-gray-600">{car.seatingCapacity}</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-lg font-medium text-gray-800">
                  Color Options:
                </p>
                <p className="text-lg text-gray-600">
                  {car.colorOptions.join(", ")}
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              {car.availability ? (
                <span className="text-green-500 font-semibold">Available</span>
              ) : (
                <span className="text-red-500 font-semibold">
                  Not Available
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
