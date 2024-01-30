import React from "react";
import {
  AdServices,
  AdvertisingMethods,
  Banner,
  Faq,
  Introduction,
  WhyChoseUs,
} from "../components/ui/FacebookAdsAgency";
import Review from "../components/Review";
import Partners from "../components/Partners";
import HappyClients from "../components/HappyClients";
import GrowJourney from "../components/GrowJourney";
const FacebookAdsAgency = () => {
  return (
    <div>
      <Banner />
      <Introduction />
      <AdServices />
      <Review />
      <Partners />
      <AdvertisingMethods />
      <WhyChoseUs />
      <Faq />
      <HappyClients />
      <GrowJourney />
    </div>
  );
};

export default FacebookAdsAgency;
