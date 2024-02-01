import React, { useEffect } from "react";
import OfficeData from "../../../data/OfficeData";
import AOS from "aos";
import "aos/dist/aos.css";
const GlobalOffices = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const renderOffices = OfficeData.map((office) => (
    <div
      data-aos="fade-left"
      data-aos-duration="2000"
      key={office.id}
      className="w-3/6 flex-shrink-0 border-r border-r-gray-700 bg-[#181818] md:w-1/6 "
    >
      <div className="flex flex-col gap-4 px-2 py-6 ">
        <img
          src={office.img}
          alt={office.country}
          className="h-80 w-full rounded-md object-cover"
        />
        <h1 className="text-2xl">{office.country}</h1>
        <p className="text-l text-gray-500">{office.location}</p>
      </div>
    </div>
  ));

  return (
    <div className="w-full bg-[#121212] text-white">
      <div className="mx-auto max-w-screen-xl p-10 py-20 pb-20">
        <div className="flex flex-col gap-10 py-10 text-center">
          <h1
            className="text-3xl md:text-5xl"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            We Work worldwide
          </h1>
          <p
            className="text-center text-2xl"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            A fully remote team of over 100 top marketing experts
            <br className="hidden md:block" /> from around the world
          </p>
        </div>
        <div
          className="flex overflow-x-auto overscroll-x-auto"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          {renderOffices}
        </div>
      </div>
    </div>
  );
};

export default GlobalOffices;
