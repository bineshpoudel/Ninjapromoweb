import React from "react";
import Form from "../../form/Form";

const Contact = () => {
  return (
    <div className="w-full bg-[#121212] py-20 text-white">
      <div className="mx-auto max-w-screen-xl p-10 ">
        <div className="flex flex-col items-center gap-5 md:flex-row ">
          <div className="flex w-4/5 flex-col gap-10">
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl">Let's grow your business</h1>
              <p className="text-xl">
                Fill out the form to book a call. Register for the Zoom
                presentation and receive:
              </p>
            </div>

            <ul className="flex list-disc flex-col gap-5">
              <li>
                A comprehensive blueprint for designing the ideal marketing
                department.
              </li>
              <li>
                Detailed analysis of successful case studies tailored to your
                industry.
              </li>
              <li>
                One-on-one consultation with a strategic marketing expert.
              </li>
              <li>A preliminary work plan outlining actionable steps.</li>
              <li>Exclusive terms for a one-month trial period.</li>
            </ul>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
