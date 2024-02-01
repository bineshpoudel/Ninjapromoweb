import React from "react";
import LatestSocialMediaUpdatesData from "../../../data/LatestSocialMediaUpdatesData";
const LatestSocialMediaUpdates = () => {
  const renderLatestSocialMediaUpdates = LatestSocialMediaUpdatesData.map(
    (update) => (
      <div key={update.id} className=" group flex w-full flex-col gap-3 ">
        <div className=" overflow-hidden duration-500 group-hover:rounded-br-3xl group-hover:rounded-tl-3xl">
          <img
            src={update.image}
            alt={update.desc}
            className="h-48 w-full duration-500  group-hover:scale-110 group-hover:rounded-tl-3xl"
          />
        </div>

        <div className="flex gap-5 text-xs text-gray-500">
          <span>{update.date}</span>
          <span>{update.readingTime} min read</span>
        </div>

        <h2 className="text-xl">{update.title}</h2>
        <p className="text-xs text-gray-500">{update.desc}</p>
      </div>
    ),
  );
  return (
    <div className="w-full py-20 ">
      <div className=" mx-auto max-w-screen-xl p-10">
        <h1 className="pb-20 text-5xl">What's the latest?</h1>
        <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-10">
          {renderLatestSocialMediaUpdates}
        </div>
      </div>
    </div>
  );
};

export default LatestSocialMediaUpdates;
