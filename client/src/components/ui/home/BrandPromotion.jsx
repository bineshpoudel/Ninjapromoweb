import React, { useEffect } from "react";
import { Credible, Htx, Intellectsoft, Stockmusic } from "../../../assets";
import { CgArrowRight } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceBtn from "../../ServiceBtn";

const BrandPromotion = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const brandData = [
    {
      brand: Credible,
      detail: "Reached 9M impressions for Credible's go-to-market journey",
    },
    {
      brand: Stockmusic,
      detail: "Reached 9M impressions for Credible's go-to-market journey",
    },
    {
      brand: Intellectsoft,
      detail: "Reached 9M impressions for Credible's go-to-market journey",
    },
    {
      brand: Htx,
      detail: "Reached 9M impressions for Credible's go-to-market journey",
    },
  ];
  return (
    <div className="w-full bg-gradient-to-r from-[#121212] via-[#141414] to-[#25246b]  text-white ">
      <div className="mx-auto max-w-screen-xl p-4 md:p-10 ">
        <div className="relative" data-aos="fade-up" data-aos-duration="2000">
          <div className="h-84 w-full rounded-md bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-0.5">
            <div className=" flex  h-full w-full flex-col gap-10 rounded-md bg-[#121212] p-3 pt-6  md:p-20">
              <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
                <p className="text-2xl font-bold">
                  Proven expertise in promoting top international brands
                </p>
                <div className="flex flex-col items-center gap-3 uppercase ">
                  <div className="flex gap-2">
                    <ServiceBtn service={"Crypto"} />
                    <ServiceBtn service={"Finetech"} />
                    <ServiceBtn service={"Saas"} />
                    <ServiceBtn service={"Software"} />
                  </div>
                  <div className="flex gap-2">
                    <ServiceBtn service={"E-com"} />
                    <ServiceBtn service={"Gaming"} />
                    <ServiceBtn service={"B2B"} />
                    <ServiceBtn service={"Real State"} />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 overflow-x-auto md:grid md:grid-cols-12">
                {brandData.map((data, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    className="col-span-12 flex min-w-72 flex-col gap-5 rounded-md border border-gray-500 bg-gradient-to-r from-[#1d1d1d] to-[#2b2b2b] p-10  md:col-span-6
                      "
                  >
                    <img src={data.brand} alt={data.brand} className="w-24" />
                    <h2>{data.detail}</h2>
                    <div className="group flex items-center justify-end gap-2">
                      <a href="#" className="underline hover:no-underline">
                        See the case
                      </a>
                      <CgArrowRight className="group-hover:translate-x-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="absolute left-[-1.2rem] top-[-1rem] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 
            to-indigo-500   md:left-[-1.6rem] md:top-[-1.6rem]  "
          >
            2
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPromotion;
