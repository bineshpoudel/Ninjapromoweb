import React, { useEffect } from "react";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import {
  Clutch,
  Crunchbase,
  DigitalAgencyNetwork,
  Manifest,
} from "../../../assets";
import PrimaryBtn from "../../PrimaryBtn";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="w-full bg-cover py-20 text-white"
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
            Unlock the potential of organic search with{" "}
            <br className="hidden md:block" /> our game-changing SEO services
          </h1>
          <p
            className="text-center text-xl"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Our agency can help you show up in search engines and get found{" "}
            <br className="hidden md:block" /> by potential customers using one
            of the most powerful marketing <br className="hidden md:block" />{" "}
            tools at your disposal.
          </p>
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20">
            <div data-aos="fade-up" data-aos-duration="1400">
              <PrimaryBtn label={"Speak to Us"} />
            </div>

            <div className=" hidden gap-2 md:flex">
              <p
                className="text-xl"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                Meet ninja promo
              </p>
              <div
                className="group flex size-8 items-center justify-center rounded-full bg-white hover:bg-[#3C39C6]"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <HiOutlineArrowSmallRight className="text-[#3C39C6] duration-500 group-hover:text-white" />
              </div>
            </div>
          </div>
          <div
            className="flex gap-2 py-20 md:gap-5"
            data-aos="fade-up"
            data-aos-duration="1800"
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
