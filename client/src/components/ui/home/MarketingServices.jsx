import React, { useEffect, useState } from "react";
import { FiveArrow } from "../../../assets";
import { TiPlus } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
const Strategy = () => (
  <div className="absolute top-[-9rem] flex  gap-10 p-4">
    <div>__________________</div>
    <div className="text-s flex w-80 flex-col gap-2">
      <p>Marketing Audit</p>
      <p>Market Research</p>
      <p>Customer Journey Mapping</p>
      <p>Brand Strategy</p>
      <p>Marketing Funnel Development</p>
      <p>Content Strategy</p>
      <p>Channels Strategy</p>
      <p>Metrics</p>
      <p>Timeline</p>
      <p>Budget Allocation</p>
    </div>
  </div>
);
const Development = () => (
  <div className="absolute top-[-6.5rem] flex items-center  gap-10 p-4">
    <div>__________________</div>
    <div className="text-s flex w-80 flex-col gap-2">
      <p>Mobile Development</p>
      <p>Web Development</p>
    </div>
  </div>
);
const DesignANdCreative = () => (
  <div className="absolute top-[-9rem] flex items-center gap-10 p-4">
    <div>__________________</div>
    <div className="text-s flex w-80 flex-col gap-2">
      <p>Branding & Identity</p>
      <p>UX & UI Design</p>
      <p>Graphic Design</p>
      <p>AR/3D Design</p>
      <p>Motion Design</p>
      <p>Video Production</p>
      <p>Pitch Decks</p>
      <p>Whitepapers</p>
    </div>
  </div>
);
const Digital = () => (
  <div className="absolute top-[-4.5rem] flex items-center  gap-10 p-4">
    <div>__________________</div>
    <div className="text-s flex w-80 flex-col gap-2">
      <p>Search Engine Optimization</p>
      <p>Social Media Management</p>
      <p>Outbound Lead Generation</p>
      <p>PR and Media</p>
      <p>Influencer Marketing</p>
      <p>Paid Search (Google, Bing)</p>
      <p>Email Marketing</p>
    </div>
  </div>
);
const Analytics = () => (
  <div className="absolute top-[3rem] flex items-center  gap-10 p-4">
    <div>__________________</div>
    <div className="text-s flex w-80 flex-col gap-2">
      <p>End-to-end Analytics</p>
      <p>Web Analytics</p>
      <p>Mobile App Analytics</p>
    </div>
  </div>
);
const MarketingServices = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [selectedService, setSelectedService] = useState("development");
  const handleServiceClick = (serviceType) => {
    setSelectedService(serviceType);
  };
  const renderService = () => {
    switch (selectedService) {
      case "strategy":
        return <Strategy />;
      case "development":
        return <Development />;
      case "designandcreative":
        return <DesignANdCreative />;
      case "digital":
        return <Digital />;
      case "analytics":
        return <Analytics />;
    }
  };
  const gradientTextClasses = `bg-gradient-to-r from-rose-400 via-fuchsia-500 
    to-indigo-500 bg-clip-text text-transparent`;
  return (
    <div className="w-full bg-gradient-to-r from-[#191919] to-[#282828]  text-white ">
      <div className="mx-auto max-w-screen-xl p-4 md:p-10 ">
        <div className="relative " data-aos="fade-up" data-aos-duration="2000">
          <div className="h-84 w-full rounded-md bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-0.5">
            <div className=" flex  h-full w-full flex-col gap-10 rounded-md bg-[#121212] p-3 pt-6 md:p-20 md:py-28">
              <h1 className="text-2xl md:text-3xl">
                All marketing services <br /> in one subscription
              </h1>
              <div className="lg:hidden">
                <p className="text-xl font-bold">
                  Your Ninja Promo
                  <span
                    className="bg-gradient-to-r from-rose-400 via-fuchsia-500 
                  to-indigo-500 bg-clip-text text-transparent "
                  >
                    Markerting Department
                  </span>
                </p>
                <div className="py-2">
                  <div className="flex items-center justify-between  p-3  font-bold">
                    <p>Strategy</p>
                    <TiPlus />
                  </div>
                  <div className="flex items-center  justify-between p-3  font-bold">
                    <p>Development</p>
                    <TiPlus />
                  </div>
                  <div className="flex items-center  justify-between p-3  font-bold">
                    <p>Design and Creative</p>
                    <TiPlus />
                  </div>
                  <div className="flex items-center  justify-between p-3  font-bold">
                    <p>Digital</p>
                    <TiPlus />
                  </div>
                  <div className="flex items-center  justify-between p-3  font-bold">
                    <p>Analytics</p>
                    <TiPlus />
                  </div>
                </div>
              </div>
              <div className=" hidden  gap-7 lg:flex lg:items-center">
                <p className="text-3xl font-bold">
                  Your Ninja Promo <br />
                  <span
                    className="bg-gradient-to-r from-rose-400 via-fuchsia-500 
                  to-indigo-500 bg-clip-text text-transparent "
                  >
                    Markerting <br />
                    Department
                  </span>
                </p>
                <img src={FiveArrow} alt="" className="hidden lg:block" />
                <div className=" flex flex-col gap-7 text-xl font-bold  ">
                  <p
                    className={`cursor-pointer ${selectedService === "strategy" ? gradientTextClasses : ""} `}
                    onClick={() => handleServiceClick("strategy")}
                  >
                    Strategy
                  </p>
                  <p
                    className={`cursor-pointer ${
                      selectedService === "development"
                        ? gradientTextClasses
                        : " "
                    }`}
                    onClick={() => handleServiceClick("development")}
                  >
                    Development
                  </p>
                  <p
                    className={`cursor-pointer  ${selectedService === "designandcreative" ? gradientTextClasses : ""}`}
                    onClick={() => handleServiceClick("designandcreative")}
                  >
                    Design and Creative{" "}
                  </p>
                  <p
                    className={`cursor-pointer ${selectedService === "digital" ? gradientTextClasses : ""}`}
                    onClick={() => handleServiceClick("digital")}
                  >
                    Digital
                  </p>
                  <p
                    onClick={() => handleServiceClick("analytics")}
                    className={`cursor-pointer ${selectedService === "analytics" ? gradientTextClasses : ""}`}
                  >
                    Analytics
                  </p>
                </div>
                <div className="relative">{renderService()}</div>
              </div>
            </div>
          </div>
          <div
            className="absolute left-[-1.2rem] top-[-1rem] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 
            to-indigo-500   md:left-[-1.6rem] md:top-[-1.6rem]  "
          >
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingServices;
