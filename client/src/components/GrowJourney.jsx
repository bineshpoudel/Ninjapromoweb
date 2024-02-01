import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Form from "./form/Form";
import { Fantom, Iqoniq, Polkadot } from "../assets";

const GrowJourney = () => {
  return (
    <div className="w-full bg-[#121212] py-20 text-white">
      <div className="mx-auto max-w-screen-xl p-10 py-20">
        <div className="flex flex-col md:flex-row">
          <div className=" p-5 md:p-10">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl">Launch your grow now</h1>
              <p className="text-lg">
                Become a Ninja Promo partner and leap-frog your competition. But
                first, let's:
              </p>
              <ul className="flex list-disc flex-col gap-5 pb-20 pl-4">
                <li>Take a deep dive into your business and objectives.</li>
                <li>
                  Establish tailored strategies that propel you towards your
                  goals.
                </li>
                <li>Outline expectations, deliverables, and budgets.</li>
              </ul>
              <p className="text-xl">You're in great hands</p>
              <div className="flex flex-col gap-6  md:flex-row">
                <img src={Fantom} alt="fantom" className="w-20" />
                <img src={Iqoniq} alt="iqoniq" className="w-20" />
                <img src={Polkadot} alt="polkadot" className="w-20" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowJourney;
