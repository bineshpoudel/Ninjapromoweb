import React, { useState } from "react";
import { ImPower } from "react-icons/im";
const MarketingTransformation = () => {
  return (
    <div className="w-full py-10">
      <div className="mx-auto max-w-screen-xl p-10 ">
        <div className="flex flex-col gap-10 rounded-3xl bg-gradient-to-r from-[#16101A] to-[#3632BD] p-10 text-white">
          <h1 className="text-center text-3xl md:text-5xl">
            SMM Marketing that Will Transform Your Brand
          </h1>
          <p className="text-center text-2xl font-thin">
            Get in touch to learn more about our services and how we can help
            you elevate your digital social media marketing strategy.
          </p>
          <div className="flex cursor-pointer justify-center">
            <button className="flex items-center gap-5 bg-white px-10 py-5 font-bold text-black hover:bg-gradient-to-r hover:from-purple-400 hover:to-yellow-200 md:px-20">
              Book a call now
              <ImPower />
            </button>
          </div>
        </div>

        <div className="py-20">
          <h1 className="flex flex-col items-center justify-center py-5 text-center text-3xl font-semibold md:flex-row md:text-5xl">
            How Our SSM Agency &nbsp;
            <span className="-skew-x-12 bg-gradient-to-r from-blue-700 via-purple-700 to-red-500 p-5 text-white">
              Drive Results
            </span>
          </h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <p className="text-3xl">
                There are a lot of social media agencies out there, but not all
                of them are created equal. At NinjaPromo, we pride ourselves on
                being a results-driven company. This means that everything we do
                is focused on achieving your desired outcomes — whether that's
                greater brand awareness, a higher volume of website traffic, or
                more sales.
              </p>
            </div>
            <div className="rounded-md bg-[#EAEFFF] p-10">
              <p>
                Data drives everything we do, and we use the latest tools and
                technologies to track your progress and measure your success.
                This allows us to course-correct along the way and ensures we're
                always on track to hit our targets.
                <br />
                <br />
                But data is only part of the equation. We also have a team of
                highly experienced social media experts who are passionate about
                what they do. This combination of data and expertise allows us
                to create tailor-made social media solutions that achieve real
                results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingTransformation;
