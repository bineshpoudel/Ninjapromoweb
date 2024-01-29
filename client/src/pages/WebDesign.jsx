import React from "react";
import {
  Approach,
  Banner,
  Faq,
  IndustriesServed,
  OurSolutions,
  PromoSection,
  ServiceOfferings,
  WebDesignServices,
} from "../components/ui/WebDesign";
import HappyClients from "../components/HappyClients";
import Review from "../components/Review";
import Partners from "../components/Partners";
import GrowJourney from "../components/GrowJourney";
const WebDesign = () => {
  return (
    <div>
      <Banner />
      <WebDesignServices />
      <OurSolutions />
      <IndustriesServed />
      <Review />
      <Partners />
      <Approach />
      <PromoSection />
      <ServiceOfferings />
      <Faq />
      <HappyClients />
      <GrowJourney />
    </div>
  );
};

export default WebDesign;
