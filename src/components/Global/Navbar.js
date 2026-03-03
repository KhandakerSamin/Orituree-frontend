"use client";
import { ChevronDown, MoveUpRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Work");
  const [openDropdown, setOpenDropdown] = useState(null);

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
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Technologies", href: "/technologies" },
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
      {/* ─── NAVBAR SHELL ─────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 w-full z-[100] pointer-events-none">
        <div
          className={`max-w-[1400px] mx-auto px-6 lg:px-12 transition-all duration-500 ease-in-out ${
            isScrolled ? "pt-3 pb-3" : "pt-0 pb-0"
          }`}
        >
          <div className="relative flex items-center pointer-events-auto">

            {/* ── STANDALONE LOGO — slides out left on scroll ── */}
            <div
              className={`shrink-0 transition-all duration-500 ease-in-out ${
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

            {/* ── PILL — nav links; logo + CTA slide in when scrolled ── */}
            <div className="flex-1 flex justify-center">
              <div
                className={`flex items-center transition-all duration-500 ease-in-out ${
                  isScrolled
                    ? "border border-white/12 bg-black/65 backdrop-blur-2xl rounded-full px-3 py-2 gap-1 shadow-[0_4px_32px_rgba(0,0,0,0.45)]"
                    : "border border-transparent bg-transparent rounded-full px-0 py-5 gap-7"
                }`}
              >
                {/* Logo enters pill from left */}
                <div
                  className={`flex items-center shrink-0 overflow-hidden transition-all duration-500 ease-in-out ${
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
                      className={`flex items-center gap-1 whitespace-nowrap transition-all duration-200 ${
                        isScrolled
                          ? "text-[13px] px-3 py-1.5 rounded-full hover:bg-white/8"
                          : "text-[15px] font-light px-0 py-0"
                      } ${
                        activeItem === item.name
                          ? "text-[#D1FF52]"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`transition-transform duration-200 ${
                            isScrolled ? "w-3 h-3" : "w-3.5 h-3.5"
                          } ${openDropdown === item.name ? "rotate-180" : ""} ${
                            activeItem === item.name ? "text-[#D1FF52]" : "text-white/40"
                          }`}
                        />
                      )}
                    </button>

                    {/* Dropdown */}
                    {item.hasDropdown && (
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-[#0c0c0c]/96 backdrop-blur-xl border border-white/10 rounded-2xl py-2 shadow-2xl shadow-black/60 transition-all duration-200 ${
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
                  className={`flex items-center shrink-0 overflow-hidden transition-all duration-500 ease-in-out ${
                    isScrolled
                      ? "max-w-[180px] opacity-100 pl-3 ml-1 border-l border-white/10"
                      : "max-w-0 opacity-0 pl-0 ml-0 border-l-0"
                  }`}
                >
                  <div className="flex items-center gap-2 pr-1">
                    <a
                      href="/contact"
                      className="border border-[#D1FF52]/40 text-white hover:text-black hover:bg-[#D1FF52] hover:border-[#D1FF52] bg-transparent px-4 py-1.5 rounded-full transition-all duration-300 text-[12px] font-medium whitespace-nowrap"
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
              className={`flex items-center gap-2 shrink-0 group/ctatop transition-all duration-500 ease-in-out ${
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

            {/* Mobile burger */}
            <button
              className="md:hidden z-[70] text-white hover:text-white/80 transition-colors duration-300 py-5 ml-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "top-3 rotate-45" : "top-1"}`} />
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 top-3 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "top-3 -rotate-45" : "top-5"}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ─── MOBILE MENU ──────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-out md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`relative backdrop-blur-xl border-b border-gray-700/30 shadow-2xl transition-all duration-500 ease-out ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
          style={{ background: "linear-gradient(135deg,rgba(15,23,42,.97) 0%,rgba(30,41,59,.97) 100%)" }}
        >
          <div className="flex items-center justify-between px-6 py-6 border-gray-700/30" />
          <div className="px-6 py-10">
            <div className="grid grid-cols-2 gap-4 mb-8">
              {mobileNavigationItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/30 hover:border-[#D1FF52]/30 transition-all duration-300 ${isMenuOpen ? "animate-slideUp" : ""}`}
                  style={{ animationDelay: `${index * 80 + 150}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 group-hover:text-[#D1FF52] font-medium transition-colors duration-300">{item.name}</span>
                    <MoveUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#D1FF52] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D1FF52]/0 to-[#D1FF52]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
            <div className={`space-y-4 ${isMenuOpen ? "animate-slideUp" : ""}`} style={{ animationDelay: "700ms" }}>
              <a
                href="/contact"
                className="block w-full bg-gradient-to-r from-[#D1FF52] to-[#B8E63F] text-black px-6 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#D1FF52]/30 transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Us
              </a>
              <div className="flex items-center justify-center space-x-6 py-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <div className="w-2 h-2 bg-[#D1FF52] rounded-full animate-pulse" />
                  <span>Available for projects</span>
                </div>
                <div className="w-px h-4 bg-gray-600" />
                <span className="text-gray-400">Let&apos;s create something amazing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}