// src/components/Insight/InsightHero.jsx
"use client";

export default function InsightHero() {
  return (
    <section className="relative w-full pt-36 pb-10 md:pt-44 md:pb-12 overflow-hidden">

      {/* ── Gradient layers ── */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black" />

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(125deg, #000000 0%, #04010d 18%, #080318 35%, #0e0628 50%, transparent 65%)",
        }}
      />

      {/* Vivid right bloom */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 88% 30%, #8b58f5 0%, #6038d0 25%, #331880 52%, #0e0628 72%, transparent 88%)",
        }}
      />

      {/* Tighter core */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 82% 20%, #aa78ff 0%, #7845ee 28%, #4020b0 52%, transparent 72%)",
          opacity: 0.85,
        }}
      />

      {/* Top-right corner */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 98% 5%, #7845ee 0%, #5030b8 30%, #2a1870 55%, transparent 75%)",
          opacity: 0.55,
        }}
      />

      {/* S-curve glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: "blur(72px)" }}
        >
          <defs>
            <linearGradient id="isCurve" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%"   stopColor="#2a1060" stopOpacity="0" />
              <stop offset="45%"  stopColor="#6040c8" stopOpacity="0.7" />
              <stop offset="80%"  stopColor="#8858f0" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#a070ff" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M 1100,0 C 900,-20 300,60 200,180 C 100,300 800,360 820,480 C 840,580 200,600 0,580 L 0,520 C 200,540 780,520 760,420 C 740,320 60,260 160,140 C 260,20 860,-20 1060,0 Z"
            fill="url(#isCurve)"
          />
        </svg>
      </div>

      {/* Dark mask left */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(115deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.15) 55%, transparent 70%)",
        }}
      />

      {/* Fade bottom */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(0,0,0,0.6) 80%, #000 100%)",
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.38,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-[1370px] px-6 md:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-light font-serif text-white leading-tight mb-5 max-w-3xl">
          Insights That Shape Better{" "}
          <em className="text-[#D1FF52] italic font-serif">digital
          decisions</em>
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl">
          Clear thinking on strategy, design, engineering, and scale written
          for founders, leaders, and teams building serious digital products.
        </p>
      </div>
    </section>
  );
}