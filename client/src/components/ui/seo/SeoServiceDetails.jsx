import React from "react";
import {
  BuildingLocalOnline,
  CriticalKeyboard,
  IndepthSeo,
  IndustrySpecific,
  MonitoringSeo,
  Serp,
  TechnicalOnline,
} from "../../../assets";

const SeoServiceDetails = () => {
  const serviceDetails = [
    {
      img: IndepthSeo,
      detail:
        "Performing an in-depth analysis of your current SEO positioning.",
    },
    {
      img: CriticalKeyboard,
      detail:
        "Carrying out critical keyword research to identify the terms your potential customers are using",
    },
    {
      img: Serp,
      detail:
        "Building high-quality backlinks to your site to improve your position in SERPs (search engine results pages) across Google and Bing.",
    },
    {
      img: MonitoringSeo,
      detail:
        "Monitoring your SEO progress and making ongoing adjustments to ensure continued success.",
    },
    {
      img: BuildingLocalOnline,
      detail:
        "Building your local online presence to ensure you're visible in relevant searches in your area.",
    },
    {
      img: TechnicalOnline,
      detail:
        "Conducting a technical audit to identify any web design issues that could be negatively affecting your search ranking.",
    },
    {
      img: IndustrySpecific,
      detail:
        "Perovide industry-specific SEO services for businesses in competitive industries such as crypto and fintech.",
    },
  ];
  const renderDetails = serviceDetails.map((data) => (
    <div key={data.detail} className="w-full p-3 md:p-5 ">
      <div className="flex flex-col items-center justify-center gap-5">
        <img src={data.img} alt={data.detail} className="w-20" />
        <p className="text-center">{data.detail}</p>
      </div>
    </div>
  ));
  return (
    <div className="w-full py-10 font-light  text-black">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="py-10">
          <h1 className="text-center text-3xl font-medium">
            Our SEO Agency Can Help You By:
          </h1>
        </div>
        <div className="flex flex-col items-center py-20 md:grid md:grid-cols-3">
          {renderDetails}
        </div>

        <div>
          <h1 className="py-10 text-2xl font-semibold md:text-4xl">
            Never underestimate the power of SEO marketing
          </h1>
          <div className="flex flex-col gap-10">
            <p>
              If SEO isn't already a core part of your digital marketing
              strategy, it needs to be. It should be seen as an investment, not
              a cost, and the potential return on that investment can be huge.
              After all, what other marketing channel can give you free access
              to billions of people around the world who are actively looking
              for a product or service like yours?
            </p>
            <p>
              49% of marketers report that organic search has the best ROI of
              any marketing channel, and it's not hard to see why. But getting
              your site to show up on the first page of Google is not as simple
              as it once was. With the right search engine optimization company
              in your corner, however, it is possible to achieve long-lasting,
              sustainable results that will continue to pay dividends for years
              to come. It takes time, effort, and expertise but the rewards are
              more than worth it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoServiceDetails;
