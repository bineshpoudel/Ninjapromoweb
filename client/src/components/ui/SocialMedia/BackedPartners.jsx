import React, { useEffect } from "react";
import {
  Iosg,
  Polygon,
  SignumCapital,
  Techstars,
  Ycombinator,
} from "../../../assets";
import AOS from "aos";
import "aos/dist/aos.css";
const BackedPartners = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="w-full text-white"
      style={{
        backgroundImage:
          'url("https://ninjapromo.io/wp-content/themes/ninjapromo/assets/newdesign/dark_gr_bg.jpg")',
      }}
    >
      <div className="mx-auto max-w-screen-xl p-10 py-20">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-10 md:gap-20">
            <h1
              className="text-3xl md:text-5xl"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Our Partners Are Backed <br />
              <span
                className="text-[#FDB494]"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                By The Best
              </span>{" "}
              In Venture
            </h1>
            <div
              className="flex gap-3 md:gap-10"
              data-aos="fade-up"
              data-aos-duration="2200"
            >
              <img src={Polygon} alt="polygon" className="w-32" />
              <img src={Techstars} alt="" className="w-32" />
            </div>
            <div
              className="flex gap-3 md:gap-10"
              data-aos="fade-up"
              data-aos-duration="2400"
            >
              <img src={Iosg} alt="" className="w-24" />
              <img src={SignumCapital} alt="" className="w-24" />
              <img src={Ycombinator} alt="" className="w-24" />
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-10">
            <div
              className="flex flex-col gap-1"
              data-aos="fade-up"
              data-aos-duration="2400"
            >
              <h1 className="text-2xl font-bold  md:text-5xl">300+</h1>
              <span className="pt-2">
                <hr className="h-1 w-10 border-none bg-[#FDB494]" />
              </span>
              <p className="pt-2 text-sm font-thin">Satisfied Customers</p>
            </div>
            <div
              className="flex flex-col gap-1"
              data-aos="fade-up"
              data-aos-duration="2400"
            >
              <h1 className="text-2xl font-bold  md:text-5xl">270K+</h1>
              <span className="pt-2">
                <hr className="h-1 w-10 border-none bg-[#FDB494]" />
              </span>
              <p className="pt-2 text-sm font-thin">Leads driven for clients</p>
            </div>
            <div
              className="flex flex-col gap-1"
              data-aos="fade-up"
              data-aos-duration="2600"
            >
              <h1 className="text-2xl font-bold  md:text-5xl">380M+</h1>
              <span className="pt-2">
                <hr className="h-1 w-10 border-none bg-[#FDB494]" />
              </span>
              <p className="pt-2 text-sm font-thin">
                Generated in client reveneue
              </p>
            </div>
            <div
              className="flex flex-col gap-1"
              data-aos="fade-up"
              data-aos-duration="2600"
            >
              <h1 className="text-2xl font-bold  md:text-5xl">90K+</h1>
              <span className="pt-2">
                <hr className="h-1 w-10 border-none bg-[#FDB494]" />
              </span>
              <p className="pt-2 text-sm font-thin">Social posts published</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackedPartners;
