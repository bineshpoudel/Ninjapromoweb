import React, { useEffect } from "react";
import TeamData from "../../../data/TeamData";
import AOS from "aos";
import "aos/dist/aos.css";
const OurTeam = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full bg-white text-[#121212]">
      <div className="mx-auto max-w-screen-xl p-20">
        <div className="py-10">
          <h1
            className="text-3xl md:text-5xl"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Our Team
          </h1>
        </div>
        <div className="grid grid-cols-2 items-center gap-6 md:grid-cols-5">
          {TeamData.map((team) => (
            <div
              key={team.id}
              className="flex flex-col gap-2"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              <div className="h-full w-full">
                <img
                  className="h-full w-full"
                  src={team.img}
                  alt="team-members-img"
                />
              </div>

              <div className="flex h-20 flex-col gap-1 text-center">
                <p
                  className="text-center text-xl font-semibold "
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  {team.name}
                </p>
                <p
                  className="text-sm font-thin"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  {team.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
