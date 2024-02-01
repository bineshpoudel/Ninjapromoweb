import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
const Sidebarsss = () => {
  return (
    <div className="fixed right-0 top-0 z-40 h-full w-96 bg-black">
      <div>
        <div className="size-8 p-5">
          <IoMdClose className="text-2xl" />
        </div>
        <ul className="flex flex-col gap-5 p-5 text-white">
          <li>Home</li>
          <li>Seo</li>
          <li>Video Production</li>
          <li>Web Design</li>
          <li>Mobile App Development</li>
          <li>Facebook Ads</li>
          <li>Social Media</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebarsss;
