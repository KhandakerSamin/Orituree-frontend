"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

/* ─────────────────────────────────────
   GALLERY DATA — 9 images, 3 frame colors
───────────────────────────────────── */
const FRAMES = [
  { id: 1,  src: "/gallary1.png", date: "January 2026", bg: "#D1FF52",  rotate: "-3deg",   imageRotate: "6deg"   },
  { id: 2,  src: "/gallary2.png", date: "January 2026", bg: "#C01BFD",  rotate: "2.5deg",  imageRotate: "2.5deg"  },
  { id: 3,  src: "/gallary3.png", date: "January 2026", bg: "#FFFFFF",  rotate: "-2deg",   imageRotate: "-2deg"   },
  { id: 4,  src: "/gallary4.png", date: "January 2026", bg: "#C01BFD",  rotate: "3.5deg",  imageRotate: "3.5deg"  },
  { id: 5,  src: "/gallary5.png", date: "January 2026", bg: "#FFFFFF",  rotate: "-2.5deg", imageRotate: "-2.5deg" },
  { id: 6,  src: "/gallary6.png", date: "January 2026", bg: "#D1FF52",  rotate: "2deg",    imageRotate: "2deg"    },
  { id: 7,  src: "/gallary7.png", date: "January 2026", bg: "#FFFFFF",  rotate: "-3.5deg", imageRotate: "-3.5deg" },
  { id: 8,  src: "/gallary8.png", date: "January 2026", bg: "#D1FF52",  rotate: "3deg",    imageRotate: "3deg"    },
  { id: 9,  src: "/gallary9.png", date: "January 2026", bg: "#C01BFD",  rotate: "-2deg",   imageRotate: "-2deg"   },
];

function toDegNumber(value) {
  return Number(String(value).replace("deg", "")) || 0;
}

function labelColor(bg) {
  return bg === "#C01BFD" ? "#ffffff" : "#0a0a0a";
}

/* ─────────────────────────────────────
   SINGLE PHOTO FRAME
───────────────────────────────────── */
function PhotoFrame({ frame }) {
  const [hovered, setHovered] = useState(false);
  const frameDeg = toDegNumber(frame.rotate);
  const imageDeg = toDegNumber(frame.imageRotate ?? frame.rotate);
  // Image is inside the rotated frame, so apply only the delta to keep final angle exact.
  const imageDeltaDeg = imageDeg - frameDeg;

  return (
    <div
      className="select-none"
      style={{
        transform: `rotate(${frame.rotate}) scale(${hovered ? 1.06 : 1})`,
        transition: "transform 0.3s cubic-bezier(0.34, 1.2, 0.64, 1)",
        position: "relative",
        zIndex: hovered ? 10 : 1,
        transformOrigin: "center center",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          backgroundColor: frame.bg,
          padding: "8px 8px 32px 8px",
          borderRadius: "6px",
          boxShadow: "0 20px 45px -10px rgba(0,0,0,0.6)",
          position: "relative",
        }}
      >
        <img
          src={frame.src}
          alt={`Gallery ${frame.id}`}
          style={{
            display: "block",
            width: "100%",
            aspectRatio: "4/3",
            objectFit: "cover",
            borderRadius: "3px",
            transform: `rotate(${imageDeltaDeg}deg)`,
            transformOrigin: "center center",
          }}
          draggable={false}
        />

        {/* Date label */}
        <p
          className="text-[14px] font-medium mt-1 pl-0.5 tracking-wide"
          style={{ color: labelColor(frame.bg) }}
        >
          {frame.date}
        </p>
      </div>
    </div>
  );
}


export default function Gallery() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28">

      {/* ── Background gradient layers ── */}

      {/* Base black */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black" />

      {/* Top-left purple bloom */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 60% at 0% 0%, #5b21b6 0%, #3b0e8c 35%, transparent 70%)",
          opacity: 0.85,
        }}
      />

      {/* Bottom-right purple bloom */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 60% at 100% 100%, #5b21b6 0%, #3b0e8c 35%, transparent 70%)",
          opacity: 0.85,
        }}
      />

      {/* Top-right black mask */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 100% 0%, rgba(0,0,0,0.95) 0%, transparent 60%)",
        }}
      />

      {/* Bottom-left black mask */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 0% 100%, rgba(0,0,0,0.95) 0%, transparent 60%)",
        }}
      />

      {/* Center dark fade so images pop */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,0,0,0.55) 0%, transparent 80%)",
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.3,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">

        {/* Heading */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal font-newsreader text-white leading-snug max-w-5xl mx-auto">
            A look into our team, our creativity,
            <br />
            and the moments that{" "}
            <em className="text-[#D1FF52] italic font-newsreader">
              make oriture what it is!
            </em>
          </h2>
        </div>

        {/* Photo grid — 3 columns */}
        <div className="grid grid-cols-3 gap-6 md:gap-8 place-items-center">
          {FRAMES.map((frame) => (
            <PhotoFrame key={frame.id} frame={frame} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-center gap-2 mt-14 md:mt-20 group/cta">
          <a
            href="/contact"
            className="border border-[#D1FF52]/50  text-black bg-[#D1FF52] group-hover/cta:border-[#D1FF52]  px-6 py-3 rounded-full transition-all duration-300 text-sm font-medium whitespace-nowrap"
          >
            Send your CV to Join
          </a>
          <button className="border border-[#D1FF52]/50 bg-transparent p-2.5 rounded-tr-full rounded-b-full group-hover/cta:rounded-t-full group-hover/cta:rounded-bl-none group-hover/cta:bg-[#D1FF52] transition-all duration-300 cursor-pointer">
            <ArrowUpRight className="w-4 h-4 text-[#D1FF52] group-hover/cta:rotate-45 group-hover/cta:text-black transition-all duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
}