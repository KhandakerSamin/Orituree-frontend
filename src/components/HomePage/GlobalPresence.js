"use client";
import React, { useEffect, useRef, useState } from "react";

// Smooth easeOutExpo counter
function useCountUp(target, duration = 3500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const stats = [
  { label: "Project", value: 30 },
  { label: "Client", value: 20 },
  { label: "Team member", value: 7 },
  { label: "Country", value: 11 },
];

const infoCards = [
  {
    highlight: "Oritars",
    body: "Where Strategy, Design & Technology Converge",
  },
  {
    highlight: "A team",
    body: "Built for Global Brands, Focused on Performance & Scalable Success.",
  },
];

function StatCounter({ label, value, started }) {
  const count = useCountUp(value, 3500, started);
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-base font-newsreader text-[#D1FF52] tracking-wide">
        {label}
      </span>
      <span
        className="font-medium pt-3 text-white leading-none "
        style={{ fontSize: "clamp(38px, 4vw, 54px)", letterSpacing: "-1.5px" }}
      >
        {String(count).padStart(2, "0")}
      </span>
    </div>
  );
}

export default function GlobalPresence() {
  const statsRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(140deg, #04040f 0%, #080820 45%, #0d1130 75%, #0a0d28 100%)",
      }}
    >
      {/* Content container — 1400px, two-column layout */}
      <div className="relative z-10 max-w-[1300px] w-full mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left column — 50% width: heading + cards + stats */}
        <div className="w-full lg:w-1/2">
          {/* Heading */}
          <h1
            className="text-white font-normal mb-10 font-newsreader"
            style={{
              fontSize: "clamp(26px, 3.2vw, 44px)",
              lineHeight: 1.28,
              letterSpacing: "-0.2px",
            }}
          >
            Crafting digital
            <br />
            experiences that{" "}
            <em className="text-[#D1FF52] italic font-newsreader">
              accelerate
              <br />
              growth
            </em>
          </h1>

          {/* Info cards — both with left-to-right fade */}
          <div className="relative flex gap-3.5 mb-11">
            {infoCards.map((card, idx) => (
              <div
                key={idx}
                className="min-w-[175px] max-w-[300px] min-h-[150px] flex-shrink-0 p-4 pb-[18px] backdrop-blur-[10px] rounded-l-[12px] border-t border-l border-b border-white/[0.01] border-r-0"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(0, 0, 0, 0.1) 0%, rgba(109, 85, 255, 0.2) 100%)",
                }}
              >
                <div className="mb-3">
                  <img src="logoIcon.svg" className="w-5 h-5"></img>
                </div>
                <p className="m-0 text-sm text-white leading-relaxed">
                  <em className="text-[#D1FF52] font-medium italic">
                    {card.highlight}
                  </em>{" "}
                  - {card.body}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-4 max-w-[650px] px-5 min-h-35 pt-6 pb-5 rounded-t-[12px] border-t border-l border-r border-white/[0.01] border-b-0"
            style={{
              gap: "clamp(24px, 4vw, 48px)",
              background:
                "linear-gradient(360deg, rgba(0, 0, 0, 0.1) 0%, rgba(109, 85, 255, 0.2) 100%)",
            }}
          >
            {stats.map((stat, idx) => (
              <StatCounter
                key={stat.label}
                label={stat.label}
                value={stat.value}
                started={inView}
              />
            ))}
          </div>
        </div>

        {/* Right column — 50% width: map image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="/map.svg"
            alt=""
            className="w-full h-auto block opacity-50"
          />
        </div>
      </div>
    </section>
  );
}
