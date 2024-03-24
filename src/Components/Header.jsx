import React from "react";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="./Assets/Logo.svg" alt="logo" />
        <button className="bg-gradient-to-r from-[#ffa500] to-[#ee5e76] hover:opacity-50 text-white text-xs rounded-full px-2 py-1">
          Hosterr is hiring!
        </button>
      </div>
      <div className="lg:hidden">
        <FaBars />
      </div>
      <div className="hidden lg:flex">
        <ul className="flex items-center justify-center font-lato gap-6">
          <li>
            <a className="hover:text-gray-600" href="#">
              Plans
            </a>
          </li>
          <li>
            <a className="hover:text-gray-600" href="#">
              Find Domain
            </a>
          </li>
          <li>
            <a className="hover:text-gray-600" href="#">
              Why Hosterr
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex items-center justify-center gap-6">
        <a className="hover:text-gray-600 font-lato" href="#">
          Sign in
        </a>
        <a
          href="#"
          className="font-lato bg-[#4977ea] hover:bg-blue-600 rounded-md p-4 text-white font-semibold"
        >
          Join Waitlist
        </a>
      </div>
    </div>
  );
};

export default Header;
