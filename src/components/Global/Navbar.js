"use client";
import { ChevronDown, MoveUpRight, ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const SCROLL_THRESHOLD = 60;

  const navigationItems = [
    { name: "Work", href: "/works", hasDropdown: false },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      dropdown: ["Web Design", "Branding", "Motion", "Development"],
    },
    {
      name: "Industries",
      href: "/industries",
      hasDropdown: true,
      dropdown: ["Tech", "Fashion", "Finance", "Healthcare"],
    },
    {
      name: "Technologies",
      href: "/technologies",
      hasDropdown: true,
      dropdown: ["React", "Next.js", "Figma", "Framer"],
    },
    { name: "About", href: "/about", hasDropdown: false },
    { name: "Insight", href: "/blog", hasDropdown: false },
  ];

  const mobileNavigationItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/works" },
    { 
      name: "Services", 
      href: "/services",
      hasDropdown: true,
      dropdown: ["Web Design", "Branding", "Motion", "Development"]
    },
    { 
      name: "Industries", 
      href: "/industries",
      hasDropdown: true,
      dropdown: ["Tech", "Fashion", "Finance", "Healthcare"]
    },
    { 
      name: "Technologies", 
      href: "/technologies",
      hasDropdown: true,
      dropdown: ["React", "Next.js", "Figma", "Framer"]
    },
    { name: "About", href: "/about" },
    { name: "Insight", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return;
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* ─── DESKTOP NAVBAR ───────────────────────────────────────── */}
      <div className="fixed top-0 left-0 w-full z-[100] pointer-events-none hidden md:block">
        <div
          className={`max-w-[1400px] mx-auto px-6 lg:px-12 transition-all duration-700 ease-in-out ${
            isScrolled ? "pt-3 pb-3" : "pt-0 pb-0"
          }`}
        >
          <div className="relative flex items-center pointer-events-auto">

            {/* ── STANDALONE LOGO — slides out left on scroll ── */}
            <div
              className={`shrink-0 transition-all duration-700 ease-in-out ${
                isScrolled
                  ? "w-0 opacity-0 -translate-x-6 overflow-hidden pointer-events-none"
                  : "w-auto opacity-100 translate-x-0 py-5"
              }`}
            >
              <Link href="/" className="flex items-center group">
                <Image
                  src="/LOGO.svg"
                  alt="Oriture Logo"
                  width={150}
                  height={38}
                  quality={100}
                  priority
                  className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* ── PILL ── */}
            <div className="flex-1 flex justify-center">
              <div
                className={`flex items-center transition-all duration-700 ease-in-out ${
                  isScrolled
                    ? "border border-white/12 bg-black/65 backdrop-blur-2xl rounded-full px-4 py-3 gap-1 shadow-[0_4px_32px_rgba(0,0,0,0.45)]"
                    : "border border-transparent bg-transparent rounded-full px-0 py-5 gap-7"
                }`}
              >
                {/* Logo enters pill from left */}
                <div
                  className={`flex items-center shrink-0 overflow-hidden transition-all duration-700 ease-in-out ${
                    isScrolled
                      ? "max-w-[130px] opacity-100 pr-3 pl-1 mr-1 border-r border-white/10"
                      : "max-w-0 opacity-0 pr-0 pl-0 mr-0 border-r-0"
                  }`}
                >
                  <Link href="/" className="flex items-center group">
                    <Image
                      src="/LOGO.svg"
                      alt="Oriture Logo"
                      width={110}
                      height={28}
                      quality={100}
                      className="h-7 w-auto transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                </div>

                {/* Nav links */}
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => {
                        setActiveItem(item.name);
                        if (item.hasDropdown) {
                          setOpenDropdown(openDropdown === item.name ? null : item.name);
                        } else {
                          setOpenDropdown(null);
                        }
                      }}
                      className={`flex items-center gap-1 whitespace-nowrap transition-all duration-300 text-[15px] font-light ${
                        isScrolled
                          ? "px-3 py-1.5 rounded-full hover:bg-white/8"
                          : "px-0 py-0"
                      } ${
                        activeItem === item.name
                          ? "text-[#D1FF52]"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            openDropdown === item.name ? "rotate-180" : ""
                          } ${
                            activeItem === item.name ? "text-[#D1FF52]" : "text-white/40"
                          }`}
                        />
                      )}
                    </button>

                    {/* Dropdown */}
                    {item.hasDropdown && (
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-[#0c0c0c]/96 backdrop-blur-xl rounded-2xl py-2 shadow-2xl shadow-black/60 transition-all duration-200 ${
                          openDropdown === item.name
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                      >
                        {item.dropdown.map((sub) => (
                          <a
                            key={sub}
                            href="#"
                            className="flex items-center justify-between px-4 py-2.5 mx-1 rounded-xl text-[13px] text-white/65 hover:text-[#D1FF52] hover:bg-white/5 transition-all duration-150 group/sub"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {sub}
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/sub:opacity-100 transition-opacity duration-150" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* CTA enters pill from right */}
                <div
                  className={`flex items-center shrink-0 overflow-hidden transition-all duration-700 ease-in-out ${
                    isScrolled
                      ? "max-w-[180px] opacity-100 pl-3 ml-1 border-l border-white/10"
                      : "max-w-0 opacity-0 pl-0 ml-0 border-l-0"
                  }`}
                >
                  <div className="flex items-center gap-2 pr-1">
                    <a
                      href="/contact"
                      className="border border-[#D1FF52]/40 text-white hover:text-black hover:bg-[#D1FF52] hover:border-[#D1FF52] bg-transparent px-4 py-1.5 rounded-full transition-all duration-300 text-[14px] font-medium whitespace-nowrap"
                    >
                      Hire Us
                    </a>
                    <button className="border border-[#D1FF52]/40 bg-transparent p-1.5 rounded-tr-full rounded-b-full hover:rounded-t-full hover:rounded-bl-none hover:bg-[#D1FF52] transition-all duration-300 shrink-0 group/ctabtn">
                      <MoveUpRight className="w-3.5 h-3.5 text-[#D1FF52] group-hover/ctabtn:rotate-45 group-hover/ctabtn:text-black transition-all duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── STANDALONE CTA — slides out right on scroll ── */}
            <div
              className={`flex items-center gap-2 shrink-0 group/ctatop transition-all duration-700 ease-in-out ${
                isScrolled
                  ? "w-0 opacity-0 translate-x-6 overflow-hidden pointer-events-none"
                  : "w-auto opacity-100 translate-x-0 py-5"
              }`}
            >
              <a
                href="/contact"
                className="border border-[#D1FF52]/50 text-white group-hover/ctatop:text-black group-hover/ctatop:bg-[#D1FF52] group-hover/ctatop:border-[#D1FF52] bg-transparent px-5 py-2 rounded-full transition-all duration-300 text-[14px] font-medium whitespace-nowrap"
              >
                Hire Us
              </a>
              <button className="border border-[#D1FF52]/50 bg-transparent p-2 rounded-tr-full rounded-b-full group-hover/ctatop:rounded-t-full group-hover/ctatop:rounded-bl-none group-hover/ctatop:bg-[#D1FF52] transition-all duration-300">
                <MoveUpRight className="w-4 h-4 text-[#D1FF52] group-hover/ctatop:rotate-45 group-hover/ctatop:text-black transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MOBILE NAVBAR ────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 w-full z-[100] md:hidden">
        <div className="mx-4 mt-3">
          <div className="flex items-center border border-white/12 bg-black/65 backdrop-blur-2xl rounded-full px-3 py-2 shadow-[0_4px_32px_rgba(0,0,0,0.45)] gap-2">

            {/* Mobile Logo */}
            <Link href="/" className="flex items-center group flex-shrink-0 pl-1 pr-2 border-r border-white/10 mr-1">
              <Image
                src="/LOGO.svg"
                alt="Oriture Logo"
                width={100}
                height={26}
                quality={100}
                priority
                className="h-7 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Menu button — centered */}
            <div className="flex-1 flex justify-center">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-white/80 hover:text-white text-[14px] font-light tracking-wide transition-colors duration-200 px-3 py-1"
              >
                Menu
              </button>
            </div>

            {/* Mobile CTA */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-white/10 ml-1">
              <a
                href="/contact"
                className="border border-[#D1FF52]/40 text-white hover:text-black hover:bg-[#D1FF52] hover:border-[#D1FF52] bg-transparent px-3.5 py-1.5 rounded-full transition-all duration-300 text-[12px] font-medium whitespace-nowrap"
              >
                Hire Us
              </a>
              <button className="border border-[#D1FF52]/40 bg-transparent p-1.5 rounded-tr-full rounded-b-full hover:rounded-t-full hover:rounded-bl-none hover:bg-[#D1FF52] transition-all duration-300 shrink-0 group/mobilecta">
                <MoveUpRight className="w-3 h-3 text-[#D1FF52] group-hover/mobilecta:rotate-45 group-hover/mobilecta:text-black transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MOBILE MENU MODAL ────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[200] flex items-center justify-center md:hidden transition-all duration-400 ease-out ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop — frosted glass, see-through blur */}
        <div
          className={`absolute inset-0 transition-opacity duration-400 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(16px) saturate(1.2)",
            WebkitBackdropFilter: "blur(16px) saturate(1.2)",
          }}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Modal — Glass Effect */}
        <div
          className={`relative w-[92vw] max-w-[400px] max-h-[85vh] overflow-y-auto transition-all duration-400 ease-out ${
            isMenuOpen ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-6"
          }`}
          style={{
            background: "rgba(20, 18, 30, 0.65)",
            backdropFilter: "blur(40px) saturate(1.3)",
            WebkitBackdropFilter: "blur(40px) saturate(1.3)",
            borderRadius: "28px",
            boxShadow: "0 32px 80px -16px rgba(0,0,0,0.4)",
          }}
        >
          {/* Modal header */}
          <div className="relative z-10 flex items-center justify-between px-5 pt-5 pb-3">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/LOGO.svg"
                alt="Oriture Logo"
                width={100}
                height={26}
                quality={100}
                className="h-6 w-auto"
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/8 hover:bg-[#D1FF52]/15 transition-all duration-300 group/close"
            >
              <X className="w-4 h-4 text-white/60 group-hover/close:text-[#D1FF52] transition-colors duration-300" />
            </button>
          </div>

          {/* Nav links — 2 column with expandable dropdowns */}
          <div className="relative z-10 px-4 pb-5">
            <div className="grid grid-cols-2 gap-2">
              {mobileNavigationItems.map((item, index) => (
                <div
                  key={item.name}
                  className={`${
                    item.hasDropdown && mobileDropdown === item.name ? "col-span-2" : ""
                  } ${isMenuOpen ? "animate-modalItemIn" : ""}`}
                  style={{ animationDelay: `${index * 40 + 80}ms` }}
                >
                  {item.hasDropdown ? (
                    // Expandable dropdown item
                    <div className="relative">
                      <button
                        onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
                        className={`group relative w-full flex items-center justify-between p-4 rounded-2xl overflow-hidden transition-all duration-300 ${
                          mobileDropdown === item.name ? "bg-[#D1FF52]/10" : ""
                        }`}
                        style={{ 
                          background: mobileDropdown === item.name ? "rgba(209,255,82,0.08)" : "rgba(255,255,255,0.03)",
                        }}
                      >
                        {/* Gradient pill indicator */}
                        <div 
                          className={`absolute left-3 top-1/2 -translate-y-1/2 w-1 h-5 rounded-full transition-all duration-300 ${
                            mobileDropdown === item.name ? "opacity-100" : "opacity-40 group-hover:opacity-70"
                          }`}
                          style={{ background: "linear-gradient(180deg, #D1FF52 0%, rgba(120,80,200,0.6) 100%)" }}
                        />
                        
                        <span className={`text-[14px] font-medium pl-5 transition-colors duration-300 ${
                          mobileDropdown === item.name ? "text-[#D1FF52]" : "text-white/70 group-hover:text-white"
                        }`}>
                          {item.name}
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
                          mobileDropdown === item.name ? "text-[#D1FF52] rotate-180" : "text-white/30 group-hover:text-white/50"
                        }`} />
                      </button>
                      
                      {/* Sub-items */}
                      <div
                        className={`grid grid-cols-2 gap-1.5 overflow-hidden transition-all duration-300 ${
                          mobileDropdown === item.name ? "max-h-40 opacity-100 mt-2 px-1" : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        {item.dropdown?.map((sub) => (
                          <a
                            key={sub}
                            href="#"
                            className="group/sub flex items-center gap-2 px-3 py-2.5 rounded-xl text-[13px] text-white/55 hover:text-white transition-all duration-200"
                            style={{ background: "rgba(255,255,255,0.02)" }}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setMobileDropdown(null);
                            }}
                          >
                            <div className="w-1 h-1 rounded-full bg-[#D1FF52]/40 group-hover/sub:bg-[#D1FF52] transition-colors duration-200" />
                            {sub}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Regular nav item
                    <a
                      href={item.href}
                      className="group relative flex items-center justify-between p-4 rounded-2xl overflow-hidden transition-all duration-300"
                      style={{ background: "rgba(255,255,255,0.03)" }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {/* Gradient pill indicator */}
                      <div 
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-1 h-5 rounded-full opacity-40 group-hover:opacity-100 transition-all duration-300"
                        style={{ background: "linear-gradient(180deg, #D1FF52 0%, rgba(120,80,200,0.6) 100%)" }}
                      />
                      
                      <span className="text-white/70 group-hover:text-white text-[14px] font-medium pl-5 transition-colors duration-300">
                        {item.name}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/25 group-hover:text-[#D1FF52] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                      
                      {/* Hover glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ background: "radial-gradient(circle at 0% 50%, rgba(209,255,82,0.06) 0%, transparent 50%)" }}
                      />
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="my-4 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(209,255,82,0.12), rgba(255,255,255,0.05), transparent)" }} />

            {/* Bottom CTA — Hero style */}
            <div
              className={`${isMenuOpen ? "animate-modalItemIn" : ""}`}
              style={{ animationDelay: "420ms" }}
            >
              <div className="flex items-center gap-2 group/cta">
                <a
                  href="/contact"
                  className="flex-1 flex items-center justify-center bg-[#D1FF52] text-black px-5 py-3.5 rounded-full font-semibold text-[14px] transition-all duration-300 hover:shadow-[0_0_28px_rgba(209,255,82,0.3)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Start Your Project
                </a>
                <button 
                  className="bg-white/5 hover:bg-[#D1FF52] p-3.5 rounded-tr-full rounded-b-full transition-all duration-300 group-hover/cta:rounded-t-full group-hover/cta:rounded-bl-none flex-shrink-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MoveUpRight className="w-4 h-4 text-[#D1FF52] group-hover/cta:rotate-45 group-hover/cta:text-black transition-all duration-300" />
                </button>
              </div>
            </div>

            {/* Status indicator */}
            <div
              className={`flex items-center justify-center gap-2 mt-4 ${isMenuOpen ? "animate-modalItemIn" : ""}`}
              style={{ animationDelay: "480ms" }}
            >
              <div className="w-1.5 h-1.5 bg-[#D1FF52] rounded-full animate-pulse" />
              <span className="text-white/35 text-[11px] tracking-wide">Available for projects</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalItemIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-modalItemIn {
          animation: modalItemIn 0.3s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}