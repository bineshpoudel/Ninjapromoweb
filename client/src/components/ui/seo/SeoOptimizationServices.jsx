import React, { useEffect, useState } from "react";
import { PiNavigationArrowFill } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";
import { GiPolarStar } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
const CryptoSeo = () => (
  <div className="flex flex-col items-start gap-5 px-20 py-10 text-left">
    <h2 className="text-3xl">Crypto SEO</h2>
    <p className="">
      Crypto is one of the most competitive industries on the Internet, and that
      means ranking in search engines is no easy feat. But with our cutting-edge
      crypto and blockchain SEO services, we can help you get the visibility you
      need to gain new investors for your offering. Our SEO agency understands
      the unique challenges that come with the fast-paced world of
      cryptocurrency and how you need an SEO partner that can keep up.
    </p>
  </div>
);
const FinetechSeo = () => (
  <div className="flex flex-col items-start gap-5 px-20 py-10 text-left">
    <h2 className="text-3xl">FineTechSeo</h2>
    <p className="">
      Fintech is exploding and innovative new companies are breaking ground in
      the finance world. But with so much competition, it can be hard to get
      your fintech business noticed. Paid advertising is one option, but SEO can
      help you get in front of your target audience organically and earn
      long-term results. Our company offers specialized SEO services for the
      fintech industry that are designed to help you rank higher in SERPs, drive
      more people to your website, and generate more leads and sales for your
      business.
    </p>
  </div>
);
const TechnicalSeo = () => (
  <div className="flex flex-col items-start gap-5 px-20 py-10 text-left">
    <h2 className="text-3xl">Technical SEO</h2>
    <p className="">
      SEO isn't just about the words on your site — it's also about the
      technical aspects of your web design. This can include everything from
      your website's architecture to the way your pages are coded. If there are
      any technical problems with your web design, it can be hard for search
      engines to index your pages and rank them appropriately. That's where our
      technical audit comes in. Our team will thoroughly review your site to
      identify any web development issues that could be holding you back and
      then work with you to develop a plan to fix them.
    </p>
  </div>
);
const LocalSeo = () => (
  <div className="flex flex-col items-start gap-5 px-20 py-10 text-left">
    <h2 className="text-3xl">Local SEO</h2>
    <p className="">
      When people search for a product or service, nearly a quarter of them will
      include a location while searching. That means if you're not ranking for
      local SEO, you could be missing out on a lot of potential customers. Our
      services can help you get your site and business seen by people in your
      area who are looking for exactly what you have to offer. We'll help you
      optimize your site for local queries, while claiming your listing in
      directories like Google Business Profile.
    </p>
  </div>
);

const EnterpriseSeo = () => (
  <div className="flex flex-col items-start gap-5 px-20 py-10 text-left">
    <h2 className="text-3xl">Enterprise SEO</h2>
    <p className="">
      f you're selling products or services to other businesses, you need an SEO
      strategy that's tailored to the unique needs of the B2B sector. Our SEO
      company offers B2B and enterprise SEO services that are designed to help
      you attract the attention of other businesses and get in front of your
      target audience. We'll work with you to create targeted content that
      speaks to the needs of potential clients, optimize your site for B2B
      keywords, and build the link relationships you need to establish your site
      as a credible source of information for other businesses
    </p>
  </div>
);
const OrganicSeo = () => (
  <div className="flex flex-col items-start gap-5 px-20 py-10 text-left">
    <h2 className="text-3xl">Organic SEO</h2>
    <p className="">
      Organic SEO is the process of optimizing your web presence to rank higher
      in organic (unpaid) search results. It is a long-term, sustainable
      approach to marketing that enhances your brand visibility and generates
      the attention you need to succeed online. Our team can help you develop an
      effective SEO strategy that will get you the results you want and help you
      build an organic foundation for long-term growth.
    </p>
  </div>
);
const SeoAudit = () => (
  <div className="flex flex-col items-start gap-5 px-20 py-10 text-left">
    <h2 className="text-3xl">SEO Audit</h2>
    <p className="">
      If you're not sure whether your current SEO efforts are working, an audit
      can give you the answers you need. Our SEO agency will analyze your
      digital presence to identify any areas where you could improve your SEO.
      We'll then provide you with a report detailing our findings and
      recommendations for how to enhance your current positioning. If you're
      looking to get the most out of your SEO, an audit is a great place to
      start.
    </p>
  </div>
);
const StartupSeo = () => (
  <div className="flex flex-col items-start gap-5 px-20 py-10 text-left">
    <h2 className="text-3xl">Small Business/Startup SEO</h2>
    <p className="">
      If you run a small company or startup, you need to make the most of every
      advertising investment. SEO for small business can be a highly
      cost-effective way to attract more customers and boost your conversion
      rate, but it's important to take the right approach. Our team can help you
      develop an effective SEO strategy that fits your budget and enables you to
      scale your operation.
    </p>
  </div>
);
const EcommerceSeo = () => (
  <div className="flex flex-col items-start gap-5 px-20 py-10 text-left">
    <h2 className="text-3xl">E-commerce SEO</h2>
    <p className="">
      If you're running an eCommerce store, SEO is critical to your success. Our
      team can help you optimize your site and your product pages to rank higher
      in results pages, while raising your brand awareness. We'll also help you
      troubleshoot any common e-commerce SEO and web development issues that
      could be holding you back.
    </p>
  </div>
);

const SeoOptimizationServices = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [selectedSeo, setSelectedSeo] = useState("crypto");

  const handleButtonClick = (seoType) => {
    setSelectedSeo(seoType);
  };

  const renderSeo = () => {
    switch (selectedSeo) {
      case "crypto":
        return <CryptoSeo />;
      case "finetech":
        return <FinetechSeo />;
      case "technicalseo":
        return <TechnicalSeo />;
      case "localseo":
        return <LocalSeo />;
      case "enterpriseseo":
        return <EnterpriseSeo />;
      case "organicseo":
        return <OrganicSeo />;
      case "seoaudit":
        return <SeoAudit />;
      case "startupseo":
        return <StartupSeo />;
      case "ecommerceseo":
        return <EcommerceSeo />;
    }
  };

  return (
    <div className="w-full py-20 font-light text-[#212121]">
      <div className=" mx-auto max-w-screen-xl py-20  text-center  font-normal">
        <h1
          className="pb-10 text-3xl md:text-5xl"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Our Seo Optimization Services
        </h1>
        <div
          className="flex flex-col items-center justify-between md:flex-row"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="flex flex-col gap-5">
            <div
              onClick={() => handleButtonClick("crypto")}
              className="group flex items-center gap-5 text-[#1D322C] hover:text-[#4cbe93]"
            >
              <PiNavigationArrowFill className="size-16 rotate-[140deg] duration-500 group-hover:translate-x-4 " />
              <p className="text-2xl">Crytpo SEO</p>
            </div>
            <div
              onClick={() => handleButtonClick("finetech")}
              className="group flex items-center gap-5 text-[#1D322C] hover:text-[#4cbe93]"
            >
              <PiNavigationArrowFill className="size-16 rotate-[140deg] duration-500 group-hover:translate-x-4 " />
              <p className="text-2xl">Finetech SEO</p>
            </div>
            <div
              onClick={() => handleButtonClick("technicalseo")}
              className="group flex items-center gap-5 text-[#1D322C] hover:text-[#4cbe93]"
            >
              <PiNavigationArrowFill className="size-16 rotate-[140deg] duration-500 group-hover:translate-x-4 " />
              <p className="text-2xl">Technical SEO</p>
            </div>
            <div
              onClick={() => handleButtonClick("localseo")}
              className="group flex items-center gap-5 text-[#1D322C] hover:text-[#4cbe93]"
            >
              <PiNavigationArrowFill className="size-16 rotate-[140deg] duration-500 group-hover:translate-x-4 " />
              <p className="text-2xl">Local SEO</p>
            </div>
            <div
              onClick={() => handleButtonClick("enterpriseseo")}
              className="group flex items-center gap-5 text-[#1D322C] hover:text-[#4cbe93]"
            >
              <PiNavigationArrowFill className="size-16 rotate-[140deg] duration-500 group-hover:translate-x-4 " />
              <p className="text-2xl">Enterprise SEO</p>
            </div>
            <div
              onClick={() => handleButtonClick("organicseo")}
              className="group flex items-center gap-5 text-[#1D322C] hover:text-[#4cbe93]"
            >
              <PiNavigationArrowFill className="size-16 rotate-[140deg] duration-500 group-hover:translate-x-4 " />
              <p className="text-2xl">Organic SEO</p>
            </div>
            <div
              onClick={() => handleButtonClick("seoaudit")}
              className="group flex items-center gap-5 text-[#1D322C] hover:text-[#4cbe93]"
            >
              <PiNavigationArrowFill className="size-16 rotate-[140deg] duration-500 group-hover:translate-x-4 " />
              <p className="text-2xl">SEO Audit</p>
            </div>{" "}
            <div
              onClick={() => handleButtonClick("startupseo")}
              className="group flex items-center gap-5 text-[#1D322C] hover:text-[#4cbe93]"
            >
              <PiNavigationArrowFill className="size-16 rotate-[140deg] duration-500 group-hover:translate-x-4 " />
              <p className="text-2xl">Small Business/Startup SEO</p>
            </div>
            <div
              onClick={() => handleButtonClick("ecommerceseo")}
              className="group flex items-center gap-5 text-[#1D322C] hover:text-[#4cbe93]"
            >
              <PiNavigationArrowFill className="size-16 rotate-[140deg] duration-500 group-hover:translate-x-4 " />
              <p className="text-2xl">Ecommerce SEO</p>
            </div>
          </div>
          <div className="pr-0 md:pr-10">
            <div className=" relative h-[692.78px] w-[385px] rounded-br-3xl rounded-tl-3xl border-2 border-black md:h-[24.884rem] md:w-[34.891rem] ">
              <div className="absolute left-[-1rem]  top-5  h-[638.88px] w-[417px] rounded-br-3xl rounded-tl-3xl border-2 border-black bg-white md:h-[22.099rem] md:w-[36.469rem]">
                <div>{renderSeo()}</div>
              </div>
              <div className="absolute  right-4 top-[-2rem]">
                <PiStarFourFill className="size-16  text-[#4CBE9E]" />
              </div>
              <div className="absolute  bottom-6">
                <GiPolarStar className="size-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoOptimizationServices;
// 4cbe93
