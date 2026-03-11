"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Shakil Shareef",
    position: "Development Lead, Tripking",
    avatar: "/hp1-avatar.png",
    testimonial:
      "Oriture delivered an excellent design for TripKing. The platform feels modern, organized, and easy to navigate for booking hotels, flights, and travel services. His design thinking helped simplify a complex travel system into a smooth user experience.",
    company: "Tripking",
    logo: "/hp1-logo.png",
  },
  {
    id: 2,
    name: "Faheem Noman",
    position: "CEO, Golpo",
    avatar: "/hp2-avatar.png",
    testimonial:
      "Working with Oriture was a great experience. He understood the vision of Golpo and translated it into a clean, intuitive, and engaging app design. The storytelling experience feels smooth and user-friendly. Highly recommended for anyone looking for thoughtful product design.",
    company: "Golpo",
    logo: "/hp2-logo.png",
  },
  {
    id: 3,
    name: "Sakhawat Hossain",
    position: "Brand Manager, LGH",
    avatar: "/avatar.png",
    testimonial:
      "Oriture excels with meticulous attention to detail, commitment to excellence, and creative problem-solving. Their inventive solutions captivate visually and significantly enhance the user experience.",
    company: "Lebanese Green House",
    logo: "/brand3.png",
  },
  {
    id: 4,
    name: "Mahadi Mosia",
    position: "Founder, Ntate Jane Foundation",
    avatar: "/workHeroAv1.png",
    testimonial:
      "Mohon and his team created a thoughtful and user-centered design for LiftUp AI. The interface feels modern, clean, and easy to navigate, making the learning experience much smoother for students. His design approach truly helped shape the product vision.",
    company: "LiftUp AI",
    logo: "/brand6.png",
  },
  {
    id: 5,
    name: "Ahnaf Tahmid Uddin",
    position: "CTO, AP Classroom",
    avatar: "/workHeroAv2.png",
    testimonial:
      "Oriture delivered a clean and professional brand identity for AP Classroom. The design perfectly reflects the spirit of education and makes the brand feel modern, trustworthy, and student-friendly. It was a smooth and collaborative experience working together.",
    company: "AP Classroom",
    logo: "/brand5.png",
  },
  {
    id: 6,
    name: "Md Al Amin",
    position: "CTO, Ghurni Bangladesh",
    avatar: "/workHeroAv3.png",
    testimonial:
      "Oriture did an excellent job translating our vision for Ghurni Bangladesh into a clean and culturally meaningful design. The platform beautifully represents local artisans and their crafts while keeping the user experience simple and accessible. A very professional and thoughtful designer to work with.",
    company: "Ghurni Bangladesh",
    logo: "/brand7.png",
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
      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 flex flex-col justify-center min-h-[80vh] md:min-h-screen">
        {/* Heading */}
        <div className="mb-8 sm:mb-16">
          <h2 className="font-newsreader text-3xl sm:text-4xl lg:text-[52px] font-normal leading-snug text-white">
            What it's like <br />
            to work with{" "}
            <em className="italic" style={{ color: "#D1FF52" }}>
              oriture
            </em>
          </h2>
        </div>

        {/* Testimonial content */}
        <div className="mt-15 sm:mt-0 flex flex-col">
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
          <div className="min-h-[100px] sm:min-h-[120px] lg:min-h-[140px]">
            <blockquote className="text-white/95 text-base sm:text-lg lg:text-xl font-light leading-relaxed transition-opacity duration-300">
              {t.testimonial}
            </blockquote>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex items-center mb-20 sm:mb-0 justify-between mt-2 sm:mt-4">

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