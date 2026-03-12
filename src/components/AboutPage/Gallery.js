"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

/*
  PhotoFrame — reusable card component.
  Every prop is fully explicit so you can tune each card independently below.

  Props:
    src          — image path
    date         — label text
    frameBg      — frame background color
    frameRotate  — how many degrees the whole card tilts   e.g. "-3deg"
    imgRotate    — rotate the image inside the frame       e.g. "5deg" or "-4deg" (default: "0deg")
    imgWidth     — width of photo inside frame             e.g. "100%"  or "110%"
    imgHeight    — height of photo inside frame            e.g. "100%"  or "115%"
    imgPosition  — object-position for crop alignment      e.g. "center center"
    labelColor   — text color for the date label
*/
function PhotoFrame({
  src,
  date,
  frameBg,
  frameRotate,
  imgRotate = "0deg",
  imgWidth,
  imgHeight,
  imgPosition,
  labelColor,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="select-none"
      style={{
        transform: `rotate(${frameRotate}) scale(${hovered ? 1.06 : 1})`,
        transition: "transform 0.3s cubic-bezier(0.34, 1.2, 0.64, 1)",
        position: "relative",
        zIndex: hovered ? 10 : 1,
        transformOrigin: "center center",
        width: "100%",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Colored frame */}
      <div
        style={{
          backgroundColor: frameBg,
          padding: "8px 8px 6px 8px",
          borderRadius: "6px",
          boxShadow: "0 20px 45px -10px rgba(0,0,0,0.6)",
        }}
      >
        {/* Fixed photo viewport — always 4:3, overflow hidden */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "75%", /* 4:3 */
            borderRadius: "3px",
            overflow: "hidden",
          }}
        >
          <img
            src={src}
            alt={date}
            draggable={false}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${imgRotate})`,
              width: imgWidth,
              height: imgHeight,
              objectFit: "cover",
              objectPosition: imgPosition,
              display: "block",
            }}
          />
        </div>

        {/* Date label */}
        <p
          className="text-[13px] font-medium mb-2 pl-3 tracking-wide"
          style={{ color: labelColor }}
        >
          {date}
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-newsreader text-white leading-snug max-w-5xl mx-auto">
            A look into our team, our creativity,{" "}
            <span className="hidden sm:inline"><br /></span>
            and the moments that{" "}
            <em className="text-[#D1FF52] italic font-newsreader">
              make oriture what it is!
            </em>
          </h2>
        </div>

        {/* Photo grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 md:gap-8 place-items-center px-4 sm:px-0">

          {/* ── Card 1 ── */}
          <PhotoFrame
            src="/aboutGallary1.jpeg"
            date="January 2026"
            frameBg="#D1FF52"
            frameRotate="-3deg"
            imgRotate="0.2deg"
            imgWidth="100%"
            imgHeight="96%"
            imgPosition="center center"
            labelColor="#0a0a0a"
          />

          {/* ── Card 2 ── */}
          <PhotoFrame
            src="/aboutGallary8.jpeg"
            date="January 2026"
            frameBg="#C01BFD"
            frameRotate="2.5deg"
            imgRotate=".5deg"
            imgWidth="97%"
            imgHeight="95%"
            imgPosition="center center"
            labelColor="#ffffff"
          />

          {/* ── Card 3 ── */}
          <PhotoFrame
            src="/aboutGallary3.jpeg"
            date="January 2026"
            frameBg="#FFFFFF"
            frameRotate="-4deg"
            imgRotate="-.5deg"
            imgWidth="100%"
            imgHeight="94%"
            imgPosition="center center"
            labelColor="#0a0a0a"
          />

          {/* ── Card 4 ── */}
          <PhotoFrame
            src="/aboutGallary4.jpeg"
            date="January 2026"
            frameBg="#C01BFD"
            frameRotate="4.5deg"
            imgRotate="-0.5deg"
            imgWidth="100%"
            imgHeight="95%"
            imgPosition="center center"
            labelColor="#ffffff"
          />

          {/* ── Card 5 ── */}
          <PhotoFrame
            src="/aboutGallary5.jpeg"
            date="January 2026"
            frameBg="#FFFFFF"
            frameRotate="-2.5deg"
            imgRotate="-0.5deg"
            imgWidth="98%"
            imgHeight="93%"
            imgPosition="center center"
            labelColor="#0a0a0a"
          />

          {/* ── Card 6 ── */}
          <PhotoFrame
            src="/aboutGallary7.jpeg"
            date="January 2026"
            frameBg="#D1FF52"
            frameRotate="2deg"
            imgRotate="1deg"
            imgWidth="100%"
            imgHeight="100%"
            imgPosition="center center"
            labelColor="#0a0a0a"
          />

          {/* ── Card 7 ── */}
          <PhotoFrame
            src="/aboutGallary6.jpeg"
            date="January 2026"
            frameBg="#FFFFFF"
            frameRotate="-3.5deg"
            imgRotate="0.5deg"
            imgWidth="97%"
            imgHeight="97%"
            imgPosition="center center"
            labelColor="#0a0a0a"
          />

          {/* ── Card 8 ── */}
          <PhotoFrame
            src="/aboutGallary2.jpeg"
            date="January 2026"
            frameBg="#D1FF52"
            frameRotate="3deg"
            imgRotate="0deg"
            imgWidth="97%"
            imgHeight="95%"
            imgPosition="center center"
            labelColor="#0a0a0a"
          />

          {/* ── Card 9 ── */}
          <PhotoFrame
            src="/aboutGallary9.jpeg"
            date="January 2026"
            frameBg="#C01BFD"
            frameRotate="-2deg"
            imgRotate="0deg"
            imgWidth="99%"
            imgHeight="95%"
            imgPosition="center center"
            labelColor="#ffffff"
          />

        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-center gap-2 mt-14 md:mt-20 group/cta">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@oriture.co"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#D1FF52]/50  text-black bg-[#D1FF52] group-hover/cta:border-[#D1FF52]  px-6 py-3 rounded-full transition-all duration-300 text-sm font-medium whitespace-nowrap"
          >
            Send your CV to Join
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@oriture.co"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#D1FF52]/50 bg-transparent p-2.5 rounded-tr-full rounded-b-full group-hover/cta:rounded-t-full group-hover/cta:rounded-bl-none group-hover/cta:bg-[#D1FF52] transition-all duration-300 cursor-pointer flex items-center justify-center"
          >
            <ArrowUpRight className="w-4 h-4 text-[#D1FF52] group-hover/cta:rotate-45 group-hover/cta:text-black transition-all duration-300" />
          </a>
        </div>

      </div>
    </section>
  );
}