"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    timeAgo: "1 Day Ago",
    logo: "/hp1-logo.png",
    description:
      "TripKing is a comprehensive travel and booking platform designed to simplify the way people plan and manage their trips. The platform allows users to book hotels, flights, and travel-related products in one place while providing a smooth and user-friendly experience.",
    tags: ["Booking Platform", "Booking Platform", "Booking Platform"],
    testimonial: {
      text: "Oriture delivered an excellent design for TripKing. The platform feels modern, organized, and easy to navigate for booking hotels, flights, and travel services. His design thinking helped simplify a complex travel system into a smooth user experience.",
      author: "Shakil Shareef",
      role: "Development Lead, Tripking",
      avatar: "/hp1-avatar.png",
    },
    images: ["/hp1-1.png", "/hp1-2.png", "/hp1-3.png"],
  },
  {
    id: 2,
    timeAgo: "1 Day Ago",
    logo: "/hp2-logo.png",
    description:
      "Golpo is a storytelling platform designed to bring stories closer to people through a simple and engaging digital experience. The app allows users to discover, listen to, and enjoy a wide range of audio stories in an easy and distraction-free environment.",
    tags: ["Entertainment", "Product Design", "Design System"],
    testimonial: {
      text: "Working with Oriture was a great experience. He understood the vision of Golpo and translated it into a clean, intuitive, and engaging app design. The storytelling experience feels smooth and user-friendly. Highly recommended for anyone looking for thoughtful product design.",
      author: "Faheem Noman",
      role: "CEO, Golpo",
      avatar: "/hp2-avatar.png",
    },
    images: ["/hp2-1.png", "/hp2-2.png", "/hp2-3.png"],
  },
  {
    id: 3,
    timeAgo: "1 Day Ago",
    logo: "/brand3.png",
    description:
      "We partnered with Lebanese Green House to craft a clean, elegant, and conversion-focused digital experience that reflects their brand identity and elevates their online presence.",
    tags: ["Hospitality", "Hospitality", "UI/Branding"],
    testimonial: {
      text: "Oriture excels with meticulous attention to detail, commitment to excellence, and creative problem-solving. Their inventive solutions captivate visually and significantly enhance the user experience.",
      author: "Sakhawat Hossain",
      role: "Brand Manager, LGH",
      avatar: "/avatar.png",
    },
    images: ["/hp3-1.png", "/hp3-2.png", "/hp3-3.png"],
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
        <h2 className="text-3xl md:text-5xl lg:text-[52px] font-normal font-newsreader text-white leading-[1.1] mb-0">
          Fresh Launch
        </h2>
        <h2 className="text-3xl md:text-5xl lg:text-[52px] mb-3 font-normal font-newsreader leading-[1.1]">
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
        <div className="flex items-center gap-3">
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
        <p className="text-white/80 text-base leading-[1.60] max-w-lg mt-0.5">
          {displayProject.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-1">
          {displayProject.tags.map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              className="text-sm text-white/80 bg-white/10 border border-transparent px-5 py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-b from-white/10 to-transparent   rounded-2xl p-6 max-w-md mt-2">
          <p className="text-white/80 text-sm leading-[1.80] mb-6">
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

/* ── Mobile Carousel ── */
function MobileCarousel({ projects }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i + 1) % projects.length);

  const project = projects[current];

  return (
    <div className="flex flex-col gap-6 py-4">
      {/* Fixed Heading */}
      <div>
        <h2 className="text-3xl font-normal font-newsreader text-white leading-[1.1] mb-1">
          Fresh Launch
        </h2>
        <h2 className="text-3xl mb-4 font-normal font-newsreader leading-[1.1]">
          <span className="text-white">by </span>
          <em className="text-[#D1FF52] italic">
            Oriture Team
          </em>
        </h2>
      </div>

      <div className="flex flex-col relative w-full overflow-hidden" key={`mobile-view-${project.id}`}>
        {/* Render only the first image */}
        <div className="w-full mb-6 animate-in fade-in zoom-in-95 duration-500">
          <div
            className="w-full rounded-lg overflow-hidden shadow-2xl"
            style={{ aspectRatio: "4/3" }}
          >
            <img
              src={project.images[0]}
              alt={`${project.title || 'Project'} image`}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <img
              src={project.logo}
              alt={project.client || 'Client'}
              className="h-8 object-contain"
            />
            <span className="text-xs font-medium text-[#D1FF52] bg-white/10 border border-transparent px-3 py-1 rounded-full rounded-bl-none">
              {project.timeAgo}
            </span>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full border border-[#D1FF52] text-[#D1FF52] hover:bg-[#D1FF52] hover:text-black transition-all flex items-center justify-center p-1"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-8 h-8 rounded-full border border-[#D1FF52] text-[#D1FF52] hover:bg-[#D1FF52] hover:text-black transition-all flex items-center justify-center p-1"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/80 text-sm leading-[1.60] mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              className="text-xs text-white/80 bg-white/10 border border-transparent px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-b from-white/10 to-transparent rounded-2xl p-4">
          <p className="text-white/80 text-xs leading-[1.60] mb-4">
            "{project.testimonial.text}"
          </p>
          <div className="flex items-center gap-3">
            <img
              src={project.testimonial.avatar}
              alt={project.testimonial.author}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex flex-col justify-center">
              <p className="text-white text-xs font-newsreader italic mb-[1px]">
                {project.testimonial.author}
              </p>
              <p className="text-white/40 text-[9px] uppercase tracking-wider">{project.testimonial.role}</p>
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

          {/* RIGHT — scrollable images (50%) - Desktop Only */}
          <div className="hidden lg:block w-[50%]">
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
                {/* Images for this project */}
                {project.images.map((src, iIdx) => (
                  <div
                    key={iIdx}
                    className="w-full mb-8 lg:mb-12"
                  >
                    <div
                      className="w-full rounded-lg overflow-hidden shadow-2xl"
                      style={{ aspectRatio: "4/3" }}
                    >
                      <img
                        src={src}
                        alt={`${project.title || 'Project'} image ${iIdx + 1}`}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile version (Mobile Only) */}
          <div className="block lg:hidden w-full">
             <MobileCarousel projects={PROJECTS} />
          </div>

        </div>
      </div>
    </section>
  );
}