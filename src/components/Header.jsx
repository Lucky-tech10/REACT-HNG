import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaShoppingCart } from "react-icons/fa";
import logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { MdNotificationImportant } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto py-1 px-4 sm:px-6 lg:px-4 md:h-28 xl:h-28 lg:h-28 h-32">
        <div className="flex justify-between mt-5 items-center ">
          <div className="flex">
            <div className=" flex md:hidden">
              <button
                onClick={toggleMenu}
                className="text-black ml-2 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              >
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
            <div className="flex-shrink-0 xl:ml-14 lg:ml-8 md:ml-2 ml-5 ">
              <img className="h-10 w-auto" src={logo} alt="Logo" />
            </div>
          </div>

          <div className="hidden md:block lg:w-full lg:max-w-md">
            <div className="ml-1 flex items-baseline  space-x-1">
              <Link
                to="/"
                className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium"
              >
                Home
              </Link>
              <Link
                to="/category"
                className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium"
              >
                Category
              </Link>
              <Link
                to="/hot-deals"
                className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium"
              >
                Hot Deals
              </Link>
              <Link
                to="/new-arrivals"
                className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium"
              >
                New Arrivals
              </Link>
            </div>
            <form action="" className="w-full max-w-md">
              <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                <FaSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
                <input
                  type="text"
                  name="search"
                  placeholder="Search products and categories"
                  autoComplete="off"
                  aria-label="Search talk"
                  className="w-full pr-3 pl-10 py-1 placeholder-gray-500 text-black rounded border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                />
              </div>
            </form>
          </div>
          <div className="">
            <div className="flex justify-between xl:space-x-8 space-x-6 xl:mr-10 lg:mr-8 items-center">
              <Link to="/carts">
                <FaShoppingCart className="cursor-pointer text-2xl" />
              </Link>

              <MdNotificationImportant className="cursor-pointer text-2xl" />
              <VscAccount className="cursor-pointer text-2xl" />
            </div>
          </div>
        </div>
        <div className="block md:hidden mt-4">
          <form action="" className="w-full">
            <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
              <FaSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
              <input
                type="text"
                name="search"
                placeholder="Search products and categories"
                autoComplete="off"
                aria-label="Search talk"
                className="w-full pr-3 pl-10 py-1 placeholder-gray-500 text-black rounded border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
              />
            </div>
          </form>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } w-4/5 h-dvh absolute bg-slate-50`}
      >
        <div className=" px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/category"
            className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Category
          </Link>
          <Link
            to="/hot-deals"
            className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Hot Deals
          </Link>
          <Link
            to="/new-arrivals"
            className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            New Arrivals
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
