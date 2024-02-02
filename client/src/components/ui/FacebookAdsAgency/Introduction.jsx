import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Introduction = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full ">
      <div className="mx-auto max-w-screen-xl p-10">
        <div
          className="flex items-center gap-2 py-10 text-xs"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <span>Homepage &gt;</span>
          <span>Services &gt;</span>
          <span className="text-[#4cbe93]">Facebook Ads Agency </span>
        </div>
        <div className="pt-20">
          <h1
            className="pb-10 text-3xl md:text-5xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tap into the Expertise of a Facebook Advertising Agency
          </h1>
          <div className="flex flex-col items-center gap-5 md:flex-row">
            <div
              className="w-full md:w-2/5"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <img
                src="https://ninjapromo.io/wp-content/uploads/2023/05/facebook-ads.svg"
                alt="facebookad"
              />
            </div>

            <div className="text-md flex w-full flex-col gap-3 text-[#121212]  md:w-3/5">
              <p data-aos="fade-up" data-aos-duration="1000">
                The benefits of adding video to your marketing strategy are
                endless. It is one of the most powerful marketing tools to evoke
                emotion, engage audiences, boost brand visibility online, and
                increase sales. In order to reap these benefits however,
                businesses require creative and appealing content.
              </p>
              <p data-aos="fade-up" data-aos-duration="1200">
                If you're worried about getting started, don't be. As a leading
                video production company, our team is on hand starting at idea
                generation all the way through to post-production. We have
                extensive experience in full-service video production, extending
                from scriptwriting and directing, to shooting and editing
                content. Utilizing the best audio-visual equipment and
                post-production software, we deliver high-quality videos that
                are proven to engage.
              </p>
              <p data-aos="fade-up" data-aos-duration="1400">
                So, come tap into the expertise of our Facebook ads agency,
                where creativity, data, and passion collide to create truly
                memorable and effective ads. Together, we'll rise above the
                ordinary and watch your brand flourish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
