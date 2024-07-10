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
      <div className="container sm:mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-65/35 gap-10">
          <div className="mr-4">
            <div className="flex mb-16">
              <img
                src={watch1}
                alt="Victorinox Swiss Army"
                className="w-48 h-48 object-cover rounded"
              />
              <div className="ml-4 flex flex-col justify-between w-full">
                <div>
                  <h2 className="text-xl font-bold">Victorinox Swiss Army</h2>
                  <p className="text-gray-600">
                    Brown-Silver Steel, Green hands
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-2xl font-medium">$ 23,400.00 USD</p>
                  <div className="flex items-center space-x-3 md:space-x-5">
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
            <div className="flex mb-16">
              <img
                src={watch2}
                alt="Victorinox Swiss Army"
                className="w-48 h-48 object-cover rounded"
              />
              <div className="ml-4 flex flex-col justify-between w-full">
                <div>
                  <h2 className="text-xl font-bold">Victorinox Swiss Army</h2>
                  <p className="text-gray-600">
                    Brown-Silver Steel, Green hands
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-2xl font-medium">$ 23,400.00 USD</p>
                  <div className="flex items-center space-x-3 md:space-x-5">
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
              <ul className="mb-10 text-xs">
                <li className="flex justify-between mb-4">
                  <span>
                    <h1 className="font-medium">x2 Victorinox Swiss Army</h1>
                    <p>Brown-Silver Steel, Green hands</p>
                  </span>
                  <p>
                    $ 23,400.00
                    <sup>USD</sup>
                  </p>
                </li>
                <li className="flex justify-between mb-4">
                  <span>
                    <h1 className="font-medium">x2 Victorinox Swiss Army</h1>
                    <p>Brown-Silver Steel, Green hands</p>
                  </span>
                  <p>
                    $ 23,400.00
                    <sup>USD</sup>
                  </p>
                </li>
                <li className="flex justify-between mb-4">
                  <span>
                    <h1 className="font-medium">x2 Victorinox Swiss Army</h1>
                    <p>Brown-Silver Steel, Green hands</p>
                  </span>
                  <p>
                    $ 23,400.00
                    <sup>USD</sup>
                  </p>
                </li>
                <li className="flex justify-between mb-4">
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
