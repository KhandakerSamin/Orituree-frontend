"use client";
import { ArrowUpRight } from "lucide-react";
import styled from "styled-components";

const reasons = [
  {
    title: "Mission",
    desc: "To structure ideas into meaningful digital products through strategy, design, and technology.",
  },
  {
    title: "Vision",
    desc: "To shape the future of digital experiences through creativity, innovation, and design excellence.",
  },
  {
    title: "Values",
    desc: "Our values center on purposeful design, user-focused experiences, strong collaboration, simplicity, continuous innovation, and a commitment to trust and reliability in everything we deliver.",
  },
];

/* ── Animated border card ── */
const StyledCard = styled.div`
  #poda {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .limeBorder {
    filter: blur(0.5px);
  }
  .limeBorder::before {
    transform: translate(-50%, -50%) rotate(70deg);
    filter: brightness(1.3);
    background-image: conic-gradient(
      #0a0a0a,
      #d1ff52 5%,
      #0a0a0a 14%,
      #0a0a0a 50%,
      #6d55ff 60%,
      #0a0a0a 64%
    );
  }

  /* white shimmer */
  .whiteShimmer {
    filter: blur(2px);
  }
  .whiteShimmer::before {
    transform: translate(-50%, -50%) rotate(83deg);
    filter: brightness(1.4);
    background-image: conic-gradient(
      rgba(0, 0, 0, 0) 0%,
      #b8e840,
      rgba(0, 0, 0, 0) 8%,
      rgba(0, 0, 0, 0) 50%,
      #9080ff,
      rgba(0, 0, 0, 0) 58%
    );
  }

  /* glow halo */
  .glow-layer {
    filter: blur(28px);
    opacity: 0.35;
  }
  .glow-layer::before {
    transform: translate(-50%, -50%) rotate(60deg);
    background-image: conic-gradient(
      #000,
      #d1ff52 5%,
      #000 38%,
      #000 50%,
      #6d55ff 60%,
      #000 87%
    );
    transition: all 2s;
  }

  /* hover rotations */
  #poda:hover .darkBorder::before  { transform: translate(-50%, -50%) rotate(-98deg); }
  #poda:hover .limeBorder::before  { transform: translate(-50%, -50%) rotate(-110deg); }
  #poda:hover .whiteShimmer::before{ transform: translate(-50%, -50%) rotate(-97deg); }
  #poda:hover .glow-layer::before  { transform: translate(-50%, -50%) rotate(-120deg); }

  /* focus rotations */
  #poda:focus-within .darkBorder::before  { transform: translate(-50%, -50%) rotate(442deg); transition: all 4s; }
  #poda:focus-within .limeBorder::before  { transform: translate(-50%, -50%) rotate(430deg); transition: all 4s; }
  #poda:focus-within .whiteShimmer::before{ transform: translate(-50%, -50%) rotate(443deg); transition: all 4s; }
  #poda:focus-within .glow-layer::before  { transform: translate(-50%, -50%) rotate(420deg); transition: all 4s; }

  /* card inner */
  .card-inner {
    position: relative;
    z-index: 2;
    border-radius: 18px;
    background: radial-gradient(ellipse 80% 50% at 18% 0%, rgba(209,255,82,0.07) 0%, transparent 60%),
                linear-gradient(180deg, #23261a 0%, #0a0a0a 100%);
    overflow: hidden;
  }

  /* lime top fade inside card */
  .card-inner::before {
    content: "";
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: radial-gradient(ellipse 80% 50% at 18% 0%, rgba(209,255,82,0.07) 0%, transparent 70%);
    filter: blur(8px);
    z-index: 0;
  }

  .card-inner::after {
    content: "";
    pointer-events: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background: linear-gradient(180deg, transparent 0%, #0a0a0a 100%);
    filter: blur(10px);
    z-index: 0;
  }

  .card-content {
    position: relative;
    z-index: 1;
  }
`;

export default function AboutCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050505] py-20 pb-32 flex flex-col items-center">
      {/* ── PAGE BACKGROUND GRADIENTS ── */}
      {/* Deep black top fade down */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #050505 0%, transparent 30%, #0a0a0a 100%)",
        }}
      />
      
      {/* Purple glow lower bottom */}
      <div
        className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 85% 70%, rgba(80,50,200,0.3) 0%, transparent 60%), radial-gradient(ellipse 70% 80% at 15% 75%, rgba(100,70,230,0.2) 0%, transparent 60%)",
        }}
      />

      {/* Grain Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.35,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
        }}
      />

      {/* ── TOP SECTION: Mission, Vision, Values ── */}
      <div className="relative z-10 w-full max-w-4xl px-5 sm:px-10 lg:px-16 mb-24 flex flex-col items-center">
        {/* Heading */}
        <div className="w-full max-w-xl text-start mb-10">
          <h2 className="font-newsreader text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.3] text-white">
            <span className="not-italic" style={{ color: "#D1FF52" }}>Oriture</span>{" "}
            is your
            <br />
            perfect choice in terms of
          </h2>
        </div>

        {/* Cards list */}
        <div className="flex flex-col items-center gap-4 sm:gap-5 w-full">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="group relative w-full max-w-xl overflow-hidden rounded-xl px-5 sm:px-6 py-5 sm:py-6 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                borderLeft: "1px solid rgba(255,255,255,0.04)",
                borderRight: "1px solid rgba(255,255,255,0.04)",
                borderBottom: "1px solid rgba(0,0,0,0.2)",
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
              }}
            >
              {/* Icon + Text */}
              <div className="relative z-10 flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  {/* Lime Plus/Cross Icon matching the image */}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#D1FF52"/>
                    <path d="M10 5V15M5 10H15" stroke="#121212" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>

                <div>
                  <h3 className="font-serif text-lg sm:text-lg font-normal text-white leading-snug mb-1.5 whitespace-pre-line tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-[15px] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM SECTION: CTA Card ── */}
      <StyledCard className="relative z-10 w-full px-4 max-w-[1000px] flex justify-center">
        <div id="poda" className="w-full">
          {/* animated border layers */}
          <div className="layer darkBorder" style={{ inset: "-2px" }} />
          <div className="layer whiteShimmer" style={{ inset: "-1px" }} />
          <div className="layer limeBorder" style={{ inset: "-1px" }} />
          <div className="glow-layer" style={{ inset: "-4px" }} />

          {/* inner card */}
          <div className="card-inner w-full">
            <div className="card-content flex flex-col items-center text-center px-6 sm:px-10 py-16 sm:py-24 gap-6">
              
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-normal text-white leading-snug font-serif">
                Not sure if Oriture is the <br />
                <span className="italic font-normal" style={{ color: "#d1ff52" }}>
                  right partner
                </span>{" "}
                for you?
              </h2>

              {/* Body */}
              <p className="text-white/80 font-normal text-base sm:text-lg leading-relaxed max-w-lg mb-2">
                Start with{" "}
                <span style={{ color: "#d1ff52" }}>3 free strategy discussions</span>{" "}
                where we explore your idea, align on goals, and explain how
                we'll bring your product to life.
              </p>

              {/* CTA Button - FAQ style */}
              <div className="flex items-center gap-2 group/cta mt-2">
                <a
                  href="/contact"
                  className="border border-[#D1FF52]/50 text-white group-hover/cta:text-black group-hover/cta:bg-[#D1FF52] group-hover/cta:border-[#D1FF52] bg-transparent px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 text-sm font-medium whitespace-nowrap"
                >
                  Book a Quick Call
                </a>
                 <button className="border border-[#D1FF52]/50 bg-transparent p-2 sm:p-2.5 rounded-tr-full rounded-b-full group-hover/cta:rounded-t-full group-hover/cta:rounded-bl-none group-hover/cta:bg-[#D1FF52] transition-all duration-300 cursor-pointer">
                <ArrowUpRight className="w-4 h-4 text-[#D1FF52] group-hover/cta:rotate-45 group-hover/cta:text-black transition-all duration-300" />
              </button>
              </div>

            </div>
          </div>
        </div>
      </StyledCard>
    </section>
  );
}
