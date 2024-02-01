import React, { useRef } from "react";
import Slider from "react-slick";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import CaseStudiesData from "../../../data/CaseStudiesData";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const Slick = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
    <div className="w-full bg-[#121212] text-white ">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="flex items-center justify-between py-10">
          <div className="flex">
            <GoArrowLeft
              className="h-12 w-12 cursor-pointer text-gray-500 duration-200 hover:text-white"
              onClick={handlePrevClick}
            />
            <GoArrowRight
              className="h-12 w-12 cursor-pointer text-gray-500 duration-200 hover:text-white"
              onClick={handleNextClick}
            />
          </div>
          <div className="group flex cursor-pointer gap-4">
            <p className="text-xl">Show me more</p>
            <div className="flex size-8 items-center justify-center rounded-full bg-[#3c39c6] duration-500 group-hover:bg-white">
              <HiOutlineArrowSmallRight className="text-white duration-500 group-hover:text-[#3c39c6]" />
            </div>
          </div>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {CaseStudiesData.map((data) => (
            <div className="" key={data.id}>
              <div className="flex flex-col md:flex-row ">
                <img src={data.img} alt="" className="w-full md:w-1/2" />
                <div className="w-full bg-[#292D36] px-4 py-10 md:w-1/2">
                  <div className="flex flex-col gap-5">
                    <h1 className="text-3xl">
                      {data.title}
                      <span>
                        <hr className="h-1 w-6 border-none bg-blue-700" />
                      </span>
                    </h1>
                    <div className="flex gap-2">
                      <button className="bg-blue-700 p-1 text-xs">
                        organic social
                      </button>
                      <button className="bg-blue-700 p-1 text-xs">
                        Video production
                      </button>
                    </div>
                    <p className="text-md font-thin">{data.desc}</p>
                    <div className="flex justify-between gap-5">
                      <div className="w-1/2 rounded-md bg-[#3D4454] p-2">
                        <h1>5x</h1>
                        <p className="text-xs">subscriber growth</p>
                      </div>
                      <div className="w-1/2 rounded-md bg-[#3D4454] p-2">
                        <h1>9500+</h1>
                        <p className="text-xs">new users</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <p>Explore Case</p>
                      <MdKeyboardArrowRight className="size-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slick;
