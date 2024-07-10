import logo from "../assets/images/Logo.png";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="foot text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-10">
          <img className="h-10 w-auto" src={logo} alt="Logo" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul>
              <li className="flex mb-2 items-center">
                <MdEmail className=" text-white text-xl rounded-full p-1 bg-black mr-1" />
                email@example.com
              </li>

              <li className="flex mb-2 items-center">
                <IoCallSharp className=" text-white text-xl font-bold rounded-full p-1 bg-black mr-1" />
                (123) 456-7890
              </li>
              <li className="flex mb-2 items-center">
                <FaLocationDot className=" text-white text-xl rounded-full p-1 bg-black mr-1" />
                City, State, ZIP
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#">Home</a>
              </li>
              <li className="mb-2">
                <a href="#">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#">Services</a>
              </li>
              <li className="mb-2">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <ul>
              <li className="flex mb-2 items-center">
                <BiLogoFacebookCircle className="text-xl text-black mr-1" />
                <a href="#">Facebook</a>
              </li>
              <li className="flex mb-2 items-center">
                <AiFillTwitterCircle className="text-xl text-black mr-1" />
                <a href="#">Twitter</a>
              </li>
              <li className="flex mb-2 items-center">
                <FaSquareInstagram className=" text-slate-600 text-xl rounded-full p-1 bg-black mr-1" />
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul>
              <li className="mb-2">
                <a href="#">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="relative  md:w-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 w-full pr-24 border-4 border-white text-black rounded-md placeholder-black font-bold bg-slate-100"
            />
            <button className="absolute right-0 align- -top-2 mt-3 mr-1 inner px-4 py-2 text-white rounded-tr-md rounded-br-md">
              Subscribe
            </button>
          </div>
          <div className=" px-4 py-2 rounded-md mt-3 text-white">
            &copy; 2024 Copyright Maxim
          </div>
        </div>
        <div className="mt-5 md:mt-8 xl:mt-8 lg:mt-8">
          <hr className="border-2" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
