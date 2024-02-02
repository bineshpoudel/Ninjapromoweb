import React from "react";
import VideoProductionProcessData from "../../../data/VideoProductionProcsData";

const VideoProductionProcess = () => {
  return (
    <div className="w-full ">
      <div className="ml-auto max-w-screen-xl p-10">
        <h1 className="pb-10 text-center text-2xl md:text-5xl">
          Our Video Production Process
        </h1>
        <div className="relative ml-36">
          <hr className="h-0.5 bg-blue-600" />
          <div className=" absolute left-[-1.5rem] top-[-1.5rem] flex size-12 items-center justify-center rounded-full border-2 border-black">
            <div className="size-2 rounded-full bg-blue-700"></div>
          </div>
          <div className=" absolute left-64 top-[-1.5rem] flex size-12 items-center justify-center rounded-full border-2 border-black">
            <div className="size-2 rounded-full bg-blue-700"></div>
          </div>
          <div className=" absolute left-[35rem] top-[-1.5rem] flex size-12 items-center justify-center rounded-full border-2 border-black">
            <div className="size-2 rounded-full bg-blue-700"></div>
          </div>
          <div className=" absolute left-[52rem] top-[-1.5rem] flex size-12 items-center justify-center rounded-full border-2 border-black">
            <div className="size-2 rounded-full bg-blue-700"></div>
          </div>
        </div>
        <div className="flex items-start gap-12 overflow-x-auto pt-10">
          {VideoProductionProcessData.map((data) => (
            <div key={data.id} className="min-w-64">
              <h1 className="text-center text-blue-700">
                {data.id}.{data.step}
              </h1>
              <p className="text-center">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoProductionProcess;
