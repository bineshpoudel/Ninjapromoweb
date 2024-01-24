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

const Seo = () => {
  return (
    <div>
      <SeoOverview />
      <SeoServicesDetails />
      <Review />
      <Partners />
      <SeoOptimizationServices />
      <BookConsulation />
      <SeoEvolution />
      <LatestUpates />
      <Faq />
    </div>
  );
};

export default Seo;
