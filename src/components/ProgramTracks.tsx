import React from "react";
import RocketIcon from "../assets/icons/RocketIcon";
import ChartIcon from "../assets/icons/ChartIcon";
import ZapIcon from "../assets/icons/ZapIcon";
import RightArrow from "../assets/icons/RightArrow";
// import Pattern from "../assets/svgs/pattern.svg"


interface Track {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  iconcolor: string;
}

const tracks: Track[] = [
  {
    icon: <RocketIcon />,
    title: "Start-Up Program",
    description:
      "Our Start-Up Program is designed to support early-stage entrepreneurs with bold ideas and high-growth potential. Through a structured journey, we provide the resources, mentorship, and networks needed to transform a concept into a thriving business.",
    color: "bg-[#F7D5C9]",
    iconcolor: "bg-[#D3624C]",
  },
  {
    icon: <ChartIcon />,
    title: "Growth Program",
    description:
      "The Growth Program is designed for startups that have moved beyond the MVP stage and are ready to accelerate traction, expand market reach, and scale sustainably. This program equips founders with the strategies, tools, and networks needed to break through growth barriers and build resilient, high-performing businesses.",
    color: "bg-[#D9D4F0]",
    iconcolor: "bg-[#7670B2]",
  },
  {
    icon: <ZapIcon />,
    title: "Maturity Program",
    description:
      "The Maturity Program supports established businesses and social enterprises that have achieved stability and are now focused on deepening impact, expanding strategically, and building resilient leadership and operational systems.",
    color: "bg-[#B7E3E4]",
    iconcolor: "bg-[#00A1A1]",
  },
];

const ProgramTracks: React.FC = () => {
  return (
    <section className="bg-[#F5F5F5] min-h-screen px-4 py-12 md:px-8 lg:px-16 grid place-items-center">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl max-md:text-4xl font-bold text-gray-900 mb-3">
          Program Tracks
        </h2>
        <p className="text-[#414651] mt-2 mb-12 max-w-xl text-base">
          Choose the program that matches your venture’s current stage and
          needs.
        </p>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`${track.color} h-[480px] rounded-lg overflow-hidden shadow-sm flex flex-col`}
            >
              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Icon */}
                <div
                  className={`${track.iconcolor} w-12 h-12 rounded-full flex items-center justify-center mb-5`}
                >
                  {track.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#181D27] mb-3">
                  {track.title}
                </h3>

                {/* Description */}
                <p className="text-[#252B37] text-base font-normal flex-1">
                  {track.description}
                </p>
              </div>

              {/* Know More with arrow */}
              <div className="px-6 pb-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-base font-medium text-[#414651] hover:underline"
                >
                  Know More
                  <RightArrow />
                </a>
              </div>

              {/* Footer pattern SVG */}
              {/* <div className="h-15 w-full">
                <img
                  src={Pattern}
                  alt="pattern"
                  className="h-full w-full object-cover"
                />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramTracks;
