import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const WebDesignFeatures = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="py-10 md:py-20">
          <h1
            className="text-2xl font-bold md:text-5xl"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Partner with a web design agency that brings tangible value
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div
            className="col-span-12 flex flex-col gap-3 rounded-lg p-10 text-white md:col-span-4"
            style={{
              backgroundImage: `url("https://ninjapromo.io/wp-content/uploads/2022/06/preference01.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1
              className="text-5xl font-bold"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              5+
            </h1>
            <span className="" data-aos="fade-up" data-aos-duration="1700">
              <hr className="h-0.5 w-10 border-none bg-white" />
            </span>
            <p data-aos="fade-up" data-aos-duration="1900">
              years experience of creative website design excellence
            </p>
          </div>

          <div className="col-span-12 flex flex-col gap-2 md:col-span-4 ">
            <div className="flex flex-col gap-3 rounded-lg bg-[#121212] p-10 text-white">
              <h1
                className="text-5xl font-bold"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                150+
              </h1>
              <span className="" data-aos="fade-up" data-aos-duration="1700">
                <hr className="h-0.5 w-10 border-none bg-white" />
              </span>
              <p data-aos="fade-up" data-aos-duration="1900">
                world class websites built
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-lg bg-[#6C35E1] p-10 text-white">
              <h1
                className="text-5xl font-bold"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                100%
              </h1>
              <span className="" data-aos="fade-up" data-aos-duration="1700">
                <hr className="h-0.5 w-10 border-none bg-white" />
              </span>
              <p data-aos="fade-up" data-aos-duration="1900">
                fully customized web designs
              </p>
            </div>
          </div>
          <div
            className="col-span-12 flex flex-col gap-3 rounded-lg bg-[#400A6F] p-10 text-white  md:col-span-4"
            style={{
              backgroundImage: `url('https://ninjapromo.io/wp-content/uploads/2022/06/preference02.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1
              className="text-5xl font-bold"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              100%
            </h1>
            <span className="" data-aos="fade-up" data-aos-duration="1700">
              <hr className="h-0.5 w-10 border-none bg-white" />
            </span>

            <p data-aos="fade-up" data-aos-duration="1900">
              client satisfactioni guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignFeatures;
