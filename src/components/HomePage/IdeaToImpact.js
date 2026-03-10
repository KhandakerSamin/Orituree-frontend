"use client";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const noise = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`;

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
    // 40% solid black → 20% fade → 40% full color
    gradient: "linear-gradient(180deg, #000000 0%, #000000 40%, #29205E 60%, #29205E 100%)",
    accentLine: "#29205E66",
    isGreen: false,
  },
  {
    title: "Product Design",
    description:
      "We craft scalable, user-first digital experiences for startups and growing companies worldwide.",
    gradient: "linear-gradient(180deg, #000000 0%, #000000 40%, #5a7a00 60%, #7aaa00 100%)",
    accentLine: "#D1FF5233",
    isGreen: true,
  },
  {
    title: "Development",
    description:
      "We craft scalable, user-first digital experiences for startups and growing companies worldwide.",
    gradient: "linear-gradient(180deg, #000000 0%, #000000 40%, #29205E 60%, #29205E 100%)",
    accentLine: "#29205E66",
    isGreen: false,
  },
];

export default function IdeaToImpact() {
  return (
    <section className="min-h-[auto] sm:min-h-screen flex flex-col items-center justify-center py-16 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14">
        <h1 className="text-3xl md:text-5xl lg:text-[52px] font-normal font-newsreader text-white mb-3 sm:mb-4 tracking-tight leading-[1.15]">
          From Idea to{" "}
          <em className="text-[#D1FF52] italic font-newsreader">Impact</em>
        </h1>
        <p className="text-white/60 text-base font-normal leading-relaxed max-w-[380px] mx-auto">
          We craft scalable, user-first digital experiences for startups and
          growing companies worldwide.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 max-w-[1300px] w-full">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className="relative rounded-2xl border border-[#29205E] overflow-hidden"
            style={{
              background: card.gradient,
              boxShadow: `inset 0px 1px 0px 0px ${card.accentLine}, 0 0 0 1px rgba(0,0,0,0.4)`,
            }}
          >
            {/* Noise — subtle on dark top zone (0–60%) */}
            <div
              className="absolute inset-0 pointer-events-none z-[1]"
              style={{
                backgroundImage: noise,
                backgroundSize: "180px 180px",
                mixBlendMode: "overlay",
                opacity: 0.06,
                maskImage: "linear-gradient(180deg, black 0%, black 40%, transparent 62%)",
                WebkitMaskImage: "linear-gradient(180deg, black 0%, black 40%, transparent 62%)",
              }}
            />

            {/* Noise — heavy on colored bottom zone (60–100%) */}
            <div
              className="absolute inset-0 pointer-events-none z-[1]"
              style={{
                backgroundImage: noise,
                backgroundSize: "180px 180px",
                mixBlendMode: "overlay",
                opacity: 0.6,
                maskImage: "linear-gradient(180deg, transparent 0%, transparent 58%, black 68%, black 100%)",
                WebkitMaskImage: "linear-gradient(180deg, transparent 0%, transparent 58%, black 68%, black 100%)",
              }}
            />

            {/* Inner top highlight line */}
            <div
              className="absolute top-0 left-0 right-0 h-px z-[2]"
              style={{
                background: card.isGreen
                  ? "linear-gradient(90deg, transparent, #D1FF52 40%, #D1FF52 60%, transparent)"
                  : "linear-gradient(90deg, transparent, #29205E 40%, #29205E 60%, transparent)",
              }}
            />

            {/* Card Content */}
            <div className="relative z-[3] pt-5 sm:pt-7 px-4 sm:px-6 pb-5 sm:pb-6">
              {/* Icon */}
              <div className="mb-4 sm:mb-5">
                <img src="/CardIcon.svg"></img>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-normal font-newsreader text-white mb-2 sm:mb-3 tracking-tight">
                {card.title}
              </h2>

              {/* Description */}
              <p className="text-white/60 max-w-[290px] text-sm leading-relaxed mb-4 sm:mb-6 font-light">
                {card.description}
              </p>

              {/* Service List */}
              <div className="flex flex-col gap-0.5">
                {services.map((service) => (
                  <button
                    key={service}
                    className="flex items-center justify-between bg- border bg-black/[0.1] border-white/3 rounded-[8px] py-2.5 sm:py-3 px-3 sm:px-4 text-white/85 text-sm cursor-pointer transition-all duration-200 hover:bg-white/[0.08] hover:border-white/[0.18]"
                  >
                    <span>{service}</span>
                    <ArrowUpRight className="w-4 h-4" />
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