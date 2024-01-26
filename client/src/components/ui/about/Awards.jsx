import React from "react";
import AwardsData from "../../../data/AwardsData";

const Awards = () => {
  const digitalMarketingAwards = AwardsData.filter(
    (award) => award.award === "digitalmarketing",
  );
  const blockChainMarketingAwards = AwardsData.filter(
    (award) => award.award === "blockchainmarketing",
  );

  return (
    <div className="w-full  bg-[#121212] text-white">
      <div className="mx-auto max-w-screen-xl p-10">
        <div>
          <h1 className="py-10 text-3xl">Digital Marketing Awards</h1>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {digitalMarketingAwards.map((award) => (
              <div className="flex flex-col gap-4 rounded-br-3xl rounded-tl-3xl border p-2">
                <div
                  key={award.id}
                  className="flex flex-col items-center justify-center gap-4 rounded-br-3xl rounded-tl-xl border border-dotted "
                >
                  <img src={award.img} className="h-14" alt="" />
                  <p className="p-2 text-center">{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <h1 className="py-10 text-3xl">Blockchain Marketing Agency Award</h1>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {blockChainMarketingAwards.map((award) => (
              <div className="flex flex-col gap-4 rounded-br-3xl rounded-tl-3xl border p-2">
                <div
                  key={award.id}
                  className="flex flex-col items-center justify-center gap-4 rounded-br-3xl rounded-tl-xl border border-dotted p-1"
                >
                  <img src={award.img} className="h-14" alt="" />
                  <p className="text-center">{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <h1 className="py-10 text-3xl">Finetech Marketing Awards</h1>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {blockChainMarketingAwards.map((award) => (
              <div className="flex flex-col items-center justify-center rounded-br-3xl rounded-tl-3xl border p-2">
                <div
                  key={award.id}
                  className="flex flex-col items-center justify-center gap-4 rounded-br-3xl rounded-tl-xl border border-dotted p-1"
                >
                  <img src={award.img} className="h-14" alt="" />
                  <p className="text-center">{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
