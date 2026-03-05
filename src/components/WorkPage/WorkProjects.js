"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Layers, 
  Brain, 
  GraduationCap, 
  UtensilsCrossed, 
  Mic, 
  ShoppingCart, 
  Music, 
  Car, 
  Zap, 
  Leaf, 
  Newspaper, 
  Users, 
  Megaphone, 
  Building2 
} from "lucide-react";
import projectsData from "@/data/projectsData";

// Icon mapping for each category
const CATEGORY_ICONS = {
  "All Industries": Layers,
  "AI": Brain,
  "EdTech": GraduationCap,
  "Restaurant": UtensilsCrossed,
  "Podcast": Mic,
  "E-Commerce": ShoppingCart,
  "Music": Music,
  "Automobile": Car,
  "Productivity": Zap,
  "Green Tech": Leaf,
  "News": Newspaper,
  "Association": Users,
  "Marketing": Megaphone,
  "Agency": Building2,
};

// Build PROJECTS array from centralized data
export const PROJECTS = projectsData.map((p) => ({
  id: p.id,
  category: p.category,
  workPage: {
    image: p.homepage.homepageThumbnail,
    heading: p.homepage.projectTitle,
    description: p.homepage.homepageDetail,
    tags: p.homepage.tags || p.homepage.keywords,
  },
  hasDetail: !!p.detailPage,
}));

// Tabs arranged to balance row widths (mix of long and short labels)
const REAL_TABS = [
  { label: "All Industries", key: "All Industries" },
  { label: "AI", key: "AI" },
  { label: "EdTech", key: "EdTech" },
  { label: "Restaurant", key: "Restaurant" },
  { label: "Podcast", key: "Podcast" },
  { label: "E-Commerce", key: "E-Commerce" },
  { label: "Music", key: "Music" },
  { label: "Automobile", key: "Automobile" },
  { label: "Productivity", key: "Productivity" },
  { label: "Green Tech", key: "Green Tech" },
  { label: "News", key: "News" },
  { label: "Association", key: "Association" },
  { label: "Marketing", key: "Marketing" },
  { label: "Agency", key: "Agency" },
];

function getCount(key) {
  if (key === "All Industries") return PROJECTS.length;
  return PROJECTS.filter((p) => p.category === key).length;
}

// --- PROJECT CARD ---
function ProjectCard({ project, index, shouldAnimate }) {
  const { workPage } = project;
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) {
      setVisible(true);
      return;
    }
    
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [shouldAnimate]);

  // Reset visibility when shouldAnimate changes
  useEffect(() => {
    if (shouldAnimate) {
      setVisible(false);
    }
  }, [project.id]);

  const cardContent = (
    <div
      ref={cardRef}
      className="group cursor-pointer w-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(44px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${Math.min(index, 3) * 100}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${Math.min(index, 3) * 100}ms`,
      }}
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10]">
        <img
          src={workPage.image}
          alt={workPage.heading}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-violet-600/15">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D1FF52]">
            <ArrowUpRight className="w-5 h-5 text-black" />
          </div>
        </div>
      </div>

      {/* Text below image */}
      <div className="pt-3 pb-0">
        <h3 className="text-white text-lg font-normal leading-snug mb-1.5 group-hover:text-[#D1FF52] transition-colors duration-300 font-serif">
          {workPage.heading}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
          {workPage.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {workPage.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-400 rounded-full px-2.5 py-1 bg-white/5 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (project.hasDetail) {
    return <Link href={`/work/${project.id}`}>{cardContent}</Link>;
  }
  return cardContent;
}

// --- MAIN COMPONENT ---
export default function WorkProjects() {
  const [activeTab, setActiveTab] = useState("All Industries");
  const [displayedProjects, setDisplayedProjects] = useState(PROJECTS);
  const [rightVisible, setRightVisible] = useState(true);
  const [sectionInView, setSectionInView] = useState(false);
  const [shouldAnimateCards, setShouldAnimateCards] = useState(false);
  
  const sectionRef = useRef(null);
  const rightPanelRef = useRef(null);

  // Observe section entering viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !sectionInView) {
          setSectionInView(true);
          // Delay card animations to start after section is in view
          setTimeout(() => {
            setShouldAnimateCards(true);
          }, 300);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [sectionInView]);

  const handleTabChange = useCallback((key, e) => {
    if (key === activeTab) return;

    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const sectionTop = sectionRef.current?.getBoundingClientRect().top + window.scrollY || 0;
    const stickyTriggerScroll = sectionTop + 16; // Position where tabs become sticky
    
    // Fade out right panel
    setRightVisible(false);
    
    setTimeout(() => {
      setActiveTab(key);
      const newProjects = key === "All Industries" 
        ? PROJECTS 
        : PROJECTS.filter((p) => p.category === key);
      setDisplayedProjects(newProjects);
      
      // Scroll to sticky trigger point - tabs stay in place, cards reset
      window.scrollTo({ top: Math.max(0, stickyTriggerScroll), behavior: "smooth" });
      
      // Reset and trigger card animations
      setShouldAnimateCards(false);
      setTimeout(() => {
        setRightVisible(true);
        setShouldAnimateCards(true);
      }, 50);
    }, 200);
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black"
    >

      {/* Grain overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.09] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* OUTER WRAPPER - 1350px max width, no padding */}
      <div className="relative z-10 mx-auto max-w-[1370px] py-28 lg:py-36">
        
        {/* MAIN FLEX CONTAINER - 35% left, 20% gap, 45% right */}
        <div className="flex flex-col lg:flex-row items-start">
          
          {/* LEFT PANEL - 35% width, sticky to screen */}
          <div 
            className="hidden lg:flex flex-col w-full lg:w-[35%] sticky top-32 self-start pl-8 h-fit"
          >
            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-white font-normal leading-tight font-serif text-3xl lg:text-4xl">
                Digital Work That
                <br />
                Moves{" "}
                <em className="text-[#D1FF52] italic font-serif">
                  businesses forward!
                </em>
              </h2>
            </div>

            {/* TABS - Dynamic width, wrapped in grid-like layout */}
            <div className="flex flex-wrap gap-2 mb-6">
              {REAL_TABS.map(({ label, key }) => {
                const count = getCount(key);
                const isActive = activeTab === key;
                const IconComponent = CATEGORY_ICONS[key] || Layers;
                return (
                  <button
                    key={key}
                    onClick={(e) => handleTabChange(key, e)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-300 cursor-pointer"
                    style={{
                      background: "linear-gradient(270deg, rgba(109, 85, 255, 0.05) 0%, rgba(109, 85, 255, 0.1) 100%)",
                    }}
                  >
                    {/* Category icon */}
                    <IconComponent 
                      className={`w-3.5 h-3.5 flex-shrink-0 transition-colors duration-300 ${isActive ? "text-[#D1FF52]" : "text-gray-600"}`}
                    />
                    
                    <span
                      className={`text-xs font-medium whitespace-nowrap transition-colors duration-300 ${isActive ? "text-white" : "text-gray-500"}`}
                    >
                      {label}
                    </span>
                    
                    {/* Count badge */}
                    <span
                      className={`
                        w-5 h-5 text-[10px] font-bold rounded-full flex-shrink-0 
                        flex items-center justify-center transition-all duration-300
                        ${isActive 
                          ? "bg-[#D1FF52] text-black" 
                          : "bg-transparent text-white/60 border border-[#D1FF52]/20"
                        }
                      `}
                    >
                      {count < 10 ? `0${count}` : count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* CTA CARD */}
            <div
              className="rounded-2xl p-5 flex flex-col gap-4 backdrop-blur-xl"
              style={{
                background: "linear-gradient(360deg, rgba(0,0,0,0.2) 0%, rgba(109,85,255,0.2) 100%)",
              }}
            >
              {/* Avatar stack */}
              <div className="flex -space-x-3">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full overflow-hidden bg-gray-700 border-2 border-white/15 relative"
                    style={{ zIndex: 3 - i }}
                  >
                    <img src="/avatar.png" alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              
              <p className="text-white text-sm font-medium leading-snug">
                Find the right solution for you now
              </p>
              
              <div className="flex items-center gap-2 group/cta mt-2">
                <a
                  href="/contact"
                  className="border border-[#D1FF52]/50 text-white group-hover/cta:text-black group-hover/cta:bg-[#D1FF52] group-hover/cta:border-[#D1FF52] bg-transparent px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 text-sm font-medium whitespace-nowrap"
                >
                  Book a Quick Call
                </a>
                 <button className="border border-[#D1FF52]/50 bg-transparent p-2 sm:p-2.5 rounded-tr-full rounded-b-full group-hover/cta:rounded-t-full group-hover/cta:rounded-bl-none group-hover/cta:bg-[#D1FF52] transition-all duration-300 cursor-pointer">
                <ArrowUpRight className="w-4 h-4 text-[#D1FF52] group-hover/cta:rotate-45 group-hover/cta:text-black transition-all duration-300" />
              </button>
              </div>

            </div>
          </div>

          {/* GAP - 20% */}
          <div className="hidden lg:block w-[20%]" />

          {/* RIGHT PANEL - 45% width, min-height prevents scroll jump on tab change */}
          <div
            ref={rightPanelRef}
            className="w-full lg:w-[45%] pr-8 min-h-[100vh]"
            style={{
              transition: "opacity 0.25s ease-out",
              opacity: rightVisible ? 1 : 0,
            }}
          >
            {/* Mobile tab strip */}
            <div 
              className="flex lg:hidden gap-2 overflow-x-auto pb-4 mb-6"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {REAL_TABS.map(({ label, key }) => {
                const count = getCount(key);
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={(e) => handleTabChange(key, e)}
                    className={`
                      flex items-center gap-1.5 px-3 py-1.5 rounded-full flex-shrink-0 
                      text-sm whitespace-nowrap cursor-pointer transition-all duration-300
                      ${isActive 
                        ? "bg-violet-500/30 border border-[#D1FF52]/30 text-white" 
                        : "bg-white/[0.06] border border-white/[0.08] text-gray-500"
                      }
                    `}
                  >
                    {label}
                    <span
                      className={`
                        text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0
                        ${isActive ? "bg-[#D1FF52] text-black" : "bg-white/10 text-gray-500"}
                      `}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Project count label */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.07]">
              <p className="text-gray-500 text-xs uppercase tracking-widest font-medium">
                {activeTab === "All Industries" ? "All Projects" : activeTab}
              </p>
              <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-500 border border-white/[0.07]">
                {displayedProjects.length} projects
              </span>
            </div>

            {/* PROJECT CARDS */}
            <div className="flex flex-col gap-8">
              {displayedProjects.map((project, i) => (
                <ProjectCard
                  key={`${activeTab}-${project.id}`}
                  project={project}
                  index={i}
                  shouldAnimate={shouldAnimateCards}
                />
              ))}
            </div>

            {displayedProjects.length === 0 && (
              <div className="flex items-center justify-center py-24 text-gray-600 text-sm">
                No projects in this category yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}