import React from "react";
import { Link } from "react-router-dom";
const Explore = () => {
  return (
    <div className="fixed w-full bg-[#121212] py-10 text-white">
      <div className="mx-auto max-w-screen-xl p-10 ">
        <div className=" z-40 justify-between bg-[#121212] md:hidden ">
          <div className="flex flex-col gap-3 ">
            <h1 className="py-5 text-center text-3xl">Know About us</h1>
            <div className="">
              <button
                type="button"
                className="w-full rounded-md border-2 border-gray-200 border-opacity-20 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 px-5  py-3 text-center text-white hover:border-gray-200
             hover:bg-black hover:bg-gradient-to-r hover:from-black hover:to-black "
              >
                Discuss the project
              </button>
            </div>
            <div className="">
              <button
                type="button"
                className="w-full rounded-md border-2 border-gray-200 border-opacity-20 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500  py-3 text-center text-white hover:border-gray-200
             hover:bg-black hover:bg-gradient-to-r hover:from-black hover:to-black "
              >
                Schedule a meeting
              </button>
            </div>

            <h1 className="py-2 text-center text-3xl">Explore our Services</h1>
            <div className="grid grid-cols-2 gap-5 ">
              <Link to="/services/seo">
                <div className="rounded-md bg-gradient-to-r from-purple-600 via-fuchsia-500 to-rose-400 p-5">
                  <p className="">SEO</p>
                </div>
              </Link>

              <Link to="services/video-production">
                <div className="rounded-md bg-gradient-to-r from-purple-600 via-fuchsia-500 to-rose-400 p-5">
                  <p className="">Video Production</p>
                </div>
              </Link>
              <Link to="/services/mobile-app-development">
                <div className="rounded-md bg-gradient-to-r from-purple-600 via-fuchsia-500 to-rose-400 p-5">
                  <p className="">Mobile App Development</p>
                </div>
              </Link>
              <Link to="services/social-media">
                <div className="rounded-md bg-gradient-to-r from-purple-600 via-fuchsia-500 to-rose-400 p-5">
                  <p className="">Social Media Ads</p>
                </div>
              </Link>
              <Link to="/services/facebook-ads-agency">
                <div className="rounded-md bg-gradient-to-r from-purple-600 via-fuchsia-500 to-rose-400 p-5">
                  <p className="">Facebook Ads</p>
                </div>
              </Link>
              <Link to="/services/web-design">
                <div className="rounded-md bg-gradient-to-r from-purple-600 via-fuchsia-500 to-rose-400 p-5">
                  <p className="">Website Design</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
