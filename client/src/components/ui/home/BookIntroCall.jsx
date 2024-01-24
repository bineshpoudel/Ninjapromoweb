import React from "react";
import { Team1 } from "../../../assets";

const BookIntroCall = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#161523] via-[#2D2B87] to-[#3363E0] py-10 text-white">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="items-left flex flex-col justify-between gap-10 md:flex-row  md:items-center md:gap-4 ">
          <div className="w-full md:w-1/4">
            <img src={Team1} alt="" className="size-24 md:size-40 " />
          </div>
          <div className="w-full md:w-2/4">
            <h1 className="text-center text-2xl font-semibold md:text-4xl">
              Let's discuss how we'll work on your project using the
              subscription model
            </h1>
          </div>

          <div className="w-full md:w-1/4">
            <button
              type="button"
              className="w-full rounded-md border-2 border-gray-200 border-opacity-20 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 px-5  py-3 text-center text-white hover:border-gray-200
           hover:bg-black hover:bg-gradient-to-r hover:from-[#3353e0] hover:to-[#3353e0] "
            >
              Book intro call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookIntroCall;
