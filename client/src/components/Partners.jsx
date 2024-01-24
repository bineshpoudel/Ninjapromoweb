import React from "react";
import {
  Iosg,
  Polygon,
  SignumCapital,
  Techstars,
  Ycombinator,
} from "../assets";

const Partners = () => {
  return (
    <div className="w-full bg-[#121212] py-20 text-white">
      <div className="mx-auto max-w-screen-xl p-10">
        <h1 className="py-10 pb-10 text-center text-4xl">
          Our Partners are backed up with the best
        </h1>
        <div className="flex items-center gap-5">
          <div className="w-1/5">
            <img src={Polygon} alt="polygon" className="h-14" />
          </div>
          <div className="w-1/5">
            <img src={Techstars} alt="techstars" className="h-14" />
          </div>
          <div className="w-1/5 ">
            <img src={Iosg} alt="iosg" className="h-16" />
          </div>
          <div className="w-1/5">
            <img src={SignumCapital} alt="sognumcapital" className="h-14" />
          </div>
          <div className="w-1/5">
            <img src={Ycombinator} alt="ycombinator" className="h-14" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
