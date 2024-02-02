import React, { useEffect, useRef } from "react";
import SpecialistServices from "../../../data/MobileAppSpecialistServices";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sajha from "../../Sajha";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const AppCraftInnovation = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      <Sajha
        title={
          "Deliver the exceptional experiences your customers deserve through high-powered and intuitive mobile app"
        }
        label={"Speak to An Expert"}
      />
      <div className="w-full bg-[#F5F5F9]">
        <div className="mx-auto max-w-screen-xl p-10">
          <div className="flex flex-col gap-5 py-10">
            <h1
              className="text-3xl md:text-5xl"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Custom Mobile App Specialists
            </h1>
            <p data-aos="fade-up" data-aos-duration="1500">
              Whether you're still at the ideation stage, in the middle of your
              app development, or already have a working solution that requires
              some improvements, our expert development team can help.
            </p>
          </div>

          <div className="">
            <Slider {...settings} ref={sliderRef} className="m">
              {SpecialistServices.map((service) => (
                <div
                  key={service.id}
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                >
                  <div className="bg-white">
                    <img src={service.img} alt="" />
                    <h1 className="p-4 text-xl">{service.service}</h1>
                    <p className=" p-4 text-sm">{service.desc}</p>
                  </div>
                </div>
              ))}
            </Slider>

            <div className="mt-5 flex cursor-pointer">
              <GoArrowLeft
                className="h-12 w-12 cursor-pointer text-gray-500 "
                onClick={handlePrevClick}
              />
              <GoArrowRight
                className="h-12 w-12 cursor-pointer text-gray-500"
                onClick={handleNextClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCraftInnovation;
