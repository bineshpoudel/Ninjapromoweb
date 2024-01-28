import React from "react";
import {
  AppCraftInnovation,
  Banner,
  Faq,
  IndustriesServes,
  MobileMasters,
  Services,
  StepsForSuccess,
  SuccessStories,
} from "../components/ui/MobileAppDevelopment";
import Review from "../components/Review";
import Partners from "../components/Partners";
import HappyClients from "../components/HappyClients";
import GrowJourney from "../components/GrowJourney";
const MobileAppDevelopment = () => {
  return (
    <div>
      <Banner />
      <Services />
      <MobileMasters />
      <IndustriesServes />
      <SuccessStories />
      <Review />
      <Partners />
      <StepsForSuccess />
      <AppCraftInnovation />
      <Faq />
      <HappyClients />
      <GrowJourney />
    </div>
  );
};

export default MobileAppDevelopment;
