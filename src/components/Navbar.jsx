import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-[#0c192a] py-5 w-full">
      <ul className="flex justify-around text-white font-semibold text-lg">
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
      </ul>
    </nav>
  );
};
export default Navbar;
