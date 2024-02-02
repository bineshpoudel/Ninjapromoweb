import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Form from "./form/Form";
import { Fantom, Iqoniq, Polkadot } from "../assets";

const GrowJourney = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full bg-[#121212] py-20 text-white">
      <div className="mx-auto max-w-screen-xl p-10 py-20">
        <div className="flex flex-col items-center md:flex-row">
          <div className=" p-5 md:p-10">
            <div className="flex flex-col gap-5 md:gap-10">
              <h1
                className="text-3xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Launch your grow now
              </h1>
              <p
                className="text-lg "
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Become a Ninja Promo partner and leap-frog your competition. But
                first, let's:
              </p>
              <ul
                className="flex list-disc flex-col gap-5 pb-20 pl-4"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <li>Take a deep dive into your business and objectives.</li>
                <li>
                  Establish tailored strategies that propel you towards your
                  goals.
                </li>
                <li>Outline expectations, deliverables, and budgets.</li>
              </ul>
              <p
                className="text-xl"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                You're in great hands
              </p>
              <div
                className="flex flex-col gap-6  md:flex-row"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                <img src={Fantom} alt="fantom" className="w-20" />
                <img src={Iqoniq} alt="iqoniq" className="w-20" />
                <img src={Polkadot} alt="polkadot" className="w-20" />
              </div>
            </div>
          </div>
          <div
            className="w-full md:w-2/5"
            data-aos="zoom-in"
            data-aos-duration="1400"
          >
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowJourney;
