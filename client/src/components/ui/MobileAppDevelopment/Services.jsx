import React from "react";
import MobileAppDevelopmentServices from "../../../data/MobileAppServices";

const Services = () => {
  return (
    <div className="w-full bg-[#121212] text-white">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="flex items-center gap-2 py-10 text-xs">
          <span>Homepage &gt;</span>
          <span>Services &gt;</span>
          <span className="text-[#4cbe93]">Mobile App Development </span>
        </div>
        <h1 className="text-2xl font-bold  md:text-4xl">
          Our mobile application <br className="hidden md:block" /> development
          scope
        </h1>
        <p className="w-full py-10 md:w-4/5">
          In today's mobile-first world, your business will benefit from
          unparalleled app development services that prioritize the user
          experience. As a mobile application development company with years of
          experience within the industry, we help clients achieve just that by
          bringing your consumer's web experience to mobile devices.
        </p>

        {/* Services section starts from here */}
        {MobileAppDevelopmentServices.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-10 py-10 md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div>
              <img src={service.serviceImage} alt="" />
            </div>
            <div className="flex w-full flex-col gap-10 py-10  md:w-2/3">
              {service.serviceLogo && (
                <img src={service.serviceLogo} alt="" className="size-16" />
              )}
              {service.service && (
                <h1 className="text-3xl font-bold">{service.service}</h1>
              )}
              {service.desc && <p className="font-thin">{service.desc}</p>}
              {service.buttonText && (
                <div>
                  <button className="bg-blue-700 px-5 py-2">
                    {service.buttonText}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
