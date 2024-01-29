import React, { useState } from "react";
import { LogoSvg } from "../assets";
import { RiMenu3Fill } from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const [sideBar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sideBar);
  };

  const renderSidebar = () => {
    return (
      <div className="fixed right-0 top-0 z-40 h-full w-96 bg-black ">
        <div className="border">
          <div className="size-8 p-5">
            <IoMdClose className="text-2xl" onClick={handleSidebar} />
          </div>
          <ul className="flex flex-col gap-5 p-5 text-white">
            <li>
              Home <hr />
            </li>
            <li>
              Seo <hr />
            </li>
            <li>
              About <hr />
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="h-20 w-full bg-gradient-to-br from-[#242368] to-[#212057] text-white transition  duration-500 hover:bg-[#121212] hover:bg-gradient-to-r hover:from-[#121212] hover:to-[#121212] lg:bg-gradient-to-r lg:from-[#25246B] lg:to-[#121213]">
      <div className="mx-auto max-w-screen-xl p-4  sm:p-4 md:px-10 md:py-4">
        <div className="flex items-center justify-between ">
          <div className=" flex items-center gap-4">
            <Link to="/">
              <img src={LogoSvg} alt="logo" />
            </Link>

            {/* <p className="font-thin">Marketing by Subscription</p> */}
          </div>
          <div className="flex h-8 w-12 items-center justify-center rounded-br-xl  rounded-tl-xl bg-[#121212] lg:hidden">
            <RiMenu3Fill className="text-2xl" onClick={handleSidebar} />
          </div>
          <div className="hidden text-sm lg:flex lg:gap-12 ">
            <div className="group relative inline-block">
              <Link className="flex items-center gap-2">
                <a
                  href="#"
                  className="transition-colors duration-300 ease-in-out group-hover:text-blue-500"
                >
                  Services
                </a>
                <SlArrowDown />
              </Link>

              <div className="absolute left-0 z-10 hidden w-48 rounded bg-[#121212] p-5 py-5 text-left text-xs text-white shadow-md group-hover:block ">
                <Link
                  className="block px-4 py-2 duration-500 hover:text-[#3c39c6]"
                  to="/services/social-media"
                >
                  Social Media
                </Link>
                <Link
                  className="block px-4 py-2 duration-500 hover:text-[#3c39c6]"
                  to="/services/facebook-ads-agency"
                >
                  Facebook Ads
                </Link>
                <Link
                  className="block px-4 py-2 duration-500 hover:text-[#3c39c6]"
                  to="services/seo"
                >
                  SEO
                </Link>
                <Link
                  className="block px-4 py-2 duration-500 hover:text-[#3c39c6]"
                  to="/services/video-production"
                >
                  Video Production
                </Link>
                <Link
                  className="block px-4 py-2 duration-500 hover:text-[#3c39c6]"
                  to="/services/web-development"
                >
                  Web Development
                </Link>
                <Link
                  className="block px-4 py-2 duration-500 hover:text-[#3c39c6]"
                  to="/services/mobile-app-development"
                >
                  Mobile App Design
                </Link>
              </div>
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

            <div className="group relative inline-block">
              <Link className="flex items-center gap-2">
                <a
                  href="#"
                  className="transition-colors duration-300 ease-in-out group-hover:text-blue-500"
                >
                  Company
                </a>
                <SlArrowDown />
              </Link>

              <div className="absolute left-0 z-10 hidden w-48 rounded bg-[#121212] p-5 py-4 text-left text-xs text-white shadow-md group-hover:block ">
                <Link
                  className="block px-4 py-2 duration-500 hover:text-[#3c39c6]"
                  to="/about"
                >
                  About
                </Link>
              </div>
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
          {sideBar && renderSidebar()}
        </div>
      </div>
    </div>
  );
};

export default Header;
