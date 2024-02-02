import React, { useEffect } from "react";
import { RiTrophyFill } from "react-icons/ri";
import AwardsData from "../../../data/AwardsData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import PrimaryBtn from "../../PrimaryBtn";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const digitalMarketingAwards = AwardsData.filter(
    (award) => award.award === "digitalmarketing",
  );

  return (
    <div>
      <div className="w-full bg-gradient-to-r from-[#400280] to-[#2A27AD] py-20 text-white">
        <div className="mx-auto max-w-screen-xl p-10">
          <div className="flex flex-col items-center justify-between gap-10 py-20 md:flex-row md:items-end">
            <div className="flex w-full flex-col gap-10 py-5 md:w-1/2">
              <div
                className="flex items-center gap-2 text-xs"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <span>Homepage &gt;</span>
                <span>Services &gt;</span>
                <span className="text-[#4cbe93]">Social Media Marketing</span>
              </div>
              <h1
                className="text-left text-2xl  font-bold md:text-4xl"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Ignite Your Growth with Effective Social Media Marketing
              </h1>
              <p
                className="left text-lg"
                data-aos="fade-up"
                data-aos-duration="2400"
              >
                Start your brand on the right foot with a comprehensive social
                media marketing strategy that engages your target audience and
                aligns with your long-term goals
              </p>
              <div
                className="flex flex-col items-center gap-10 md:flex-row md:gap-20"
                data-aos="fade-up"
                data-aos-duration="2800"
              >
                <PrimaryBtn label={"Get in touch"} />
              </div>
            </div>
            <div className="flex cursor-pointer flex-col-reverse align-text-bottom">
              <img
                src="https://ninjapromo.io/wp-content/themes/ninjapromo/assets/newdesign/meet-btn.svg"
                alt=""
                className="size-24"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full text-white md:w-11/12 ">
        <div className="absolute -top-32 left-2 right-2 flex flex-col items-center gap-5 bg-[#3C39C6] p-10  md:left-48 md:flex-row md:p-10">
          <div data-aos="fade-right" data-aos-duration="2000">
            <h1 className="flex items-center gap-2 text-2xl">
              <RiTrophyFill />
              AWARD-WINNING TEAM
            </h1>
            <p>
              led by senior-level strategists, creatives, and producers that
              work directly with ambitious brands to create advertising that is
              impossible to ignore.
            </p>
          </div>

          <div className="flex w-full flex-col  items-center gap-5 overflow-x-auto md:w-3/4 md:flex-row">
            {digitalMarketingAwards.map((award) => (
              <div
                key={award.id}
                className="min-h-24 min-w-[20rem] rounded-br-3xl rounded-tl-3xl border border-gray-500 p-2"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="flex flex-col items-center justify-center gap-3 rounded-br-3xl  rounded-tl-3xl border border-dotted p-5">
                  <img src={award.img} alt="" />
                  <p className="text-center">{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#121212] pb-20 pt-[40rem] text-white   md:pt-20 ">
        <div className="mx-auto max-w-screen-xl p-10">
          <h1
            className="py-10 text-3xl md:text-5xl "
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Partner with a Social Media Marketing Agency to Unleash Your
            Potential
          </h1>
        </div>
        <img
          src="https://ninjapromo.io/wp-content/themes/ninjapromo/assets/newdesign/main_bgline.svg"
          alt=""
        />
        <div
          className="mx-auto max-w-screen-xl p-1 md:p-10"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p className="py-10 pl-10 text-xl">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The
            digital ecosystem has transformed how customers behave and prospects
            interact. Marketing is no longer restricted to one-way channels like
            TV or print. Instead, it's a complex, multi-dimensional
            communications discipline that requires continuous effort to be
            effective. Your audience is no longer simply a receptive target for
            your message; they're active participants in the conversation. This
            is the new reality of digital marketing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
