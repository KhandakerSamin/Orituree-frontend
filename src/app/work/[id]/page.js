"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import projectsData from "@/data/projectsData";


/* ─────────────────────────────────────────────
   HELPER: Colour the last 3 words of a heading
   in lime + italic, rest stays white
───────────────────────────────────────────── */
function TitleWithAccentTail({ text, className }) {
  const words = text.trim().split(" ");
  if (words.length <= 3) {
    return (
      <span className={className}>
        <em className="text-[#D1FF52] italic font-newsreader">{text}</em>
      </span>
    );
  }
  const normal = words.slice(0, words.length - 3).join(" ");
  const accent = words.slice(words.length - 3).join(" ");
  return (
    <span className={className}>
      {normal}{" "}
      <em className="text-[#D1FF52] italic font-newsreader">{accent}</em>
    </span>
  );
}


function SectionTitle({ title }) {
  const words = title.trim().split(" ");

  if (words.length === 1) {
    return (
      <h3 className="text-3xl md:text-5xl font-normal not-italic mb-6">
        <em className="text-white " >{title}</em>
      </h3>
    );
  }

  if (words.length === 2) {
    return (
      <h3 className="text-3xl md:text-5xl font-normal font-newsreader mb-6">
        <span className="text-white">{words[0]}</span>{" "}
        <em className="text-[#D1FF52] italic font-newsreader">{words[1]}</em>
      </h3>
    );
  }

  // 3+ words: all normal except last word which gets accent
  const normal = words.slice(0, words.length - 1).join(" ");
  const last = words[words.length - 1];
  return (
    <h3 className="text-3xl md:text-5xl font-normal font-newsreader mb-6">
      <span className="text-white">{normal}</span>{" "}
      <em className="text-[#D1FF52] italic font-newsreader">{last}</em>
    </h3>
  );
}


/* ─────────────────────────────────────────────
   IMAGE MODAL
───────────────────────────────────────────── */
function ImageModal({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Counter */}
      {images.length > 1 && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums font-medium">
          {current + 1} / {images.length}
        </div>
      )}

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 md:left-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl"
          style={{ transition: "opacity 0.2s ease" }}
        />
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 md:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      )}
    </div>
  );
}



// Image Carosol

function ImageCarousel({ images }) {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const animRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || images.length === 0) return;

    const speed = 0.35; // speed

    const animate = () => {
      if (!pausedRef.current) {
        offsetRef.current -= speed;
        const singleSetWidth = track.scrollWidth / 2;
        if (Math.abs(offsetRef.current) >= singleSetWidth) {
          offsetRef.current = 0;
        }
        track.style.transform = `translateX(${offsetRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [images]);

  if (!images || images.length === 0) return null;

  const doubled = [...images, ...images];

  return (
    <div
      className="w-full overflow-hidden py-8"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div
        ref={trackRef}
        className="flex gap-6 w-max"
        style={{ willChange: "transform" }}
      >
        {doubled.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[280px] sm:w-[380px] md:w-[480px] lg:w-[560px] rounded-2xl overflow-hidden"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover rounded-2xl"
              draggable={false}
              style={{ display: "block" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


// Section render

function ProjectSection({ section }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isList = section.type === "text-grid-list" || section.type === "text-only-list";
  const hasImages = section.images && section.images.length > 0;

  return (
    <>
      <div
        ref={sectionRef}
        className="mb-16 md:mb-24"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Section title with colour rule */}
        {section.titleBreakLine ? (
          <>
            <SectionTitle title={section.title} />
            
          </>
        ) : (
          <SectionTitle title={section.title} />
        )}

        {/* Description */}
        {isList && Array.isArray(section.description) ? (
          <ul className="space-y-3 mb-8">
            {section.description.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D1FF52] mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-full">
            {Array.isArray(section.description) ? section.description.join(" ") : section.description}
          </p>
        )}

        {/* Figma Link */}
        {section.figmaLink && (
          <a
            href={section.figmaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D1FF52] text-sm font-medium mb-8 hover:underline"
          >
            {section.figmaLinkText || "View on Figma"}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}

        {/* Images grid with expand-on-hover */}
        {hasImages && (
          <div
            className={`grid gap-4 ${
              section.images.length === 1
                ? "grid-cols-1"
                : section.images.length === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {section.images.map((img, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden cursor-zoom-in"
                onClick={() => setModalIndex(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-103"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 rounded-2xl flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-transparent backdrop-blur-sm flex items-center justify-center border border-white/500">
                    <Expand className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {modalIndex !== null && hasImages && (
        <ImageModal
          images={section.images}
          startIndex={modalIndex}
          onClose={() => setModalIndex(null)}
        />
      )}
    </>
  );
}

/* ─────────────────────────────────────────────
   MORE PROJECTS  — redesigned per screenshot
   Gradient: top-left purple bloom → bottom-right black
───────────────────────────────────────────── */
function MoreProjectCard({ project }) {
  return (
    <Link href={`/work/${project.id}`} className="group block">
      <div className="relative w-full overflow-hidden rounded-2xl aspect-5/4 mb-4">
        <img
          src={project.homepage.homepageThumbnail}
          alt={project.homepage.projectTitle}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-violet-600/15">
          <div className="w-12 h-12 rounded-full rounded-bl-none flex items-center justify-center bg-[#D1FF52]">
            <ArrowUpRight className="w-5 h-5 text-black" />
          </div>
        </div>
      </div>
      <h4 className="text-white text-xl sm:text-3xl font-normal leading-snug mb-1.5 group-hover:text-[#D1FF52] transition-colors duration-300" style={{ fontFamily: '"DM Sans", sans-serif' }}>
        {project.homepage.projectTitle}
      </h4>
      {project.homepage?.homepageDetail && (
        <p className="text-gray-300 text-base leading-relaxed mb-3">
          {project.homepage.homepageDetail}
        </p>
      )}
      <div className="flex flex-wrap gap-1.5">
        {(project.homepage.tags || project.homepage.keywords).map((tag) => (
          <span
            key={tag}
            className="text-base text-gray-300 rounded-full px-2.5 py-1 bg-white/10 border border-transparent"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

function MoreProjects({ currentProject }) {
  const sameCategory = projectsData.filter(
    (p) => p.category === currentProject.category && p.id !== currentProject.id && p.detailPage
  );

  let suggestions;
  if (sameCategory.length >= 2) {
    suggestions = sameCategory.slice(0, 2);
  } else {
    // If not enough in the same category, just take other projects
    const others = projectsData.filter(
      (p) => p.id !== currentProject.id && p.detailPage
    );
    suggestions = others.slice(0, 2);
  }

  if (suggestions.length === 0) return null;

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28">

      {/* Gradient: top-left purple bloom */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black" />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 70% at 0% 0%, #6a35d8 0%, #4520a8 22%, #1e0c60 45%, transparent 68%)",
          opacity: 0.85,
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 0% 0%, #8b50f0 0%, #5530c0 30%, transparent 60%)",
          opacity: 0.5,
        }}
      />
      {/* Fade bottom-right to black */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 65% at 100% 100%, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.8) 40%, transparent 70%)",
        }}
      />
      {/* Dark mask bottom + right */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 0%, transparent 35%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.92) 85%, #000 100%)",
        }}
      />
      {/* Grain */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.3,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1370px] px-6 md:px-8">
        {/* Heading — matches screenshot: "See more of our works" */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl text-white font-normal font-newsreader leading-snug">
            See more
            <br />
            of our{" "}
            <em className="text-[#D1FF52] italic font-newsreader">works</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {suggestions.map((project) => (
            <MoreProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function ProjectDetailPage() {
  const params = useParams();
  const project = projectsData.find((p) => p.id === params.id);

  if (!project || !project.detailPage) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center flex-col gap-6">
          <h1 className="text-white text-3xl md:text-4xl font-normal font-newsreader">Project Not Found</h1>
          <p className="text-gray-400 text-sm md:text-base">This project doesn&apos;t have a detail page yet.</p>
          <Link href="/work" className="group inline-flex items-center gap-2 bg-[#D1FF52] text-black px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            Back to Work
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const { detailPage } = project;

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* ═══════════════════════════════════════════════
          GRADIENT ZONE — Hero + Carousel + Description
          Extends further down with softer bottom fade
      ════════════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden">

        {/* Base black */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-black" />

        {/* Dark top-left */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(125deg, #000000 0%, #04010d 18%, #080318 35%, #0e0628 50%, transparent 65%)",
          }}
        />

        {/* Vivid right bloom */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 95% 65% at 88% 18%, #8b58f5 0%, #6038d0 25%, #331880 52%, #0e0628 72%, transparent 88%)",
          }}
        />

        {/* Tighter vivid core */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 48% at 82% 16%, #aa78ff 0%, #7845ee 28%, #4020b0 52%, transparent 72%)",
            opacity: 0.9,
          }}
        />

        {/* Top-right corner glow */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 45% 55% at 95% 4%, #7845ee 0%, #5030b8 30%, #2a1870 55%, transparent 75%)",
            opacity: 0.6,
          }}
        />

        {/* S-curve glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "blur(72px)" }}>
            <defs>
              <linearGradient id="sCurveGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%"   stopColor="#2a1060" stopOpacity="0" />
                <stop offset="40%"  stopColor="#6040c8" stopOpacity="0.75" />
                <stop offset="75%"  stopColor="#8858f0" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#a070ff" stopOpacity="0.65" />
              </linearGradient>
            </defs>
            <path d="M 1100,0 C 900,-20 300,80 200,280 C 100,480 900,560 820,760 C 740,920 200,960 0,900 L 0,820 C 200,880 680,860 760,700 C 840,540 60,440 160,240 C 260,40 860,-40 1060,0 Z" fill="url(#sCurveGlow)" />
          </svg>
        </div>

        {/* S-curve secondary */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "blur(32px)" }}>
            <defs>
              <linearGradient id="sCurveSharp" x1="0.3" y1="0" x2="0.8" y2="1">
                <stop offset="0%"   stopColor="#4020a0" stopOpacity="0" />
                <stop offset="50%"  stopColor="#6a48d0" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#9060f8" stopOpacity="0.45" />
              </linearGradient>
            </defs>
            <path d="M 980,0 C 820,10 380,100 300,270 C 220,440 800,510 760,680 C 720,840 280,900 80,900 L 0,900 L 0,820 C 220,820 700,780 740,620 C 780,460 200,370 280,200 C 360,30 800,-30 960,0 Z" fill="url(#sCurveSharp)" />
          </svg>
        </div>

        {/* Dark mask left */}
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
              "radial-gradient(ellipse 58% 22% at 0% 0%, rgba(0,0,0,0.95) 0%, transparent 65%)",
          }}
        />

        {/* FADE TO BLACK — starts later, ends smoothly (gradient goes more down) */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 55%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.75) 85%, #000000 100%)",
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

        {/* ── Hero ── */}
        <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="relative z-10 mx-auto max-w-[1370px] px-6 md:px-8">

            {/* Project Title — last 3 words accented */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal font-newsreader mb-4 leading-tight">
              <TitleWithAccentTail text={detailPage.projectTitle} />
            </h1>

            <p className="text-gray-400  text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              {detailPage.projectInfo}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {detailPage.projectSubtitles.map((sub, i) => (
                <div
                  key={i}
                  className="px-4 py-3"
                  style={{
                    background: "linear-gradient(90deg, rgba(209, 255, 82, 0.08) 0%, rgba(209, 255, 82, 0) 100%)",
                    borderRadius: "0px 8px 8px 8px",
                  }}
                >
                  <p className="text-[#D1FF52]/60 text-[10px] uppercase tracking-widest mb-1.5 font-medium">
                    {sub.label}
                  </p>
                  <p className="text-white text-sm md:text-base font-medium leading-snug">
                    {sub.value}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Carousel ── */}
        {detailPage.carouselImages && detailPage.carouselImages.length > 0 && (
          <section className="relative w-full">
            <ImageCarousel images={detailPage.carouselImages} />
          </section>
        )}

        {/* ── Description ── */}
        {detailPage.description && (
          <section className="relative w-full py-12 md:py-16">
            <div className="relative z-10 mx-auto max-w-[1370px] px-6 md:px-8">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-full">
              {detailPage.description}
            </p>
            </div>
          </section>
        )}

      </div>
      {/* ═══ Gradient zone ends ═══ */}

      {/* ── Sections ── */}
      <section className="w-full bg-black py-8 md:py-12">
        <div className="mx-auto max-w-[1370px] px-6 md:px-8">
          {detailPage.sections.map((section, i) => (
            <ProjectSection key={i} section={section} />
          ))}
        </div>
      </section>

      {/* ── More Projects ── */}
      <MoreProjects currentProject={project} />

      <Footer />
    </div>
  );
}