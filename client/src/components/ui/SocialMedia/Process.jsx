import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Process = () => {
  const processSteps = [
    { title: "Discovery", content: "This is the content for Discovery." },
    { title: "Strategy", content: "This is the content for Strategy." },
    { title: "Execution", content: "This is the content for Execution." },
    { title: "Measurement", content: "This is the content for Measurement." },
    {
      title: "Ongoing Social Media Management",
      content: "This is the content for Ongoing Social Media Management.",
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
