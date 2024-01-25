import React from "react";
import { GiStarSkull } from "react-icons/gi";
import { VscArrowSmallRight } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
const CompanyOverview = () => {
  return (
    <div className="w-full py-20">
      <div className="relative mx-auto max-w-screen-xl  p-10">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-5">
            <div className="relative flex flex-col gap-5 rounded-br-3xl rounded-tl-3xl bg-gradient-to-r from-fuchsia-100 to-fuchsia-200 p-10">
              <h1 className="text-3xl">We love what we do</h1>
              <p className="text-md font-thin">
                Some of us are shy, some are influential strategists. What we
                have in common is our burning desire to create meaningful work
                that reaches an audience. NinjaPromo is the perfect home for
                creatives, code enthusiasts and marketing master-minds to
                explore and develop their superpowers. We are grateful for the
                freedom to grow as an agency, grateful for our team, and
                grateful for our clients. We love what we do. And we rock at it.
              </p>
              <div className="flex items-center gap-3">
                <p className="text-xl">Explore Services</p>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-800 hover:bg-blue-900">
                  <VscArrowSmallRight className="text-xl text-white" />
                </div>
              </div>
              <div className="absolute right-[-2rem]  top-[-2rem]">
                <GiStarSkull className="h-24 w-24" />
              </div>
            </div>
          </div>
          <div className="col-span-12  mt-10 md:col-span-7  md:mt-48">
            <div className="flex flex-col gap-10 rounded-br-3xl rounded-tl-3xl border-2 border-black p-5 md:p-10 ">
              <h2 className="text-2xl">
                Quality Always and No <br /> Matter What
              </h2>
              <p className="text-md font-thin">
                Producing powerful assets that our clients believe in and can
                see the detail in is our top priority. This means spending time
                to think, strategise, and experiment. We don't rush. We aim to
                deliver pixel-perfect visuals that draw attention and action.
                We're not afraid of a challenge. In our quest for quality, we
                are ready to move mountains.
              </p>
              <div className="flex items-center gap-3">
                <p className="text-xl">See our projects</p>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-800 hover:bg-blue-900">
                  <VscArrowSmallRight className="text-xl text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:col-span-2 md:block"></div>
          <div className="col-span-12 flex  flex-col gap-10 rounded-br-3xl rounded-tl-3xl bg-[#D8D7F4] p-10 md:col-span-7">
            <h2 className="text-2xl">Our Curiosity Never Stops</h2>
            <p className="text-md font-thin">
              We never rest on past success. We like to push boundaries and keep
              experimenting to be the best partner our clients can find.
              Learning is in our company DNA. It's also a must in our industry.
              Technology advances daily, so r to surprise and delight, we need
              to stay ahead of the curve. Our work starts by immersing ourselves
              in our clients' businesses and their audiences' needs. We uncover
              key value propositions and craft powerful brand stories.
            </p>
            <div className="flex items-center gap-3">
              <p className="text-xl">See what's next</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-800 hover:bg-blue-900">
                <VscArrowSmallRight className="text-xl text-white" />
              </div>
            </div>
          </div>
          <div className="hidden md:col-span-3 md:block"></div>
          <div className="hiddenmd:col-span-2 md:block"></div>
          <div className=" col-span-12 md:col-span-5"></div>
          <div className="relative  col-span-12 flex flex-col gap-10 rounded-br-3xl rounded-tl-3xl border-2 border-black p-10 md:col-span-5">
            <h1 className="text-3xl">
              We Empower Our Team and <br /> Put People Above All
            </h1>
            <p className="text-md font-thin">
              We've pushed ourselves to deliver the most forward-thinking
              digital experiences for our clients. We fundamentally believe in
              supporting our people to create the future. More than any process
              or tool, this principle defines much of how we work at NinjaPromo.
            </p>
            <div className="flex items-center gap-3">
              <p className="text-xl">Welcome aboard</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-800 hover:bg-blue-900">
                <VscArrowSmallRight className="text-xl text-white" />
              </div>
            </div>
            <div className="absolute  bottom-[-3rem] right-[2rem]  ">
              <CiHeart className=" h-24 w-24 bg-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
