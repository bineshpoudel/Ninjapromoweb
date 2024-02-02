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
      style={{
        backgroundImage: `url('https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-mobile-design02.jpg')`,
      }}
      className="w-full bg-cover text-white "
    >
      <div className="mx-auto max-w-screen-xl p-10 ">
        <div className="flex ">
          <div className="flex w-full flex-col gap-10 py-5 md:w-2/3 md:py-24">
            <h1
              className="pt-20 text-left  text-2xl font-bold md:text-4xl"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Unlock your growth potential with dynamic mobile app development
              services
            </h1>
            <p
              className="left text-xl"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Reach & engage audiences on any platform.
            </p>
            <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20">
              {/* <button className="bg-[#3C39C6] px-10 py-5">
                Request a free proposal
              </button> */}
              <div data-aos="fade-up" data-aos-duration="1800">
                <PrimaryBtn label={"Request a free proposal"} />
              </div>

              <div
                className="hidden gap-2 md:flex"
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
              <img src={Crunchbase} alt="crunchbase" className="h-12 w-1/4" />
              <img
                src={DigitalAgencyNetwork}
                alt="digitalagencyne"
                className="h-12 w-1/4"
              />
              <img src={Manifest} alt="manifest" className="h-12 w-1/4" />
              <img src={Clutch} alt="clutc" className="h-12 w-1/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
