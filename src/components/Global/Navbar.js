"use client";
import { ChevronDown, MoveUpRight, ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  // Check if current path matches item href
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const SCROLL_THRESHOLD = 60;

  const navigationItems = [
    { name: "Work", href: "/work", hasDropdown: false },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      megaMenu: [
        {
          title: "BRANDING",
          items: [
            { label: "Pitch Deck", desc: "Get visuals that raise capital" },
            { label: "Brand Identity", desc: "Build trust with design" },
            { label: "Logo Design", desc: "Become unforgettable" },
            { label: "Graphic Design", desc: "Illustration, Icons, Social Media" },
            { label: "Rebranding", desc: "Rebrand to grow & convert" },
          ],
        },
        {
          title: "DESIGN",
          items: [
            { label: "Ui/Ux Design", desc: "Web & mobile app design" },
            { label: "Website Design", desc: "Custom website & landings" },
            { label: "Mobile App Design", desc: "Apps your users love" },
            { label: "Website Redesign", desc: "Modern look, higher impact" },
            { label: "Product Ui/Ux Audit", desc: "Insights that drive results" },
          ],
        },
        {
          title: "DEVELOPMENT",
          items: [
            { label: "Web Development", desc: "Full-Stack web development" },
            { label: "MVP Development", desc: "MVPs that attract funding" },
            { label: "Landing Page", desc: "High converting website" },
            { label: "Corporate Websites", desc: "Build for scale & trust" },
            { label: "WOW Websites", desc: "Professional, scalable, fast website" },
          ],
        },
      ],
    },
    {
      name: "Industries",
      href: "/industries",
      hasDropdown: true,
      megaMenu: [
        {
          title: "INDUSTRIES",
          items: [
            { label: "All Industries" },
            { label: "AI" },
            { label: "EdTech" },
            { label: "Restaurant" },
            { label: "Podcast" },
          ],
        },
        {
          title: "MORE",
          items: [
            { label: "E-Commerce" },
            { label: "Music" },
            { label: "Automobile" },
            { label: "Productivity" },
            { label: "Green Tech" },
          ],
        },
        {
          title: "NICHES",
          items: [
            { label: "News" },
            { label: "Association" },
            { label: "Marketing" },
            { label: "Agency" },
          ],
        },
      ],
    },
    {
      name: "Technologies",
      href: "/technologies",
      hasDropdown: true,
      megaMenu: [
        {
          title: "FRONTEND",
          items: [
            { label: "React.js", desc: "Interactive UI development" },
            { label: "Next.js", desc: "Server-side rendered apps" },
            { label: "Tailwind CSS", desc: "Utility-first styling" },
            { label: "Framer Motion", desc: "Animated UI elements" },
            { label: "Zustand", desc: "State management" },
          ],
        },
        {
          title: "BACKEND",
          items: [
            { label: "Node.js", desc: "Scalable server environments" },
            { label: "Express.js", desc: "Fast web framework" },
            { label: "GraphQL", desc: "Flexible API queries" },
            { label: "REST APIs", desc: "Robust data communication" },
            { label: "JWT", desc: "Secure authentication" },
          ],
        },
        {
          title: "DATABASE & TOOLS",
          items: [
            { label: "MongoDB", desc: "NoSQL document database" },
            { label: "PostgreSQL", desc: "Relational SQL database" },
            { label: "Prisma", desc: "Next-generation ORM" },
            { label: "Vercel", desc: "Edge deployment & hosting" },
            { label: "Git / GitHub", desc: "Version control system" },
          ],
        },
      ],
    },
    { name: "About", href: "/about", hasDropdown: false },
    // { name: "Insight", href: "/insight", hasDropdown: false },
  ];

  const mobileNavigationItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { 
      name: "Services", 
      href: "/services",
      hasDropdown: true,
      dropdown: ["Pitch Deck", "Brand Identity", "Logo Design", "Graphic Design", "Rebranding", "Ui/Ux Design", "Website Design", "Mobile App Design", "Website Redesign", "Product Ui/Ux Audit", "Web Development", "MVP Development", "Landing Page", "Corporate Websites", "WOW Websites"]
    },
    { 
      name: "Industries", 
      href: "/industries",
      hasDropdown: true,
      dropdown: ["All Industries", "AI", "EdTech", "Restaurant", "Podcast", "E-Commerce", "Music", "Automobile", "Productivity", "Green Tech", "News", "Association", "Marketing", "Agency"]
    },
    { 
      name: "Technologies", 
      href: "/technologies",
      hasDropdown: true,
      dropdown: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Zustand", "Node.js", "Express.js", "GraphQL", "REST APIs", "JWT", "MongoDB", "PostgreSQL", "Prisma", "Vercel", "Git / GitHub"]
    },
    { name: "About", href: "/about" },
    // { name: "Insight", href: "/insight" },
    // { name: "Contact", href: "/contact" },
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
      {/* ????????? DESKTOP NAVBAR ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? */}
      <div className="fixed top-0 left-0 w-full z-[100] pointer-events-none hidden md:block">
        <div
          className={`max-w-[1400px] mx-auto px-6 lg:px-12 transition-all duration-700 ease-in-out ${
            isScrolled ? "pt-3 pb-3" : "pt-0 pb-0"
          }`}
        >
          <div className="relative flex items-center pointer-events-auto">

            {/* ?????? STANDALONE LOGO ??? slides out left on scroll ?????? */}
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

            {/* ?????? PILL ?????? */}
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
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                    onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
                  >
                    {item.hasDropdown ? (
                      <button
                        className={`flex items-center gap-1 whitespace-nowrap transition-all duration-300 text-[15px] font-light ${
                          isScrolled
                            ? "px-3 py-1.5 rounded-full hover:bg-white/8"
                            : "px-0 py-0"
                        } ${
                          isActive(item.href) || openDropdown === item.name
                            ? "text-[#D1FF52]"
                            : "text-white/80 hover:text-white"
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-[#D1FF52] transition-transform duration-200 ${
                            openDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center gap-1 whitespace-nowrap transition-all duration-300 text-[15px] font-light ${
                          isScrolled
                            ? "px-3 py-1.5 rounded-full hover:bg-white/8"
                            : "px-0 py-0"
                        } ${
                          isActive(item.href)
                            ? "text-[#D1FF52]"
                            : "text-white/80 hover:text-white"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}

                    {/* Dropdown */}
                    {item.hasDropdown && (
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-5 transition-all duration-300 ${
                          openDropdown === item.name
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div 
                          className="relative flex gap-10 p-10 rounded-[28px] rounded-tl-none overflow-hidden w-max border border-[#D1FF52]/30 "
                          style={{
                            background: "linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(55, 40, 130, 0.98) 100%)",
                            backdropFilter: "blur(24px)",
                          }}
                        >
                          {/* Noise background */}
                          <div 
                            className="absolute inset-0 pointer-events-none mix-blend-overlay"
                            style={{
                              opacity: 0.35,
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
                              backgroundSize: "200px 200px",
                            }} 
                          />

                          {/* Left Button */}
                          <div className="relative z-10 pr-6 mr-2">
                            <div className="bg-[#D1FF52] text-black px-5 py-2 rounded-full font-medium text-[14px]">
                              {item.name}
                            </div>
                          </div>

                          {/* Mega Menu Columns */}
                          {item.megaMenu?.map((column, cIdx) => (
                            <div key={cIdx} className="flex flex-col relative z-10 min-w-[220px]">
                              <h4 className="text-white font-serif tracking-widest text-[14.5px] uppercase mb-6">{column.title}</h4>
                              <div className="flex flex-col gap-6">
                                {column.items.map((link, lIdx) => (
                                  <Link key={lIdx} href={item.href} className="group flex flex-col hover:opacity-100 transition-opacity duration-200" onClick={() => setOpenDropdown(null)}>
                                    <span className="text-[14px] font-medium text-white/90 group-hover:text-[#D1FF52] font-newsreader transition-colors">{link.label}</span>
                                    {link.desc && <span className="text-[13px] text-white/50 mt-1.5 leading-snug font-light">{link.desc}</span>}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
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
                  <div className="flex items-center gap-2 pr-1 group/ctabtn">
                    <Link
                      href="/#contact"
                      className="border border-[#D1FF52]/40 text-white group-hover/ctabtn:text-black group-hover/ctabtn:bg-[#D1FF52] group-hover/ctabtn:border-[#D1FF52] bg-transparent px-4 py-1.5 rounded-full transition-all duration-300 text-[14px] font-medium whitespace-nowrap"
                    >
                      Hire Us
                    </Link>
                    <button className="border border-[#D1FF52]/40 bg-transparent p-1.5 rounded-tr-full rounded-b-full group-hover/ctabtn:rounded-t-full group-hover/ctabtn:rounded-bl-none group-hover/ctabtn:bg-[#D1FF52] transition-all duration-300 shrink-0">
                      <MoveUpRight className="w-3.5 h-3.5 text-[#D1FF52] group-hover/ctabtn:rotate-45 group-hover/ctabtn:text-black transition-all duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ?????? STANDALONE CTA ??? slides out right on scroll ?????? */}
            <div
              className={`flex items-center gap-2 shrink-0 group/ctatop transition-all duration-700 ease-in-out ${
                isScrolled
                  ? "w-0 opacity-0 translate-x-6 overflow-hidden pointer-events-none"
                  : "w-auto opacity-100 translate-x-0 py-5"
              }`}
            >
              <Link
                href="/#contact"
                className="border border-[#D1FF52]/50 text-white group-hover/ctatop:text-black group-hover/ctatop:bg-[#D1FF52] group-hover/ctatop:border-[#D1FF52] bg-transparent px-5 py-2 rounded-full transition-all duration-300 text-[14px] font-medium whitespace-nowrap"
              >
                Hire Us
              </Link>
              <button className="border border-[#D1FF52]/50 bg-transparent p-2 rounded-tr-full rounded-b-full group-hover/ctatop:rounded-t-full group-hover/ctatop:rounded-bl-none group-hover/ctatop:bg-[#D1FF52] transition-all duration-300">
                <MoveUpRight className="w-4 h-4 text-[#D1FF52] group-hover/ctatop:rotate-45 group-hover/ctatop:text-black transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ????????? MOBILE NAVBAR ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? */}
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

            {/* Menu button ??? centered */}
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
              <Link
                href="/#contact"
                className="border border-[#D1FF52]/40 text-white hover:text-black hover:bg-[#D1FF52] hover:border-[#D1FF52] bg-transparent px-3.5 py-1.5 rounded-full transition-all duration-300 text-[12px] font-medium whitespace-nowrap"
              >
                Hire Us
              </Link>
              <button className="border border-[#D1FF52]/40 bg-transparent p-1.5 rounded-tr-full rounded-b-full hover:rounded-t-full hover:rounded-bl-none hover:bg-[#D1FF52] transition-all duration-300 shrink-0 group/mobilecta">
                <MoveUpRight className="w-3 h-3 text-[#D1FF52] group-hover/mobilecta:rotate-45 group-hover/mobilecta:text-black transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ????????? MOBILE MENU MODAL ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????? */}
      <div
        className={`fixed inset-0 z-[200] flex items-center justify-center md:hidden transition-all duration-400 ease-out ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop ??? frosted glass, see-through blur */}
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

        {/* Modal ??? Glass Effect */}
        <div
          className={`relative w-[92vw] max-w-[350px] max-h-[85vh] overflow-y-auto transition-all duration-400 ease-out ${
            isMenuOpen ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-6"
          }`}
          style={{
            background: "rgba(20, 18, 30, 0.65)",
            backdropFilter: "blur(40px) saturate(1.3)",
            WebkitBackdropFilter: "blur(40px) saturate(1.3)",
            borderRadius: "0 28px 28px 28px",
            boxShadow: "0 32px 80px -16px rgba(0,0,0,0.4)",
          }}
        >
          {/* Modal header */}
          <div className="relative z-10 flex items-center justify-between px-5 pt-7 pb-7">
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

          {/* Nav links ??? 2 column with expandable dropdowns */}
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
                        className={`group relative w-full flex items-center justify-between p-4 rounded-2xl rounded-tl-none overflow-hidden transition-all duration-300 ${
                          mobileDropdown === item.name ? "bg-[#D1FF52]/10" : ""
                        }`}
                        style={{ 
                          background: mobileDropdown === item.name ? "rgba(209,255,82,0.08)" : "rgba(255,255,255,0.03)",
                        }}
                      >
                        
                        
                        <span className={`text-[14px] font-medium pl-5 transition-colors duration-300 ${
                          mobileDropdown === item.name ? "text-[#D1FF52]" : "text-white/80 group-hover:text-white"
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
                          mobileDropdown === item.name ? "max-h-[600px] opacity-100 mt-2 px-1" : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        {item.dropdown?.map((sub) => (
                          <a
                            key={sub}
                            href="#"
                            className="group/sub flex items-center gap-2 px-3 py-2.5 rounded-xl rounded-tl-none text-[13px] text-white/55 hover:text-white transition-all duration-200"
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
                    <Link
                      href={item.href}
                      className="group relative flex items-center justify-between p-4  rounded-2xl rounded-tl-none overflow-hidden transition-all duration-300"
                      style={{ background: "rgba(255,255,255,0.03)" }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                     
                      
                      <span className="text-white/80 group-hover:text-white text-[14px] font-medium pl-5 transition-colors duration-300">
                        {item.name}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/25 group-hover:text-[#D1FF52] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                      
                      {/* Hover glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ background: "radial-gradient(circle at 0% 50%, rgba(209,255,82,0.06) 0%, transparent 50%)" }}
                      />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="my-4 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(209,255,82,0.12), rgba(255,255,255,0.05), transparent)" }} />

            {/* Bottom CTA ??? Hero style */}
            <div
              className={`${isMenuOpen ? "animate-modalItemIn" : ""}`}
              style={{ animationDelay: "420ms" }}
            >
              <div className="flex items-center gap-2 group/cta">
                <Link
                  href="/#contact"
                  className="flex-1 flex items-center justify-center bg-[#D1FF52] text-black px-5 py-3.5 rounded-full font-semibold text-[14px] transition-all duration-300 hover:shadow-[0_0_28px_rgba(209,255,82,0.3)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Start Your Project
                </Link>
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

