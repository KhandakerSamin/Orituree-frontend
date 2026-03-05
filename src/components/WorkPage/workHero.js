"use client";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    image: "/workhero1.png",
    title: "Lebanese Grill House",
    description:
      "We Partnered With Lebanese Green House To Craft A Clean, Elegant, And Conversion-Focused Digital Experience That Reflects Their Brand Identity And Elevates Their Online Presence.",
    tags: ["Hospitality", "Restaurant"],
    testimonial:
      "Oriture Excels With Meticulous Attention To Detail, Commitment To Excellence, And Creative Problem-Solving. Their Inventive Solutions Captivate Visually And Significantly Enhance The User Experience.",
    reviewer: {
      name: "Sakhawat Hossain",
      role: "Brand Manager, LGH",
      avatar: "/avatar.png",
    },
  },
  {
    id: 2,
    image: "/workHero2.png",
    title: "Nova Tech Solutions",
    description:
      "We Collaborated With Nova Tech To Build A Sleek, Performance-Driven SaaS Dashboard That Streamlines Workflows And Delivers An Intuitive Experience For Their Enterprise Clients.",
    tags: ["SaaS", "Technology"],
    testimonial:
      "The Team Delivered Beyond Our Expectations. The Interface Is Polished, Fast, And Our Users Love The New Experience. It Truly Transformed How Our Clients Interact With Our Platform.",
    reviewer: {
      name: "Ariana Patel",
      role: "Product Lead, Nova Tech",
      avatar: "/workhero1.png",
    },
  },
  {
    id: 3,
    image: "/workHero3.png",
    title: "Bloom Fashion Studio",
    description:
      "We Designed An Immersive E-Commerce Experience For Bloom Fashion Studio That Blends Editorial Storytelling With Seamless Shopping — Increasing Conversions By 40% In The First Month.",
    tags: ["E-Commerce", "Fashion"],
    testimonial:
      "Our Online Store Finally Feels Like Us. The Design Is Stunning And The User Journey Is So Smooth. Sales Have Never Been Better Since The Relaunch. Absolutely Recommend Oriture.",
    reviewer: {
      name: "Mia Johansson",
      role: "Creative Director, Bloom",
      avatar: "/avatar.png",
    },
  },
];

const DURATION = 5000;

export default function WorkHero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef(null);

  const goTo = (index) => {
    if (animating || index === current) return;
    setAnimating(true);
    clearTimeout(timerRef.current);
    setTimeout(() => {
      setCurrent(index);
      setProgressKey((k) => k + 1);
      setAnimating(false);
    }, 400);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % projects.length);
        setProgressKey((k) => k + 1);
        setAnimating(false);
      }, 400);
    }, DURATION);

    return () => clearTimeout(timerRef.current);
  }, [current]);

  // Safety check: ensure current is within bounds
  const safeIndex = current >= projects.length ? 0 : current;
  const proj = projects[safeIndex];

  // Reset current if out of bounds
  useEffect(() => {
    if (current >= projects.length) {
      setCurrent(0);
    }
  }, [current]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center py-16">
      {/* GRADIENT LAYERS */}

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

      {/* Vivid bottom-right bloom - expanded coverage */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 95% 90% at 85% 85%, #8b58f5 0%, #6038d0 25%, #3318 80 52%, #0e0628 72%, transparent 88%)",
          opacity: 1,
        }}
      />

      {/* Tighter vivid core - extended left and toward top */}
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
            <linearGradient id="sCurveGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2a1060" stopOpacity="0" />
              <stop offset="40%" stopColor="#6040c8" stopOpacity="0.75" />
              <stop offset="75%" stopColor="#8858f0" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#a070ff" stopOpacity="0.65" />
            </linearGradient>
          </defs>
          <path
            d="M 1100,0 C 900,-20 300,80 200,280 C 100,480 900,560 820,760 C 740,920 200,960 0,900 L 0,820 C 200,880 680,860 760,700 C 840,540 60,440 160,240 C 260,40 860,-40 1060,0 Z"
            fill="url(#sCurveGlow)"
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
            <linearGradient id="sCurveSharp" x1="0.3" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#4020a0" stopOpacity="0" />
              <stop offset="50%" stopColor="#6a48d0" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#9060f8" stopOpacity="0.45" />
            </linearGradient>
          </defs>
          <path
            d="M 980,0 C 820,10 380,100 300,270 C 220,440 800,510 760,680 C 720,840 280,900 80,900 L 0,900 L 0,820 C 220,820 700,780 740,620 C 780,460 200,370 280,200 C 360,30 800,-30 960,0 Z"
            fill="url(#sCurveSharp)"
          />
        </svg>
      </div>

      {/* Dark mask - left-of-S stays dark */}
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
      <div className="relative z-10 w-full max-w-[1350px] mx-auto px-5 sm:px-8 flex flex-col items-center">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1
            className="text-4xl sm:text-5xl lg:text-5xl font-normal text-white leading-tight tracking-tight font-serif"
          >
            From Concept to
          </h1>
          <h1
            className="text-4xl sm:text-5xl lg:text-5xl font-normal leading-tight font-serif"
          >
            <span
              className="italic text-action"
            >
              high-Impact
            </span>{" "}
            <span className="text-white">digital{" "}</span>
            <span
              className="italic text-white font-serif"
            >
              experience
            </span>
          </h1>

          {/* Avatars + count */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="flex -space-x-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-black overflow-hidden"
                  style={{ zIndex: 3 - i }}
                >
                  <img
                    src="/avatar.png"
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-left">
              <span className="text-white font-bold text-lg leading-none">30+</span>
              <p className="text-gray-400 text-xs leading-none mt-0.5">Project Done</p>
            </div>
          </div>
        </div>

        {/* Main carousel area */}
        <div className="w-full flex items-center justify-center gap-5 lg:gap-7">

          {/* LEFT CARD - Static container, animated content */}
          <div
            className="hidden lg:flex flex-col justify-between w-[280px] xl:w-[365px] min-h-[250px] rounded-lg p-7 flex-shrink-0"
            style={{
              background: "linear-gradient(180deg, rgba(17, 13, 38, 0.55) 0%, rgba(109, 85, 255, 0) 100%)",
              backdropFilter: "blur(1px)",
            }}
          >
            <div
              key={`desc-${current}`}
              className="typewriter-text"
            >
              <p
                className="text-gray-200 text-sm leading-relaxed"
              >
                {proj.description}
              </p>
            </div>
            <div
              key={`tags-${current}`}
              className="flex flex-wrap gap-2 mt-6 typewriter-text"
              style={{ animationDelay: "0.3s" }}
            >
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-gray-200  bg-white/10  rounded-full px-4 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="flex flex-col items-center gap-5 flex-shrink-0">
            <div
              className="relative rounded-xl overflow-hidden"
              style={{
                width: "clamp(300px, 38vw, 520px)",
                aspectRatio: "4/3",
                boxShadow: "0 0 60px rgba(120, 70, 240, 0.25)",
              }}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Progress bars */}
            <div className="flex gap-3 items-center">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => goTo(i)}
                  className="relative h-[7px] rounded-full overflow-hidden cursor-pointer focus:outline-none"
                  style={{
                    width: "100px",
                    background: i <= current ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.15)",
                  }}
                >
                  {i === current && (
                    <div
                      key={`progress-${current}-${progressKey}`}
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        width: "100%",
                        background: "#D1FF52",
                        transformOrigin: "left",
                        animation: `progressAnim 5s linear forwards`,
                      }}
                    />
                  )}
                  {i < current && (
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{ background: "#D1FF52" }}
                    />
                  )}
                </button>
              ))}
            </div>

            <style jsx global>{`
              @keyframes progressAnim {
                0% { transform: scaleX(0); }
                100% { transform: scaleX(1); }
              }
              @keyframes typewrite {
                0% {
                  opacity: 0;
                  clip-path: inset(0 100% 0 0);
                }
                100% {
                  opacity: 1;
                  clip-path: inset(0 0 0 0);
                }
              }
              .typewriter-text {
                animation: typewrite 0.6s ease-out forwards;
                opacity: 0;
              }
            `}</style>
          </div>

          {/* RIGHT CARD - Static container, animated content */}
          <div
            className="hidden lg:flex flex-col justify-between w-[280px] xl:w-[365px] min-h-[250px] rounded-2xl p-7  flex-shrink-0"
            style={{
              background: "linear-gradient(180deg, rgba(17, 13, 38, 0.55) 0%, rgba(109, 85, 255, 0) 100%)",
              backdropFilter: "blur(1px)",
            }}
          >
            <p
              key={`test-${current}`}
              className="text-gray-100 text-sm leading-relaxed typewriter-text"
            >
              {proj.testimonial}
            </p>
            <div
              key={`rev-${current}`}
              className="flex items-center gap-3 mt-6 typewriter-text"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={proj.reviewer.avatar}
                  alt={proj.reviewer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-none">
                  {proj.reviewer.name}
                </p>
                <p className="text-white text-sm mt-1">{proj.reviewer.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile cards (below image on small screens) */}
        <div className="flex lg:hidden flex-col gap-4 mt-6 w-full max-w-sm">
          <div
            className="rounded-xl p-5"
            style={{
              background: "linear-gradient(180deg, rgba(17,13,38,0.55) 0%, rgba(109,85,255,0) 100%)",
              border: "1px solid rgba(255,255,255,0.07)",
              transition: "opacity 0.4s",
              opacity: animating ? 0 : 1,
            }}
          >
            <p className="text-gray-300 text-sm leading-relaxed">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {proj.tags.map((tag) => (
                <span key={tag} className="text-xs text-gray-300 border border-gray-600 rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div
            className="rounded-xl p-5"
            style={{
              background: "linear-gradient(180deg, rgba(17,13,38,0.55) 0%, rgba(109,85,255,0) 100%)",
              border: "1px solid rgba(255,255,255,0.07)",
              transition: "opacity 0.4s",
              opacity: animating ? 0 : 1,
            }}
          >
            <p className="text-gray-300 text-sm leading-relaxed">{proj.testimonial}</p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-9 h-9 rounded-full overflow-hidden">
                <img src={proj.reviewer.avatar} alt={proj.reviewer.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{proj.reviewer.name}</p>
                <p className="text-gray-500 text-xs">{proj.reviewer.role}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}