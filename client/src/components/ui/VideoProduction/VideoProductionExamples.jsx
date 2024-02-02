import React, { useEffect } from "react";
import { IoMdPlay } from "react-icons/io";
import VideoProductionExamplesData from "../../../data/VideoProductionExamples";
import AOS from "aos";
import "aos/dist/aos.css";
import PrimaryBtn from "../../PrimaryBtn";
const VideoProductionExamples = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full bg-[#121212] text-white">
      <div className="mx-auto max-w-screen-xl p-5 md:p-10">
        <h1
          className="pt-10 text-center text-3xl md:text-5xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Some of our Video Production Services Examples
        </h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2">
        {VideoProductionExamplesData.map((video) => (
          <div
            key={video.id}
            className="group relative cursor-pointer"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <img
              src={video.img}
              alt=""
              className="h-full w-full object-cover transition-opacity group-hover:opacity-75"
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
            <div className="absolute inset-x-0 bottom-5 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <div className="flex items-center justify-center gap-5">
                <p className="text-3xl group-hover:text-white">{video.desc}</p>
                <div className="group flex size-10 items-center justify-center rounded-full bg-white">
                  <IoMdPlay className="text-blue-700" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="py-20 text-center"
        data-aos="fade-up "
        data-aos-duration="1500"
      >
        <PrimaryBtn label="View our portfolio" />
      </div>
    </div>
  );
};

export default VideoProductionExamples;
