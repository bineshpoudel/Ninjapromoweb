import React, { useRef } from "react";
import ServedIndustryData from "../../../data/ServedIndustryData";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Slider from "react-slick";
const IndustriesServed = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div className="w-full bg-[#F5F5F9] py-20">
      <div className="mx-auto max-w-screen-xl p-10">
        <h1 className="pb-5 text-4xl">Industries We Serve</h1>
        <p className="text-md pb-5">
          We are a professional website design and development company offering
          world-class services at competitive <br className="hidden md:block" />{" "}
          prices. No matter your business size or sector, our website design
          team has the expertise to capture your{" "}
          <br className="hidden md:block" /> audience through responsive and
          innovative designs that produce lucrative outcomes in the short and
          long-term.
        </p>
        {/* For Card Components */}
        <div className="">
          <Slider ref={sliderRef} {...settings}>
            {ServedIndustryData.map((industry) => (
              <div className="flex flex-col gap-5 rounded-md bg-white">
                <img src={industry.img} alt="" />
                <div className="flex flex-col gap-5 p-10">
                  <div className="flex items-center gap-2">
                    <img src={industry.icon} alt="" />
                    <p>{industry.industry}</p>
                  </div>
                  <p>{industry.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex cursor-pointer gap-3 py-10">
          <GoArrowLeft
            className="size-12 cursor-pointer rounded-full bg-[#FAFAFC] p-2 text-gray-600 duration-200 hover:bg-white hover:text-gray-500"
            onClick={handlePrevClick}
          />
          <GoArrowRight
            className="size-12 cursor-pointer  rounded-full bg-[#FAFAFC] p-2 text-gray-600 duration-200 hover:bg-white hover:text-gray-500"
            onClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
};

export default IndustriesServed;
