import React, { useEffect } from "react";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import {
  Clutch,
  Crunchbase,
  DigitalAgencyNetwork,
  Manifest,
} from "../../../assets";
import AOS from "aos";
import "aos/dist/aos.css";
import PrimaryBtn from "../../PrimaryBtn";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="w-full bg-auto py-20 text-white"
      style={{
        backgroundImage: `url("https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg")`,
      }}
    >
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="flex flex-col items-center justify-center gap-10 py-5 md:py-24">
          <h1
            className="text-center text-2xl  font-bold md:text-4xl"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Boost your marketing strategy with our <br /> video production
            services
          </h1>
          <p
            className="text-center text-xl font-thin"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Every brand has a story worth telling — we help ensure it's worth
            listening to.
          </p>
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20">
            <div data-aos="fade-up" data-aos-duration="1800">
              <PrimaryBtn label={"Get started"} />
            </div>
            <div
              className=" hidden gap-2 md:flex"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <p className="text-xl">Meet ninja promo</p>
              <div className="group flex size-8 items-center justify-center rounded-full bg-white hover:bg-[#3C39C6]">
                <HiOutlineArrowSmallRight className="text-[#3C39C6] duration-500 group-hover:text-white" />
              </div>
            </div>
          </div>
          <div
            className="flex gap-2 py-20 md:gap-5"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <img src={Crunchbase} alt="crunchbase" className="h-10 w-1/4" />
            <img
              src={DigitalAgencyNetwork}
              alt="digitalagencyne"
              className="h-10 w-1/4"
            />
            <img src={Manifest} alt="manifest" className="h-10 w-1/4" />
            <img src={Clutch} alt="clutc" className="h-10 w-1/4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
