"use client";
import { useEffect, useRef, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import projectsData from "@/data/projectsData";

/* ── Image Carousel ── */
function ImageCarousel({ images }) {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || images.length === 0) return;

    let animId;
    let offset = 0;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused) {
        offset -= speed;
        const singleSetWidth = track.scrollWidth / 2;
        if (Math.abs(offset) >= singleSetWidth) {
          offset = 0;
        }
        track.style.transform = `translateX(${offset}px)`;
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [images, isPaused]);

  if (!images || images.length === 0) return null;

  const doubled = [...images, ...images];

  return (
    <div
      className="w-full overflow-hidden py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div ref={trackRef} className="flex gap-6 w-max will-change-transform">
        {doubled.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] rounded-2xl overflow-hidden"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover rounded-2xl"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Section Renderer ── */
function ProjectSection({ section, index }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isTextOnly = section.type === "text-only-list";
  const isList = section.type === "text-grid-list" || section.type === "text-only-list";
  const hasImages = section.images && section.images.length > 0;

  return (
    <div
      ref={sectionRef}
      className="mb-16 md:mb-24"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(30px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {/* Section Title */}
      <h3 className="text-2xl md:text-3xl text-white font-light font-serif mb-6">
        {section.titleBreakLine ? (
          <>
            {section.title}
            <span className="block w-12 h-[2px] bg-[#D1FF52] mt-3" />
          </>
        ) : (
          section.title
        )}
      </h3>

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
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-3xl">
          {Array.isArray(section.description)
            ? section.description.join(" ")
            : section.description}
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

      {/* Images */}
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
            <div key={i} className="rounded-2xl overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── More Projects Card ── */
function MoreProjectCard({ project }) {
  return (
    <Link href={`/work/${project.id}`} className="group block">
      <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10]">
        <img
          src={project.homepage.homepageThumbnail}
          alt={project.homepage.projectTitle}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-violet-600/15">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D1FF52]">
            <ArrowUpRight className="w-5 h-5 text-black" />
          </div>
        </div>
      </div>
      <div className="pt-3">
        <h4 className="text-white text-lg font-normal leading-snug mb-1 group-hover:text-[#D1FF52] transition-colors duration-300 font-serif">
          {project.homepage.projectTitle}
        </h4>
        {project.detailPage && (
          <p className="text-gray-400 text-sm">{project.detailPage.projectInfo}</p>
        )}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {(project.homepage.tags || project.homepage.keywords).map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-400 rounded-full px-2.5 py-1 bg-white/5 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

/* ── More Projects Section ── */
function MoreProjects({ currentProject }) {
  const sameCategory = projectsData.filter(
    (p) => p.category === currentProject.category && p.id !== currentProject.id && p.detailPage
  );

  let suggestions;
  if (sameCategory.length >= 2) {
    // Shuffle and pick 2 from same category
    const shuffled = [...sameCategory].sort(() => Math.random() - 0.5);
    suggestions = shuffled.slice(0, 2);
  } else {
    // Not enough in same category, pick from all projects with detail pages
    const allOthers = projectsData.filter(
      (p) => p.id !== currentProject.id && p.detailPage
    );
    const shuffled = [...allOthers].sort(() => Math.random() - 0.5);
    suggestions = shuffled.slice(0, 2);
  }

  if (suggestions.length === 0) return null;

  return (
    <section className="relative w-full bg-black py-20 md:py-28">
      <div className="mx-auto max-w-[1370px] px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white font-light font-serif mb-3">
            More{" "}
            <em className="text-[#D1FF52] italic font-serif">Projects</em>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Explore more of our work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {suggestions.map((project) => (
            <MoreProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Main Detail Page ── */
export default function ProjectDetailPage() {
  const params = useParams();
  const project = projectsData.find((p) => p.id === params.id);

  if (!project || !project.detailPage) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center flex-col gap-6">
          <h1 className="text-white text-3xl font-serif">Project Not Found</h1>
          <p className="text-gray-400">This project doesn&apos;t have a detail page yet.</p>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[#D1FF52] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
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

      {/* ── Hero Section ── */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(109,85,255,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.09] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1370px] px-6 md:px-8">
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#D1FF52] transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>

          {/* Project Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-light font-serif mb-4 leading-tight">
            {detailPage.projectTitle}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl">
            {detailPage.projectInfo}
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pb-8 border-b border-white/10">
            {detailPage.projectSubtitles.map((sub, i) => (
              <div key={i}>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">
                  {sub.label}
                </p>
                <p className="text-white text-sm md:text-base font-medium">
                  {sub.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image Carousel ── */}
      {detailPage.carouselImages && detailPage.carouselImages.length > 0 && (
        <section className="w-full bg-black">
          <ImageCarousel images={detailPage.carouselImages} />
        </section>
      )}

      {/* ── Description ── */}
      {detailPage.description && (
        <section className="w-full bg-black py-12 md:py-16">
          <div className="mx-auto max-w-[1370px] px-6 md:px-8">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl">
              {detailPage.description}
            </p>
          </div>
        </section>
      )}

      {/* ── Sections ── */}
      <section className="w-full bg-black py-8 md:py-12">
        <div className="mx-auto max-w-[1370px] px-6 md:px-8">
          {detailPage.sections.map((section, i) => (
            <ProjectSection key={i} section={section} index={i} />
          ))}
        </div>
      </section>

      {/* ── More Projects ── */}
      <MoreProjects currentProject={project} />

      <Footer />
    </div>
  );
}
