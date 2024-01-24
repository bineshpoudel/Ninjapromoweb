import React from "react";
import { IoIosGlobe } from "react-icons/io";
const SeoEvolution = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="py-20">
          <h1 className="text-center text-3xl">
            SEO digital marketing is constantly evolving
          </h1>
        </div>
        <div className="relative rounded-br-3xl rounded-tl-3xl border-2 border-black">
          <div className="text-md flex flex-col items-center gap-5 px-5 py-10 font-light md:px-20">
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
              <button className="bg-[#3C39C6] px-10 py-5 font-bold text-white">
                Book a Consulation
              </button>
            </div>
          </div>
          <div className="absolute right-5 top-[-2rem]">
            <IoIosGlobe className="size-16" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SeoEvolution;
