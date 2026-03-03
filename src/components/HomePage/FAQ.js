"use client";
import { useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    q: "How do you ensure the security of financial data?",
    a: "We implement industry-standard encryption, secure access controls, and regular audits to protect all financial data.",
  },
  {
    q: "Do you comply with financial and regulatory requirements?",
    a: "Yes. The design process considers compliance frameworks (KYC, AML, data privacy standards such as GDPR). We collaborate closely with technical and legal teams to ensure the interface supports regulatory requirements.",
  },
  {
    q: "What payment methods do you support?",
    a: "We support all major payment gateways including Stripe, PayPal, and direct bank integrations tailored to your region.",
  },
  {
    q: "How long does the onboarding process take?",
    a: "Typical onboarding takes 1–2 weeks depending on project complexity and team availability.",
  },
  {
    q: "Can you integrate with our existing tech stack?",
    a: "Absolutely. We work with REST APIs, GraphQL, and most modern frameworks to integrate seamlessly.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, we offer retainer-based support packages covering maintenance, updates, and performance monitoring.",
  },
  {
    q: "How do you handle data privacy across regions?",
    a: "We follow GDPR, CCPA, and other regional standards, ensuring data residency and user consent requirements are met.",
  },
  {
    q: "What industries have you worked with?",
    a: "We've partnered with clients in FinTech, HealthTech, E-Commerce, SaaS, and enterprise software.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative min-h-screen w-full overflow-hidden py-20 px-6 flex items-center justify-center">

      {/* ── GRADIENT LAYERS ── */}

      {/* Base: diagonal — dim top-left, richer bottom-right */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #060412 0%, #09061a 28%, #0d0820 55%, #120c28 78%, #1a1035 100%)",
        }}
      />

      {/* Radial 1: top-left — restrained, subtle tint */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 0% 0%, rgba(100,65,190,0.22) 0%, rgba(50,25,100,0.1) 45%, transparent 72%)",
        }}
      />

      {/* Radial 2: mid-section ambient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 60% 55%, rgba(80,50,160,0.14) 0%, transparent 70%)",
        }}
      />

      {/* Radial 3: bottom-right bloom — stronger presence */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 100% 100%, rgba(181,169,254,0.22) 0%, rgba(100,80,200,0.18) 35%, transparent 68%)",
        }}
      />

      {/* Blurred SVG blob — soft diagonal feather from bottom-right */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ filter: "blur(55px)" }}
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="faqBlob" x1="1" y1="1" x2="0" y2="0">
              <stop offset="0%"   stopColor="#B5A9FE" stopOpacity="0.18" />
              <stop offset="35%"  stopColor="#6d55c8" stopOpacity="0.12" />
              <stop offset="70%"  stopColor="#3a1f70" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#1a0d40" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d="M1440,900 L840,900 C740,800 690,650 760,500 C840,340 1090,250 1440,200 Z"
            fill="url(#faqBlob)"
          />
        </svg>
      </div>

      {/* Grain — heavy pass */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.4,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Grain — fine pass */}
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
      <div className="relative z-10 max-w-[1300px] w-full mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

        {/* Left column */}
        <div className="w-full lg:w-[38%] flex-shrink-0 lg:sticky lg:top-32 lg:self-start">
          <h2
            className="font-newsreader text-white font-normal leading-snug mb-10"
            style={{ fontSize: "clamp(28px, 3.2vw, 46px)" }}
          >
            Security, Payments<br />
            {"& Process –"}{" "}
            <em className="italic" style={{ color: "#D1FF52" }}>explained</em>
          </h2>

          {/* CTA card */}
          <div
            className="rounded-2xl p-6 flex flex-col gap-5"
            style={{
              background: "linear-gradient(360deg, rgba(0,0,0,0.2) 0%, rgba(109,85,255,0.2) 100%)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Avatars */}
            <div className="flex -space-x-3">
              {["/avatar.png", "/avatar.png", "/avatar.png"].map((src, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 relative bg-gray-600"
                  style={{ zIndex: 3 - i }}
                >
                  <Image src={src} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>

            <p className="text-white text-sm font-medium leading-snug">
              Find the right solution for you now
            </p>

            {/* CTA button */}
            <div className="flex items-center gap-2 group/cta">
              <a
                href="/contact"
                className="border border-[#D1FF52]/50 text-white group-hover/cta:text-black group-hover/cta:bg-[#D1FF52] group-hover/cta:border-[#D1FF52] bg-transparent px-5 py-2.5 rounded-full transition-all duration-300 text-sm font-medium whitespace-nowrap"
              >
                Book a Quick Call
              </a>
              <button className="border border-[#D1FF52]/50 bg-transparent p-2.5 rounded-tr-full rounded-b-full group-hover/cta:rounded-t-full group-hover/cta:rounded-bl-none group-hover/cta:bg-[#D1FF52] transition-all duration-300 cursor-pointer">
                <ArrowUpRight className="w-4 h-4 text-[#D1FF52] group-hover/cta:rotate-45 group-hover/cta:text-black transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Right column — accordion */}
        <div className="w-full lg:w-[62%] flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-black/10 rounded-xl px-5 py-4 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setOpen(i)}
                onMouseLeave={() => setOpen(null)}
              >
                <div className="w-full flex items-center justify-between gap-4 text-left">
                  <span
                    className="text-sm sm:text-base font-normal font-newsreader leading-snug transition-colors duration-300"
                    style={{ color: isOpen ? "#D1FF52" : "rgba(255,255,255,0.85)" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      color: isOpen ? "#D1FF52" : "rgba(255,255,255,0.6)",
                    }}
                  >
                    {isOpen
                      ? <ArrowUp className="w-3.5 text-[#D1FF52] h-3.5" />
                      : <ArrowDown className="w-3.5 text-[#D1FF52] h-3.5" />
                    }
                  </span>
                </div>

                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="pt-3 pb-1 text-sm leading-relaxed transition-opacity duration-300" style={{ color: "rgba(255,255,255,0.6)", opacity: isOpen ? 1 : 0 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}