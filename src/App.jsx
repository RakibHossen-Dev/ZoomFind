import "./App.css";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Banner></Banner>
      <div className="bg-gray-100 p-5  w-11/12 mx-auto my-10 rounded-xl border border-gray-200">
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
    </>
  );
}

export default App;
