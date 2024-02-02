import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const Faq = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    setActiveItem((prevActiveItem) =>
      prevActiveItem === index ? null : index,
    );
  };

  const faqData = [
    {
      question: "How does SEO work?",
      answer:
        "SEO stands for “search engine optimization.” It's a marketing strategy that businesses use to improve their visibility and ranking in search engine results pages (SERPs). When someone makes a search using a keyword or phrase that's relevant to your business, you want your mobile and desktop web pages to appear as close to the top of the results list as possible. Some studies have shown that the vast majority of Internet users only click on results that appear on the first page of SERPs. So if you're not ranking in the top few results, you could be missing out on a lot of potential customers.To improve your ranking, businesses use on-page SEO strategies like keyword research and backlinking. Keyword research involves finding the right keywords and phrases that people are searching for when they're looking for businesses like yours. Once you've identified these keywords, you can incorporate them into your website copywriting across both desktop and mobile, to help boost your ranking. You can also perform off-page SEO, which might involve promoting your online presence via social media or other digital platforms.Backlinking is the process of getting other websites to link to your website. This helps improve your ranking because it signals to Google and Bing that your website is popular and relevant, which will lead to a positive feedback loop. The more traffic you can drive to your website, the higher your ranking will eventually be.",
    },
    {
      question: "How much do professional SEO services cost?",
      answer:
        "The cost of SEO services vary depending on the needs of your business and the size of your budget. But in general, SEO is a relatively affordable marketing strategy, especially when you compare it to other marketing channels like pay-per-click (PPC) advertising. And unlike PPC, SEO is an “inbound” marketing strategy, which means it can lead to more customers without having to pay for each click.At NinjaPromo, we offer a range of professional SEO-related services to fit any budget. We'll work with you to assess your needs and develop a customized plan that fits within your available spend. Whether you're looking for a comprehensive approach or just need help with specific tasks like keyword research or backlinks, we can tailor a solution that will lead to results.",
    },
    {
      question: "What features can be added in SE0?",
      answer:
        "With so many mobile applications to compete with on app stores, it is essential that yours is unique, eye-catching, and highly functional. Apart from ensuring your content is dynamic, we consider features such as social integration, location tracking, AI, voice search, push notifications, customization options, payment ability, and secure access. We use the latest tech innovations to deliver progressive digital products that delight both you and your customers.",
    },
    {
      question: "How does SEO work?",
      answer:
        "SEO stands for “search engine optimization.” It's a marketing strategy that businesses use to improve their visibility and ranking in search engine results pages (SERPs). When someone makes a search using a keyword or phrase that's relevant to your business, you want your mobile and desktop web pages to appear as close to the top of the results list as possible. Some studies have shown that the vast majority of Internet users only click on results that appear on the first page of SERPs. So if you're not ranking in the top few results, you could be missing out on a lot of potential customers.To improve your ranking, businesses use on-page SEO strategies like keyword research and backlinking. Keyword research involves finding the right keywords and phrases that people are searching for when they're looking for businesses like yours. Once you've identified these keywords, you can incorporate them into your website copywriting across both desktop and mobile, to help boost your ranking. You can also perform off-page SEO, which might involve promoting your online presence via social media or other digital platforms.Backlinking is the process of getting other websites to link to your website. This helps improve your ranking because it signals to Google and Bing that your website is popular and relevant, which will lead to a positive feedback loop. The more traffic you can drive to your website, the higher your ranking will eventually be.",
    },
    {
      question: "How much do professional SEO services cost?",
      answer:
        "The cost of SEO services vary depending on the needs of your business and the size of your budget. But in general, SEO is a relatively affordable marketing strategy, especially when you compare it to other marketing channels like pay-per-click (PPC) advertising. And unlike PPC, SEO is an “inbound” marketing strategy, which means it can lead to more customers without having to pay for each click.At NinjaPromo, we offer a range of professional SEO-related services to fit any budget. We'll work with you to assess your needs and develop a customized plan that fits within your available spend. Whether you're looking for a comprehensive approach or just need help with specific tasks like keyword research or backlinks, we can tailor a solution that will lead to results.",
    },
    {
      question: "What features can be added in SE0?",
      answer:
        "With so many mobile applications to compete with on app stores, it is essential that yours is unique, eye-catching, and highly functional. Apart from ensuring your content is dynamic, we consider features such as social integration, location tracking, AI, voice search, push notifications, customization options, payment ability, and secure access. We use the latest tech innovations to deliver progressive digital products that delight both you and your customers.",
    },
  ];

  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-10">
        <h1
          className="pb-20 text-center text-3xl md:text-5xl"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Frequently Asked Questions (FAQs)
        </h1>
        <div className="mx-auto w-full md:w-[70%]">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="mb-4"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div
                className="flex cursor-pointer items-center justify-between gap-10"
                onClick={() => toggleItem(index)}
              >
                <h1 className="text-xl md:text-2xl">{item.question}</h1>
                <div
                  className={`transform transition-transform ${activeItem === index ? "rotate-45 duration-500" : ""}`}
                >
                  <FaPlusCircle className="size-10 text-[#3C39C6]" />
                </div>
              </div>

              <div
                className={`transition-max-height mt-2 overflow-hidden ${activeItem === index ? "max-h-[1000px] duration-700 ease-in-out" : "max-h-0 duration-500 ease-in-out"}`}
              >
                <p>{item.answer}</p>
              </div>
              <br />
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
