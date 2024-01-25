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
              <div>
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
