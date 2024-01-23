import React from "react";

const Benefit = () => {
  const benefitData = [
    {
      title: "1-3 month",
      desc: "You save on hiring an ihouse marketer or an agency",
    },
    {
      title: "$100 000",
      desc: "You save per year compared to traditional agencies",
    },
    {
      title: "30+",
      desc: "marketing services in one package",
    },
    {
      title: "100+",
      desc: "marketing specialist in your team",
    },
    {
      title: "2 hours",
      desc: "per week you spend on  management",
    },
    {
      title: "1 day",
      desc: "from creating new task to starting work",
    },
  ];

  const RenderBenefits = benefitData?.map((data) => {
    return (
      <div
        key={data.desc}
        className="items hover:gradient-to-r col-span-12 flex items-center justify-center  rounded-lg border border-white bg-gradient-to-r from-[#151515] to-[#272727] px-2 hover:from-white hover:to-white hover:text-black lg:col-span-4"
      >
        <div className="flex flex-col items-center justify-center gap-4 p-10 ">
          <h2 className="text-4xl font-bold">{data.title}</h2>
          <p className="text-center text-lg">{data.desc}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="h-[180vh] w-full bg-gradient-to-br from-[#131318] to-[#121212] py-20  text-white md:h-[80vh]">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="px-0 md:px-7">
          <div className="grid grid-cols-12 gap-3">{RenderBenefits}</div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
