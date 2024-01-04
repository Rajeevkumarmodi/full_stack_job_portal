import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className=" bg-white md:px-[50px] py-2 px-[10px] flex justify-between items-center  shadow-md shadow-gray-300 sticky top-0">
      <NavLink to="/">
        <img className="w-[50px]" src={logo} alt="" />
      </NavLink>
      <div className="flex gap-4 font-semibold">
        <NavLink
          className="hover:shadow-md hover:shadow-gray-600 px-2 py-1 rounded-lg"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="hover:shadow-md hover:shadow-gray-600 px-2 py-1 rounded-lg"
          to="/"
        >
          Daily works
        </NavLink>
        <NavLink
          className="hover:shadow-md hover:shadow-gray-600 px-2 py-1 rounded-lg"
          to="/"
        >
          Service
        </NavLink>

        <button className="hover:shadow-md hover:shadow-gray-600 px-2 py-1 rounded-lg">
          Language
        </button>
        <NavLink
          className="border-2 border-blue-600 text-blue-700 px-4 py-1 rounded-2xl"
          to="/login"
        >
          Login
        </NavLink>
        <button className="px-2 py-1 bg-red-500 rounded-2xl text-white" to="/">
          Registration
        </button>
      </div>
    </div>
  );
}

export default Header;
