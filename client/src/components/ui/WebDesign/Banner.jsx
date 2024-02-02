import React from "react";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import {
  Clutch,
  Crunchbase,
  DigitalAgencyNetwork,
  Manifest,
} from "../../../assets";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/web-develop-bg.jpg')`,
      }}
      className="w-full bg-cover py-20 text-white"
    >
      <div className="mx-auto max-w-screen-xl p-10 py-20">
        <div className="flex ">
          <div className="flex w-full flex-col gap-10 py-5 md:w-1/2 md:py-24">
            <h1 className="text-left text-2xl  font-bold md:text-4xl">
              Leverage the power of data-driven web design services
            </h1>
            <p className="left text-xl">
              For aesthetically pleasing, highly functional & high-ranking
              websites that boost revenue.
            </p>
            <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20">
              <button className="bg-[#3C39C6] px-10 py-5">
                Request a free proposal
              </button>
              <div className="hidden gap-2 md:flex">
                <p className="text-xl">Meet ninja promo</p>
                <div className="group flex size-8 items-center justify-center rounded-full bg-white hover:bg-[#3C39C6]">
                  <HiOutlineArrowSmallRight className="text-[#3C39C6] duration-500 group-hover:text-white" />
                </div>
              </div>
            </div>
            <div className="flex gap-2 py-20 md:gap-5">
              <img src={Crunchbase} alt="crunchbase" className="h-10 w-1/4" />
              <img
                src={DigitalAgencyNetwork}
                alt="digitalagencyne"
                className="h-10 w-1/4"
              />
              <img src={Manifest} alt="manifest" className="h-10 w-1/4" />
              <img src={Clutch} alt="clutc" className="h-10 w-1/4" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
