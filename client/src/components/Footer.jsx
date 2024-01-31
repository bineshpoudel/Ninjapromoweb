import React from "react";
import { LogoSvg } from "../assets";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaBehance,
} from "react-icons/fa";
import Social from "./Social";
const Footer = () => {
  return (
    <div className="w-full bg-[#121212] pb-20 pt-20 text-white">
      <div className="mx-auto max-w-screen-xl px-10">
        <hr className="pb-20" />
        <div className="flex flex-col gap-20  md:flex-row md:gap-5">
          <div className="flex w-full flex-col gap-10 md:w-1/3">
            <div className="flex items-center gap-5">
              <img src={LogoSvg} alt="logo" className="w-36" />
            </div>
            <div className="">
              <button
                type="button"
                className="w-full rounded-md border-2 border-gray-200 border-opacity-20 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 px-5  py-3 text-center text-white hover:border-gray-200
             hover:bg-black hover:bg-gradient-to-r hover:from-black hover:to-black "
              >
                Book a call
              </button>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-5 md:w-1/3 md:items-center">
            <div className="flex items-center gap-4">
              <img
                src="data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20id%3D%22vuesax%2Flinear%2Fsms%22%3E%3Cg%20id%3D%22sms%22%3E%3Cpath%20id%3D%22Vector%22%20d%3D%22M17%2020.5H7C4%2020.5%202%2019%202%2015.5V8.5C2%205%204%203.5%207%203.5H17C20%203.5%2022%205%2022%208.5V15.5C22%2019%2020%2020.5%2017%2020.5Z%22%20stroke%3D%22url(%23paint0_linear_524_2147)%22%20stroke-width%3D%221.5%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_2%22%20d%3D%22M17%209L13.87%2011.5C12.84%2012.32%2011.15%2012.32%2010.12%2011.5L7%209%22%20stroke%3D%22url(%23paint1_linear_524_2147)%22%20stroke-width%3D%221.5%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear_524_2147%22%20x1%3D%22-0.0833331%22%20y1%3D%2226.1507%22%20x2%3D%2221.8104%22%20y2%3D%2225.2797%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23FFA37B%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.547947%22%20stop-color%3D%22%23FA6BBE%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23732BF7%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22paint1_linear_524_2147%22%20x1%3D%225.95833%22%20y1%3D%2213.1504%22%20x2%3D%2216.7948%22%20y2%3D%2211.974%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23FFA37B%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.547947%22%20stop-color%3D%22%23FA6BBE%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23732BF7%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E"
                alt=""
              />
              <p className="text-xl font-thin">hello@gmail.com</p>
            </div>

            <div>
              <div className="flex gap-4">
                <img
                  src="data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20id%3D%22vuesax%2Flinear%2Fcall%22%3E%3Cg%20id%3D%22call%22%3E%3Cg%20id%3D%22call_2%22%3E%3Cpath%20id%3D%22Vector%22%20d%3D%22M21.97%2018.33C21.97%2018.69%2021.89%2019.06%2021.72%2019.42C21.55%2019.78%2021.33%2020.12%2021.04%2020.44C20.55%2020.98%2020.01%2021.37%2019.4%2021.62C18.8%2021.87%2018.15%2022%2017.45%2022C16.43%2022%2015.34%2021.76%2014.19%2021.27C13.04%2020.78%2011.89%2020.12%2010.75%2019.29C9.6%2018.45%208.51%2017.52%207.47%2016.49C6.44%2015.45%205.51%2014.36%204.68%2013.22C3.86%2012.08%203.2%2010.94%202.72%209.81C2.24%208.67%202%207.58%202%206.54C2%205.86%202.12%205.21%202.36%204.61C2.6%204%202.98%203.44%203.51%202.94C4.15%202.31%204.85%202%205.59%202C5.87%202%206.15%202.06%206.4%202.18C6.66%202.3%206.89%202.48%207.07%202.74L9.39%206.01C9.57%206.26%209.7%206.49%209.79%206.71C9.88%206.92%209.93%207.13%209.93%207.32C9.93%207.56%209.86%207.8%209.72%208.03C9.59%208.26%209.4%208.5%209.16%208.74L8.4%209.53C8.29%209.64%208.24%209.77%208.24%209.93C8.24%2010.01%208.25%2010.08%208.27%2010.16C8.3%2010.24%208.33%2010.3%208.35%2010.36C8.53%2010.69%208.84%2011.12%209.28%2011.64C9.73%2012.16%2010.21%2012.69%2010.73%2013.22C11.27%2013.75%2011.79%2014.24%2012.32%2014.69C12.84%2015.13%2013.27%2015.43%2013.61%2015.61C13.66%2015.63%2013.72%2015.66%2013.79%2015.69C13.87%2015.72%2013.95%2015.73%2014.04%2015.73C14.21%2015.73%2014.34%2015.67%2014.45%2015.56L15.21%2014.81C15.46%2014.56%2015.7%2014.37%2015.93%2014.25C16.16%2014.11%2016.39%2014.04%2016.64%2014.04C16.83%2014.04%2017.03%2014.08%2017.25%2014.17C17.47%2014.26%2017.7%2014.39%2017.95%2014.56L21.26%2016.91C21.52%2017.09%2021.7%2017.3%2021.81%2017.55C21.91%2017.8%2021.97%2018.05%2021.97%2018.33Z%22%20stroke%3D%22url(%23paint0_linear_730_104)%22%20stroke-width%3D%221.5%22%20stroke-miterlimit%3D%2210%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear_730_104%22%20x1%3D%22-0.080208%22%20y1%3D%2228.6479%22%20x2%3D%2221.7904%22%20y2%3D%2227.9094%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23FFA37B%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.547947%22%20stop-color%3D%22%23FA6BBE%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23732BF7%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E"
                  alt=""
                />
                <div className="flex flex-col  gap-2 text-xl font-thin">
                  <p>+1 929-492-4413 (US) </p>
                  <p>+44 20 3868 4672 (UK)</p>
                  <p>+65 3165 4789 (SG)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-between gap-10 md:w-1/3 md:gap-0">
            <div>
              <Social />
            </div>
            <div>
              <p className="text-sm text-gray-500">
                &copy;2024 Ninja Promo. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
