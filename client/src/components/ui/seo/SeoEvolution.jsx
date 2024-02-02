import React, { useEffect } from "react";
import { IoIosGlobe } from "react-icons/io";
import Sajha from "../../Sajha";
import AOS from "aos";
import "aos/dist/aos.css";
import PrimaryBtn from "../../PrimaryBtn";
const SeoEvolution = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full">
      <Sajha
        title={
          "Book a consultation to learn more about our search engine optimization services"
        }
        desc={
          "When you partner with NinjaPromo, you'll get a team of experienced SEO professionals with the skills and knowledge necessary to get you the results you want. We'll help you harness this incredible tool with a customized strategy that is designed to propel your online presence beyond your competition. To get started, simply book a consultation with our team today."
        }
        label={"Schedule a call"}
      />
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="py-20">
          <h1
            className="text-center text-3xl md:text-5xl"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            SEO digital marketing is constantly evolving
          </h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="relative rounded-br-3xl rounded-tl-3xl border-2 border-black"
        >
          <div
            className="text-md flex flex-col items-center gap-5 px-5 py-10 font-light md:px-20"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <p>
              But so are we. Ten years ago, SEO strategies looked quite
              different than they do today. Google makes over 500 algorithm
              changes every year, so it's important to keep up with the latest
              trends and best practices if you want to make sure your approach
              is effective. That's why our team never stops learning and keeping
              up with the latest changes in the industry. We make it our mission
              to stay informed and to integrate this critical knowledge into the
              customized solutions we develop for our clients.
            </p>

            <p>
              SEO is a long-term marketing technique, which means it can take
              weeks or months to get your site where you want it to be. But if
              any digital strategy is worth the patience, it's SEO. Once you
              start seeing results, you can enjoy a snowball effect as your web
              pages continue to climb the ranks, giving you greater online
              visibility, a higher conversion rate, and ultimately, more paying
              customers.
            </p>

            <p>
              It's an ongoing process, which means it's never really “done.” You
              need to continuously monitor your results and make adjustments to
              your approach as needed while ensuring that you're always
              responsive to changes in the Google algorithm. With a solid SEO
              strategy in place, your site will always be moving in the right
              direction. So, when you're ready to seriously boost your online
              ranking, we're here to help.
            </p>
            <div>
              <PrimaryBtn label={"Book a consulation"} />
            </div>
          </div>
          <div className="absolute right-5 top-[-2rem]">
            <IoIosGlobe className="size-16" />
          </div>
          <div className="absolute -bottom-16 left-20">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoEvolution;
