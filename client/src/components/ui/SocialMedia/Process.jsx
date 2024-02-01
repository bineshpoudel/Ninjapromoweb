import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Process = () => {
  const processSteps = [
    {
      title: "Discovery",
      content:
        "We start by getting to know you, your business, and your goals. We then conduct a comprehensive audit of your current social media presence to identify opportunities and areas for improvement. If you don’t have a social presence, we'll help you decide which platforms are right for you and jumpstart your account setup.",
    },
    {
      title: "Strategy",
      content:
        "Once we have a clear understanding of your business and objectives, we develop a customized social media strategy that aligns with your overall business goals. Our team of social media experts will help you choose the right platforms, develop a content strategy, and create a schedule for posting.",
    },
    {
      title: "Execution",
      content:
        "We then put the plan into action, executing creative and effective campaigns that work. This might include a mix of paid and organic social media content, or viral marketing tactics, depending on your goals.",
    },
    {
      title: "Measurement",
      content:
        "We track the progress of your social campaigns and analyze the data to identify areas of improvement and opportunity. We then adjust our strategy accordingly to continue driving results.",
    },
    {
      title: "Ongoing Social Media Management",
      content:
        "Once your social media campaign is up and running, we can help you maintain momentum with ongoing content creation, community management, and reporting. We can also train your team to take over the reins or manage your social media presence on an ongoing basis if that's what you prefer.",
    },
  ];

  const [activeStep, setActiveStep] = useState(null);

  const handleStepClick = (index) => {
    setActiveStep((prevStep) => (prevStep === index ? null : index));
  };

  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-10">
        <h1 className="pb-5 text-center text-2xl font-bold text-blue-700">
          Our Process is Simple But Effective
        </h1>
        <div className="flex flex-col">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 rounded-md border p-5"
            >
              <div className="flex items-center justify-between">
                <h1 className="text-3xl md:text-5xl">{step.title}</h1>
                <FaCheckCircle
                  className="size-12 transform cursor-pointer text-green-500"
                  onClick={() => handleStepClick(index)}
                />
              </div>
              {activeStep === index && (
                <p className="text-xl font-thin">{step.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
