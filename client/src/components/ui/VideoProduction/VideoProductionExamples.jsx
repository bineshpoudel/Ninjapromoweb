import React from "react";
import { IoMdPlay } from "react-icons/io";
import VideoProductionExamplesData from "../../../data/VideoProductionExamples";

const VideoProductionExamples = () => {
  return (
    <div className="w-full bg-[#121212] text-white">
      <div className="mx-auto max-w-screen-xl p-10">
        <h1 className="text-2xl md:text-5xl">
          Some of our Video Production Services Examples
        </h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2">
        {VideoProductionExamplesData.map((video) => (
          <div key={video.id} className="group relative cursor-pointer">
            <img
              src={video.img}
              alt=""
              className="h-full w-full object-cover transition-opacity group-hover:opacity-75"
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
      <div className="py-20 text-center">
        <button className="bg-blue-700 px-20 py-5">View our portfolio</button>
      </div>
    </div>
  );
};

export default VideoProductionExamples;
