import React, { useRef, useEffect, useState } from "react";
import ReviewData from "../data/reviewData";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
const Review = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const Reviews = ReviewData;

  // Create a ref to access slick methods
  const sliderRef = useRef(null);

  // State to track screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screen width on resize
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  // Use effect to add and remove resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define settings for the Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    arrows: false,
  };

  // Update settings for small screens
  if (screenWidth <= 768) {
    settings.slidesToShow = 1;
  } else {
    settings.slidesToShow = 3; // Number of reviews to show on larger screens
  }

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const renderReview = Reviews.map((data, index) => (
    <div
      key={index}
      className="flex h-96 border-r border-white"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <div className="flex flex-col gap-5 p-5">
        <div>
          <img className="h-10" src={data.company} alt="" />
        </div>
        <div className="h-10">
          <h1 className="text-md">{data.serviceProvided}</h1>
        </div>

        <p className="pr-4 text-xs">{data.reviewText}</p>
        <div className="flex items-center gap-2 pt-5">
          <div>
            <img
              className="h-10 w-10 rounded-full"
              src={data.authorImg}
              alt=""
            />
          </div>
          <div className="text-xs italic text-gray-600">
            <p className="font-semibold">{data.author}</p>
            <p>{data.position}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="w-full bg-[#121212] py-10 text-white">
      <div className="mx-auto max-w-screen-xl p-10">
        <h2
          className="pb-10 text-2xl md:text-5xl"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          What people are saying
        </h2>
        <div className="relative flex flex-col gap-20">
          <Slider ref={sliderRef} {...settings}>
            {renderReview}
          </Slider>

          <div className="flex flex-col-reverse items-center justify-between gap-5 p-5 md:flex-row">
            <div>
              <div className="">
                <button className="bg-[#3c39c6] px-10 py-5 md:px-20">
                  Get a proposal
                </button>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
