// import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import products from "../products.json";
import bags from "../bags.json";
import { MdCallMade } from "react-icons/md";
import profile from "../assets/images/home-image.png";
import "../index.css";

const HomePage = () => {
  // const [productts, setProductts] = useState([]);

  // useEffect(() => {
  //   // Load product data
  //   setProductts(products);
  // }, []);

  return (
    <div className="container mx-auto md:px-8 sm:px-8 lg:px-8 px-4 py-8">
      <div className="container-xl lg:container mb-10 mt-10 m-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
          <div>
            <h1 className="text-4xl font-extrabold mb-8">
              ALL NEW, PLUM AND PEACHY
            </h1>
            <p className="mt-2 mb-4 font-">
              You can never have too many bags when it comes to quanlity. <br />
              Make your collection look like a color oalette
            </p>
            <a
              href="/jobs"
              className="inline-block inner text-white rounded-lg px-4 py-2"
            >
              Buy now
            </a>
          </div>
          <div className="flex-shrink-0">
            <img
              className="h-80 w-full border-8 border-orange-700 rounded-full"
              src={profile}
              alt="profile"
            />
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-extrabold mb-8 text-start">
        Top Selling products
      </h1>
      <div className="mt-4">
        <div className=" flex justify-between mb-4">
          <h1 className="text-3xl font-bold ">Watches</h1>
          <div className="flex ">
            <a href="#" className="text-xl font-medium mb-8">
              View more
            </a>
            <MdCallMade className="ml-3" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 lg:gap-14 xl:gap-14">
          {products &&
            products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full sm:h-60 md:h-60 lg:h-60 xl:h-96 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-xl font-bold mt-2">{product.price} USD</p>
                  <button className="mt-4 inner text-white px-4 py-2 rounded-full flex items-center justify-center w-full">
                    <FaShoppingCart className="mr-2" /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="mt-8">
        <div className=" flex justify-between mb-4">
          <h1 className="text-3xl font-bold ">Bags</h1>
          <div className="flex">
            <a href="#" className="text-xl font-medium mb-8">
              View more
            </a>
            <MdCallMade className="ml-2" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {bags &&
            bags.map((bag) => (
              <div key={bag.id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={bag.bagImage}
                  alt={bag.name}
                  className="w-full sm:h-60 md:h-60 lg:h-64 xl:h-96 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h2 className="text-lg font-bold">{bag.name}</h2>
                  <p className="text-gray-600">{bag.description}</p>
                  <p className="text-xl font-bold mt-2">{bag.price} USD</p>
                  <button className="mt-4 inner text-white px-4 py-2 rounded-full flex items-center justify-center w-full">
                    <FaShoppingCart className="mr-2" /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
