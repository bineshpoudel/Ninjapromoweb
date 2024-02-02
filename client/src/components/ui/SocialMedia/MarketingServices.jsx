import React, { useEffect } from "react";
import OrganicMarketingServices from "../../../data/OrganicSocialMarketingServices";
import PaidSocialMarketingServices from "../../../data/PaidSocialMarketingServices";
import AOS from "aos";
import "aos/dist/aos.css";
import PrimaryBtn from "../../PrimaryBtn";
const MarketingServices = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-10">
        <h1
          className="flex flex-col items-center justify-center py-5 text-center text-3xl font-semibold md:flex-row md:text-5xl "
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Our Social Media &nbsp;
          <span
            className="-skew-x-12 bg-gradient-to-r from-blue-700 via-purple-700 to-red-500 p-5 text-white"
            data-aos="fade-right"
            data-aos-duration="2500"
          >
            Marketing Services
          </span>
        </h1>
        <div className="py:5 flex flex-col gap-5 md:flex-row md:py-10">
          <div className="w-full md:w-1/2">
            <h1
              className="text-3xl md:text-5xl"
              data-aos="zoom-out"
              data-aos-duration="2000"
            >
              At NinjaPromo, We Understand Social Media And We Live For
              Marketing
            </h1>
          </div>
          <div
            className="flex w-full flex-col gap-10 pb-10 md:w-1/2"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div
              className="flex gap-4"
              data-aos="zoom-in"
              data-aos-duration="2200"
            >
              <img
                src="https://ninjapromo.io/wp-content/uploads/2023/02/services-time.svg"
                alt=""
              />

              <p className="text-xl">
                We know how to navigate the ever-changing landscape and develop
                creative solutions that achieve real results.
              </p>
            </div>
            <div
              className="flex gap-4"
              data-aos="zoom-in"
              data-aos-duration="2400"
            >
              <img
                src="https://ninjapromo.io/wp-content/uploads/2023/02/services-monitor.svg"
                alt=""
              />

              <p className="text-xl">
                We know how to navigate the ever-changing landscape and develop
                creative solutions that achieve real results.
              </p>
            </div>
            <div
              className="flex gap-4"
              data-aos="zoom-in"
              data-aos-duration="2600"
            >
              <img
                src="https://ninjapromo.io/wp-content/uploads/2023/02/services-layer.svg"
                alt=""
              />

              <p className="text-xl">
                It's all about developing a relationship with your audience and
                creating a connection that goes beyond likes, comments, and
                shares. This means developing a brand voice, creating compelling
                content, and engaging with your audience in a way that feels
                natural and authentic.
              </p>
            </div>
            <div
              className="flex gap-4"
              data-aos="zoom-in"
              data-aos-duration="2500"
            >
              <img
                src="https://ninjapromo.io/wp-content/uploads/2023/02/services-grid.svg"
                alt=""
              />

              <p className="text-xl">
                It also means having a strategy — one that's based on your
                unique goals, target audience, and brand persona.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-10 lg:flex-row">
          <div
            className="w-full rounded-md bg-gradient-to-r from-[#C8D5FE] to-[#FEF1F8] p-10 lg:w-1/2"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="flex flex-col gap-10">
              <h1
                className="pt-10 text-3xl  font-bold md:text-5xl"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                Organic Social
              </h1>
              <div className="grid grid-cols-1 gap-5 pb-10 md:grid-cols-2">
                {OrganicMarketingServices.map((service) => (
                  <div
                    key={service.id}
                    className="flex gap-5"
                    data-aos="zoom-in"
                    data-aos-duration="2500"
                  >
                    <img src={service.img} alt="" />
                    <p>{service.title}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center lg:text-right">
                <button
                  data-aos="zoom-in"
                  data-aos-duration="2500"
                  className="items-left border border-black px-10 py-5 font-bold md:px-20"
                >
                  Get a proposol
                </button>
              </div>
            </div>
          </div>
          <div
            className="w-full rounded-md bg-black p-10 text-white lg:w-1/2"
            data-aos="zoom-out"
            data-aos-duration="2500"
          >
            <div className="flex flex-col gap-10">
              <h1
                className="pt-10 text-3xl font-bold md:text-5xl"
                data-aos="zoom-out"
                data-aos-duration="2000"
              >
                Paid Social
              </h1>
              <div className="grid grid-cols-1 gap-5 pb-5 lg:grid-cols-2 lg:pb-44">
                {PaidSocialMarketingServices.map((service) => (
                  <div
                    key={service.id}
                    className="flex gap-5"
                    data-aos="zoom-out"
                    data-aos-duration="2700"
                  >
                    <img src={service.img} alt="" />
                    <p>{service.title}</p>
                  </div>
                ))}
              </div>

              <div
                className="text-bottom  text-center lg:text-right"
                data-aos="zoom-out"
                data-aos-duration="2000"
              >
                <PrimaryBtn label={"Get a proposal"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingServices;
