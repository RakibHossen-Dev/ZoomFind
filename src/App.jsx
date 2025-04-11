import { FaRegHeart } from "react-icons/fa";
import "./App.css";
import Banner from "./components/Banner";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import toast from "react-hot-toast";
import { useWishlist } from "./context/WishlistContext";
import { Link } from "react-router";

function App() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serchName, setSerchName] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [fuelFilter, setFuelFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [seatFilter, setSeatFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { wishlist, addToWishlist } = useWishlist();
  const carsPerPage = 10;
  // const [wishlist, setWishlist] = useState(() => {
  //   const stored = localStorage.getItem("wishlist");
  //   return stored ? JSON.parse(stored) : [];
  // });

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(
          "https://zoomfind-server.vercel.app/cars"
        );
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-red-600 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  const filteredProducts = cars.filter((car) => {
    const matchesName =
      car.model.toLowerCase().includes(serchName.toLowerCase()) ||
      car.brand.toLowerCase().includes(serchName.toLowerCase());

    const matchesBrand =
      !brandFilter || car.brand.toLowerCase() === brandFilter.toLowerCase();

    const matchesFuel =
      !fuelFilter || car.fuelType.toLowerCase() === fuelFilter.toLowerCase();

    const matchesPrice = (() => {
      if (!priceFilter) return true;
      const price = car.price;
      if (priceFilter === "0-20000") return price <= 20000;
      if (priceFilter === "20000-40000") return price > 20000 && price <= 40000;
      if (priceFilter === "40000-60000") return price > 40000 && price <= 60000;
      if (priceFilter === "60000+") return price > 60000;
      return true;
    })();

    const matchesSeat =
      !seatFilter || car.seatingCapacity === parseInt(seatFilter);

    return (
      matchesName && matchesBrand && matchesFuel && matchesPrice && matchesSeat
    );
  });
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredProducts.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredProducts.length / carsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // console.log(cars);

  const handleAddToWishlist = (car) => {
    addToWishlist(car);
    // const isAlreadyInWishlist = wishlist.find((item) => item._id === car._id);
    // if (!isAlreadyInWishlist) {
    //   const updatedWishlist = [...wishlist, car];
    //   setWishlist(updatedWishlist);
    //   localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    //   toast.success("This car is added in your wishlist!");
    // } else {
    //   toast.error("This car is already in your wishlist!");
    // }
  };

  return (
    <>
      <Banner></Banner>
      <div className="bg-white p-5  w-11/12 mx-auto my-10 rounded-xl border border-gray-200">
        <div className="flex items-center gap-2 md:gap-4">
          <input
            type="search"
            className="p-3 w-full border  shadow-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Find you dream car...."
            value={serchName}
            onChange={(e) => setSerchName(e.target.value)}
          />
          <button className="bg-red-500 px-4 md:px-6 text-white py-3 rounded-md">
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 ">
          {/* Brand */}
          <select
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
            className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Choose Brand</option>
            <option value="honda">Honda</option>
            <option value="toyota">Toyota</option>
            <option value="ford">Ford</option>
            <option value="bmw">BMW</option>
            <option value="tesla">Tesla </option>
            <option value="kia">Kia</option>
            <option value="nissan">Nissan</option>
          </select>

          {/* Fuel Type */}
          <select
            value={fuelFilter}
            onChange={(e) => setFuelFilter(e.target.value)}
            className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Fuel Type</option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
          </select>

          {/* Price Range */}
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Price Range</option>
            <option value="0-20000">$0 - $20,000</option>
            <option value="20000-40000">$20,000 - $40,000</option>
            <option value="40000-60000">$40,000 - $60,000</option>
            <option value="60000+">$60,000+</option>
          </select>

          {/* Seating Capacity */}
          <select
            value={seatFilter}
            onChange={(e) => setSeatFilter(e.target.value)}
            className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Seating Capacity</option>
            <option value="2">2 Seats</option>
            <option value="4">4 Seats</option>
            <option value="5">5 Seats</option>
            <option value="7">7+ Seats</option>
          </select>
        </div>
      </div>
      {currentCars && currentCars.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 w-11/12 mx-auto">
          {currentCars.map((car) => (
            <div
              key={car._id}
              className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Wishlist Button - Top Right */}
              <button
                onClick={() => handleAddToWishlist(car)}
                className="absolute top-3 right-3 bg-white border border-red-500 text-red-500 p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition duration-300"
                title="Add to Wishlist"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button>

              {/* Car Image */}
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-52 object-cover"
              />

              {/* Car Info */}
              <div className="p-5 space-y-2">
                <h2 className="text-xl font-semibold">
                  {car.brand} {car.model}
                </h2>
                <p className="text-gray-600 text-sm">
                  {car.description.slice(0, 80)}...
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-red-600 font-bold">${car.price}</span>
                  <span className="text-sm text-gray-500">{car.fuelType}</span>
                </div>
                <p className="text-sm text-gray-500">
                  Seats: {car.seatingCapacity}
                </p>

                {/* View Details Button */}
                <Link to={`/carDetails/${car._id}`}>
                  <button className="cursor-pointer mt-3 w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-md hover:bg-red-700 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="flex flex-col justify-center items-center min-h-[400px] text-xl text-red-600 font-medium">
          🚗 Sorry! No cars found matching your criteria.
        </p>
      )}

      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
          className="p-2 bg-red-500 text-white rounded-full"
        >
          <IoIosArrowBack />
        </button>
        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`px-3 py-1 rounded-full ${
              num === currentPage
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {num}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
          }
          className="p-2 bg-red-500 text-white rounded-full"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </>
  );
}

export default App;
