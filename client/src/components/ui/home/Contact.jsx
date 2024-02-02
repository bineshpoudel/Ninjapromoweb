import React, { useEffect } from "react";
import Form from "../../form/Form";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full bg-[#121212] py-20 text-white">
      <div className="mx-auto max-w-screen-xl p-10 ">
        <div className="flex flex-col items-center gap-5 md:flex-row ">
          <div className="flex w-4/5 flex-col gap-10">
            <div className="flex flex-col gap-1">
              <h1
                className="text-4xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Let's grow your business
              </h1>
              <p
                className="text-xl"
                data-aos="fade-up"
                data-aos-duration="1300"
              >
                Fill out the form to book a call. Register for the Zoom
                presentation and receive:
              </p>
            </div>

            <ul
              className="flex list-disc flex-col gap-5"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <li data-aos="fade-up" data-aos-duration="1800">
                A comprehensive blueprint for designing the ideal marketing
                department.
              </li>
              <li data-aos="fade-up" data-aos-duration="2000">
                Detailed analysis of successful case studies tailored to your
                industry.
              </li>
              <li data-aos="fade-up" data-aos-duration="2200">
                One-on-one consultation with a strategic marketing expert.
              </li>
              <li data-aos="fade-up" data-aos-duration="2400">
                A preliminary work plan outlining actionable steps.
              </li>
              <li data-aos="fade-up" data-aos-duration="2600">
                Exclusive terms for a one-month trial period.
              </li>
            </ul>
          </div>
          <div data-aos="zoom-in" data-aos-duration="2600">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
