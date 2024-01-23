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
} from "../components/ui/home";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Benefit />
      <Team />
      <BrandPromotion />
      <MarketingService />
      <BookIntroCall />
      <SubscriptionOnBoarding />
    </div>
  );
};

export default Home;
