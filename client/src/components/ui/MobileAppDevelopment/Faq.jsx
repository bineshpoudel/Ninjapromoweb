import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const Faq = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    setActiveItem((prevActiveItem) =>
      prevActiveItem === index ? null : index,
    );
  };

  const faqData = [
    {
      question: "How much does it cost to develop a mobile app?",
      answer:
        "The question about mobile app development cost is always a tricky one because there's no single best answer. The cost depends on the scope of your mobile app, which depends on your desired objectives. In order to get the optimum ROI, you will need to make an investment that gives us the flexibility to deliver a dynamic high-performance mobile application. Get in touch with our expert mobile app development team to discus  on your desired objectives. In order to get the optimum ROI, you will need to make an investment that gives us the flexibility to deliver a dynamic high-performance mobile application. Get in touch with our expert mobile app development team to discuss prices and receive a tailored quote.",
    },
    {
      question: "How much time does it cost to develop a mobile app?",
      answer:
        "The question about mobile app development cost is always a tricky one because there's no single best answer. The cost depends on the scope of your mobile app, which depends on your desired objectives. In order to get the optimum ROI, you will need to make an investment that gives us the flexibility to deliver a dynamic high-performance mobile application. Get in touch with our expert mobile app development team to discuss prices and receive a tailored quote.",
    },
    {
      question: "What features can be integrated into mobile apps",
      answer:
        "With so many mobile applications to compete with on app stores, it is essential that yours is unique, eye-catching, and highly functional. Apart from ensuring your content is dynamic, we consider features such as social integration, location tracking, AI, voice search, push notifications, customization options, payment ability, and secure access. We use the latest tech innovations to deliver progressive digital products that delight both you and your customers.",
    },
    {
      question: "How much does it cost to develop a mobile app?",
      answer:
        "The question about mobile app development cost is always a tricky one because there's no single best answer. The cost depends on the scope of your mobile app, which depends on your desired objectives. In order to get the optimum ROI, you will need to make an investment that gives us the flexibility to deliver a dynamic high-performance mobile application. Get in touch with our expert mobile app development team to discus  on your desired objectives. In order to get the optimum ROI, you will need to make an investment that gives us the flexibility to deliver a dynamic high-performance mobile application. Get in touch with our expert mobile app development team to discuss prices and receive a tailored quote.",
    },
    {
      question: "How much time does it cost to develop a mobile app?",
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
      <div className="mx-auto max-w-screen-xl p-10">
        <h1
          className="pb-20 text-center text-3xl md:text-5xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Frequently Asked Questions (FAQs)
        </h1>
        <div className="mx-auto w-full md:w-[70%]">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="mb-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
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
