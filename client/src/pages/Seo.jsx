import React from "react";
import {
  BookConsulation,
  SeoOptimizationServices,
  SeoOverview,
  SeoServicesDetails,
} from "../components/ui/seo";
import Review from "../components/Review";
import Partners from "../components/Partners";
import SeoEvolution from "../components/ui/seo/SeoEvolution";
import LatestUpates from "../components/ui/seo/LatestUpates";
import Faq from "../components/ui/seo/Faq";
import GrowJourney from "../components/GrowJourney";
import HappyClients from "../components/HappyClients";
import Banner from "../components/ui/seo/Banner";

const Seo = () => {
  return (
    <div>
      <Banner />
      <SeoOverview />
      <SeoServicesDetails />
      <Review />
      <Partners />
      <SeoOptimizationServices />
      <BookConsulation />
      <SeoEvolution />
      <LatestUpates />
      <Faq />
      <HappyClients />
      <GrowJourney />
    </div>
  );
};

export default Seo;
