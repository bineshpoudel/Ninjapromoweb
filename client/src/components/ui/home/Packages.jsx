import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
const Packages = () => {
  const packageDetails = [
    {
      rate: "9600",
      hoursPerMonth: "160",
      ratePerHour: "60",
      package: "A full marketing department",
    },
    {
      rate: "5600",
      hoursPerMonth: "80",
      ratePerHour: "70",
      package: "3-4 regular tasks",
    },
    {
      rate: "3200",
      hoursPerMonth: "40",
      ratePerHour: "80",
      package: "1-2 regular tasks",
    },
  ];

  const renderPackage = packageDetails.map((data) => (
    <div className="group w-full rounded-md bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-600 hover:p-1 ">
      <div className="flex h-full w-full flex-col gap-12 rounded-md border-2 border-white bg-[#121212] p-5 font-bold hover:border-none">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <h1 className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-600 bg-clip-text text-4xl hover:from-rose-400 hover:via-fuchsia-500 hover:to-purple-600 group-hover:text-transparent">
            ${data.rate}
          </h1>
          <div className="text-xs">
            <p>/{data.hoursPerMonth} Hours per month</p>
            <p className="text-gray-400">${data.ratePerHour} per hour</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <IoIosCheckmarkCircle className="text-2xl " />
          <p className="text-base">{data.package}</p>
        </div>
        <div className="w-84">
          <button
            type="button"
            className="w-full rounded-md border-2 border-gray-200 border-opacity-20 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 px-5  py-3 text-center text-white hover:border-gray-200
             hover:bg-black hover:bg-gradient-to-r hover:from-black hover:to-black "
          >
            Book Intro Call
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="h-[80vh] w-full bg-[#121212]  pb-[40rem] pt-2 text-white ">
      <div className="mx-auto max-w-screen-xl p-4 md:p-10 ">
        <div className="pb-20">
          <h1 className="text-center text-4xl ">
            If you have fewer tasks right now, <br />
            choose the 80 or 40-hour package
          </h1>
        </div>
        <div className="flex gap-5 overflow-x-auto  ">{renderPackage}</div>
      </div>
    </div>
  );
};

export default Packages;
