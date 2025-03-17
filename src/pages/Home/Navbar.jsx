import React from "react";
import logo from "/logo/2.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="h-[10vh] w-full  flex items-center justify-between px-3 absolute top-0 ">
      <div className="img h-[5vh] w-[8vw] flex">
        <img src={logo} alt=" Simone" className="h-[4vh] cursor-pointer" />
      </div>
      <div className="nav ">
        <ul className=" h-[10vh] w-[40vw]  flex capitalize gap-5 items-center justify-center">
          <li className="text-xl text-white hover:text-green-500 cursor-pointer">
            home
          </li>
          <li className="text-xl text-white hover:text-green-500 cursor-pointer">
            about
          </li>
          <li className="text-xl text-white hover:text-green-500 cursor-pointer">
            what i do
          </li>
          <li className="text-xl text-white hover:text-green-500 cursor-pointer">
            resume
          </li>
          <li className="text-xl text-white hover:text-green-500 cursor-pointer">
            portfolio
          </li>
          <li className="text-xl text-white hover:text-green-500 cursor-pointer">
            client
          </li>
          <li className="text-xl text-white hover:text-green-500 cursor-pointer">
            contact
          </li>
        </ul>
      </div>
      <div className="icon flex items-center   h-[10vh] w-[6vw]  justify-between">
        <FaTwitter className="text-white text-xl hover:text-blue-500 cursor-pointer" />
        <FaFacebookF className="text-white text-xl hover:text-blue-500 cursor-pointer" />
        <FaDribbble className="text-white text-xl hover:text-pink-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
