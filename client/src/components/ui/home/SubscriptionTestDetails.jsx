import React, { useEffect } from "react";
import { SubscriptionTestImg } from "../../../assets";
import AOS from "aos";
import "aos/dist/aos.css";
const SubscriptionTestDetails = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full bg-[#121212] text-white">
      <div className="mx-auto max-w-screen-xl px-10 py-20 pb-20">
        <h1
          className="pb-20 text-center text-2xl md:text-5xl"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Test the subscription model
        </h1>

        <div className="flex flex-col items-center gap-10 md:flex-row ">
          <div
            className="flex w-1/2 flex-col gap-16 "
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h2 className="text-2xl">
              Register for the Zoom presentation and receive:
            </h2>
            <ol className="flex list-decimal flex-col gap-5 px-2 pt-10 text-xl text-gray-400 md:px-5 ">
              <li>
                A comprehensive blueprint for designing the ideal marketing
                department
              </li>
              <li>
                Detailed analysis of successful case studies tailored to your
                industry
              </li>
              <li>One-on-one consultation with a strategic marketing expert</li>
              <li>A preliminary work plan outlining actionable steps</li>
              <li>Exclusive terms for a one-month trial period</li>
            </ol>
            <div className="w-full py-5 md:w-2/5">
              <button
                type="button"
                className="w-full rounded-md border-2 border-gray-200 border-opacity-20 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 px-5  py-3 text-center text-white hover:border-gray-200
             hover:bg-black hover:bg-gradient-to-r hover:from-black hover:to-black "
              >
                Sign up for presentation
              </button>
            </div>
          </div>
          <div
            className="w-full md:w-1/2"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img
              src={SubscriptionTestImg}
              alt="subscription-test-img"
              className="h-auto w-full duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionTestDetails;
