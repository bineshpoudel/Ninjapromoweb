import React, { useEffect } from "react";
import Sajha from "../../Sajha";
import AOS from "aos";
import "aos/dist/aos.css";
const ServiceOfferings = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full py-20">
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="text-md flex flex-col gap-5 font-thin">
          <h1
            className="text-3xl font-normal md:text-5xl"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            What a leading professional website design company can do for your
            business
          </h1>
          <p data-aos="fade-up" data-aos-duration="1500">
            We are a specialist web design and development agency comprising a
            diverse team of industry professionals with the technical know-how
            to deliver tangible results. Your new customized website will
            highlight your unique offering and brand values to your target
            audience in an artistic and highly focused way.
          </p>
          <p data-aos="fade-up" data-aos-duration="1800">
            Our website design services are backed by lead generation-focused
            strategies and are executed with a high level of precision.
          </p>
          <p data-aos="fade-up" data-aos-duration="2100">
            When you partner with Ninja Promo, heres what you can expect.
          </p>
          <ul
            className="flex list-disc flex-col gap-5 px-10"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <li data-aos="fade-right" data-aos-duration="1200">
              Custom website to suit your unique business needs <br /> Leverage
              our 5+ years industry experience to help you reach your consumers
              in the most efficient way.
            </li>
            <li data-aos="fade-right" data-aos-duration="1500">
              Responsive web design fully compatible with mobile devices <br />{" "}
              We ensure your modern website looks great on any screen, so you
              never miss out on any potential or existing leads.
            </li>
            <li data-aos="fade-right" data-aos-duration="1800">
              Targeted SEO to improve your rankings <br /> Using the latest
              industry best practices and integrated marketing principles, we
              bring organic traffic to your website.
            </li>
            <li data-aos="fade-right" data-aos-duration="2100">
              Targeted SEO to improve your rankings <br /> Using the latest
              industry best practices and integrated marketing principles, we
              bring organic traffic to your website.
            </li>
            <li data-aos="fade-right" data-aos-duration="2400">
              Timely delivery of services so you never miss a beat <br /> Our
              website design team is efficient and diligent to deliver on time.
              This includes competitive website design pricing without
              compromising on quality.
            </li>
            <li data-aos="fade-right" data-aos-duration="2700">
              24/7 customer support services to help you every step of the way{" "}
              <br /> You can rest assured that your website will continue to
              function at optimum efficiency, with a web specialist always just
              one call away.
            </li>
          </ul>
          <p data-aos="fade-right" data-aos-duration="3000">
            We develop websites for all leading platforms, including WordPress,
            Shopify, Magento, and WooCommerce, to name a few.
          </p>
        </div>
      </div>
      <Sajha
        title={"Start your journey to building your high-impact site."}
        label={"Speak to web design expert"}
      />
      <div className="mx-auto max-w-screen-xl p-10">
        <div className="text-md flex flex-col gap-5 font-thin">
          <h1
            className="py-5 text-3xl font-normal md:text-5xl"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            High-impact, custom website design agency
          </h1>
          <p data-aos="fade-up" data-aos-duration="1400">
            Today's consumer demands more in the way of a business' digital
            presence. It's not enough to just have a website — it needs to
            attract and provide value to your potential customers. From bold to
            minimalist website design, we've done it all. Our commitment to you
            is a customized, highly functional website with far-reaching
            solutions leading to higher site traffic and more revenue.
          </p>

          <p data-aos="fade-up" data-aos-duration="1600">
            All our web design and development services include:
          </p>
          <ul
            className="flex list-disc flex-col gap-5 px-10"
            data-aos="fade-up-right"
            data-aos-duration="1200"
          >
            <li data-aos="fade-up-right" data-aos-duration="1200">
              A free initial project consultation with a web design expert and a
              quote for your bespoke project
            </li>
            <li data-aos="fade-up-right" data-aos-duration="1200">
              A dedicated project manager as your primary point of contact
              throughout the web design process
            </li>
            <li data-aos="fade-up-right" data-aos-duration="1200">
              Access to a winning professional website design and development
              team with years of industry experience
            </li>
            <li data-aos="fade-up-right" data-aos-duration="1200">
              Use of cutting-edge technology and modern coding principles to
              implement modern tools with intuitive navigation
            </li>
            <li data-aos="fade-up-right" data-aos-duration="1200">
              Responsive, cross-platform compatibility on mobile devices
              including phones and tablets
            </li>
            <li data-aos="fade-up-right" data-aos-duration="1200">
              Competitive web design pricing that caters to a range of project
              scopes, budgets, and timelines
            </li>
          </ul>
        </div>
      </div>
      <Sajha
        title={
          "Take a look at some of our website design and development case studies:"
        }
        desc={
          "Creating a new website or updating an existing one can take a lot of time and effort. It requires extensive research and planning, collaboration with multiple specialists and an integrated marketing strategy. Whether you require the full package of services or just a few hand-picked elements, you can benefit from our professional team of web designers, copywriters, web developers and marketing specialists. From idea generation to coding, we have a proven ability to deliver tangible solutions that businesses in the digital landscape can leverage to propel growth. Harness our web design experience to leapfrog the competition and establish long-term sustainable success for your brand."
        }
        label={"View Our Portfolio"}
      />
    </div>
  );
};

export default ServiceOfferings;
