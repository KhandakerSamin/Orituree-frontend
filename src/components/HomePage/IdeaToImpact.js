"use client";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const noise = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`;

const cards = [
  {
    title: "Branding",
    icon: "/CardIcon1.svg",
    description:
      "We craft scalable, user-first digital experiences for startups and growing companies worldwide.",
    gradient: "linear-gradient(180deg, #000000 0%, #000000 40%, #29205E 60%, #29205E 100%)",
    accentLine: "#29205E66",
    isGreen: false,
    services: [
      "Pitch Deck",
      "Brand Identity",
      "Logo Design",
      "Graphic Design",
      "Rebranding",
    ],
  },
  {
    title: "Product Design",
    icon: "/CardIcon2.svg",
    description:
      "We craft scalable, user-first digital experiences for startups and growing companies worldwide.",
    gradient: "linear-gradient(180deg, #000000 0%, #000000 40%, #5a7a00 60%, #7aaa00 100%)",
    accentLine: "#D1FF5233",
    isGreen: true,
    services: [
      "UI/UX Design",
      "Web Design",
      "Mobile App Design",
      "Website Redesign",
      "UX/UI Audit",
    ],
  },
  {
    title: "Development",
    icon: "/CardIcon3.svg",
    description:
      "We craft scalable, user-first digital experiences for startups and growing companies worldwide.",
    gradient: "linear-gradient(180deg, #000000 0%, #000000 40%, #29205E 60%, #29205E 100%)",
    accentLine: "#29205E66",
    isGreen: false,
    services: [
      "Web Development",
      "MVP Development",
      "Webflow Development",
      "Landing page",
      "Mobile Development",
    ],
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
              <div className="mb-4 w-8 h-8 sm:mb-5">
                <img src={card.icon} alt={card.title} />
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
                {card.services.map((service) => (
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

      {/* CTA Bar */}
      <div
        className="mt-5 sm:mt-6 max-w-[1300px] w-full px-5 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
        style={{
          borderRadius: "0 16px 16px 16px",
          background: "linear-gradient(360deg, rgba(0,0,0,0.2) 0%, rgba(109,85,255,0.2) 100%)",
        }}
      >
        {/* Avatar + Text */}
        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
          <img
            src="/mohon.png"
            alt="Team"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover object-top flex-shrink-0"
          />
          <p className="text-white/75 text-sm sm:text-base leading-snug font-newsreader max-w-xl">
            Turn ideas into impactful products with Oriture’s design and development services built to grow revenue and maximize ROI.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-2 mt-6 sm:mt-7 md:mt-5 group">
            <Link href="" className="bg-[#D1FF52] text-black px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium cursor-pointer flex items-center justify-center">
              Book a Call
            </Link>
            <Link href="" className="border border-[#D1FF52]/50 bg-transparent p-2.5 sm:p-3 rounded-tr-full rounded-b-full transition-all duration-300 group-hover:rounded-t-full group-hover:rounded-bl-none group-hover:bg-[#D1FF52] cursor-pointer flex items-center justify-center">
              <MoveUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 text-[#D1FF52] group-hover:text-black" />
            </Link>
        </div>

      </div>
    </section>
  );
}