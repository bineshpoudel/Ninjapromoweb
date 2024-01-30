import React from "react";
import {
  Approach,
  Banner,
  Faq,
  IndustriesServed,
  OurSolutions,
  PromoSection,
  ServiceOfferings,
  WebDesignFeatures,
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
      <WebDesignFeatures />
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
