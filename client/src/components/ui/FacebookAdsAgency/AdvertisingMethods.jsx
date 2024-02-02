import React, { useEffect } from "react";
import MarketingSteps from "../../../data/MarketingSteps";
import Sajha from "../../Sajha";
import AOS from "aos";
import "aos/dist/aos.css";
const AdvertisingMethods = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="flex flex-col gap-10">
          <h1
            className="text-2xl md:text-5xl"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Our Method for Successful Advertising on Facebook
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200">
            Embarking on a Facebook advertising campaign with our agency means
            stepping into a world of calculated creativity where we blend
            data-driven insights with innovative ideas to achieve your goals.
            Our comprehensive, four-step process ensures every aspect of your
            marketing is optimized for success, from the initial research to
            ongoing refinements. Let's take a closer look at how we bring your
            marketing to life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-3 md:grid-cols-4">
          {MarketingSteps.map((steps) => (
            <div key={steps.id} data-aos="fade-right" data-aos-duration="1500">
              <div
                className="flex flex-col gap-5"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <h1
                  className="text-xl"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  {steps.step}
                </h1>
                <p
                  className="text-sm"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {steps.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvertisingMethods;
