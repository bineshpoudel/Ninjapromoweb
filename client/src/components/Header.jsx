import React, { useState, useEffect } from "react";
import { LogoSvg } from "../assets";
import { GoHome } from "react-icons/go";
import { TbWorldDollar } from "react-icons/tb";
import { Link } from "react-router-dom";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { LuContact2 } from "react-icons/lu";

const Header = () => {
  const [sideBar, setSidebar] = useState(false);

  const renderSidebar = () => {
    return (
      <div className="fixed bottom-0 right-0 z-40 h-full w-[100vw] justify-between bg-[#121212] md:hidden ">
        <div className="flex flex-col gap-3">
          <h1 className="py-5 text-center text-3xl">Know About us</h1>
          <div className="p-2">
            <button
              type="button"
              className="w-full rounded-md border-2 border-gray-200 border-opacity-20 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 px-5  py-3 text-center text-white hover:border-gray-200
             hover:bg-black hover:bg-gradient-to-r hover:from-black hover:to-black "
            >
              Discuss the project
            </button>
          </div>
          <div className="p-2">
            <button
              type="button"
              className="w-full rounded-md border-2 border-gray-200 border-opacity-20 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 px-5  py-3 text-center text-white hover:border-gray-200
             hover:bg-black hover:bg-gradient-to-r hover:from-black hover:to-black "
            >
              Schedule a meeting
            </button>
          </div>

          <h1 className="py-2 text-center text-3xl">Explore our Services</h1>
          <div className="grid grid-cols-2 gap-5 p-5 ">
            <Link to="/services/seo" onClick={closeSidebar}>
              <div className="rounded-md bg-gradient-to-r from-purple-600 via-fuchsia-500 to-rose-400 p-5">
                <p className="">SEO</p>
              </div>
            </Link>

            <Link to="services/video-production" onClick={closeSidebar}>
              <div className="rounded-md bg-gradient-to-r from-purple-600 via-fuchsia-500 to-rose-400 p-5">
                <p className="">Video Production</p>
              </div>
            </Link>
            <Link to="/services/mobile-app-development">
              <div className="rounded-md bg-gradient-to-r from-purple-600 via-fuchsia-500 to-rose-400 p-5">
                <p className="">Mobile App Development</p>
              </div>
            </Link>
            <Link to="services/social-media" onClick={closeSidebar}>
              <div className="rounded-md bg-gradient-to-r from-purple-600 via-fuchsia-500 to-rose-400 p-5">
                <p className="">Social Media Ads</p>
              </div>
            </Link>
            <Link to="/services/facebook-ads-agency" onClick={closeSidebar}>
              <div className="rounded-md bg-gradient-to-r from-purple-600 via-fuchsia-500 to-rose-400 p-5">
                <p className="">Facebook Ads</p>
              </div>
            </Link>
            <Link to="/services/web-design" onClick={closeSidebar}>
              <div className="rounded-md bg-gradient-to-r from-purple-600 via-fuchsia-500 to-rose-400 p-5">
                <p className="">Website Design</p>
              </div>
            </Link>
          </div>
          <div className="z-100 shadow-3xl  fixed bottom-0 flex h-12 w-full items-center justify-between border-t border-gray-600 py-10 lg:hidden">
            <Link to="/" onClick={closeSidebar}>
              <div className="flex flex-col items-center gap-1">
                <GoHome className="size-6" />
                <p className="text-sm font-thin">Home</p>
              </div>
            </Link>
            <div className="flex flex-col items-center gap-1">
              <HiOutlineSquaresPlus
                className="size-6"
                onClick={handleSidebar}
              />
              <p className="text-sm font-thin">Explore</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <Link to="/pricing" onClick={closeSidebar}>
                <TbWorldDollar className="size-6 " />
                <p className="text-sm font-thin">Pricing</p>
              </Link>
            </div>
            <Link to="/contact-us" onClick={closeSidebar}>
              <div className="flex flex-col items-center gap-1">
                <LuContact2 className="size-6" />
                <p className="text-sm  font-thin">Contact</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  const handleSidebar = () => {
    setSidebar(!sideBar);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed bottom-0 z-50 h-20 w-full hover:bg-[#121212] md:top-0 ${
        isScrolled ? "bg-[#121212] bg-opacity-100   " : "bg-transparent"
      } text-white`}
    >
      <div className="mx-auto max-w-screen-xl  p-4  sm:p-4 md:px-10 md:py-4">
        <div className="flex items-center justify-between">
          <div className="hidden items-center gap-4 md:flex">
            <Link to="/">
              <img src={LogoSvg} alt="logo" />
            </Link>
          </div>
          <div className="z-100  shadow-3xl flex h-12 w-full items-center justify-between border-t border-[#525252] py-10 md:hidden">
            <Link to="/">
              <div className="flex flex-col items-center gap-1">
                <GoHome className="size-6" />
                <p className="text-sm font-thin">Home</p>
              </div>
            </Link>
            <div className="flex flex-col items-center gap-1">
              <HiOutlineSquaresPlus
                className="size-6"
                onClick={handleSidebar}
              />
              <p className="text-sm font-thin">Explore</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <Link to="/pricing">
                <TbWorldDollar className="size-6 " />
                <p className="text-sm font-thin">Pricing</p>
              </Link>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Link to="/contact-us">
                <LuContact2 className="size-6" />
                <p className="text-sm  font-thin">Contact</p>
              </Link>
            </div>
          </div>
          <div className="hidden text-sm md:flex md:gap-12 ">
            <div className="flex items-center gap-2 ">
              <Link
                to="/"
                className="transition-colors duration-300 ease-in-out hover:text-blue-500"
              >
                Home
              </Link>
            </div>
            <div className="flex items-center gap-2 ">
              <Link
                to="/about"
                className="transition-colors duration-300 ease-in-out hover:text-blue-500"
              >
                About
              </Link>
            </div>
            <div className="group relative inline-block">
              <Link className="flex items-center gap-2">
                <a
                  href="#"
                  className="transition-colors duration-300 ease-in-out group-hover:text-blue-500"
                >
                  Services
                </a>
              </Link>

              <div className="absolute -left-10 z-10 hidden w-40 rounded bg-[#121212] p-5 py-5 text-left text-xs text-white shadow-md group-hover:block ">
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
                  to="/services/web-design"
                >
                  Web Design
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
              <Link
                to="/pricing"
                className="transition-colors duration-300 ease-in-out hover:text-blue-500"
              >
                Pricing
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2">
              <a
                href="#"
                className="transition-colors duration-300 ease-in-out hover:text-blue-500"
              >
                Blog
              </a>
            </div>

            <Link to="/contact-us">
              <div className="transition-colors duration-300 ease-in-out hover:text-blue-500">
                Contact
              </div>
            </Link>
          </div>
          <div className="hidden lg:flex">
            <button
              type="button"
              className="w-full rounded-md border-2 border-gray-200 border-opacity-20 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 px-5  py-3 text-center text-white hover:border-gray-200
             hover:bg-black hover:bg-gradient-to-r hover:from-black hover:to-black "
            >
              Schedule a meeting
            </button>
          </div>
        </div>
        {sideBar && renderSidebar()}
      </div>
    </div>
  );
};

export default Header;
