import React, { useRef } from "react";
import PartnersData from "../data/PartnersData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Partners = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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
    <div className="w-full bg-[#121212] text-white">
      <div className="mx-auto max-w-screen-xl p-10">
        <h1 className="py-20 pb-10 text-center text-4xl">
          Our Partners are backed up with the best
        </h1>
        <Slider ref={sliderRef} {...settings}>
          {PartnersData.map((data) => (
            <div key={data.id} className="w-1/5">
              <img src={data.img} alt="" className="h-14" />
            </div>
          ))}
        </Slider>
        <div className="mt-5 flex justify-end">
          <GoArrowLeft
            className="h-12 w-12 cursor-pointer text-gray-500 duration-200 hover:text-white"
            onClick={handlePrevClick}
          />
          <GoArrowRight
            className="h-12 w-12 cursor-pointer text-gray-500 duration-200 hover:text-white"
            onClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
