import React, { useEffect } from "react";
import ServedIndustries from "../../../data/IndustriesServed";
import AOS from "aos";
import "aos/dist/aos.css";
import PrimaryBtn from "../../PrimaryBtn";
const IndustriesServed = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full bg-[#F5F5F9]">
      <div className="mx-auto max-w-screen-xl p-10">
        <h1
          className="py-10 text-4xl"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Industries we serve
        </h1>
        <p className="pb-10" data-aos="fade-up" data-aos-duration="1400">
          Our extensive experience developing bespoke mobile apps spans across
          numerous sectors. No matter how large or small your business, or the
          complexity of your requirements, you can rest assured that we have
          dedicated developers with the skills and technical know-how to build
          high-powered solutions in your specific industry. This includes the
          verticals below.
        </p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {ServedIndustries.map((industry) => (
            <div
              className="flex flex-col gap-5 rounded-md bg-white p-5"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <img src={industry.img} alt="" className="size-8" />
              <h2 className="text-xl font-semibold">{industry.industry}</h2>
              <div>
                <p>{industry.desc}</p>
                <ul className="flex list-disc flex-col gap-3 px-5 py-2">
                  {industry.specializations.map((specialization, index) => (
                    <li key={index}>{specialization}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div
          className="flex justify-center py-10 text-white"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          {/* <button
            className="text-l bg-blue-700 px-7 py-4"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            Get a proposol
          </button> */}
          <PrimaryBtn label={"Get a proposal"} />
        </div>
      </div>
    </div>
  );
};

export default IndustriesServed;
