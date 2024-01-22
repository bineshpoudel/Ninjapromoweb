import React from "react";
import { LogoSvg } from "../assets";
import { RiMenu3Fill } from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl";
const Header = () => {
  return (
    <div className="h-20 w-full bg-gradient-to-r from-[#25246B]  to-[#121213] text-white transition duration-500 hover:bg-[#121212] hover:bg-gradient-to-r hover:from-[#121212] hover:to-[#121212]">
      <div className="mx-auto max-w-screen-xl p-4 sm:p-4  md:px-10 md:py-4">
        <div className="flex items-center justify-between ">
          <div className=" flex items-center gap-4">
            <img src={LogoSvg} alt="logo" />
            <p className="font-thin">Marketing by Subscription</p>
          </div>
          <div className="rounded-tl-sxl flex h-8 w-12 items-center justify-center rounded-br-xl rounded-tl-xl bg-[#121212] lg:hidden">
            <RiMenu3Fill className="text-2xl" />
          </div>
          <div className="hidden text-sm lg:flex lg:gap-12 ">
            <div className="flex items-center gap-2 ">
              <a
                href="#"
                className="transition-colors duration-300 ease-in-out hover:text-blue-500"
              >
                Services
              </a>
              <SlArrowDown />
            </div>
            <div className="flex items-center gap-2 ">
              <a
                href="#"
                className="transition-colors duration-300 ease-in-out hover:text-blue-500"
              >
                Industries
              </a>
              <SlArrowDown />
            </div>
            <div className="flex items-center justify-center gap-2">
              <a
                href="#"
                className="transition-colors duration-300 ease-in-out hover:text-blue-500"
              >
                Work
              </a>
              <SlArrowDown />
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#"
                className="transition-colors duration-300 ease-in-out hover:text-blue-500"
              >
                Company
              </a>
              <SlArrowDown />
            </div>

            <div className="transition-colors duration-300 ease-in-out hover:text-blue-500">
              Contact
            </div>
          </div>
          <div className="hidden lg:flex">
            <button
              type="button"
              className="w-full rounded-md border-2 border-gray-200 border-opacity-20 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 px-5  py-3 text-center text-white hover:border-gray-200
             hover:bg-black hover:bg-gradient-to-r hover:from-black hover:to-black "
            >
              Discuss the project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
