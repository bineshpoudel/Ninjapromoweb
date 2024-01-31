import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";
const Social = () => {
  return (
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
  );
};

export default Social;
