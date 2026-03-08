"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sakhawat Hossain",
    position: "Brand Manager, Lori",
    avatar: "/avatar.png",
    testimonial:
      "Mohon is really talented, creative and also incredibly analytical. He so easily knocked out some of the most challenging designs we had to work on. I recommend him to anyone who looking for someone they can trust to take any task under their wing and find solutions that work!",
    company: "Tintype",
    logo: "/testoLogo.png",
  },
  {
    id: 2,
    name: "Sarah L.",
    position: "Product Manager at E-Commerce",
    avatar: "/avatar.png",
    testimonial:
      "Outstanding work on our mobile app redesign. The user experience is now seamless and our conversion rates have improved by 40%. Truly exceptional design thinking.",
    company: "ShopFlow",
    logo: "/brand3.png",
  },
  {
    id: 3,
    name: "David K.",
    position: "CTO at Healthcare Tech",
    avatar: "/avatar.png",
    testimonial:
      "Incredible attention to detail and user-centered design approach. Our healthcare platform is now more accessible and user-friendly than ever before.",
    company: "MedTech Pro",
    logo: "/brand6.png",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setCurrent(i => (i + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="relative w-full min-h-[73vh] md:min-h-screen max-h-[50vh] sm:min-h-screen overflow-hidden bg-black">

      {/* ── GRADIENT LAYERS ── */}

      {/* Layer 0: large soft indigo blob from top-left */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 5% 0%, #4A2E9E 0%, #3B2272 18%, #1E1040 38%, transparent 65%)",
        }}
      />

      {/* Layer 1: tighter brighter blob for depth */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 0% 5%, #6B46C1 0%, #4A2E9E 15%, #2B1860 32%, transparent 58%)",
        }}
      />

      {/* Layer 2: blurred SVG curve — soft feathered right/bottom edge */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          style={{ filter: "blur(48px)" }}
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blobGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%"   stopColor="#7B5FD4" stopOpacity="0.85" />
              <stop offset="30%"  stopColor="#5A3EAA" stopOpacity="0.6"  />
              <stop offset="60%"  stopColor="#2B1860" stopOpacity="0.3"  />
              <stop offset="100%" stopColor="#000000" stopOpacity="0"    />
            </linearGradient>
          </defs>
          <path
            d="M0,0 L1080,0 C1100,0 1150,20 1100,120 C1050,220 900,260 750,280 C550,310 280,300 100,340 C40,360 0,380 0,380 Z"
            fill="url(#blobGrad)"
          />
        </svg>
      </div>

      {/* Layer 3: noise grain — heavy pass */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.45,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Layer 4: noise grain — fine pass */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.3,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='80' height='80' filter='url(%23n2)'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
          mixBlendMode: "soft-light",
        }}
      />

      {/* ── QUOTE SVGs ── */}

      {/* Left quote */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-32 sm:w-40 sm:h-64 lg:w-full lg:h-90 pointer-events-none z-0 opacity-40 sm:opacity-100">
        <Image
          src="/testomonial1.svg"
          alt=""
          fill
          className="object-contain object-left"
        />
      </div>

      {/* Right quote */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-32 sm:w-full sm:h-64 lg:w-full lg:h-90 pointer-events-none z-0 opacity-40 sm:opacity-100">
        <Image
          src="/testomonial2.svg"
          alt=""
          fill
          className="object-contain object-right"
        />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 flex flex-col min-h-[80vh] md:min-h-screen">
        {/* Heading */}
        <div className="mb-8 sm:mb-22">
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-snug text-white">
            What it's like <br />
            to work with{" "}
            <em className="italic" style={{ color: "#D1FF52" }}>
              oriture
            </em>
          </h2>
        </div>

        {/* Testimonial content — grows to fill available space */}
        <div className="flex-1 mt-15 sm:mt-0 flex flex-col">
          {/* Avatar + Name */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-gray-600 flex-shrink-0">
              <Image
                src={t.avatar}
                alt={t.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-white font-semibold text-sm font-newsreader">{t.name}</p>
              <p className="text-white/50 text-xs">{t.position}</p>
            </div>
          </div>

          {/* Quote - fixed height container */}
          <div className="min-h-[120px] sm:min-h-[140px] lg:min-h-[160px]">
            <blockquote className="text-white/95 text-base sm:text-lg lg:text-xl font-light leading-relaxed transition-opacity duration-300">
              {t.testimonial}
            </blockquote>
          </div>
        </div>

        {/* Bottom row — always pinned at bottom */}
        <div className="flex items-center mb-20 sm:mb-0 justify-between mt-auto pt-4">

          {/* Company logo */}
          <div className="relative w-24  sm:w-32 h-8 sm:h-9 flex-shrink-0">
            <Image
              src={t.logo}
              alt={t.company}
              fill
              className="object-contain object-left"
            />
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={prev}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D1FF52] text-[#D1FF52] hover:bg-[#D1FF52] hover:text-black transition-all duration-300 flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D1FF52] text-[#D1FF52] hover:bg-[#D1FF52] hover:text-black transition-all duration-300 flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}