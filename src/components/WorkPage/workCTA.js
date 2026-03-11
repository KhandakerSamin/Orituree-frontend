"use client";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import styled from "styled-components";

/* ── Animated border card (adapted from the poda pattern) ── */
const StyledCard = styled.div`
  #poda {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  /* lime accent border */
      /* CTA button - single border, icon separated */
      .cta-btn {
        display: inline-flex;
        align-items: center;
        background: transparent;
        color: #fff;
        font-weight: 500;
        font-size: 15px;
        border: 1.5px solid #d1ff52;
        border-radius: 9999px;
        padding: 0 0 0 24px;
        height: 48px;
        cursor: pointer;
        transition: all 0.3s ease;
        letter-spacing: 0.01em;
        position: relative;
        overflow: hidden;
        gap: 0;
      }
      .cta-btn:hover {
        background: #d1ff52;
        color: #0a0a0a;
        border-color: #d1ff52;
      }
      .cta-btn .cta-text {
        padding-right: 32px;
        font-size: 15px;
        font-weight: 500;
        white-space: nowrap;
        transition: color 0.3s;
      }
      .cta-btn:hover .cta-text {
        color: #0a0a0a;
      }
      .cta-btn .arrow {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border-radius: 50%;
        font-size: 18px;
        color: #d1ff52;
        transition: background 0.3s, color 0.3s;
      }
      .cta-btn:hover .arrow {
        background: #fff;
        color: #0a0a0a;
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

  /* lime top fade inside card (even less, further left) */
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

  /* subtle bottom fade, no violet */
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

  /* CTA button - Navbar hero style */
  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
    border: 1px solid rgba(209,255,82,0.5);
    border-radius: 9999px;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 0.01em;
  }
  .cta-btn:hover {
    background: #d1ff52;
    color: #0a0a0a;
    border-color: #d1ff52;
  }
  .cta-btn .arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid rgba(209,255,82,0.5);
    border-radius: 9999px 9999px 9999px 0;
    width: 28px;
    height: 28px;
    font-size: 13px;
    color: #d1ff52;
    transition: all 0.3s ease;
  }
  .cta-btn:hover .arrow {
    background: rgba(0,0,0,0.15);
    border-color: transparent;
    border-radius: 9999px 9999px 0 9999px;
    color: #0a0a0a;
  }
`;

export default function WorkCTA() {
  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center py-16 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-8">

      {/* ── PAGE BACKGROUND ── */}
      <div className="absolute inset-0 z-0 bg-black" />

      {/* Dark center, vivid edges like image */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 5% 50%, rgba(80,50,200,0.55) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 98% 50%, rgba(100,70,230,0.60) 0%, transparent 58%)",
        }}
      />
      {/* Deep black vignette center */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(0,0,0,0.7) 0%, transparent 75%)",
        }}
      />
      {/* Top/bottom dark edges */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.85) 100%)",
        }}
      />
      {/* Grain */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.35,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
        }}
      />

      {/* ── CARD ── */}
      <StyledCard className="relative z-10 w-full min-h-[500px] max-w-[1300px]">
        <div id="poda">
          {/* animated border layers */}
          <div className="layer darkBorder"   style={{ inset: "-2px" }} />
          <div className="layer whiteShimmer" style={{ inset: "-1px" }} />
          <div className="layer limeBorder"   style={{ inset: "-1px" }} />
          <div className="glow-layer"          style={{ inset: "-4px" }} />

          {/* inner card */}
          <div className="card-inner w-full">
            <div className="card-content flex flex-col items-center text-center px-10 py-34 gap-5">

              {/* Heading */}
              <h2
                className="text-3xl sm:text-4xl font-normal text-white leading-snug font-serif"
              >
                Not sure if Oriture is the{" "}<br/>
                <span
                  className="italic font-normal text-action"
                >
                  right partner
                </span>{" "}
                for you?
              </h2>

              {/* Body */}
              <p
                className="text-gray-100 font-normal text-sm sm:text-xl leading-relaxed max-w-md"
              >
                Start with{" "}
                <span style={{ color: "#d1ff52" }}>3 free strategy discussions</span>{" "}
                where we explore your idea, align on goals, and explain how
                we&apos;ll bring your product to life.
              </p>

              {/* CTA Button - FAQ style */}
              <div className="flex items-center gap-2 group/cta mt-2">
                <a
                  href="https://calendly.com/oriture-agency/30min"
                  target="_blank"
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