import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-gary-100">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className="h-[500px]"></div>
    </div>
  );
};

export default MainLayout;
