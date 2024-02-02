import React, { useEffect } from "react";
import AwardsData from "../../../data/AwardsData";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const Awards = () => {
  useEffect(() => {
    AOS.init();
  });
  const digitalMarketingAwards = AwardsData.filter(
    (award) => award.award === "digitalmarketing",
  );
  const blockChainMarketingAwards = AwardsData.filter(
    (award) => award.award === "blockchainmarketing",
  );

  const fineTechAwards = AwardsData.filter(
    (award) => award.award === "fintechmarketing",
  );

  return (
    <div className="w-full  bg-[#121212] text-white">
      <div className="mx-auto max-w-screen-xl p-10">
        <div>
          {/* Digital Marketing awards */}
          <h1
            className="py-10 text-3xl"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Digital Marketing Awards
          </h1>
          <div className="grid grid-cols-2 gap-5  md:grid-cols-4">
            {digitalMarketingAwards.map((award) => (
              <div
                key={award.id}
                className="relative"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                <div className="h-36 w-full rounded-br-3xl rounded-tl-3xl border border-gray-500 p-2 md:h-48">
                  <div className="flex h-full flex-col items-center justify-center gap-3 rounded-br-3xl rounded-tl-3xl border border-dotted p-2 md:p-5">
                    <img
                      src={award.img}
                      alt=""
                      className="max-h-full w-full object-cover"
                    />
                    <p className="text-center  text-xs md:text-sm">
                      {award.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute -right-4 -top-4">
                  <FaStar className="size-8 text-[#3C39C6]" />
                </div>
              </div>
            ))}
          </div>

          {/* Block chain marketin Awards */}
          <h1
            className="py-10 text-3xl"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Blockchain Marketing Agency Award
          </h1>
          <div className="grid grid-cols-2  gap-5  md:grid-cols-4">
            {blockChainMarketingAwards.map((award) => (
              <div
                key={award.id}
                className="relative"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                <div className="h-36 w-full rounded-br-3xl rounded-tl-3xl border border-gray-500 p-2 md:h-48">
                  <div className="flex h-full flex-col items-center justify-center gap-2 rounded-br-3xl rounded-tl-3xl border border-dotted p-2 md:p-10">
                    <img
                      src={award.img}
                      alt=""
                      className="  max-h-full  object-cover"
                    />
                    <p className="text-center  text-xs md:text-sm">
                      {award.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute -right-4 -top-4">
                  <FaStar className="size-8 text-[#3C39C6]" />
                </div>
              </div>
            ))}
          </div>

          {/* Finetech marketing awards */}
          <h1
            className="py-10 text-3xl"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Finetech Marketing Awards
          </h1>
          <div className="grid grid-cols-2  gap-5  md:grid-cols-4">
            {fineTechAwards.map((award) => (
              <div
                key={award.id}
                className="relative"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                <div className="h-36 w-full rounded-br-3xl rounded-tl-3xl border border-gray-500 p-2 md:h-48">
                  <div className="flex h-full flex-col items-center justify-center gap-3 rounded-br-3xl rounded-tl-3xl border border-dotted p-2 md:p-5">
                    <img
                      src={award.img}
                      alt=""
                      className="max-h-full w-full object-cover"
                    />
                    <p className="text-center  text-xs md:text-sm">
                      {award.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute -right-4 -top-4">
                  <FaStar className="size-8 text-[#3C39C6]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
