import React, { useEffect } from "react";
import SuccessSteps from "../../../data/SuccesSteps";
import AOS from "aos";
import "aos/dist/aos.css";
import PrimaryBtn from "../../PrimaryBtn";
const StepsForSuccess = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-10 py-20">
        <h1
          className="pb-10 text-3xl md:text-5xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Our Steps For Mobile App Success
        </h1>

        {SuccessSteps.map((step, index) => (
          <div data-aos="fade-right" data-aos-duration="1500">
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
        <div
          className="py-10 text-center"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          {/* <button className="bg-blue-700 px-10 py-4 text-white">
            Get a proposol
          </button> */}
          <PrimaryBtn label={"Get a proposal"} />
        </div>
      </div>
    </div>
  );
};

export default StepsForSuccess;
