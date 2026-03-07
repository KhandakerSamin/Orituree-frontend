"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    timeAgo: "1 Day Ago",
    logo: "/hp1-1.png",
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
      avatar: "/hp1-1.png",
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

/* ── Left Panel ── */
function LeftPanel({ project }) {
  const [displayProject, setDisplayProject] = useState(project);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (project.id !== displayProject.id) {
      // Fade out
      setIsVisible(false);
      const timer = setTimeout(() => {
        // Swap content then fade in
        setDisplayProject(project);
        setIsVisible(true);
      }, 280);
      return () => clearTimeout(timer);
    }
  }, [project.id]);

  return (
    <div
      className="flex flex-col gap-5 transition-all duration-300"
      style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(12px)" }}
    >
      {/* Logo + badge */}
      <div className="flex items-center gap-3">
        <img
          src={displayProject.logo}
          alt={displayProject.client}
          className="w-10 h-10 rounded-lg object-cover"
        />
        <span className="text-xs text-white/50 bg-white/10 px-3 py-1 rounded-full">
          {displayProject.timeAgo}
        </span>
      </div>

      {/* Title */}
      <div>
        <h2 className="text-3xl md:text-4xl font-normal font-newsreader text-white leading-tight">
          {displayProject.title}
        </h2>
        <h2 className="text-3xl md:text-4xl font-normal font-newsreader leading-tight">
          <span className="text-white">by </span>
          <em className="text-[#D1FF52] italic">
            {displayProject.subtitle.replace("by ", "")}
          </em>
        </h2>
      </div>

      {/* Description */}
      <p className="text-white/60 text-sm leading-relaxed max-w-sm">
        {displayProject.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {displayProject.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-white/70 border border-white/20 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Testimonial */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 max-w-sm">
        <p className="text-white/70 text-xs leading-relaxed mb-4">
          {displayProject.testimonial.text}
        </p>
        <div className="flex items-center gap-3">
          <img
            src={displayProject.testimonial.avatar}
            alt={displayProject.testimonial.author}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-white text-xs font-newsreader italic font-medium">
              {displayProject.testimonial.author}
            </p>
            <p className="text-white/40 text-[10px]">{displayProject.testimonial.role}</p>
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

/* ── Main ── */
export default function HomeProjects() {
  const [activeProject, setActiveProject] = useState(0);
  // One ref per PROJECT (not per image) — watch the project group container
  const projectGroupRefs = useRef([]);
  const sectionRef = useRef(null);

  /* 
    Strategy: observe each project's IMAGE GROUP container.
    When a project group is ≥40% visible, make it active.
    This is more reliable than per-image tracking for "every 3 images = 1 project".
  */
  useEffect(() => {
    const observers = [];

    projectGroupRefs.current.forEach((el, pIdx) => {
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveProject(pIdx);
          }
        },
        {
          // Fire when 20% of the project group enters the viewport center zone
          threshold: 0.2,
          // Shrink the effective viewport: only the middle 50% of the screen triggers changes
          rootMargin: "-20% 0px -30% 0px",
        }
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
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 5% 50%, #3b1578 0%, #1a0848 40%, transparent 70%)",
            opacity: 0.7,
          }}
        />
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      {/* ── Content wrapper ── */}
      <div className="relative z-10 mx-auto max-w-[1370px] px-6 md:px-10 py-28 lg:py-36">
        <div className="flex flex-col lg:flex-row items-start">

          {/* LEFT PANEL - same sticky system as WorkProjects */}
          <div className="hidden lg:flex flex-col w-full lg:w-[45%] sticky top-32 self-start pr-8 h-fit">
            <LeftPanel project={PROJECTS[activeProject]} />
          </div>

          {/* GAP — 5% */}
          <div className="hidden lg:block w-[5%]" />

          {/* RIGHT — scrollable images (50%) */}
          <div className="w-full lg:w-[50%]">
            {PROJECTS.map((project, pIdx) => (
              /*
                Each project gets a GROUP wrapper that the IntersectionObserver watches.
                When this group scrolls into the trigger zone, the left panel switches.
              */
              <div
                key={project.id}
                ref={(el) => (projectGroupRefs.current[pIdx] = el)}
                className="mb-4 lg:mb-0"
              >
                {/* Mobile: project label above first image */}
                <div className="lg:hidden mb-3">
                  <p className="text-[#D1FF52] font-newsreader italic text-lg">
                    {project.title}
                  </p>
                  <p className="text-white/50 text-xs">{project.client}</p>
                </div>

                {/* Mobile: show LeftPanel content inline between projects */}
                <div className="block lg:hidden mb-6">
                  <LeftPanel project={project} />
                </div>

                {/* Images for this project */}
                {project.images.map((src, iIdx) => (
                  <div
                    key={iIdx}
                    className="w-full mb-8 lg:mb-12"
                  >
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
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}