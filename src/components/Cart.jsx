import React from "react";
import { FaTrash, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import watch1 from "../assets/images/watch-1.png";
import watch2 from "../assets/images/watch-2.png";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-2 mx-10 sm:mx-16 mt-8">My Cart</h1>
      <hr className="border-1 border-black" />
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-65/35 gap-10">
          <div className="mr-4 mb-10">
            <div className="flex border p-3 border-1">
              <img
                src={watch1}
                alt="Victorinox Swiss Army"
                className="w-40 h-40 object-cover rounded"
              />
              <div className="ml-3 sm:ml-4 flex flex-col justify-between w-full">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold">
                    Victorinox Swiss Army
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Brown-Silver Steel, Green hands
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm sm:text-lg font-medium">
                    $ 23,400.00 USD
                  </p>
                  <div className="flex items-center space-x-2 md:space-x-5">
                    <button className="text-orange-600">
                      <FaTrash />
                    </button>
                    <button className="text-orange-600">
                      <FaMinusCircle />
                    </button>
                    <p className="text-xl">2</p>
                    <button className="text-orange-600">
                      <FaPlusCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex border p-3 border-1">
              <img
                src={watch2}
                alt="Victorinox Swiss Army"
                className="w-40 h-40 object-cover rounded"
              />
              <div className="ml-3 sm:ml-4 flex flex-col justify-between w-full">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold">
                    Victorinox Swiss Army
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Brown-Silver Steel, Green hands
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm sm:text-lg font-medium">
                    $ 23,400.00 USD
                  </p>
                  <div className="flex items-center space-x-2 md:space-x-5">
                    <button className="text-orange-600">
                      <FaTrash />
                    </button>
                    <button className="text-orange-600">
                      <FaMinusCircle />
                    </button>
                    <p className="text-xl">2</p>
                    <button className="text-orange-600">
                      <FaPlusCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="border p-4">
              <h2 className="text-xl text-center font-bold mb-6">
                Order Summary
              </h2>
              <ul className="mb-10 w-full text-xs">
                <li className="flex justify-between border-t border-b py-2 border-1">
                  <span>
                    <h1 className="font-medium">x2 Victorinox Swiss Army</h1>
                    <p>Brown-Silver Steel, Green hands</p>
                  </span>
                  <p>
                    $ 23,400.00
                    <sup>USD</sup>
                  </p>
                </li>
                <li className="flex justify-between border-t border-b py-2 border-1">
                  <span>
                    <h1 className="font-medium">x2 Victorinox Swiss Army</h1>
                    <p>Brown-Silver Steel, Green hands</p>
                  </span>
                  <p>
                    $ 23,400.00
                    <sup>USD</sup>
                  </p>
                </li>
                <li className="flex justify-between border-t border-b py-2 border-1">
                  <span>
                    <h1 className="font-medium">x2 Victorinox Swiss Army</h1>
                    <p>Brown-Silver Steel, Green hands</p>
                  </span>
                  <p>
                    $ 23,400.00
                    <sup>USD</sup>
                  </p>
                </li>
                <li className="flex justify-between border-t border-b py-2 border-1">
                  <span>
                    <h1 className="font-medium">x2 Victorinox Swiss Army</h1>
                    <p>Brown-Silver Steel, Green hands</p>
                  </span>
                  <p>
                    $ 23,400.00
                    <sup>USD</sup>
                  </p>
                </li>
              </ul>
              <div className="mb-4 flex justify-between">
                <span className="font-bold">Delivery</span>
                <span>
                  $ 200.00<sup>USD</sup>
                </span>
              </div>
              <div className="mb-4 flex justify-between">
                <span className="font-bold">Amount</span>
                <span>
                  $ 200.00<sup>USD</sup>
                </span>
              </div>
              <div className="mb-4 flex justify-between">
                <span className="font-bold">Tax</span>
                <span>
                  $ 200.00<sup>USD</sup>
                </span>
              </div>
              <div className="mb-4 flex justify-between">
                <span className="font-bold">Order Total</span>
                <span>
                  $ 200.00<sup>USD</sup>
                </span>
              </div>
            </div>
            <Link to="/checkout">
              <button className="w-full inner text-white py-2">Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
