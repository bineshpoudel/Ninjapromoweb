import React from "react";

const PrimaryBtn = ({ label }) => {
  return (
    <div>
      <a
        href="#"
        className="group relative inline-flex justify-start overflow-hidden bg-[#3C39C6] px-10 py-5 text-center  font-bold text-white transition-all duration-300 ease-in-out md:px-20"
      >
        <span className="absolute left-0 top-0  -translate-y-2 translate-x-12 rotate-45 bg-white opacity-[3%]"></span>
        <span className="absolute left-0 top-0 -mt-1 h-96 w-96 -translate-x-96 -translate-y-32 rotate-45 bg-[#181692] opacity-0 transition-all duration-500 ease-in-out group-hover:-translate-x-10 group-hover:opacity-100"></span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out ">
          {label}
        </span>
        <span className="absolute inset-0 "></span>
      </a>
    </div>
  );
};

export default PrimaryBtn;
