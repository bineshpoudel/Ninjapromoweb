import React from "react";
import { SaasSEOAgency } from "../../../assets";
import LatestUpdates from "../../../data/LatestUpdates";

const LatestUpates = () => {
  const renderLatestUpdates = LatestUpdates.map((update) => (
    <div
      key={update.id}
      className=" group flex w-full flex-col gap-3 overflow-hidden "
    >
      <div className=" duration-500 group-hover:scale-110  ">
        <img src={update.image} alt={update.img} className="h-48 w-full" />
      </div>

      <div className="flex gap-5 text-xs text-gray-500">
        <span>{update.date}</span>
        <span>{update.readingTime} min read</span>
      </div>

      <h2 className="text-xl">{update.title}</h2>
      <p className="text-xs text-gray-500">{update.desc}</p>
    </div>
  ));
  return (
    <div className="w-full py-20 ">
      <div className=" mx-auto max-w-screen-xl p-10">
        <h1 className="pb-20 text-center text-3xl">What's the latest</h1>
        <div className="flex flex-col gap-5 md:grid md:grid-cols-3">
          {renderLatestUpdates}
        </div>
      </div>
    </div>
  );
};

export default LatestUpates;
