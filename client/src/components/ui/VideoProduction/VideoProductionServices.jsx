import React from "react";
import VideoTypes from "../../../data/VideoServiceTypes";

const VideoProductionServices = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="flex flex-col gap-5 py-10">
          <h1 className="text-5xl">Our Video Production Services</h1>
          <p>
            Our diverse team of creative professionals are passionate about
            creating visually striking content that propel you towards your
            commercial and marketing goals. We offer endless video production
            services packages that ensure you meet your targets at every phase
            of the marketing funnel, including:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {VideoTypes.map((video) => (
            <div>
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
