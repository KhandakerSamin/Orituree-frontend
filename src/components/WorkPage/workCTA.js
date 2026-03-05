"use client";
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

  .layer,
  .glow-layer {
    position: absolute;
    inset: 0;
    border-radius: 20px;
    overflow: hidden;
    z-index: 0;
  }

  /* shared conic spinner mixin */
  .layer::before,
  .glow-layer::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 800px;
    background-repeat: no-repeat;
    background-position: 0 0;
    transition: all 2s;
  }

  /* dark border base */
  .darkBorder {
    filter: blur(3px);
  }
  .darkBorder::before {
    transform: translate(-50%, -50%) rotate(82deg);
    background-image: conic-gradient(
      rgba(0, 0, 0, 0),
      #1a0f5e,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0) 50%,
      #3d1f8a,
      rgba(0, 0, 0, 0) 60%
    );
  }

  /* lime accent border */
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
    background: #080d0a;
    overflow: hidden;
  }

  /* lime top fade inside card */
  .card-inner::before {
    content: "";
    pointer-events: none;
    position: absolute;
    top: -120px;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 320px;
    background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(209,255,82,0.18) 0%, transparent 70%);
    filter: blur(40px);
    z-index: 0;
  }

  /* subtle bottom-right violet pool */
  .card-inner::after {
    content: "";
    pointer-events: none;
    position: absolute;
    bottom: -60px;
    right: -60px;
    width: 260px;
    height: 260px;
    background: radial-gradient(ellipse 80% 80% at 100% 100%, rgba(109,85,255,0.22) 0%, transparent 70%);
    filter: blur(40px);
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
    <section className="relative w-full overflow-hidden flex items-center justify-center py-20 px-4">

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
                className="text-3xl sm:text-4xl font-light text-white leading-snug"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Not sure if Oriture is the{" "}<br/>
                <span
                  className="italic font-light"
                  style={{ color: "#d1ff52", fontFamily: "'Georgia', serif" }}
                >
                  right partner
                </span>{" "}
                for you?
              </h2>

              {/* Body */}
              <p
                className="text-gray-100 font-light text-sm sm:text-xl leading-relaxed max-w-md"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Start with{" "}
                <span style={{ color: "#d1ff52" }}>3 free strategy discussions</span>{" "}
                where we explore your idea, align on goals, and explain how
                we&apos;ll bring your product to life.
              </p>

              {/* CTA Button */}
              <button className="cta-btn mt-2">
                Book a Quick call
                <span className="arrow">↗</span>
              </button>

            </div>
          </div>
        </div>
      </StyledCard>

    </section>
  );
}