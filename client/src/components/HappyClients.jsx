import React from "react";
import HappyClientsData from "../data/HappyClientsData";

const HappyClients = () => {
  const clientData = HappyClientsData;
  return (
    <div className="w-full py-20">
      <div className="mx-auto max-w-screen-xl p-10">
        <h1 className="pb-10 text-center text-4xl">
          Join our growing list of happy clients:
        </h1>
        <div className=" grid grid-cols-12">
          {clientData.map((data) => (
            <div
              key={data.id}
              className="group col-span-4  flex cursor-pointer items-center border border-l-0 border-t-0 p-4 transition-all duration-300 md:col-span-2"
            >
              <img
                src={data.image}
                alt=""
                className="  h-auto w-full opacity-60 transition duration-300 ease-in-out group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
