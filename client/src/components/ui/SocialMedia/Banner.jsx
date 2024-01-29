import React from "react";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#400280] to-[#2A27AD] text-white">
        <div className="mx-auto max-w-screen-xl p-10">
          <div className="flex py-20">
            <div className="flex w-full flex-col gap-10 py-5 md:w-1/2">
              <div className="flex items-center gap-2 text-xs">
                <span>Homepage &gt;</span>
                <span>Services &gt;</span>
                <span className="text-[#4cbe93]">Social Media Marketing</span>
              </div>
              <h1 className="text-left text-2xl  font-bold md:text-4xl">
                Ignite Your Growth with Effective Social Media Marketing
              </h1>
              <p className="left text-lg">
                Start your brand on the right foot with a comprehensive social
                media marketing strategy that engages your target audience and
                aligns with your long-term goals
              </p>
              <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20">
                <button className="bg-[#3C39C6] px-10 py-5 md:px-20">
                  Get in touch
                </button>
              </div>
            </div>
            <div className="justify-self-end">
              <FaPlay />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#121212] text-white">
        <div className="mx-auto max-w-screen-xl p-10">
          <h1 className="py-10 text-3xl md:text-5xl ">
            Partner with a Social Media Marketing Agency to Unleash Your
            Potential
          </h1>
        </div>
        <img
          src="https://ninjapromo.io/wp-content/themes/ninjapromo/assets/newdesign/main_bgline.svg"
          alt=""
        />
        <div className="mx-auto max-w-screen-xl p-1 md:p-10">
          <p className="py-10 pl-10 text-xl">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The
            digital ecosystem has transformed how customers behave and prospects
            interact. Marketing is no longer restricted to one-way channels like
            TV or print. Instead, it's a complex, multi-dimensional
            communications discipline that requires continuous effort to be
            effective. Your audience is no longer simply a receptive target for
            your message; they're active participants in the conversation. This
            is the new reality of digital marketing.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
