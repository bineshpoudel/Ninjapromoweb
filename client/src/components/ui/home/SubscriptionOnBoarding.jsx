import React, { useEffect } from "react";
import { AccessImg, ReportImg, Strategist } from "../../../assets";
import AOS from "aos";
import "aos/dist/aos.css";
const SubscriptionOnBoarding = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" w-full bg-[#121212] text-white">
      <div className="mx-auto max-w-screen-xl px-10 py-20">
        <h1 className="pb-20 text-center text-5xl" data-aos="fade-down">
          You're now subscribed - <br />
          What comes next?
        </h1>
        <div className="flex  gap-3 md:gap-40" data-aos="fade-up">
          <div className="group relative h-[160vh] border border-white group-hover:border-red-500">
            <div className="absolute left-[-2rem] top-[-0.8rem] flex h-16 w-16 items-center justify-center rounded-full border border-white bg-black">
              1
            </div>
            <div className="top:[30rem] absolute left-[-2rem] top-[30rem] flex h-16 w-16 items-center justify-center rounded-full border border-white bg-black ">
              2
            </div>
            <div className="absolute left-[-2rem] top-[58rem] flex h-16 w-16 items-center justify-center rounded-full border border-white bg-black">
              3
            </div>
            <div className="absolute left-[-0.8rem] top-[80rem] flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-600"></div>
          </div>
          <div className="grid grid-cols-12 items-start gap-5 px-10 lg:gap-20">
            <div className="col-span-12 lg:col-span-6 ">
              <div
                className="flex flex-col gap-5"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <p className="text-lg md:text-2xl">
                  A skilled marketing strategist, experienced in your industry,
                  will join your team
                </p>

                <p className="text-gray-400">
                  Together, you will develop a monthly work plan that aligns
                  with your marketing goals. This strategist will hand-pick
                  specialists who have a proven track record in similar projects
                </p>
              </div>
            </div>
            <div
              className="col-span-12 md:col-span-6"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img
                src={Strategist}
                alt="strategist"
                className="h-64 duration-500 hover:scale-110"
              />
            </div>
            <div className="col-span-12 md:col-span-6 ">
              <div
                className="flex flex-col gap-5"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <p className="text-lg md:text-2xl">
                  You'll have accest-2xls to 40 expert hours to use as you see
                  fit
                </p>
                <p className="text-gray-500">
                  This could be for tackling tasks that were previously out of
                  reach due to limited resources — like designing advertising
                  creatives, composing email campaigns, or overhauling your
                  website's design — or simply for outsourcing routine tasks
                  such as managing social media
                </p>
              </div>
            </div>
            <div
              className="col-span-12 p-5 md:col-span-6"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img
                src={AccessImg}
                alt="accessiblethings"
                className="duration-500 hover:scale-110"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <div
                className="flex flex-col gap-5"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <p className="text-lg md:text-2xl">
                  At the end of each week, you'll get a report that clearly
                  outlines what was achieved and how many hours were used
                </p>
                <p className=" text-gray-500">
                  You can easily modify the work plan as needed and request
                  different services along the way. If you have unused hours,
                  they'll roll over to the next month
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <img
                src={ReportImg}
                data-aos="fade-left"
                data-aos-duration="1200"
                alt="reports"
                className="duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionOnBoarding;
