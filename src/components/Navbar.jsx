







import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../AuthContext/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signOutUser, } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser();

    Swal.fire({
      title: "Success!",
      text: "You have signed out successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };


  console.log(user)

  return (
    <nav className="bg-purple-600 bg-opacity-35 p-4">
      <div className="container flex-col mx-auto flex md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-bold md:mb-0">
          <Link to="/" className="hover:text-gray-300 text-xl font-serif italic">
            <span className="text-purple-500 italic text-xl font-bold">
              SkyLine
            </span>{" "}
            Hotel
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-2 items-center md:space-y-0 md:space-x-6">
          <NavLink
            to="/"
            className="text-yellow-500 text-lg font-serif italic font-bold hover:text-blue-500"
          >
            <span className="text-purple-200">H</span>
            <span className="text-yellow-400">O</span>
            <span className="text-purple-200">M</span>
            <span>E</span>
          </NavLink>

          <NavLink
            to="/rooms"
            className="text-white font-serif italic text-lg font-semibold hover:text-gray-300"
          >
            <span className="text-purple-200">R</span>
            <span className="text-yellow-500">O</span>
            <span className="text-purple-200">O</span>
            <span className="text-yellow-500">M</span>
            <span>S</span>
          </NavLink>

          {user && (
            <NavLink
              to="/my-bookings"
              className="text-white font-serif italic text-lg font-semibold hover:text-gray-300"
            >
              <span className="text-yellow-500">M</span>
              <span className="text-purple-200">Y</span>
              <span className="text-yellow-500">B</span>
              <span className="text-purple-200">O</span>
              <span className="text-yellow-500">O</span>
              <span className="text-purple-200">I</span>
              <span className="text-yellow-500">N</span>
              <span className="text-purple-200">G</span>
              <span>S</span>
            </NavLink>
          )}

          {user ? (
            <div className="flex items-center space-x-4">
              {/* User Photo */}
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                />
                {/* Display Name Tooltip */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100">
                  {user.displayName}
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleSignOut}
                className="text-white font-serif italic text-lg font-semibold hover:text-gray-300"
              >
                <span className="text-purple-500">Sign</span>{" "}
                <span className="text-yellow-500">Out</span>
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="text-white font-serif italic text-lg font-semibold hover:text-gray-300"
            >
              <span className="text-yellow-400">LOG</span>
              <span>IN</span>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;






