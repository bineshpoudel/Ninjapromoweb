import React, { useState } from "react";
import { PiNavigationArrowFill } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";
import { GiPolarStar } from "react-icons/gi";
const CryptoSeo = () => (
  <div className="flex flex-col items-start gap-5 px-20 py-10 text-left">
    <h2 className="text-3xl">Crypto SEO</h2>
    <p className="">
      Crypto is one of the most competitive industries on the Internet, and that
      means ranking in search engines is no easy feat. But with our cutting-edge
      crypto and blockchain SEO services, we can help you get the visibility you
      need to gain new investors for your offering. Our SEO agency understands
      the unique challenges that come with the fast-paced world of
      cryptocurrency and how you need an SEO partner that can keep up.
    </p>
  </div>
);
const FinetechSeo = () => (
  <div className="flex flex-col items-start gap-5 px-20 py-10 text-left">
    <h2 className="text-3xl">FineTechSeo</h2>
    <p className="">
      Fintech is exploding and innovative new companies are breaking ground in
      the finance world. But with so much competition, it can be hard to get
      your fintech business noticed. Paid advertising is one option, but SEO can
      help you get in front of your target audience organically and earn
      long-term results. Our company offers specialized SEO services for the
      fintech industry that are designed to help you rank higher in SERPs, drive
      more people to your website, and generate more leads and sales for your
      business.
    </p>
  </div>
);
const SeoOptimizationServices = () => {
  const [selectedSeo, setSelectedSeo] = useState("crypto");

  const handleButtonClick = (seoType) => {
    setSelectedSeo(seoType);
  };

  const renderSeo = () => {
    switch (selectedSeo) {
      case "crypto":
        return <CryptoSeo />;
      case "finetech":
        return <FinetechSeo />;
    }
  };

  return (
    <div className="w-full py-20 font-light text-[#212121]">
      <div className=" mx-auto max-w-screen-xl py-20  text-center  font-normal">
        <h1 className="text-4xl">Our Seo Optimization Services</h1>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex flex-col gap-5">
            <div
              onClick={() => handleButtonClick("crypto")}
              className="group flex items-center gap-5 text-[#1D322C] hover:text-[#4cbe93]"
            >
              <PiNavigationArrowFill className="size-16 rotate-[140deg] duration-500 group-hover:translate-x-4 " />
              <p className="text-2xl">Crytpo SEO</p>
            </div>
            <div
              onClick={() => handleButtonClick("finetech")}
              className="group flex items-center gap-5 text-[#1D322C] hover:text-[#4cbe93]"
            >
              <PiNavigationArrowFill className="size-16 rotate-[140deg] duration-500 group-hover:translate-x-4 " />
              <p className="text-2xl">Finetech SEO</p>
            </div>
            <div className="group flex items-center gap-5 text-[#1D322C] hover:text-[#4cbe93]">
              <PiNavigationArrowFill className="size-16 rotate-[140deg] duration-500 group-hover:translate-x-4 " />
              <p className="text-2xl">Technical SEO</p>
            </div>
            <div className="group flex items-center gap-5 text-[#1D322C] hover:text-[#4cbe93]">
              <PiNavigationArrowFill className="size-16 rotate-[140deg] duration-500 group-hover:translate-x-4 " />
              <p className="text-2xl">Local SEO</p>
            </div>
            <div className="group flex items-center gap-5 text-[#1D322C] hover:text-[#4cbe93]">
              <PiNavigationArrowFill className="size-16 rotate-[140deg] duration-500 group-hover:translate-x-4 " />
              <p className="text-2xl">Enterprise SEO</p>
            </div>
            <div className="group flex items-center gap-5 text-[#1D322C] hover:text-[#4cbe93]">
              <PiNavigationArrowFill className="size-16 rotate-[140deg] duration-500 group-hover:translate-x-4 " />
              <p className="text-2xl">Organic SEO</p>
            </div>
            <div className="group flex items-center gap-5 text-[#1D322C] hover:text-[#4cbe93]">
              <PiNavigationArrowFill className="size-16 rotate-[140deg] duration-500 group-hover:translate-x-4 " />
              <p className="text-2xl">SEO Audit</p>
            </div>{" "}
            <div className="group flex items-center gap-5 text-[#1D322C] hover:text-[#4cbe93]">
              <PiNavigationArrowFill className="size-16 rotate-[140deg] duration-500 group-hover:translate-x-4 " />
              <p className="text-2xl">Small Business/Startup SEO</p>
            </div>
            <div className="group flex items-center gap-5 text-[#1D322C] hover:text-[#4cbe93]">
              <PiNavigationArrowFill className="size-16 rotate-[140deg] duration-500 group-hover:translate-x-4 " />
              <p className="text-2xl">Ecommerce SEO</p>
            </div>
          </div>
          <div className="pr-0 md:pr-10">
            <div className=" relative h-[692.78px] w-[385px] rounded-br-3xl rounded-tl-3xl border-2 border-black md:h-[24.884rem] md:w-[34.891rem] ">
              <div className="absolute left-[-1rem]  top-5  h-[638.88px] w-[417px] rounded-br-3xl rounded-tl-3xl border-2 border-black bg-white md:h-[22.099rem] md:w-[36.469rem]">
                <div>{renderSeo()}</div>
              </div>
              <div className="absolute  right-4 top-[-2rem]">
                <PiStarFourFill className="size-16  text-[#4CBE9E]" />
              </div>
              <div className="absolute  bottom-6">
                <GiPolarStar className="size-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoOptimizationServices;
// 4cbe93
