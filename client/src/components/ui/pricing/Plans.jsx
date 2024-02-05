import React, { useEffect } from "react";
import PricingDetailsData from "../../../data/PricingDetailsData";
import AOS from "aos";
import "aos/dist/aos.css";
const Plans = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full bg-[#1e1e1e] text-gray-200">
      <div className="mx-auto max-w-screen-xl p-10 py-20">
        <h1 className="py-10 text-5xl">Choose your Hoostly Plan</h1>
        <p className="pb-5 text-xl">
          With industry leading solutions for hybrid work and customer
          experience, Hoostly fuels businesses of all sizes
        </p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          {PricingDetailsData.map((data) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              className={`p rounded-md bg-[#fafafa] p-1 pt-10 ${data.isActive ? "rounded-md bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 pt-3 " : ""}`}
            >
              {data.isActive && (
                <h1 className="text-center text-xl font-bold text-white">
                  Best Value
                </h1>
              )}
              <div
                key={data.id}
                className="flex flex-col gap-10 rounded-md bg-[#fafafa] p-10 text-[#1e1e1e]"
              >
                <div className="flex h-16 flex-col gap-1">
                  <h1
                    className={`text-3xl font-bold ${
                      data.isActive
                        ? "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent"
                        : ""
                    }`}
                  >
                    {data.plan}
                  </h1>

                  <p className="font-bold">{data.planDesc}</p>
                </div>
                <div className="h-16">
                  {data.pricePerYear && (
                    <h1>
                      <span
                        className={`text-4xl font-bold ${data.isActive ? " bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent  " : ""}`}
                      >
                        ${data.pricePerYear}
                      </span>{" "}
                      /license/year
                    </h1>
                  )}
                  {data.discuss && <h1>{data.discuss}</h1>}

                  {data.pricePerMonth && (
                    <h1>
                      <span className="">${data.pricePerMonth}</span>{" "}
                      /license/month
                    </h1>
                  )}
                </div>

                <div>
                  <button
                    className={`text-md cursor-pointer rounded-full  border border-black p-5 font-bold duration-300 hover:bg-black hover:text-white ${data.isActive ? "border-none bg-[#118855] text-white" : ""}`}
                  >
                    {data.buttonTxt}
                  </button>
                </div>
                <hr />
                <ul className="flex flex-col gap-3">
                  <p className="text-sm"> {data.descTitle}</p>
                  {data.offerings.map((offering) => (
                    <li className="flex gap-3 text-xs">
                      <img
                        src="https://pricing.webex.com/images/check-icon-green-bold.svg"
                        alt=""
                      />
                      {offering}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
