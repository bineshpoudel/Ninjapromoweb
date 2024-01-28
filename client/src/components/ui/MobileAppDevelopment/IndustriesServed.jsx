import React from "react";
import ServedIndustries from "../../../data/IndustriesServed";

const IndustriesServed = () => {
  return (
    <div className="w-full bg-[#F5F5F9]">
      <div className="mx-auto max-w-screen-xl p-10">
        <h1 className="py-10 text-3xl">Industries we serve</h1>
        <p className="">
          Our extensive experience developing bespoke mobile apps spans across
          numerous sectors. No matter how large or small your business, or the
          complexity of your requirements, you can rest assured that we have
          dedicated developers with the skills and technical know-how to build
          high-powered solutions in your specific industry. This includes the
          verticals below.
        </p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {ServedIndustries.map((industry) => (
            <div className="flex flex-col gap-5 rounded-md bg-white p-5">
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
        <div className="flex justify-center py-10 text-white">
          <button className="text-l bg-blue-700 px-7 py-4">
            Get a proposol
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustriesServed;
