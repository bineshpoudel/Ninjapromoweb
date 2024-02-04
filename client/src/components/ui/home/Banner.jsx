import React, { useEffect } from "react";
import {
  AirBnb,
  BannerLeft,
  BannerRight,
  Logitech,
  Samsung,
} from "../../../assets";
import { IoMdStar } from "react-icons/io";
import { PiCrown } from "react-icons/pi";

import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full  bg-gradient-to-br from-[#25246b] via-[#141414] to-[#121212] text-white">
      <div className="mx-auto max-w-screen-xl p-4  pt-20 sm:p-4 md:px-10 md:py-20">
        <div className="flex w-full flex-col justify-between py-10 md:flex-row   md:py-20">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="items-left flex w-full flex-col justify-center gap-10  md:w-1/2 "
          >
            <div className="items-left flex flex-col gap-5 lg:flex-row ">
              <img
                src={BannerLeft}
                alt="banner left"
                className="h-12 w-56"
                aos-data="zoom-in"
                data-aos-duration="3000"
              />
              <div className="flex h-[2.578rem] w-[15.78rem]  items-center gap-4 rounded-full  border border-white px-5  py-2">
                <PiCrown />
                Best marketing agencies
              </div>
            </div>
            <div className=" px-2">
              <h1 className="text-xl font-bold md:text-5xl ">
                Get a full marketing department for $9600 per month by
                subscription
              </h1>
            </div>
            <div className="flex flex-col gap-2 px-2">
              <h2 className="text-sm font-thin">
                From the team chosen by top worldwide brands
              </h2>
              <div className="flex gap-3">
                <img
                  src={Logitech}
                  alt="logitech"
                  className="h-[1.118rem] w-[4.528rem]"
                />
                <img
                  src={Samsung}
                  alt="samsung"
                  className="h-[1.118rem] w-[4.528rem]"
                />
                <img
                  src={AirBnb}
                  alt="airbnb"
                  className="h-[1.118rem] w-[4.528rem]"
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 p-2 lg:flex-row-reverse lg:gap-4">
              <p className=" text-sm font-thin">
                Development, Design, content, ads and all you need to know in
                one subscription
              </p>
              <button
                type="button"
                className="w-full rounded-md border-2 border-gray-200 border-opacity-20 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 px-5  py-3 text-center text-white hover:border-gray-200
             hover:bg-black hover:bg-gradient-to-r hover:from-black hover:to-black "
              >
                Book an intro call
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={BannerRight}
              alt="banner-right"
              className="h-96 w-96 duration-500 hover:scale-110 md:h-[45.5rem] md:w-[45.5rem] lg:h-[471px] lg:w-[471px] "
              data-aos="fade-up"
            />
            <div className="h-30 md:h-42 absolute  bottom-[-1.8rem] right-[1.2rem] flex w-3/5 flex-col gap-4 rounded-md bg-[#181818] px-6  py-4 text-xs md:right-[-1.6rem] md:w-4/5 md:text-xl">
              <h2 className="text-xl md:text-2xl">Clutch</h2>
              <p className="italic">
                "Ninja Promo have become an extension to our team"
              </p>
              <p className="flex items-center gap-2">
                4.8 out of 5,0(28)
                <span className="flex gap-1 text-yellow-400">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
