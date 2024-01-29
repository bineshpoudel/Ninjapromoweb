import React from "react";
import ServedIndustryData from "../../../data/ServedIndustryData";
import Slider from "react-slick";
const IndustriesServed = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          <Slider {...settings}>
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
      </div>
    </div>
  );
};

export default IndustriesServed;
