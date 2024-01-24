import React from "react";

const BookConsulation = () => {
  return (
    <div className="w-full bg-[#121212] py-20 text-white">
      <div className="mx-auto max-w-screen-xl p-10 py-20">
        <div className="flex flex-col items-center  gap-10">
          <h1 className="text-center text-5xl ">
            Book a consultation to learn more about our search engine
            optimization services
          </h1>
          <p className="text-center">
            When you partner with NinjaPromo, you'll get a team of experienced
            SEO professionals with the skills and knowledge necessary to get you
            the results you want. We'll help you harness this incredible tool
            with a customized strategy that is designed to propel your online
            presence beyond your competition. To get started, simply book a
            consultation with our team today.
          </p>
          <div className="justify-self-center">
            <button className="bg-[#3C39C6] px-10 py-5">Schedule a call</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookConsulation;
