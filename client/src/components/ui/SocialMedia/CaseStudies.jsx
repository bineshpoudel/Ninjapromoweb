import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import CaseStudiesData from "../../../data/CaseStudiesData";
const CaseStudies = () => {
  return (
    <div className="w-full bg-[#121212] text-white">
      {/* <div className=" w-96 text-center ">
        <h1 className="bg-blue-700 px-5 py-2 text-3xl font-bold md:text-5xl">
          Our Case Studies
        </h1>
      </div> */}
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="border-red flex flex-col gap-5 md:flex-row">
          <div className="w-full md:w-1/2 ">
            <div className="flex flex-col md:flex-row ">
              <img
                src="https://ninjapromo.io/wp-content/uploads/2022/02/paypolitan.webp"
                alt=""
                className="w-full md:w-1/2"
              />
              <div className="w-full bg-[#292D36] px-4 py-10 md:w-1/2">
                <div className="flex flex-col gap-5">
                  <h1 className="text-3xl">
                    Paypoliton
                    <span>
                      <hr className="h-1 w-6 border-none bg-blue-700" />
                    </span>
                  </h1>
                  <div className="flex gap-2">
                    <button className="bg-blue-700 p-1 text-xs">
                      organic social
                    </button>
                    <button className="bg-blue-700 p-1 text-xs">
                      Video production
                    </button>
                  </div>
                  <p className="text-md font-thin">
                    Mobile payment gateway securing it as a smart contract with
                    blockchain technology.
                  </p>
                  <div className="flex justify-between gap-5">
                    <div className="w-1/2 rounded-md bg-[#3D4454] p-2">
                      <h1>5x</h1>
                      <p className="text-xs">subscriber growth</p>
                    </div>
                    <div className="w-1/2 rounded-md bg-[#3D4454] p-2">
                      <h1>9500+</h1>
                      <p className="text-xs">new users</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <p>Explore Case</p>
                    <MdKeyboardArrowRight className="size-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <div className="flex flex-col md:flex-row ">
              <img
                src="https://ninjapromo.io/wp-content/uploads/2023/03/fitness-03-thumb.jpg"
                alt=""
                className="w-full md:w-1/2"
              />
              <div className="w-full bg-[#292D36] px-4 py-10 md:w-1/2">
                <div className="flex flex-col gap-5">
                  <h1 className="text-3xl">
                    Fitness Club
                    <span>
                      <hr className="h-1 w-6 border-none bg-blue-700" />
                    </span>
                  </h1>
                  <div className="flex gap-2">
                    <button className="bg-blue-700 p-1 text-xs">
                      organic social
                    </button>
                    <button className="bg-blue-700 p-1 text-xs">
                      Video production
                    </button>
                  </div>
                  <p className="text-md font-thin">
                    Mobile payment gateway securing it as a smart contract with
                    blockchain technology.
                  </p>
                  <div className="flex justify-between gap-5">
                    <div className="w-1/2 rounded-md bg-[#3D4454] p-2">
                      <h1>5x</h1>
                      <p className="text-xs">subscriber growth</p>
                    </div>
                    <div className="w-1/2 rounded-md bg-[#3D4454] p-2">
                      <h1>9500+</h1>
                      <p className="text-xs">new users</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <p>Explore Case</p>
                    <MdKeyboardArrowRight className="size-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
