import React, { useState } from "react";
import { GoPlus, GoDash } from "react-icons/go";
const MarketingServices = () => {
  const [isPlusClicked, setIsPlusClicked] = useState(true);
  const handleClick = () => {
    setIsPlusClicked(!isPlusClicked);
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#191919] to-[#282828]  text-white ">
      <div className="mx-auto max-w-screen-xl p-4 md:p-10 ">
        <div className="relative">
          <div className="h-84 w-full rounded-md bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-0.5">
            <div className=" flex  h-full w-full flex-col gap-10 rounded-md bg-[#121212] p-3 pt-6  md:p-20">
              <div className="w-full flex-col items-center gap-6 sm:w-44 md:flex-row">
                <button className="mb-2 w-[20rem] rounded-md bg-[#25246b] px-4 py-2">
                  Your ninja promo marketing department
                </button>
                <div>
                  <button className="mb-2 flex w-[20rem] items-center justify-between rounded-md border border-white px-4 py-2">
                    <p>Development</p>
                    <GoPlus />
                  </button>
                  <button className="mb-2 flex w-[20rem] items-center justify-between rounded-md border border-white px-4 py-2">
                    <p>Design and creative</p>
                    <GoPlus />
                  </button>
                  <button className="mb-2 flex w-[20rem] items-center justify-between rounded-md border border-white px-4 py-2">
                    <p>Ditital</p>
                    <GoPlus />
                  </button>
                  <button className="mb-2 flex w-[20rem] items-center justify-between rounded-md border border-white px-4 py-2">
                    <p>Analytics</p>
                    <GoPlus />
                  </button>{" "}
                  <button
                    className={`mb-2 flex w-[20rem] items-center justify-between rounded-md border text-white ${
                      isPlusClicked ? "border-white " : "bg-white text-black"
                    } px-4 py-2`}
                    onClick={handleClick}
                  >
                    <p>Analytics</p>
                    {isPlusClicked ? <GoPlus /> : <GoDash />}
                  </button>
                </div>
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
