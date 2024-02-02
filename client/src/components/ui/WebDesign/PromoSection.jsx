import React, { useEffect } from "react";
import Sajha from "../../Sajha";
import AOS from "aos";
import "aos/dist/aos.css";
const PromoSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="text-md flex flex-col gap-10 font-thin">
          <h1
            className="text-3xl font-normal md:text-5xl"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Go straight to the top with a professional web design company
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200">
            Websites are a requirement for any business looking to make a name
            for itself in today's digital world. However, the web design and
            development process has to go beyond just producing an aesthetically
            pleasing site. The modern consumer calls for a seamless user
            experience, with high functionality and cross-platform
            compatibility. Tie this all together into a product that ranks
            highly in searches, and you've hit website gold.
          </p>

          <p data-aos="fade-up" data-aos-duration="1800">
            Ninja Promo is a leading full-service digital marketing agency made
            up of professional website designers, developers, copywriters,
            marketing specialists, and IT experts with a wealth of industry
            experience.
          </p>
          <p data-aos="fade-up" data-aos-duration="2400">
            Our professional web development firm guides you towards achieving
            your marketing objectives by building customized websites that
            reflect your brand identity and industry. Through better online
            exposure, organic lead generation, and higher conversion rates,
            we're the trusted choice for helping businesses like yours reach
            astonishing new heights.
          </p>
        </div>
      </div>
      <Sajha
        title={
          "Take a look at some of our website design and development case studies:"
        }
        label={"View Our Portfolio"}
      />
    </div>
  );
};

export default PromoSection;
