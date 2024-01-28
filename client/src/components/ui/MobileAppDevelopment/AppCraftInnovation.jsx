import React from "react";
import SpecialistServices from "../../../data/MobileAppSpecialistServices";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AppCraftInnovation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full bg-[#F5F5F9]">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="flex flex-col gap-5 py-10">
          <h1 className="text-3xl">Custom Mobile App Specialists</h1>
          <p>
            Whether you're still at the ideation stage, in the middle of your
            app development, or already have a working solution that requires
            some improvements, our expert development team can help.
          </p>
        </div>

        <div className="">
          <Slider {...settings}>
            {SpecialistServices.map((service) => (
              <div key={service.id} className="bg-white">
                <img src={service.img} alt="" />
                <h1 className="p-3 text-lg">{service.service}</h1>
                <p className="p-3 text-xs">{service.desc}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AppCraftInnovation;
