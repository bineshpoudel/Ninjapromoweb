import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const Faq = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    setActiveItem((prevActiveItem) =>
      prevActiveItem === index ? null : index,
    );
  };

  const faqData = [
    {
      question: "What social media do you offer?",
      answer:
        "We offer a wide range of social media services, including platform selection, profile optimization, organic social media content creation, community management, reputation management, and influencer marketing..",
    },
    {
      question: "Why should i use social media for my business?",
      answer:
        "The question about mobile app development cost is always a tricky one because there's no single best answer. The cost depends on the scope of your mobile app, which depends on your desired objectives. In order to get the optimum ROI, you will need to make an investment that gives us the flexibility to deliver a dynamic high-performance mobile application. Get in touch with our expert mobile app development team to discuss prices and receive a tailored quote.",
    },
    {
      question: "What features can be integrated into mobile apps",
      answer:
        "With so many mobile applications to compete with on app stores, it is essential that yours is unique, eye-catching, and highly functional. Apart from ensuring your content is dynamic, we consider features such as social integration, location tracking, AI, voice search, push notifications, customization options, payment ability, and secure access. We use the latest tech innovations to deliver progressive digital products that delight both you and your customers.",
    },
  ];

  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl">
        <h1 className=" text-5xl">Social Media Marketing FAQs</h1>
      </div>
      <div className="flex flex-col items-center gap-10 p-10 md:flex-row md:p-0 ">
        <img
          src="https://ninjapromo.io/wp-content/themes/ninjapromo/assets/newdesign/faq_line-bg.svg"
          alt=""
          className="w-96"
        />
        <div className=" w-full md:w-[50%] ">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4">
              <div
                className="flex cursor-pointer items-center justify-between gap-10"
                onClick={() => toggleItem(index)}
              >
                <h1 className="text-xl md:text-2xl">{item.question}</h1>
                <div
                  className={`transform transition-transform ${activeItem === index ? "rotate-45 duration-500" : ""}`}
                >
                  <FaPlusCircle className="size-10 text-blue-700" />
                </div>
              </div>

              <div
                className={`transition-max-height mt-2 overflow-hidden ${activeItem === index ? "max-h-[1000px] duration-700 ease-in-out" : "max-h-0 duration-500 ease-in-out"}`}
              >
                <p>{item.answer}</p>
              </div>
              <br />
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
