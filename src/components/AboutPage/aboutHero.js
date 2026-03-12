"use client";

// ─────────────────────────────────────────────
// HERO MEDIA CONFIG
// To swap the media, change the two values below:
//   type: "image"  → shows an <img>
//   type: "video"  → shows a <video> (autoplay, loop, muted)
//   file: filename in /public folder
// ─────────────────────────────────────────────
const heroMedia = {
  type: "image",       // "image" or "video"
  file: "/aboutHero.png",
};

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center py-20 px-5">

      {/* GRADIENT LAYERS - matching WorkHero style */}

      {/* Base: pure black */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black" />

      {/* Dark left - top-left stays black */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(125deg, #000000 0%, #04010d 18%, #080318 35%, #0e0628 50%, transparent 65%)",
        }}
      />

      {/* Vivid bottom-right bloom */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 95% 90% at 85% 85%, #8b58f5 0%, #6038d0 25%, #33188052%, #0e0628 72%, transparent 88%)",
          opacity: 1,
        }}
      />

      {/* Tighter vivid core */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 60% at 80% 88%, #aa78ff 0%, #7845ee 28%, #4020b0 52%, transparent 72%)",
          opacity: 0.9,
        }}
      />

      {/* Top-right corner glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 90% at 92% 20%, #7845ee 0%, #5030b8 30%, #2a1870 55%, transparent 75%)",
          opacity: 0.6,
        }}
      />

      {/* S-curve glow band */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: "blur(72px)" }}
        >
          <defs>
            <linearGradient id="sCurveGlowAbout" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2a1060" stopOpacity="0" />
              <stop offset="40%" stopColor="#6040c8" stopOpacity="0.75" />
              <stop offset="75%" stopColor="#8858f0" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#a070ff" stopOpacity="0.65" />
            </linearGradient>
          </defs>
          <path
            d="M 1100,0 C 900,-20 300,80 200,280 C 100,480 900,560 820,760 C 740,920 200,960 0,900 L 0,820 C 200,880 680,860 760,700 C 840,540 60,440 160,240 C 260,40 860,-40 1060,0 Z"
            fill="url(#sCurveGlowAbout)"
          />
        </svg>
      </div>

      {/* Secondary S-reinforcement */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: "blur(32px)" }}
        >
          <defs>
            <linearGradient id="sCurveSharpAbout" x1="0.3" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#4020a0" stopOpacity="0" />
              <stop offset="50%" stopColor="#6a48d0" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#9060f8" stopOpacity="0.45" />
            </linearGradient>
          </defs>
          <path
            d="M 980,0 C 820,10 380,100 300,270 C 220,440 800,510 760,680 C 720,840 280,900 80,900 L 0,900 L 0,820 C 220,820 700,780 740,620 C 780,460 200,370 280,200 C 360,30 800,-30 960,0 Z"
            fill="url(#sCurveSharpAbout)"
          />
        </svg>
      </div>

      {/* Dark mask - left stays dark */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(115deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.65) 28%, rgba(0,0,0,0.2) 52%, transparent 68%)",
        }}
      />

      {/* Black vignette top-left */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 58% 52% at 0% 0%, rgba(0,0,0,0.95) 0%, transparent 65%)",
        }}
      />

      {/* Grain heavy */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.4,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Grain fine */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.18,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='80' height='80' filter='url(%23n2)'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
          mixBlendMode: "soft-light",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[820px] mx-auto flex flex-col items-center text-center gap-10">

        {/* Heading */}
        <h1
          className="text-3xl sm:text-3xl lg:text-5xl font-normal text-white tracking-tight max-w-[820px] font-serif mt-20"
        >
          Founded in{" "}
          <span
            className="italic text-action"
          >
            2024
          </span>
          , oriture was created to transform ideas into impactful digital products through{" "}
          <span
            className="italic text-action"
          >
            creativity, innovation, and thoughtful
          </span>{" "}
          design.
        </h1>

        {/* Hero Media */}
        <div
          className="w-full rounded-2xl overflow-hidden"
          style={{
            maxWidth: "850px",
            boxShadow: "0 0 60px rgba(120, 70, 240, 0.2)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {heroMedia.type === "video" ? (
            <video
              src={heroMedia.file}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover"
              style={{ display: "block" }}
            />
          ) : (
            <img
              src={heroMedia.file}
              alt="Oriture about hero"
              className="w-full h-auto object-cover"
              style={{ display: "block" }}
            />
          )}
        </div>

        {/* Description */}
        <p
          className="text-gray-100 text-sm sm:text-base leading-relaxed max-w-[720px]"
        >
          Oriture is a team of{" "}
          <em className="text-action font-newsreader text-lg font-medium italic">
            designers and developers
          </em>{" "}
          focused on building digital products that perform. We partner with ambitious brands to design, build, and launch experiences that{" "}
          <em className="text-action font-newsreader text-lg italic">
            inspire users and drive growth.
          </em>
        </p>

      </div>

    </section>
  );
}