import React from "react";

const Sajha = ({ title, label, desc }) => {
  return (
    <div
      style={{
        backgroundImage: `url('')`,
      }}
      className="w-full bg-black bg-cover py-5 text-white md:py-20"
    >
      <div className="mx-auto max-w-screen-xl p-10 py-5 md:py-20">
        <div className="items-center">
          <h1 className="pb-10 text-center text-2xl md:text-5xl">{title}</h1>
          <p className="pb-10 text-center text-sm font-thin">{desc}</p>
          <div className="text-center">
            <button className="bg-blue-700 px-10 py-3 md:px-20   md:py-5">
              {label}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sajha;
