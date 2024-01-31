import React, { useEffect } from "react";
import { DownloadMapImg } from "../../../assets";
import AOS from "aos";
import "aos/dist/aos.css";
const DownloadMap = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full bg-gradient-to-r from-[#14141B] to-[#345CDB] text-white">
      <div className="mx-auto max-w-screen-xl px-10 py-20">
        <div className="flex flex-col gap-10 md:flex-row">
          <div
            className="flex flex-col gap-10"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-4xl font-bold">
              If you're not ready yet, download <br />
              our free "Ideal Marketing <br />
              Department 2024" mind map
            </h1>
            <p className="text-2xl">
              Identify weaknesses and growth opportunities in your team
            </p>
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="w-full md:w-1/4">
                <input
                  type="text"
                  className=" border-none bg-transparent py-2 focus:outline-none"
                  placeholder="Name"
                />
                <hr />
              </div>
              <div className="w-full md:w-1/4">
                <input
                  type="text"
                  className=" border-none bg-transparent py-2 focus:outline-none"
                  placeholder="Email"
                />
                <hr />
              </div>
              <div className="w-full md:w-2/4">
                <button
                  type="button"
                  className="w-full rounded-md border-2 border-gray-200 border-opacity-20 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 px-5  py-3 text-center text-white hover:border-gray-200
             "
                >
                  Download map
                </button>
              </div>
            </div>
          </div>
          <div className="" data-aos="fade-down" data-aos-duration="2000">
            <img
              src={DownloadMapImg}
              alt="downloadimg"
              className="h-80 w-full duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadMap;
