import { FaRegHeart } from "react-icons/fa";
import "./App.css";
import Banner from "./components/Banner";

function App() {
  const carsData = [
    {
      id: 1,
      brand: "Honda",
      model: "Civic 2022",
      price: 22000,
      fuelType: "Petrol",
      seatingCapacity: 5,
      image: "https://i.ibb.co.com/Mkr3DVxM/image.png",
      description:
        "A stylish and fuel-efficient sedan with advanced safety features and smooth handling.",
    },
    {
      id: 2,
      brand: "Toyota",
      model: "Corolla Hybrid",
      price: 25000,
      fuelType: "Hybrid",
      seatingCapacity: 5,
      image: "https://i.ibb.co.com/jvJX21jc/image.png",
      description:
        "Eco-friendly hybrid sedan that offers great mileage and a comfortable ride.",
    },
    {
      id: 3,
      brand: "Tesla",
      model: "Model 3",
      price: 45000,
      fuelType: "Electric",
      seatingCapacity: 5,
      image: "https://i.ibb.co.com/Xxv4vWZB/image.png",
      description:
        "A futuristic electric car with autopilot, long-range battery, and impressive acceleration.",
    },
    {
      id: 4,
      brand: "BMW",
      model: "X5 2023",
      price: 60000,
      fuelType: "Petrol",
      seatingCapacity: 7,
      image: "https://i.ibb.co.com/nM72vwVy/image.png",
      description:
        "A luxurious SUV with premium features, spacious interior, and powerful performance.",
    },
    {
      id: 5,
      brand: "Ford",
      model: "Mustang GT",
      price: 55000,
      fuelType: "Petrol",
      seatingCapacity: 4,
      image: "https://i.ibb.co.com/3Yfpdv92/image.png",
      description:
        "Iconic muscle car with roaring engine, sleek design, and thrilling driving experience.",
    },
    {
      id: 6,
      brand: "Kia",
      model: "Seltos 2022",
      price: 21000,
      fuelType: "Diesel",
      seatingCapacity: 5,
      image: "https://i.ibb.co.com/tPm4CyJb/image.png",
      description:
        "Smart SUV with bold styling, advanced safety features, and excellent mileage.",
    },
    {
      id: 7,
      brand: "Hyundai",
      model: "Elantra 2023",
      price: 24000,
      fuelType: "Petrol",
      seatingCapacity: 5,
      image: "https://i.ibb.co.com/zVTQHHmG/image.png",
      description:
        "Modern sedan with dynamic performance, stylish exterior, and high-tech interior.",
    },
    {
      id: 8,
      brand: "Nissan",
      model: "Leaf EV",
      price: 32000,
      fuelType: "Electric",
      seatingCapacity: 5,
      image: "https://i.ibb.co.com/sJ3KM1rH/image.png",
      description:
        "Affordable electric hatchback with zero emissions and a smooth, quiet ride.",
    },
  ];

  return (
    <>
      <Banner></Banner>
      <div className="bg-white p-5  w-11/12 mx-auto my-10 rounded-xl border border-gray-200">
        <div className="flex items-center gap-4">
          <input
            type="search"
            className="p-3 w-full border border-gray-300 rounded-md"
            placeholder="Find you dream car...."
          />
          <button className="bg-red-500 px-6 text-white py-3 rounded-md">
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 ">
          {/* Brand */}
          <select className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500">
            <option value="">Choose Brand</option>
            <option value="honda">Honda</option>
            <option value="toyota">Toyota</option>
            <option value="ford">Ford</option>
            <option value="bmw">BMW</option>
          </select>

          {/* Fuel Type */}
          <select className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500">
            <option value="">Fuel Type</option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
          </select>

          {/* Price Range */}
          <select className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500">
            <option value="">Price Range</option>
            <option value="0-20000">$0 - $20,000</option>
            <option value="20000-40000">$20,000 - $40,000</option>
            <option value="40000-60000">$40,000 - $60,000</option>
            <option value="60000+">$60,000+</option>
          </select>

          {/* Seating Capacity */}
          <select className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500">
            <option value="">Seating Capacity</option>
            <option value="2">2 Seats</option>
            <option value="4">4 Seats</option>
            <option value="5">5 Seats</option>
            <option value="7">7+ Seats</option>
          </select>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 w-11/12 mx-auto">
        {carsData.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-52 object-cover"
            />
            <div className="p-5 space-y-2">
              <h2 className="text-xl font-semibold">
                {car.brand} {car.model}
              </h2>
              <p className="text-gray-600 text-sm">{car.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-red-600 font-bold">${car.price}</span>
                <span className="text-sm text-gray-500">{car.fuelType}</span>
              </div>
              <p className="text-sm text-gray-500">
                Seats: {car.seatingCapacity}
              </p>
              <button className="mt-3 w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-md hover:bg-red-700 transition">
                Add to Wishlist <FaRegHeart className="text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
