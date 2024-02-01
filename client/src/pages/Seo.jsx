import React from "react";
import {
  SeoOptimizationServices,
  SeoOverview,
  SeoServicesDetails,
  Faq,
  LatestUpdates,
  SeoEvolution,
  Banner,
} from "../components/ui/seo";
import Review from "../components/Review";
import Partners from "../components/Partners";
import GrowJourney from "../components/GrowJourney";
import HappyClients from "../components/HappyClients";

const Seo = () => {
  return (
    <div>
      <Banner />
      <SeoOverview />
      <SeoServicesDetails />
      <Review />
      <Partners />
      <SeoOptimizationServices />
      <SeoEvolution />
      <LatestUpdates />
      <Faq />
      <HappyClients />
      <GrowJourney />
    </div>
  );
};

export default Seo;
