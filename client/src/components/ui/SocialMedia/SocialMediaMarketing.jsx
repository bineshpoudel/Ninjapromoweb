import React from "react";
import SocialMediaMarketingData from "../../../data/SocialMediaMarketingData";

const SocialMediaMarketing = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-10">
        <h1 className="pb-10 text-center text-3xl md:text-6xl">
          Discover the Power of Social Media Digital Marketing
        </h1>
        {SocialMediaMarketingData.map((data, index) => (
          // <div className=" flex flex-col items-center gap-10 md:flex-row ">
          <div
            key={index}
            className={`flex flex-col items-center gap-10 md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="w-full md:w-1/2">
              <img src={data.img} alt="" />
            </div>
            <div className="flex w-full  flex-col gap-5 md:w-1/2">
              <h1 className="text-xl md:text-3xl ">{data.title}</h1>
              {data.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[#EAEFFF] to-[#FEF8FC] py-10">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-10 p-10">
          <h1 className="text-center text-3xl md:text-left md:text-5xl">
            Our social media marketing service will{" "}
            <br className="hidden md:block" />
            help you kickstart your social media{" "}
            <br className="hidden md:block" /> presence, develop a strategy,
            create <br className="hidden md:block" /> content, and engage with
            your brand <br className="hidden md:block" />
            fans.
          </h1>
          <div className="flex flex-col items-center justify-between gap-5 bg-[#D4DDF9] p-10 md:flex-row ">
            <p className="text-md md:text-xl ">
              We'll also help you track your progress and measure your success
              so you can see exactly what's working and what isn't. We are
              comfortable working with all major platforms such as Facebook,
              Instagram, Twitter, and Snapchat.
            </p>

            <div className="w-full text-center">
              <button className=" bg-blue-700 px-10 py-5 text-white md:px-20">
                Start now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMarketing;
