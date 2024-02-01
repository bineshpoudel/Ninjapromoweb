import React, { useEffect } from "react";
import { SeoMonitor } from "../../../assets";
import AOS from "aos";
import "aos/dist/aos.css";
const SeoOverview = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full font-light text-black ">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="flex items-center gap-2 text-xs">
          <span>Homepage &gt;</span>
          <span>Services &gt;</span>
          <span className="text-[#4cbe93]">Search Engine Optimization </span>
        </div>
        <div className="pt-20">
          <h1
            className="pb-10 text-4xl"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Partner with an SEO company that breaks the <br /> boundaries of
            search engine optimization
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5">
              <img src={SeoMonitor} alt="seomain" />
            </div>

            <div className="text-md flex w-full flex-col gap-3 text-[#121212]  md:w-3/5">
              <p data-aos="fade-up" data-aos-duration="2200">
                Search engine optimization is no longer about cramming your
                content with keywords and hoping for the best. It's a complex
                and ever-evolving field that requires a deep understanding of
                how search engines like Google and Bing actually work, what
                users are looking for, and how to craft content that meets those
                needs. But with the right SEO agency as your partner, it doesn't
                have to be so complicated.
              </p>
              <p data-aos="fade-up" data-aos-duration="2400">
                At NinjaPromo, we like to think of ourselves as SEO hackers.
                We're always looking for new and innovative ways to get our
                clients' content in front of the people who search for it. We
                aim for the stars, but we're also not afraid to get our hands
                dirty and do the hard work that it takes to get results. It's
                not magic, but it is art.
              </p>
              <p data-aos="fade-up" data-aos-duration="2600">
                We start by taking the time to form a deep understanding of your
                business, ensuring we're well versed on your story, your goals,
                and your challenges. But most importantly, we want to learn all
                about your customers. Behind each search and click, there is a
                real person with needs, wants, and pain points. Once we
                understand your customers, we can start to craft an SEO strategy
                that is designed to get your website seen by the people who will
                be most responsive to your business' marketing. And we don't
                just stop there — we also provide ongoing support and
                maintenance to ensure that your site continues to perform at its
                best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoOverview;
