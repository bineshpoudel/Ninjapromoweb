import React from "react";
import { IoMdPlay } from "react-icons/io";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import FeaturedWorksData from "../../../data/FeaturedWorksData";
const FeaturedWorks = () => {
  return (
    <div className="bg-[#121212] text-white">
      <div className="mx-auto max-w-screen-xl p-10">
        <h1 className="text-3xl md:text-5xl">
          Some of Our Featured Works in Video & Social Media
        </h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2">
        {FeaturedWorksData.map((data) => (
          <div key={data.id} className="group relative">
            <img
              src={data.img}
              alt=""
              className="h-full w-full object-cover transition-opacity group-hover:opacity-75"
            />
            <div className="absolute inset-x-0 bottom-5 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <div className="flex items-center justify-center gap-5">
                <p className="text-3xl group-hover:text-white">{data.desc}</p>
                <div className="group flex size-10 items-center justify-center rounded-full bg-white">
                  <IoMdPlay className="text-blue-700" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-screen-xl p-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <img
            src="https://ninjapromo.io/wp-content/uploads/2023/02/smm03.jpg"
            alt=""
            className="rounded-md"
          />
          <img
            src="https://ninjapromo.io/wp-content/uploads/2023/02/smm04.jpg"
            alt=""
            className="rounded-md"
          />
        </div>
        <div className=" flex justify-center gap-2 py-10 md:py-20">
          <p className="text-xl">View More</p>
          <div className="group flex size-8 items-center justify-center rounded-full bg-[#3c39c6] hover:bg-white">
            <HiOutlineArrowSmallRight className="text-white duration-500 group-hover:text-[#3c39c6]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorks;
