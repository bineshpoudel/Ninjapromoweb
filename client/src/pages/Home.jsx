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
  MarketingAchievements,
  Testinomials,
  SubscriptionTestDetails,
  DownloadMap,
  GlobalOffices,
  Contact,
} from "../components/ui/home";
import Footer from "../components/Footer";

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
      <MarketingAchievements />
      <Testinomials />
      <SubscriptionTestDetails />
      <DownloadMap />
      <GlobalOffices />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
