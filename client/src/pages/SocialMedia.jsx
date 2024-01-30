import React from "react";
import {
  BackedPartners,
  Banner,
  CaseStudies,
  Faq,
  FeaturedWorks,
  LatestSocialMediaUpdates,
  MarketingServices,
  MarketingTransformation,
  OurExpertise,
  SocialMediaMarketing,
} from "../components/ui/SocialMedia";
import Review from "../components/Review";
import HappyClients from "../components/HappyClients";
import GrowJourney from "../components/GrowJourney";
const SocialMedia = () => {
  return (
    <div>
      <Banner />
      <MarketingServices />
      <CaseStudies />
      <FeaturedWorks />
      <Review />
      <BackedPartners />
      <MarketingTransformation />
      <OurExpertise />
      <SocialMediaMarketing />
      <HappyClients />
      <Faq />
      <LatestSocialMediaUpdates />
      <GrowJourney />
    </div>
  );
};

export default SocialMedia;
