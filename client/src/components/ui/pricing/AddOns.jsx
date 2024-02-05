import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { TiPlus } from "react-icons/ti";
const AddOns = () => {
  return (
    <div className="w-full bg-[#121212] text-white ">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="flex flex-col items-center justify-between gap-2 py-10 md:flex-row">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-5xl">Optional add-ons</h1>
            <p className="text-xl text-gray-500">
              These add ons are available to add to your Meet Plan, during the
              checkout stage (the next screen).
            </p>
          </div>
          <div>
            <button className="rounded-full bg-[#118855] p-5 hover:bg-[#095d38]">
              Add to my plan
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-0 md:col-span-2"></div>
          <div className="shadow-3xl col-span-12 flex flex-col gap-8 rounded-3xl border p-5 md:col-span-5">
            <img
              src="https://pricing.webex.com/images/call-me-icon-green.svg"
              alt=""
              className="size-10"
            />
            <h1 className="text-4xl font-bold">Call Me add-on</h1>
            <p className="text-2xl font-thin ">
              Choose between Domestic or International. This feature will
              automatically call you into a meeting - no meeting numbers or IDs
              required.
            </p>
            <div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <p>Domestic</p>
                  <IoInformationCircleOutline />
                </div>
                <div>
                  <p className="text-sm font-thin">
                    <span className="font-normal">$48</span> /license/yr billed
                    annually
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <p>International</p>
                  <IoInformationCircleOutline />
                </div>
                <p className="text-sm font-thin">
                  <span className="font-normal">$429</span>/license/yr billed
                  annually
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold text-[#118855]">Read More</h1>
              <div className="flex size-10 items-center justify-center rounded-full bg-white">
                <TiPlus className="text-black" />
              </div>
            </div>
          </div>
          <div className="col-span-12 flex flex-col gap-8 rounded-3xl border p-5 shadow-2xl md:col-span-5">
            <img
              src="https://pricing.webex.com/images/translation-icon-green.svg"
              alt=""
              className="size-10"
            />
            <h1 className="text-4xl font-bold ">Real-Time Translation</h1>
            <p className="text-2xl font-thin ">
              Translate meetings in real-time, from English to over 100
              different closed-captioned languages.
            </p>
            <div className="self-end">
              <p className="bg-gradient-to-br from-black to-[#143E48] p-1 text-xl">
                15-day free trial{" "}
                <span className="text-sm font-thin underline">Read more</span>
              </p>
              <p className="font-thin">
                <span className="text-xl font-normal">$300</span> /license/yr
                (billed annually)
              </p>
            </div>
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold text-[#118855]">Read More</h1>
              <div className="flex size-10 items-center justify-center rounded-full bg-white">
                <img
                  src="https://pricing.webex.com/images/play-icon.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
