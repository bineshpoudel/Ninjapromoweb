import React, { useEffect } from "react";
import VideoTypes from "../../../data/VideoServiceTypes";
import AOS from "aos";
import "aos/dist/aos.css";
const VideoProductionServices = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="flex flex-col gap-5 py-10">
          <h1
            className="text-5xl"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Our Video Production Services
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200">
            Our diverse team of creative professionals are passionate about
            creating visually striking content that propel you towards your
            commercial and marketing goals. We offer endless video production
            services packages that ensure you meet your targets at every phase
            of the marketing funnel, including:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {VideoTypes.map((video) => (
            <div data-aos="fade-up" data-aos-duration="1500">
              <h1
                className={`text-2xl ${video.underline ? "underline decoration-blue-700" : ""}`}
              >
                {video.type}
              </h1>
            </div>
          ))}
        </div>
        <div className="py-10">
          <button className="bg-blue-700 px-20 py-5 text-white">
            Request a proposol
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoProductionServices;
