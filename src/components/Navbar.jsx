import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className=" bg-red-500 fixed  top-0 left-0 z-10 w-full">
      <div className="flex justify-between items-center w-11/12 mx-auto py-3">
        <h3 className="text-white font-bold text-2xl">
          <Link to="/">ZoomFind</Link>
        </h3>
        <button className="border py-1 rounded-sm px-3 border-white text-white cursor-pointer">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
