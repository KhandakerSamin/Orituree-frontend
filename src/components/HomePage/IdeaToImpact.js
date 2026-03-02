"use client";
import React from "react";

const noise = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`;

const CardIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="13" height="13" rx="2" stroke="#D1FF52" strokeWidth="1.5" fill="none"/>
    <rect x="23" y="4" width="13" height="13" rx="2" stroke="#D1FF52" strokeWidth="1.5" fill="none"/>
    <rect x="4" y="23" width="13" height="13" rx="2" stroke="#D1FF52" strokeWidth="1.5" fill="none"/>
    <rect x="23" y="23" width="13" height="13" rx="2" stroke="#D1FF52" strokeWidth="1.5" fill="none"/>
  </svg>
);

const services = [
  "Pitch Deck",
  "Brand Identity",
  "Logo Design",
  "Visual Design",
  "Rebranding",
];

const cards = [
  {
    title: "Branding",
    description:
      "We craft scalable, user-first digital experiences for startups and growing companies worldwide.",
    gradient: "linear-gradient(180deg, #000000 0%, #29205E 100%)",
  },
  {
    title: "Product Design",
    description:
      "We craft scalable, user-first digital experiences for startups and growing companies worldwide.",
    gradient: "linear-gradient(180deg, #000000 0%, #4a6a00 55%, #7aaa00 100%)",
  },
  {
    title: "Development",
    description:
      "We craft scalable, user-first digital experiences for startups and growing companies worldwide.",
    gradient: "linear-gradient(180deg, #000000 0%, #29205E 100%)",
  },
];

export default function IdeaToImpact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-[#0a0a0a]">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1
          className="text-4xl md:text-5xl lg:text-[52px] font-normal font-newsreader text-white mb-4 tracking-tight leading-[1.15]"
        >
          From Idea to{" "}
          <em className="text-[#D1FF52] italic font-newsreader">
            Impact
          </em>
        </h1>
        <p className="text-gray-400 text-base font-normal leading-relaxed max-w-[380px] mx-auto">
          We craft scalable, user-first digital experiences for startups and
          growing companies worldwide.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1200px] w-full">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className="relative rounded-lg border border-[#29205E] overflow-hidden"
            style={{
              background: card.gradient,
              boxShadow: `inset 0px 1px 0px 0px ${
                i === 1 ? "#D1FF5233" : "#29205E66"
              }, 0 0 0 1px rgba(0,0,0,0.4)`,
            }}
          >
            {/* Noise overlay */}
            <div
              className="absolute inset-0 pointer-events-none z-[1] opacity-[0.08]"
              style={{
                backgroundImage: noise,
                backgroundSize: "180px 180px",
                mixBlendMode: "overlay",
              }}
            />

            {/* Inner shadow top line */}
            <div
              className="absolute top-0 left-0 right-0 h-px z-[2]"
              style={{
                background:
                  i === 1
                    ? "linear-gradient(90deg, transparent, #D1FF52 40%, #D1FF52 60%, transparent)"
                    : "linear-gradient(90deg, transparent, #29205E 40%, #29205E 60%, transparent)",
              }}
            />

            {/* Card Content */}
            <div className="relative z-[3] pt-7 px-6 pb-6">
              {/* Icon */}
              <div className="mb-5">
                <CardIcon />
              </div>

              {/* Title */}
              <h2 className="text-[26px] font-normal font-newsreader text-white mb-3 tracking-tight">
                {card.title}
              </h2>

              {/* Description */}
              <p className="text-white/55 max-w-[290px] text-sm leading-relaxed mb-6 font-light">
                {card.description}
              </p>

              {/* Service List */}
              <div className="flex flex-col gap-2">
                {services.map((service) => (
                  <button
                    key={service}
                    className="flex items-center justify-between bg-black/25 border border-white/[0.08] rounded-[10px] py-3 px-4 text-white/85 text-sm cursor-pointer transition-all duration-200 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/[0.18]"
                  >
                    <span>{service}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 12L12 2M12 2H5M12 2V9"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}