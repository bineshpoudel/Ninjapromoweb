import React from "react";
import { LogoSvg } from "../assets";
import Social from "./Social";
import OfficeData from "../data/OfficeData";
const MainFooter = () => {
  return (
    <div className="w-full bg-[#121212] text-white">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="flex flex-col items-start gap-20 overflow-x-auto md:flex-row">
          <img src={LogoSvg} alt="" />
          <div className="flex flex-col gap-20">
            {/* Uppeer Section Starts here */}
            <div className="flex flex-col gap-10 md:flex-row">
              <div className="flex flex-col gap-4">
                <h1>Services</h1>
                <div className="flex flex-col gap-2 text-xs font-thin">
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Marketing Subscription
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Social Media
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Paid Social
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Paid Media
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    SEO Influencer
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Marketing
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    {" "}
                    PR & Outreach{" "}
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Video Production{" "}
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    {" "}
                    Video Marketing
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1>Branding</h1>
                <div className="flex cursor-pointer flex-col gap-2 text-xs font-thin">
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    {" "}
                    Branding{" "}
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Community Management
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Website development
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Mobile App Development
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Web Design
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Mobile App Design
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    {" "}
                    Blockchain Development{" "}
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Lead Generation
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1>Company</h1>
                <div className="flex cursor-pointer flex-col gap-2 text-xs font-thin">
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Services
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    About Us
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Blog
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Careers
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Contact
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1>Industries</h1>
                <div className="flex cursor-pointer flex-col gap-2 text-xs font-thin">
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    {" "}
                    B2B{" "}
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Fintech{" "}
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Crypto{" "}
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Software
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    SaaS
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Startup{" "}
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    {" "}
                    Small Business
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    {" "}
                    Gaming{" "}
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Esports
                  </a>
                  <a href="#" className="duration-300 hover:text-[#3C39C6]">
                    Mobile eCommerce
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1>Follow us</h1>
                <Social />
              </div>
            </div>
            <div className="flex flex-col gap-10 md:flex-row">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h1>Contact Us</h1>
                  <div className="flex flex-col gap-1 text-xs font-thin">
                    <p>hello@abcd.com</p>
                    <p>+1 929-492-4413 (US)</p>
                    <p>+44 20 3868 4672 (UK)</p>
                    <p>+65 3165 4789 (SG)</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1>Want to join the team?</h1>
                  <div className="flex flex-col gap-1 text-xs font-thin">
                    <p>careers@abcd.com</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1>Press Inquiries</h1>
                  <div className="flex flex-col gap-1 text-xs font-thin">
                    <p>media@abcd.com</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5  md:flex-row ">
                {OfficeData.map((office) => {
                  return (
                    <div key={office.id} className="w-32">
                      <div className="flex flex-col gap-2">
                        <img
                          src={office.icon}
                          alt={office.country}
                          className="h-6 w-6"
                        />
                        <h1>{office.country}</h1>
                        <p className="w-24 text-xs text-gray-400">
                          {office.location}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
