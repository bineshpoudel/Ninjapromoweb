import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Form = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 bg-[#ffffff] px-5 py-5 text-[#212121] md:px-20 md:py-10">
        <h1 className="text-center text-4xl">Tell us about you.</h1>
        <div className="flex flex-col gap-10">
          <div>
            <input
              type="text"
              placeholder="First Name*"
              className="w-full placeholder-[#2E2E2E] focus:outline-none"
            />
            <hr className="border-[#7F7F7F]" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name(optional)"
              className="w-full placeholder-[#2E2E2E] focus:outline-none"
            />
            <hr className="border-[#7F7F7F]" />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email*"
              className="w-full placeholder-[#2E2E2E] focus:outline-none"
            />
            <hr className="border-[#7F7F7F]" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Website URL (optional)"
              className="w-full placeholder-[#2E2E2E] focus:outline-none"
            />
            <hr className="border-[#7F7F7F]" />
          </div>
          <div className="text-gray-500">
            <h1 className="text-[#2e2e2e]">What is your Budget?*</h1>
            <br />
            <select className="block w-full appearance-none border-b border-none border-gray-800 bg-transparent focus:outline-none">
              <div className="flex">
                <option value="" selected>
                  -Please choose an option-
                </option>
                <FaChevronDown />
              </div>
              <option value="$5,001 - $10,000">$1 - $5,000</option>
              <option value="$5,001 - $10,000">$5,001 - $10,000</option>
              <option value="$5,001 - $10,000">$10,001 - $30,000</option>
              <option value="$5,001 - $10,000">$30,001 - $50,000</option>
              <option value="$5,001 - $10,000">$50,001 - $1,00,000</option>
              <option value="$5,001 - $10,000">Haven't decided yet</option>
            </select>
            <hr className="border-[#7F7F7F]" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your message (optional)"
              className="w-full placeholder-[#2E2E2E] focus:outline-none"
            />
            <hr className="border-[#7F7F7F]" />
          </div>
        </div>
        <div>
          <button
            type="button"
            className="w-full rounded-md border-2 border-gray-200 border-opacity-20 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 px-5  py-3 text-center text-white hover:border-black
             hover:bg-black hover:bg-gradient-to-r hover:from-black hover:to-black "
          >
            Submit
          </button>
          <p className="md:text-l p-1 text-justify text-sm font-thin text-gray-800">
            By clicking next, you agree to receive communications from
            NinjaPromo in accordance with our Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
