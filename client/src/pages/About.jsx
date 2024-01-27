import React from "react";
import {
  AboutBanner,
  Awards,
  CompanyOverview,
  OurTeam,
} from "../components/ui/about";
import HappyClients from "../components/HappyClients";
import Contact from "../components/ui/home/Contact";
import Review from "../components/Review";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <Awards />
      <Review />
      <OurTeam />
      <CompanyOverview />
      <HappyClients />
      <Contact />
    </div>
  );
};

export default About;
