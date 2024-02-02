import React from "react";
import {
  AboutBanner,
  Awards,
  CompanyOverview,
  OurTeam,
} from "../components/ui/about";
import HappyClients from "../components/HappyClients";
import Review from "../components/Review";
import Partners from "../components/Partners";
import GrowJourney from "../components/GrowJourney";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <Awards />
      <Partners />
      <Review />
      <OurTeam />
      <CompanyOverview />
      <HappyClients />
      <GrowJourney />
    </div>
  );
};

export default About;
