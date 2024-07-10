import { CiCirclePlus } from "react-icons/ci";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { FaTrash } from "react-icons/fa6";
import watch1 from "../assets/images/watch-1.png";
import watch2 from "../assets/images/watch-2.png";
import watch3 from "../assets/images/watch-3.png";

const Checkout = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-4 flex items-center justify-between mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
          Checkout
        </h1>
        <p className="text-gray-500 text-sm sm:text-1xl md:text-2xl ">
          Delivery and Payment method
        </p>
      </header>
      <hr className="border-1 border-black" />
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="lg:w-1/3 p-4">
          <h2 className="text-xl font-semi-bold mb-5">Price details</h2>
          <div className="bg-white p-4 shadow-md border">
            <div className="mb-2 flex border-b py-2 border-1 items-center">
              <img src={watch1} alt="Product 1" className="w-12 h-12 mr-4" />
              <div>
                <p>Victorinox Swiss Army</p>
                <p className="text-gray-500">$ 23,400.00 USD</p>
              </div>
            </div>

            <div className="mb-2 border-b py-2 border-1 flex items-center">
              <img src={watch2} alt="Product 2" className="w-12 h-12 mr-4" />
              <div>
                <p>Victorinox Swiss Army</p>
                <p className="text-gray-500">$ 23,400.00 USD</p>
              </div>
            </div>

            <div className="mb-2 border-b py-2 border-1 flex items-center">
              <img src={watch3} alt="Product 3" className="w-12 h-12 mr-4" />
              <div>
                <p>Victorinox Swiss Army</p>
                <p className="text-gray-500">$ 23,400.00 USD</p>
              </div>
            </div>
            <div className=" pt-2">
              <div className="flex py-1 justify-between">
                <p>Total</p>
                <p className="text-gray-500">$ 23,400.00 USD</p>
              </div>
              <div className="flex py-1 justify-between">
                <p>Delivery Fee</p>
                <p className="text-gray-500">$ 20.00 USD</p>
              </div>
              <div className="flex py-1 justify-between">
                <p>VAT</p>
                <p className="text-gray-500">$ 20.00 USD</p>
              </div>
            </div>
            <div className="font-semibold pt-3 py-1 border-t flex justify-between">
              <p>Total</p>
              <p className="text-xl">$ 23,440.00 USD</p>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 p-6">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-8">Delivery Address</h2>
            <div className="bg-white p-6 border border-black mb-6">
              <div className="flex items-center">
                <input type="radio" name="deliveryMethod" className="mr-2" />
                <div className="flex justify-between space-x-20 sm:space-x-28 md:space-x-72">
                  <div>
                    <p className="sm:text-base text-sm">
                      Bluegate Estate, Lekki Phase 1, Lagos, Nigeria
                    </p>
                    <p className="text-gray-500 sm:text-base text-xs">
                      James Gunner, +234 7052345157
                    </p>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-5">
                    <button className="text-orange-600 text-lg">
                      <BiSolidMessageSquareEdit />
                    </button>
                    <button className="text-orange-600">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 border border-dashed border-black">
              <div className="flex items-center">
                <CiCirclePlus className="mr-2 text-lg" />
                <div>
                  <p className="sm:text-base text-sm">New Address</p>
                  <p className="text-gray-500 sm:text-base text-xs">
                    Add a substitute address and details to make a calm, swift,
                    and easy delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-6">Payment Method</h2>
            <div className="bg-white p-6 border border-black mb-6">
              <div className="flex items-center">
                <input type="radio" name="paymentMethod" className="mr-2" />
                <div>
                  <p className="sm:text-base text-sm">Credit Card</p>
                  <p className="text-gray-500 sm:text-base text-xs">
                    Just input your details and experience seamless shopping
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 border border-black">
              <div className="flex items-center">
                <input type="radio" name="paymentMethod" className="mr-2" />
                <div>
                  <p className="sm:text-base text-sm">Bank Transfer</p>
                  <p className="text-gray-500 sm:text-base text-xs">
                    Pay with your bank account if your credit card doesn't
                    support payment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <button className="w-full inner text-white py-2 ">Pay</button>
      </div>
    </div>
  );
};

export default Checkout;
