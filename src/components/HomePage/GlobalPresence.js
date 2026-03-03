"use client";
import React, { useEffect, useRef, useState } from "react";

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
  { label: "Project",     value: 30 },
  { label: "Client",      value: 20 },
  { label: "Team member", value: 7  },
  { label: "Country",     value: 11 },
];

const infoCards = [
  { highlight: "Oritars", body: "Where Strategy, Design & Technology Converge" },
  { highlight: "A team",  body: "Built for Global Brands, Focused on Performance & Scalable Success." },
];

function StatCounter({ label, value, started }) {
  const count = useCountUp(value, 3500, started);
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-base font-newsreader text-[#D1FF52] tracking-wide">
        {label}
      </span>
      <span
        className="font-medium pt-3 text-white leading-none"
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
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden bg-black">

      {/* ── GRADIENT LAYERS ── */}

      {/* Layer 0: diagonal linear — pure black top-left → deep purple bottom-right */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #000000 0%, #000000 38%, #080412 52%, #110a26 65%, #221545 82%, #2d1a5e 100%)",
        }}
      />

      {/* Layer 1: radial punch at bottom-right for richness */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 65% at 100% 100%, #5A3EAA 0%, #2B1860 35%, transparent 70%)",
          opacity: 0.45,
        }}
      />

      {/* Layer 2: tighter inner radial — extra depth at corner */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 40% at 95% 97%, #7B5FD4 0%, #4A2E9E 30%, transparent 65%)",
          opacity: 0.3,
        }}
      />

      {/* Layer 3: blurred SVG blob — feathers the diagonal boundary */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ filter: "blur(50px)" }}
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="diagWave" x1="1" y1="1" x2="0" y2="0">
              <stop offset="0%"   stopColor="#7B5FD4" stopOpacity="0.9"  />
              <stop offset="30%"  stopColor="#4A2E9E" stopOpacity="0.6"  />
              <stop offset="60%"  stopColor="#1E1240" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0"    />
            </linearGradient>
          </defs>
          <path
            d="M1440,900 L1440,420 C1300,400 1150,480 980,510 C810,540 640,600 480,680 C360,740 200,820 0,900 Z"
            fill="url(#diagWave)"
          />
        </svg>
      </div>

      {/* Layer 4: black wedge — locks top-left corner to pure black */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blackWedge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%"   stopColor="#000000" stopOpacity="1"   />
              <stop offset="55%"  stopColor="#000000" stopOpacity="0.85"/>
              <stop offset="80%"  stopColor="#000000" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0"   />
            </linearGradient>
          </defs>
          <polygon points="0,0 900,0 0,600" fill="url(#blackWedge)" />
        </svg>
      </div>

      {/* Layer 5: heavy grain */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.5,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Layer 6: fine grain */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.28,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='80' height='80' filter='url(%23n2)'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
          mixBlendMode: "soft-light",
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-[1300px] w-full mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* Left column */}
        <div className="w-full lg:w-1/2">
          <h1
            className="text-white font-normal mb-10 font-newsreader"
            style={{ fontSize: "clamp(26px, 3.2vw, 44px)", lineHeight: 1.28, letterSpacing: "-0.2px" }}
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

          {/* Info cards */}
          <div className="relative flex gap-3.5 mb-11">
            {infoCards.map((card, idx) => (
              <div
                key={idx}
                className="min-w-[175px] max-w-[300px] min-h-[150px] flex-shrink-0 p-4 pb-[18px] backdrop-blur-[10px] rounded-l-[12px] border-t border-l border-b border-white/[0.01] border-r-0"
                style={{
                  background: "linear-gradient(270deg, rgba(0,0,0,0.1) 0%, rgba(109,85,255,0.2) 100%)",
                }}
              >
                <div className="mb-3">
                  <img src="logoIcon.svg" className="w-5 h-5" alt="" />
                </div>
                <p className="m-0 text-sm text-white leading-relaxed">
                  <em className="text-[#D1FF52] font-medium italic">{card.highlight}</em>{" "}
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
              background: "linear-gradient(360deg, rgba(0,0,0,0.1) 0%, rgba(109,85,255,0.2) 100%)",
            }}
          >
            {stats.map((stat) => (
              <StatCounter key={stat.label} label={stat.label} value={stat.value} started={inView} />
            ))}
          </div>
        </div>

        {/* Right column — map */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img src="/map.svg" alt="" className="w-full h-auto block opacity-50" />
        </div>
      </div>
    </section>
  );
}