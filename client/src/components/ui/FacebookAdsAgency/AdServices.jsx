import React from "react";
import AdData from "../../../data/AdServicesData";

const AdServices = () => {
  return (
    <div className="w-full py-10">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="flex flex-col gap-5 py-10">
          <h1 className="text-5xl">Our Facebook Advertising Services </h1>
          <p>
            Our team of Facebook marketing experts blend creativity with
            strategy to deliver a full-service, end-to-end solution for your
            advertising needs. We step outside the box of bland marketing and
            combine innovation with professional expertise to craft ads that
            engage and captivate your audience. Here are the services we offer
            below.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {AdData.map((ad) => (
            <div key={ad.id}>
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl">{ad.title}</h1>
                <p>{ad.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdServices;
