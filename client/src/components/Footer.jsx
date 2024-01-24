import React from "react";
import { LogoSvg } from "../assets";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaBehance,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full bg-[#121212] pb-20 pt-20 text-white">
      <div className="mx-auto max-w-screen-xl px-10">
        <hr className="pb-20" />
        <div className="flex flex-col gap-20  md:flex-row md:gap-5">
          <div className="flex w-full flex-col gap-10 md:w-1/3">
            <div className="flex items-center gap-5">
              <img src={LogoSvg} alt="logo" className="w-36" />
            </div>
            <div className="">
              <button
                type="button"
                className="w-full rounded-md border-2 border-gray-200 border-opacity-20 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 px-5  py-3 text-center text-white hover:border-gray-200
             hover:bg-black hover:bg-gradient-to-r hover:from-black hover:to-black "
              >
                Book a call
              </button>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-5 md:w-1/3 md:items-center">
            <div className="flex items-center gap-4">
              <FaEnvelope />
              <p className="text-xl font-thin">hello@gmail.com</p>
            </div>

            <div>
              <div className="flex gap-4">
                <FaPhone />
                <div className="flex flex-col  gap-2 text-xl font-thin">
                  <p>+1 929-492-4413 (US) </p>
                  <p>+44 20 3868 4672 (UK)</p>
                  <p>+65 3165 4789 (SG)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-between gap-10 md:w-1/3 md:gap-0">
            <div>
              <div className="flex gap-2 pl-3">
                <FaFacebook
                  className="h-8 w-8 rounded-full border-2 border-white bg-black p-1
              duration-300 hover:border-none hover:bg-gradient-to-r hover:from-rose-500 hover:to-purple-700
              "
                />
                <FaTwitter className="h-8 w-8 rounded-full border-2 border-white bg-black p-1 duration-300 hover:border-none hover:bg-gradient-to-r hover:from-rose-500 hover:to-purple-700 " />
                <FaYoutube
                  className="h-8 w-8 rounded-full border-2 border-white bg-black p-1 
              duration-300 hover:border-none hover:bg-gradient-to-r hover:from-rose-500 hover:to-purple-700"
                />
                <FaLinkedin
                  className="h-8 w-8 rounded-full border-2 border-white bg-black p-1
              duration-300 hover:border-none hover:bg-gradient-to-r hover:from-rose-500 hover:to-purple-700"
                />
                <FaInstagram
                  className="h-8 w-8 rounded-full border-2 border-white bg-black p-1 
              duration-300 hover:border-none hover:bg-gradient-to-r hover:from-rose-500 hover:to-purple-700"
                />
                <FaBehance
                  className="h-8 w-8 rounded-full border-2 border-white bg-black p-1 text-white 
              duration-300 hover:border-none hover:bg-gradient-to-r hover:from-rose-500 hover:to-purple-700"
                />
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                &copy;2024 Ninja Promo. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
