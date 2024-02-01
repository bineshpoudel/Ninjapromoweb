import React from "react";
import WebServicesData from "../../../data/WebServicesData";

const WebDesignServices = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="flex items-center gap-2 py-10 text-xs">
          <span>Homepage &gt;</span>
          <span>Services &gt;</span>
          <span className="text-[#4cbe93]">Mobile App Development </span>
        </div>
        <h1 className="pb-5 text-2xl md:text-4xl">Website Design Services</h1>
        <p className="text-md pb-5">
          Website design is no small task. It requires both technical and
          marketing expertise to produce a site that will attract, captivate and
          convert your consumers. While it can seem like a daunting process for
          some, this is exactly where we excel. Our multi-disciplinary team
          features a range of professionals, including a project manager, web
          designer, front-end developer, back-end developer, and quality
          assurance engineer. Along with our web design and development experts,
          we have a talented marketing team that is on hand to guide you through
          promoting your digital products. From marketing strategy to SEO, we
          leave no stone uncovered in our mission to put your products front and
          center in the digital sphere.
        </p>
        <div className="flex flex-col gap-5">
          {WebServicesData.map((service, index) => (
            <div className="bg-[#121212] p-5 md:p-20">
              <div
                className={`flex flex-col items-center gap-5 md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="w-full md:w-2/3">
                  <img src={service.serviceImg} alt="" className="rounded-md" />
                </div>
                <div className="flex w-full flex-col gap-5 md:w-2/3">
                  {service.logo && (
                    <img src={service.logo} alt="" className="size-12 " />
                  )}

                  <h1 className="text-2xl">{service.title}</h1>
                  {service.desc.map((para, index) => (
                    <p key={index} className="text-xs">
                      {para}
                    </p>
                  ))}

                  <div className="md:items-left  items-center">
                    <button className="bg-blue-700 px-5 py-2 text-white md:px-20 md:py-5">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDesignServices;
