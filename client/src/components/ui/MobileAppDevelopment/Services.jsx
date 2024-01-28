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
        {MobileAppDevelopmentServices?.map((service) => (
          <div className="flex flex-col gap-4 py-10 md:flex-row">
            <div className="flex w-full flex-col gap-5 py-10  md:w-2/3">
              <img src={service.serviceLogo} alt="" className="size-16" />
              <h1 className="text-3xl font-bold">{service.service}</h1>
              <p className="font-thin">{service.desc}</p>
              <div>
                <button className="bg-blue-700 px-5 py-2">
                  {service.buttonText}
                </button>
              </div>
            </div>
            <div className="">
              <img src={service.serviceImage} alt="" />
            </div>
          </div>
        ))}
        {/* <div className="flex flex-col gap-4 py-10 md:flex-row">
          <div className="flex w-full flex-col gap-5 py-10  md:w-2/3">
            <img
              src="https://ninjapromo.io/wp-content/uploads/2022/06/mobile-app-development-custom-mobile-app-development-services-apple-1.svg"
              alt=""
              className="size-16"
            />
            <h1 className="text-3xl font-bold">
              IPhone App Development Services
            </h1>
            <p className="font-thin">
              We have a proven track record of designing high-value iOS apps
              that fit seamlessly into the App Store. From startups looking to
              increase their digital footprint to established corporations that
              are seeking scalability, our agency builds apps that get noticed.
              As a full-service iOS mobile app development company, we
              confidently provide end-to-end services from ideation and
              development to integration and management.
            </p>
            <div>
              <button className="bg-blue-700 px-5 py-2">
                Speak to an iOS expert
              </button>
            </div>
          </div>
          <div className="">
            <img
              src="https://ninjapromo.io/wp-content/uploads/2022/09/6023326-02.png"
              alt=""
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
