import React from "react";
import TeamData from "../../../data/TeamData";

const OurTeam = () => {
  return (
    <div className="w-full bg-white text-[#121212]">
      <div className="mx-auto max-w-screen-xl p-20">
        <div className="py-10">
          <h1 className="text-3xl">Our Team</h1>
        </div>
        <div className="grid grid-cols-2 items-center gap-6 md:grid-cols-5">
          {TeamData.map((team) => (
            <div key={team.id} className="flex flex-col gap-2">
              <div className="h-full w-full">
                <img
                  className="h-full w-full"
                  src={team.img}
                  alt="team-members-img"
                />
              </div>

              <div className="flex h-20 flex-col gap-1 text-center">
                <p className="text-center text-xl font-semibold ">
                  {team.name}
                </p>
                <p className="text-sm font-thin">{team.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
