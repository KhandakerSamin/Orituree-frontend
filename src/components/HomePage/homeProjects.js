"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    timeAgo: "1 Day Ago",
    logo: "/brand3.png",
    description:
      "We Partnered With Lebanese Green House To Craft A Clean, Elegant, And Conversion-Focused Digital Experience That Reflects Their Brand Identity And Elevates Their Online Presence.",
    tags: ["Hospitality", "Restaurant", "Branding"],
    testimonial: {
      text: "Oriture Excels With Meticulous Attention To Detail, Commitment To Excellence, And Creative Problem-Solving. Their Inventive Solutions Captivate Visually And Significantly Enhance The User Experience.",
      author: "Sakhawat Hossain",
      role: "Brand Manager, LGH",
      avatar: "/avatar.png",
    },
    images: ["/hp1-1.png", "/hp1-2.png", "/hp1-3.png"],
  },
  {
    id: 2,
    timeAgo: "2 Weeks Ago",
    logo: "/brand2.png",
    description:
      "A Complete Visual Overhaul For Studio Craft — Bringing Their Artistic Vision To Life Through A Refined Design System, Modern Typography, And A Pixel-Perfect Web Presence.",
    tags: ["Design", "Web", "Branding"],
    testimonial: {
      text: "Working With Oriture Was Transformative. They Listened Deeply And Delivered A Product That Perfectly Captures Our Studio's Soul While Pushing The Boundaries Of Modern Design.",
      author: "Amara Osei",
      role: "Creative Director, Studio Craft",
      avatar: "/avatar.png",
    },
    images: ["/hp1-1.png", "/hp1-2.png", "/hp1-3.png"],
  },
  {
    id: 3,
    timeAgo: "1 Month Ago",
    logo: "/brand6.png",
    description:
      "Oriture Helped NovaTech Launch A Powerful SaaS Landing Page That Communicates Value Instantly. From Information Architecture To Micro-Interactions, Every Detail Was Intentional.",
    tags: ["SaaS", "Product", "UI/UX"],
    testimonial: {
      text: "The Team At Oriture Understood Our Goals From The First Conversation. The Result Was A Landing Page That Converts And A Brand Presence That Stands Out In A Crowded Market.",
      author: "Derek Lin",
      role: "CEO, NovaTech",
      avatar: "/avatar.png",
    },
    images: ["/hp1-1.png", "/hp1-2.png", "/hp1-3.png"],
  },
];

/* ── Left Panel ── */
function LeftPanel({ project }) {
  const [displayProject, setDisplayProject] = useState(project);
  const [animationState, setAnimationState] = useState("visible"); // "visible", "exiting", "entering"

  useEffect(() => {
    if (project.id !== displayProject.id) {
      // 1. Slide old content UP and fade OUT
      setAnimationState("exiting");
      
      const timer = setTimeout(() => {
        // 2. Change content instantly while invisible
        setDisplayProject(project);
        
        // 3. Move it DOWN instantly (without animation)
        setAnimationState("entering");
        
        // 4. Then animate it sliding UP to the center and fading IN
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimationState("visible");
          });
        });
      }, 300); // 300ms matches the exit transition duration
      
      return () => clearTimeout(timer);
    }
  }, [project.id, displayProject.id]);

  // Determine styles based on current animation state
  let opacity = 1;
  let transform = "translateY(0)";
  let transition = "all 300ms cubic-bezier(0.4, 0, 0.2, 1)";

  if (animationState === "exiting") {
    opacity = 0;
    transform = "translateY(-24px)"; // slides up
  } else if (animationState === "entering") {
    opacity = 0;
    transform = "translateY(24px)"; // starts from below
    transition = "none"; // instant snap to bottom
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Fixed Heading */}
      <div>
        <h2 className="text-3xl md:text-5xl lg:text-[52px] font-normal font-newsreader text-white leading-[1.1] mb-1">
          Fresh Launch
        </h2>
        <h2 className="text-3xl md:text-5xl lg:text-[52px] mb-4 font-normal font-newsreader leading-[1.1]">
          <span className="text-white">by </span>
          <em className="text-[#D1FF52] italic">
            Oriture Team
          </em>
        </h2>
      </div>

      <div
        className="flex flex-col gap-5"
        style={{ opacity, transform, transition }}
      >
        {/* Logo + badge */}
        <div className="flex items-center gap-4">
          <img
            src={displayProject.logo}
            alt={displayProject.client}
            className="h-8 object-contain"
          />
          <span className="text-sm font-medium text-[#D1FF52] bg-white/10 border border-transparent px-4 py-1.5 l rounded-full rounded-bl-none">
            {displayProject.timeAgo}
          </span>
        </div>

        {/* Description */}
        <p className="text-white/80 text-base leading-[1.60] max-w-sm mt-1">
          {displayProject.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-1">
          {displayProject.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm text-white/80 bg-white/10 border border-transparent px-5 py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-b from-white/10 to-transparent   rounded-2xl p-6 max-w-md mt-2">
          <p className="text-white/80 text-sm leading-[1.60] mb-6">
            {displayProject.testimonial.text}
          </p>
          <div className="flex items-center gap-3">
            <img
              src={displayProject.testimonial.avatar}
              alt={displayProject.testimonial.author}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col justify-center">
              <p className="text-white text-[15px] font-newsreader italic mb-[2px]">
                {displayProject.testimonial.author}
              </p>
              <p className="text-white/40 text-[11px] uppercase tracking-wider">{displayProject.testimonial.role}</p>
            </div>
          </div>
        </div>
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
      <div className="relative z-10 mx-auto max-w-[1370px] px-6 md:px-10 py-15 lg:py-36">
        <div className="flex flex-col lg:flex-row items-start">

          {/* LEFT PANEL - same sticky system as WorkProjects */}
          <div className="hidden lg:flex flex-col w-full lg:w-[47%] sticky top-32 self-start pr-8 h-fit">
            <LeftPanel project={PROJECTS[activeProject]} />
          </div>

          {/* GAP — 5% */}
          <div className="hidden lg:block w-[3%]" />

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