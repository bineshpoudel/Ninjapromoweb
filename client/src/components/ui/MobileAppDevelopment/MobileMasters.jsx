import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const MobileMasters = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="py-10 md:py-20">
          <h1
            className="text-3xl font-bold md:text-5xl"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            A mobile app development company that delivers results
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
              data-aos-duration="1200"
            >
              120
            </h1>
            <span className="" data-aos="fade-up" data-aos-duration="1400">
              <hr className="h-0.5 w-10 border-none bg-white" />
            </span>
            <p data-aos="fade-up" data-aos-duration="1600">
              Successful mobile app development projects
            </p>
          </div>

          <div className="col-span-12 flex flex-col gap-2 md:col-span-4 ">
            <div className="flex flex-col gap-3 rounded-lg bg-[#121212] p-10 text-white">
              <h1
                className="text-5xl font-bold"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                15+
              </h1>
              <span data-aos="fade-up" data-aos-duration="1400">
                <hr className="h-0.5 w-10 border-none bg-white" />
              </span>
              <p data-aos="fade-up" data-aos-duration="1600">
                Years developing cutting-edge mobile solutions
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-lg bg-[#6C35E1] p-10 text-white">
              <h1
                className="text-5xl font-bold"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                13+
              </h1>
              <span className="" data-aos="fade-up" data-aos-duration="1400">
                <hr className="h-0.5 w-10 border-none bg-white" />
              </span>
              <p data-aos="fade-up" data-aos-duration="1600">
                Qualified mobile app developers
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
              data-aos-duration="1200"
            >
              85%
            </h1>
            <span className="" data-aos="fade-up" data-aos-duration="1400">
              <hr className="h-0.5 w-10 border-none bg-white" />
            </span>

            <p data-aos="fade-up" data-aos-duration="1600">
              Repeat Business
            </p>
          </div>
        </div>
        {/* 100% section */}
        <div className="flex flex-col items-center justify-center gap-20 py-20 md:flex-row">
          <div className="flex flex-col gap-4">
            <h1
              className="text-5xl font-bold"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              100%
              <span>
                <hr className="h-1 w-6 bg-purple-700" />
              </span>
            </h1>
            <p
              className="text-l font-bold"
              data-aos="zoom-in"
              data-aos-duration="1600"
            >
              world-class mobile <br /> application <br /> development <br />{" "}
              services
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1
              className="text-5xl font-bold"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              100%
              <span>
                <hr className="h-1 w-6 bg-purple-700" />
              </span>
            </h1>
            <p
              className="text-l font-bold"
              data-aos="zoom-in"
              data-aos-duration="1600"
            >
              satisfaction <br /> guarantee
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1
              className="text-5xl font-bold"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              4.9/5
              <span>
                <hr className="h-1 w-6 bg-purple-700" />
              </span>
            </h1>
            <p
              className="text-l font-bold"
              data-aos="zoom-in"
              data-aos-duration="1600"
            >
              star score <br /> on trustpilot
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMasters;
