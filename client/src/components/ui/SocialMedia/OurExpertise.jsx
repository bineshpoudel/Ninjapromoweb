import React, { useEffect } from "react";
import ExpertiseData from "../../../data/ExpertiseData";
import AOS from "aos";
import "aos/dist/aos.css";
const OurExpertise = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url('https://ninjapromo.io/wp-content/themes/ninjapromo/assets/newdesign/exp_bg.jpg')`,
      }}
    >
      <div className="ml-auto max-w-screen-xl p-10">
        <h1
          className="flex flex-col items-center py-5 text-3xl font-semibold text-white md:flex-row md:text-5xl"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Our &nbsp;
          <span className="-skew-x-12 bg-white p-5 font-normal text-black">
            Expertise
          </span>
        </h1>

        <div className="flex gap-4 overflow-x-auto">
          {ExpertiseData.map((data) => (
            <div
              key={data.id}
              className="flex min-w-full flex-col gap-4 rounded-md bg-white p-5 md:min-w-[30rem] md:p-10"
              data-aos="zoom-in"
              data-aos-duration="2500"
            >
              <img src={data.logo} alt="" className="size-14" />
              <h1 className="text-3xl">{data.brand}</h1>
              <p>{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
