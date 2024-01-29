import React from "react";
import WebDesignApproach from "../../../data/WebDesignApproach";

const Approach = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-10 py-20">
        <h1 className="pb-10 text-3xl md:text-4xl">
          Our Approach to web design and development
        </h1>

        {WebDesignApproach.map((step, index) => (
          <div>
            <div
              key={index}
              className="flex flex-col justify-between py-4 md:flex-row "
            >
              <div className="flex items-center gap-2 md:gap-10 ">
                <h1 className="text-xl font-semibold md:text-3xl">
                  {index + 1}
                </h1>
                <img src={step.image} alt="" className="size-6 md:size-8" />
                <h1 className="text-xl font-semibold md:text-3xl">
                  {step.step}
                </h1>
              </div>
              <div className="w-full bg-[#F5F5F9] p-5 md:w-2/5">
                <p className="text-sm">{step.desc}</p>
              </div>
            </div>
            <hr className="h-2" />
          </div>
        ))}
        <div className="py-10 text-center">
          <button className="bg-blue-700 px-10 py-4 text-white">
            Get a free website design proposal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Approach;
