import React, { useEffect } from "react";
import Sajha from "../../Sajha";
import AOS from "aos";
import "aos/dist/aos.css";
import WhyChoseUsData from "../../../data/WhyChoseUsData";
const WhyChoseUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="flex flex-col gap-10">
          <h1
            className="text-center text-3xl md:text-6xl "
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Why Choose Us as Your Facebook Advertising Agency?
          </h1>
          <p
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            In the bustling world of advertising, finding an Facebook ad agency
            that truly understands your needs and goals can feel like searching
            for a needle in a haystack. So, why choose us? Our agency goes
            beyond the ordinary, offering a unique blend of expertise,
            innovation, and commitment that sets us apart. Here's what makes our
            agency the ideal choice for your Facebook journey.
          </p>
          <div
            className="relative hidden md:block "
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <hr className="ml-20 h-0.5 bg-blue-700 " />
            <div className="absolute left-[3.5rem] top-[-1.5rem] flex size-12 items-center justify-center rounded-full border-2 border-black">
              <div className="size-2 rounded-full bg-blue-700"></div>
            </div>
            <div className="absolute left-96 top-[-1.5rem] flex size-12 items-center justify-center rounded-full border-2 border-black">
              <div className="size-2 rounded-full bg-blue-700"></div>
            </div>
            <div className=" absolute left-[43rem] top-[-1.5rem] flex size-12 items-center justify-center rounded-full border-2 border-black">
              <div className="size-2 rounded-full bg-blue-700"></div>
            </div>
            <div className="absolute left-[62rem] top-[-1.5rem] flex size-12 items-center justify-center rounded-full border-2 border-black">
              <div className="size-2 rounded-full bg-blue-700"></div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 md:flex-row">
            {WhyChoseUsData.map((data) => (
              <div
                key={data.id}
                className="w-64 text-center"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <h1 className="text-xl text-blue-700 ">{data.title}</h1>
                <p>{data.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Sajha
        title={"Grow your business with Powerful Facebook Ads"}
        label={"Start now"}
      />
    </div>
  );
};

export default WhyChoseUs;
