"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

/* ─────────────────────────────────────────────────
   PROJECT DATA
   Replace / extend for real projects later.
   Each project has: title, client, timeAgo, logo,
   description, tags, testimonial, images (3)
───────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    timeAgo: "1 Day Ago",
    logo: "/hp1-1.png",           // swap for real logo
    title: "Fresh Launch",
    subtitle: "by Oriture Team",
    client: "Lebanese Green House",
    description:
      "We Partnered With Lebanese Green House To Craft A Clean, Elegant, And Conversion-Focused Digital Experience That Reflects Their Brand Identity And Elevates Their Online Presence.",
    tags: ["Hospitality", "Restaurant", "Branding"],
    testimonial: {
      text: "Oriture Excels With Meticulous Attention To Detail, Commitment To Excellence, And Creative Problem-Solving. Their Inventive Solutions Captivate Visually And Significantly Enhance The User Experience.",
      author: "Sakhawat Hossain",
      role: "Brand Manager, LGH",
      avatar: "/hp1-1.png",       // swap for real avatar
    },
    images: ["/hp1-1.png", "/hp1-2.png", "/hp1-3.png"],
  },
  {
    id: 2,
    timeAgo: "2 Weeks Ago",
    logo: "/hp1-1.png",
    title: "Bold Redesign",
    subtitle: "by Oriture Team",
    client: "Studio Craft",
    description:
      "A Complete Visual Overhaul For Studio Craft — Bringing Their Artistic Vision To Life Through A Refined Design System, Modern Typography, And A Pixel-Perfect Web Presence.",
    tags: ["Design", "Web", "Branding"],
    testimonial: {
      text: "Working With Oriture Was Transformative. They Listened Deeply And Delivered A Product That Perfectly Captures Our Studio's Soul While Pushing The Boundaries Of Modern Design.",
      author: "Amara Osei",
      role: "Creative Director, Studio Craft",
      avatar: "/hp1-1.png",
    },
    images: ["/hp1-1.png", "/hp1-2.png", "/hp1-3.png"],
  },
  {
    id: 3,
    timeAgo: "1 Month Ago",
    logo: "/hp1-1.png",
    title: "Digital Growth",
    subtitle: "by Oriture Team",
    client: "NovaTech",
    description:
      "Oriture Helped NovaTech Launch A Powerful SaaS Landing Page That Communicates Value Instantly. From Information Architecture To Micro-Interactions, Every Detail Was Intentional.",
    tags: ["SaaS", "Product", "UI/UX"],
    testimonial: {
      text: "The Team At Oriture Understood Our Goals From The First Conversation. The Result Was A Landing Page That Converts And A Brand Presence That Stands Out In A Crowded Market.",
      author: "Derek Lin",
      role: "CEO, NovaTech",
      avatar: "/hp1-1.png",
    },
    images: ["/hp1-1.png", "/hp1-2.png", "/hp1-3.png"],
  },
];

/* ─────────────────────────────────────────────────
   LEFT PANEL — sticky project info
───────────────────────────────────────────────── */
function LeftPanel({ project }) {
  return (
    <div
      className="flex flex-col gap-5 transition-all duration-500"
      key={project.id}
    >
      {/* Logo + time badge */}
      <div className="flex items-center gap-3">
        <img
          src={project.logo}
          alt={project.client}
          className="w-10 h-10 rounded-lg object-cover"
        />
        <span className="text-xs text-white/50 bg-white/10 px-3 py-1 rounded-full">
          {project.timeAgo}
        </span>
      </div>

      {/* Title */}
      <div>
        <h2 className="text-3xl md:text-4xl font-normal font-newsreader text-white leading-tight">
          {project.title}
        </h2>
        <h2 className="text-3xl md:text-4xl font-normal font-newsreader leading-tight">
          <span className="text-white">by </span>
          <em className="text-[#D1FF52] italic">{project.subtitle.replace("by ", "")}</em>
        </h2>
      </div>

      {/* Description */}
      <p className="text-white/60 text-sm leading-relaxed max-w-sm">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-white/70 border border-white/20 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Testimonial card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 max-w-sm">
        <p className="text-white/70 text-xs leading-relaxed mb-4">
          {project.testimonial.text}
        </p>
        <div className="flex items-center gap-3">
          <img
            src={project.testimonial.avatar}
            alt={project.testimonial.author}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-white text-xs font-newsreader italic font-medium">
              {project.testimonial.author}
            </p>
            <p className="text-white/40 text-[10px]">{project.testimonial.role}</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-2 group/cta">
        <a
          href="/work"
          className="border border-[#D1FF52]/50 text-white group-hover/cta:text-black group-hover/cta:bg-[#D1FF52] group-hover/cta:border-[#D1FF52] bg-transparent px-5 py-2.5 rounded-full transition-all duration-300 text-sm font-medium"
        >
          View Case Study
        </a>
        <button className="border border-[#D1FF52]/50 bg-transparent p-2.5 rounded-tr-full rounded-b-full group-hover/cta:rounded-t-full group-hover/cta:rounded-bl-none group-hover/cta:bg-[#D1FF52] transition-all duration-300 cursor-pointer">
          <ArrowUpRight className="w-4 h-4 text-[#D1FF52] group-hover/cta:rotate-45 group-hover/cta:text-black transition-all duration-300" />
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────────── */
export default function HomeProjects() {
  const [activeProject, setActiveProject] = useState(0);
  // One ref per image row (9 total: 3 projects × 3 images)
  const imageRefs = useRef([]);
  const sectionRef = useRef(null);

  /* Intersection Observer — watch each image, map to project index */
  useEffect(() => {
    const observers = [];

    imageRefs.current.forEach((el, imgIdx) => {
      if (!el) return;
      const projectIdx = Math.floor(imgIdx / 3);

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveProject(projectIdx);
          }
        },
        { threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Left purple glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 5% 50%, #3b1578 0%, #1a0848 40%, transparent 70%)",
            opacity: 0.7,
          }}
        />
        {/* Grain */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.2,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* ── Section heading ── */}
      <div className="relative z-10 mx-auto max-w-[1370px] px-6 md:px-10 pt-20 md:pt-28 pb-10">
        <h2 className="text-3xl md:text-5xl font-normal font-newsreader text-white leading-snug">
          Our recent{" "}
          <em className="text-[#D1FF52] italic font-newsreader">work</em>
        </h2>
      </div>

      {/* ── Sticky layout ── */}
      <div className="relative z-10 mx-auto max-w-[1370px] px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-16">

          {/* LEFT — sticky panel */}
          <div className="hidden lg:block lg:w-[420px] shrink-0">
            <div className="sticky top-24">
              <LeftPanel project={PROJECTS[activeProject]} />
            </div>
          </div>

          {/* RIGHT — scrollable images */}
          <div className="flex-1 flex flex-col gap-6 pb-20 md:pb-28">
            {PROJECTS.map((project, pIdx) =>
              project.images.map((src, iIdx) => {
                const globalIdx = pIdx * 3 + iIdx;
                return (
                  <div
                    key={globalIdx}
                    ref={(el) => (imageRefs.current[globalIdx] = el)}
                    className="w-full"
                  >
                    {/* Mobile: show project label above first image of each project */}
                    {iIdx === 0 && (
                      <div className="lg:hidden mb-3">
                        <p className="text-[#D1FF52] font-newsreader italic text-lg">
                          {project.title}
                        </p>
                        <p className="text-white/50 text-xs">{project.client}</p>
                      </div>
                    )}
                    <div
                      className="w-full rounded-2xl overflow-hidden shadow-2xl"
                      style={{ aspectRatio: "16/10" }}
                    >
                      <img
                        src={src}
                        alt={`${project.title} image ${iIdx + 1}`}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
