import React, { useEffect } from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { MarketingAchievement } from "../../../assets";
import AOS from "aos";
import "aos/dist/aos.css";
const MarketingAchievements = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full bg-[#121212] text-white">
      <div className="mx-auto max-w-screen-xl px-10 pb-20">
        <div className="pb-16">
          <h1
            className=" whitespace-normal text-center text-2xl font-bold  md:whitespace-nowrap md:text-4xl"
            data-aos="fade-up"
          >
            You'll get the experience and resources <br /> of the world's № 1
            digital agency at the price <br /> of 1-2 in-house marketers
          </h1>
        </div>

        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex flex-col gap-5" data-aos="fade-right">
            <div className="flex flex-col gap-5 text-gray-400 underline">
              <p>Best Digital Agencies Worldwide</p>
              <p>Top Digital Marketing Agencies for Startups</p>
              <p>Best Advertising Agency in US</p>
              <p>Best Digital Marketing Agency in the US</p>
              <p>Best Web3 Marketing Agency</p>
              <p>№1 Marketing Agency for Entrepreneurs</p>
              <p>Top E-commerce Marketing Agencies in 2023</p>
              <p>Best Crypto Marketing Agency Worldwide</p>
              <p>Top Blockchain Marketing Agency</p>
            </div>
            <div className="flex items-center justify-center no-underline">
              <p className="italic text-gray-200">
                Ninja Promo team at the Blockchain'Economy Summit, Dubai 2023
              </p>
              <LiaLongArrowAltRightSolid className="w-full text-3xl" />
            </div>
          </div>

          <div>
            <img
              src={MarketingAchievement}
              alt="marketingachievement"
              className="duration-500 hover:scale-110"
              aos-data="fade-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingAchievements;
