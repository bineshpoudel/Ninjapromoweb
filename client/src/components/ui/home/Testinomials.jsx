import React, { useEffect } from "react";
import TestinomialData from "../../../data/TestinomialData";
import { ImQuotesLeft } from "react-icons/im";
import { IoMdStar } from "react-icons/io";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import AOS from "aos";
import "aos/dist/aos.css";
const Testinomials = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const RenderTestinomials = TestinomialData.map((data) => (
    <div
      className="flex flex-col gap-20 rounded-lg
       border border-[#525252] bg-gradient-to-r from-[#1d1d1d] to-[#2b2b2b] p-6"
    >
      <div className="flex flex-col gap-5">
        <ImQuotesLeft className="text-4xl" />
        <p className="text-l h-28">{data.review}</p>
      </div>

      <img className="h-7 w-44" src={data.reviewBy} alt="" />
    </div>
  ));

  return (
    <div className="w-full bg-[#121212]  text-white">
      <div className="mx-auto max-w-screen-xl px-10 py-20 pb-20">
        <div className="pb-10">
          <h1
            className="text-center text-4xl font-bold"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Testimonials
          </h1>
        </div>
        <div
          className="flex flex-col gap-5 md:grid md:grid-cols-4  "
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <div className=" flex flex-col justify-between">
            <div className="flex h-36 w-full flex-col justify-between gap-4 rounded-md bg-[#181818] px-6 py-4 text-xs  ">
              <h2 className="text-2xl">Clutch</h2>
              <p className="italic">
                "Ninja Promo have become an extension to our team"
              </p>
              <p className="flex">
                4.8 out of 5,0(28){" "}
                <span className="flex gap-1 text-yellow-400">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                </span>
              </p>
            </div>
            <div className="flex items-center justify-between px-5">
              <p className="text-xs underline">See all review on Clutch</p>
              <LiaLongArrowAltRightSolid className="text-xl" />
            </div>
          </div>

          {RenderTestinomials}
        </div>
      </div>
    </div>
  );
};

export default Testinomials;
