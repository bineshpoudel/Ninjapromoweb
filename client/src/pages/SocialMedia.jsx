import React from "react";
import {
  Banner,
  CaseStudies,
  FeaturedWorks,
  MarketingServices,
} from "../components/ui/SocialMedia";
import Review from "../components/Review";

const SocialMedia = () => {
  return (
    <div>
      <Banner />
      <MarketingServices />
      <CaseStudies />
      <FeaturedWorks />
      <Review />
    </div>
  );
};

export default SocialMedia;
