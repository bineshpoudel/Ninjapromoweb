import React from "react";
import {
  Banner,
  Introduction,
  LatestVideoUpdates,
  VideoProductionExamples,
  VideoProductionServices,
} from "../components/ui/VideoProduction";
import Review from "../components/Review";
import Partners from "../components/Partners";
import GrowJourney from "../components/GrowJourney";
import HappyClients from "../components/HappyClients";

const VideoProduction = () => {
  return (
    <div>
      <Banner />
      <Introduction />
      <VideoProductionExamples />
      <VideoProductionServices />
      <Review />
      <Partners />
      <LatestVideoUpdates />
      <HappyClients />
      <GrowJourney />
    </div>
  );
};

export default VideoProduction;
