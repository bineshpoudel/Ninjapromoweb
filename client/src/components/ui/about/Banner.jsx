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
      style={{
        backgroundImage: `url('https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg')`,
      }}
      className="w-full bg-cover py-20 text-white"
    >
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="flex flex-col items-center justify-center gap-10 py-5 md:py-24">
          <h1
            className="text-center text-5xl  font-bold md:text-5xl"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            The Brightest Minds <br className="hidden md:block" /> in Digital at
            Your Service
          </h1>
          <p
            className="text-md text-center md:text-lg"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            Established in 2017, NinjaPromo is an agency with influence around
            the world. We help brands connect with their customers by creating
            personal connections in this digital world. Most of them are still
            with us. The key to our success? We bring personal to digital.
            <br className="hidden md:block" /> by potential customers using one
            of the most powerful marketing <br className="hidden md:block" />{" "}
            tools at your disposal.
          </p>
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20">
            <div data-aos="fade-up" data-aos-duration="2000">
              <PrimaryBtn label={"Get a proposal"} />
            </div>

            <div
              className=" hidden gap-2 md:flex"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <p className="text-xl">Meet ninja promo</p>
              <div className="group flex size-8 items-center justify-center rounded-full bg-white hover:bg-[#3C39C6]">
                <HiOutlineArrowSmallRight className="text-[#3C39C6] duration-500 group-hover:text-white" />
              </div>
            </div>
          </div>
          <div className="flex gap-2 py-20 md:gap-5">
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
