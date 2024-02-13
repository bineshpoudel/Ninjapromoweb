import React, { useEffect } from "react";
import { LuPhoneCall } from "react-icons/lu";
import Form from "../../form/Form";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full bg-[#121212] py-20 text-white">
      <div className="mx-auto max-w-screen-xl p-10 ">
        <div className="flex flex-col items-center gap-10 md:flex-row ">
          <div className="flex w-full flex-col gap-10 md:w-3/5">
            <div>
              <h3 className="text-xl md:text-xl">Contact Sales</h3>
              <h1
                className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 
                  bg-clip-text  
                  text-3xl font-bold text-transparent md:text-5xl "
              >
                Chat with our team
              </h1>
            </div>

            <p className="text-lg font-medium">
              Fill out your information and a Rhombus representative will reach
              out to you. <br />
              Have a simple question? Check out our support resources. <br />
              Interested in becoming a partner? Learn about our Partner Program.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5 ">
                <div className="flex size-16 items-center justify-center rounded-full bg-white ">
                  <LuPhoneCall className="text-3xl text-[#2A7DE1]" />
                </div>
                <div>
                  <p className="text-2xl font-semibold">+977 9854879659</p>
                  <p className="text-xl">Monday - Friday, 10 A.M. - 6P.M.</p>
                </div>
              </div>
              <div className="flex items-center gap-5 ">
                <div className="flex size-16 items-center justify-center rounded-full bg-white">
                  <IoMailOpenOutline className="text-3xl text-[#2A7DE1]" />
                </div>
                <div>
                  <p className="text-md font-semibold md:text-2xl ">
                    sales@xyz.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex size-16 items-center justify-center rounded-full bg-white">
                  <FaMapMarkerAlt className="text-3xl text-[#2A7DE1]" />
                </div>
                <div>
                  <p className="text-md font-semibold md:text-2xl">
                    1919 19th St Sacramento, CA 95811
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2600"
            className="w-full md:w-2/5"
          >
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
