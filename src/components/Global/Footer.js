"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const brandingServices = [
  { label: "Pitch Deck", href: "#" },
  { label: "Brand Identity", href: "#" },
  { label: "Logo Design", href: "#" },
  { label: "Graphic Design", href: "#" },
  { label: "Rebranding", href: "#" },
];

const designServices = [
  { label: "UI/UX Design", href: "#" },
  { label: "Web Design", href: "#" },
  { label: "Mobile App Design", href: "#" },
  { label: "Website Redesign", href: "#" },
  { label: "UX/UI Audit", href: "#" },
];

const developmentServices = [
  { label: "Web Development", href: "#" },
  { label: "MVP Development", href: "#" },
  { label: "Webflow Development", href: "#" },
  { label: "Landing page", href: "#" },
  { label: "Mobile Development", href: "#" },
];

const company = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Insight", href: "/blog" },
];

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61581955532353" },
  { icon: Instagram, href: "https://www.instagram.com/orituree?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/oriture/posts/?feedView=all" },
  { icon: Youtube, href: "https://www.youtube.com/@oriture.agency" },
  { icon: "/behance.svg", href: "https://www.behance.net/Oriture", isImage: true },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black">

      {/* ── GRADIENT LAYERS ── */}

      {/* Base: pure black foundation */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black" />

      {/* Dark left side — top-left quadrant stays near black */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(125deg, #000000 0%, #05020f 20%, #0a0520 38%, #12082e 52%, transparent 68%)",
        }}
      />

      {/* Bright right side — bottom-right blooms vivid purple */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 75% at 100% 100%, #7c4ce8 0%, #5530c0 28%, #2e1570 52%, #0d0525 72%, transparent 85%)",
          opacity: 0.95,
        }}
      />

      {/* Extra punch — tighter vivid core bottom-right */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 42% at 97% 98%, #9d68f0 0%, #6838d8 30%, transparent 62%)",
          opacity: 0.8,
        }}
      />

      {/* 
        S-CURVE SVG — this is the KEY element.
        The S-spine runs from top-center curving down to bottom-center,
        bowing left at top and right at bottom — exactly like the letter S.
        Left of the curve = dark. Right of the curve = illuminated.
        We use a wide soft blurred stroke to create the light-edge transition.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: "blur(72px)" }}
        >
          <defs>
            {/* S-curve light edge — glowing purple spine */}
            <linearGradient id="sCurveGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2a1060" stopOpacity="0" />
              <stop offset="40%" stopColor="#5530b8" stopOpacity="0.7" />
              <stop offset="75%" stopColor="#7848e0" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#9060f8" stopOpacity="0.6" />
            </linearGradient>

            {/* Dark overlay for left-of-S */}
            <linearGradient id="darkLeft" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#000000" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/*
            S-curve path as a thick filled band:
            - Starts top-right
            - Curves through center (S inflection)
            - Ends bottom-left
            This band = the "spine" of the S where dark meets bright.
          */}

          {/* The S-curve light band */}
          <path
            d="
              M 1100,0
              C 900,-20 300,80 200,280
              C 100,480 900,560 820,760
              C 740,920 200,960 0,900
              L 0,820
              C 200,880 680,860 760,700
              C 840,540 60,440 160,240
              C 260,40 860,-40 1060,0
              Z
            "
            fill="url(#sCurveGlow)"
          />
        </svg>
      </div>

      {/* Secondary S-reinforcement — tighter unblurred definition */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: "blur(30px)" }}
        >
          <defs>
            <linearGradient id="sCurveSharp" x1="0.3" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#4020a0" stopOpacity="0" />
              <stop offset="50%" stopColor="#6040c8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8858e8" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path
            d="
              M 980,0
              C 820,10 380,100 300,270
              C 220,440 800,510 760,680
              C 720,840 280,900 80,900
              L 0,900
              L 0,820
              C 220,820 700,780 740,620
              C 780,460 200,370 280,200
              C 360,30 800,-30 960,0
              Z
            "
            fill="url(#sCurveSharp)"
          />
        </svg>
      </div>

      {/* Dark mask — reinforces left-of-S stays truly dark */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(115deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.2) 55%, transparent 70%)",
        }}
      />

      {/* Black vignette top-left corner */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 0% 0%, rgba(0,0,0,0.9) 0%, transparent 65%)",
        }}
      />

      {/* Grain — heavy */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.45,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Grain — fine */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.22,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='80' height='80' filter='url(%23n2)'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
          mixBlendMode: "soft-light",
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-[1350px] mx-auto px-5 sm:px-6">

        {/* ── TOP ROW: Logo + description left, nav columns right ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 pt-12 sm:pt-16 pb-8 sm:pb-10">

          {/* Left — Logo + description + CTA (takes ~1/3 width) */}
          <div className="flex flex-col gap-5 sm:gap-6 lg:w-[36%] flex-shrink-0">
            {/* Logo only — no text */}
            <Link href="/" className="inline-flex">
              <Image
                src="/LOGO.svg"
                alt="Oriture"
                width={140}
                height={36}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-white text-sm sm:text-base leading-relaxed max-w-[320px]">
              Beyond being an innovative UI UX design hub,
              we&apos;re your one-stop for research, wireframing,
              design, and development!
            </p>

            {/* CTA */}
            <div className="flex items-center gap-2 group/cta">
              <Link
                href="/contact"
                className="bg-[#D1FF52] text-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold cursor-pointer transition-opacity hover:opacity-90"
              >
                Contact Us
              </Link>
              <button className="border border-[#D1FF52]/50 bg-transparent p-2 sm:p-2.5 rounded-tr-full rounded-b-full transition-all duration-300 group-hover/cta:rounded-t-full group-hover/cta:rounded-bl-none group-hover/cta:bg-[#D1FF52] cursor-pointer">
                <ArrowUpRight className="w-4 h-4 text-[#D1FF52] group-hover/cta:rotate-45 group-hover/cta:text-black transition-all duration-300" />
              </button>
            </div>
          </div>

          {/* Right — Four nav columns */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 lg:pl-8">
            {/* Branding Services */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h4 className="text-white font-medium text-sm sm:text-base mb-1">Branding Services</h4>
              {brandingServices.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-white/70 text-sm sm:text-base hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Design Services */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h4 className="text-white font-medium text-sm sm:text-base mb-1">Design Services</h4>
              {designServices.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-white/70 text-sm sm:text-base hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Development Services */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h4 className="text-white font-medium text-sm sm:text-base mb-1">Development Services</h4>
              {developmentServices.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-white/70 text-sm sm:text-base hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Company */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h4 className="text-white font-medium text-sm sm:text-base mb-1">Company</h4>
              {company.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-white/70 text-sm sm:text-base hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="h-px bg-white/10 w-full" />

        {/* ── MIDDLE ROW: company deck + copyright + socials ── */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 sm:gap-5 py-5">

          {/* Company deck download */}
          <button className="flex items-center gap-3 group/deck">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#D1FF52] flex items-center justify-center flex-shrink-0">
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
            </div>
            <div className="text-left">
              <p className="text-white text-sm sm:text-base font-medium leading-tight">Company Deck</p>
              <p className="text-white/60 text-xs sm:text-sm">PDF, 3 MB</p>
            </div>
          </button>

          {/* Copyright */}
          <p className="text-white/60 text-xs sm:text-sm text-center order-last sm:order-none">
            © 2024–2026, Orituree , All Rights Reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-2 sm:gap-3">
            {socials.map(({ icon: Icon, href, isImage }, i) => (
              <Link
                key={i}
                href={href}
                className="text-white hover:text-white border p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                {isImage ? (
                  <Image src={Icon} alt="social" width={24} height={24} className="w-5 h-5 text-white sm:w-6 sm:h-6 object-contain" />
                ) : (
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* ── BOTTOM: footer.svg as full-width image ── */}
      <div className="relative z-10 max-w-[1350px] mx-auto mt-10 sm:mt-20 mb-6 sm:mb-10 px-5 sm:px-6">
        <Image
          src="/footer.svg"
          alt="Oriture"
          width={1350}
          height={400}
          className="w-full h-auto object-contain object-bottom"
          priority
        />
      </div>
    </footer>
  );
}