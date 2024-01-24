import React from "react";
import Header from "../components/Header";

import {
  Benefit,
  Team,
  Banner,
  BrandPromotion,
  MarketingService,
  BookIntroCall,
  SubscriptionOnBoarding,
  Packages,
} from "../components/ui/home";

const Home = () => {
  return (
    <div>
      <Banner />
      <Benefit />
      <Team />
      <BrandPromotion />
      <MarketingService />
      <BookIntroCall />
      <SubscriptionOnBoarding />
      <Packages />
    </div>
  );
};

export default Home;
