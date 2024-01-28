import React from "react";
import MarketingSteps from "../../../data/MarketingSteps";

const AdvertisingMethods = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="flex flex-col gap-10">
          <h1 className="text-2xl md:text-5xl">
            Our Method for Successful Advertising on Facebook
          </h1>
          <p>
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
            <div key={steps.id}>
              <div className="flex flex-col gap-5">
                <h1 className="text-xl">{steps.step}</h1>
                <p className="text-sm">{steps.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvertisingMethods;
