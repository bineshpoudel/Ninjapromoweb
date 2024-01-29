import React from "react";
import SolutionsData from "../../../data/SolutionsData";
import Sajha from "../../Sajha";

const OurSolutions = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-10">
        <h1 className="py-10 text-2xl md:text-5xl">Our Solutions</h1>
        <div className="grid grid-cols-1 gap-10 p-5 md:grid-cols-4">
          {SolutionsData.map((solution) => (
            <div
              key={solution.id}
              className=" group rounded-br-3xl rounded-tl-3xl p-5 duration-500
               hover:rounded-tl-3xl hover:bg-gradient-to-b hover:from-purple-100 hover:to-purple-300
              "
            >
              <div className="flex flex-col items-center justify-center gap-5 duration-500 group-hover:translate-x-3">
                <div className="flex items-center gap-2 ">
                  <img src={solution.img} alt="" />
                  <h1>{solution.title}</h1>
                </div>
                <p className="text-xs text-gray-500">{solution.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Sajha
        title={
          "Join our growing list of global companies that have benefited from unparalleled website design services."
        }
        label={"Schedule a free consulation"}
      />
    </div>
  );
};

export default OurSolutions;
