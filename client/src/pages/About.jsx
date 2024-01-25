import React from "react";
import {
  AboutBanner,
  Awards,
  CompanyOverview,
  OurTeam,
} from "../components/ui/about";
import HappyClients from "../components/HappyClients";
import Contact from "../components/ui/home/Contact";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <Awards />
      <OurTeam />
      <CompanyOverview />
      <HappyClients />
      <Contact />
    </div>
  );
};

export default About;
