import React from "react";

const SuccessStories = () => {
  return (
    <div>
      <div className="w-full bg-[#121212] text-white">
        <div className="mx-auto max-w-screen-xl p-10">
          <div className="flex flex-col  gap-5 p-20">
            <h1 className="text-center text-xl md:text-3xl">
              Our Success Stories
            </h1>
            <div className="text-center">
              <button className="bg-blue-700 px-10 py-4 ">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-20">
        <div className="mx-auto max-w-screen-xl p-10 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">
              Enhance your brand with intuitive apps customers{" "}
              <br className="hidden md:block" /> love
            </h1>
            <p className="font-thin">
              Today's customers demand the ability to interact with your
              business as and when needed, and in the most convenient way. That
              means not only on the web, but on mobile devices too. As a leading
              mobile app development agency, we build custom mobile apps for any
              major OS (operating system) including Android, iOS, and Windows,
              so you can deliver seamless user experiences that maximize
              conversions.
              <br /> <br />
              Whether you are looking to build native apps to harness
              device-specific hardware, hybrid apps to save on cost, or are
              unsure of which will most benefit your business; our mobile app
              experts are on board to guide you through the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
