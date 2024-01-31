import React, { useEffect } from "react";
import {
  HostFinger,
  Sortlist,
  StartupStash,
  Team7,
  Team6,
  Team5,
  Team4,
  Team3,
  Team2,
  Team1,
} from "../../../assets";
import AOS from "aos";
import "aos/dist/aos.css";
const Team = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full bg-gradient-to-r from-[#121212] via-[#141414] to-[#25246b]  text-white ">
      <div className="mx-auto max-w-screen-xl p-4 md:p-10 ">
        <div className="py-10">
          <h1 className="text-center text-4xl  font-bold " data-aos="fade-up">
            Imagine that for only $9600 <br /> per month, you can get
          </h1>
        </div>
        <div className="relative" data-aos="fade-up" data-aos-duration="2000">
          <div className="h-84 w-full rounded-md bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-0.5">
            <div className=" flex  h-full w-full flex-col gap-10 rounded-md bg-[#121212] p-3 pt-6  md:p-20">
              <h1 className="text-md md:text-3xl">
                Access a team of 100+ top &nbsp;
                <br className="hidden md:block" />
                global marketing experts
              </h1>
              <div className="relative flex">
                <img
                  src={Team1}
                  alt="teammembers"
                  className="h-12 w-12 md:h-24 md:w-24 "
                />
                <img
                  src={Team2}
                  alt="teammembers"
                  className="absolute left-[2.2rem] h-12 w-12 md:left-[4.5rem] md:h-24 md:w-24"
                />
                <img
                  src={Team3}
                  alt="teammembers"
                  className="absolute left-[4.4rem] h-12 w-12 md:left-[9rem] md:h-24 md:w-24"
                />
                <img
                  src={Team4}
                  alt="teammembers"
                  className="absolute left-[6.6rem] h-12 w-12 md:left-[13.5rem] md:h-24 md:w-24"
                />
                <img
                  src={Team5}
                  alt="teammembers"
                  className="absolute left-[8.8rem] h-12 w-12 md:left-[18rem] md:h-24 md:w-24"
                />
                <img
                  src={Team6}
                  alt="teammembers"
                  className="absolute left-[11rem] h-12 w-12 md:left-[22.5rem] md:h-24 md:w-24"
                />
                <img
                  src={Team7}
                  alt="teammembers"
                  className="absolute left-[13.2rem] h-12 w-12 md:left-[27rem] md:h-24 md:w-24"
                />
              </div>
              <div className="flex flex-col gap-5 md:flex-row md:gap-16">
                <div className="flex flex-col items-start gap-5 md:gap-10">
                  <img src={Sortlist} alt="sortlist" className="w-24 md:w-52" />
                  <p className="text-gray-600">
                    Best Advertising Agency in the US
                  </p>
                </div>

                <div className="flex flex-col gap-5 md:gap-10">
                  <img
                    src={HostFinger}
                    alt="hostfinger"
                    className="w-24 md:w-52"
                  />
                  <p className="text-gray-600">Best Digital Agency Worldwide</p>
                </div>
                <div className="flex flex-col gap-5 md:gap-10">
                  <img
                    src={StartupStash}
                    alt="startupstash"
                    className="w-24 md:w-52"
                  />
                  <p className="text-gray-600">Best Web3 Marketing Agency</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute left-[-1.2rem] top-[-1rem] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 
            to-indigo-500   md:left-[-1.6rem] md:top-[-1.6rem]  "
          >
            1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
