"use client";
import { useState, useEffect, useRef, useCallback } from "react";
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

// --- ALL PROJECT DATA ---
export const PROJECTS = [
  { id: "liftup", category: "EdTech", workPage: { image: "/workhero1.png", heading: "LiftUP", description: "LiftUP Is An Edtech Platform Crafted To Empower Students With Skill-Based Learning, Bridging The Gap Between Classroom Theory And Real-World Application.", tags: ["EdTech", "E-Learning", "Dashboard"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "fahad-tutorial", category: "EdTech", workPage: { image: "/workhero2.png", heading: "Fahad Tutorial", description: "A Clean, Focused Learning Hub That Makes Course Discovery, Enrollment, And Progress Tracking Effortless For Students Of All Ages.", tags: ["EdTech", "Branding", "Web"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "kanonic-edtech", category: "EdTech", workPage: { image: "/workhero3.png", heading: "Kanonic", description: "Kanonic Delivers A Next-Generation Edtech Experience With Adaptive Learning Paths, Gamified Progress, And A Beautifully Minimal UI.", tags: ["EdTech", "SaaS", "UI/UX"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "nexus", category: "EdTech", workPage: { image: "/workhero1.png", heading: "Nexus", description: "Nexus Is A Collaborative Academic Platform Connecting Students, Mentors, And Institutions Under One Roof — Designed For Scale And Engineered For Clarity.", tags: ["EdTech", "Platform", "Collaboration"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "diu-ds-lab", category: "EdTech", workPage: { image: "/workhero2.png", heading: "DIU DS Lab", description: "A Research-Forward Digital Identity For DIU's Data Science Lab, Showcasing Faculty, Publications, And Student Projects In A Modern Interface.", tags: ["EdTech", "Research", "Branding"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "ap", category: "EdTech", workPage: { image: "/workhero3.png", heading: "AP", description: "AP Is An Advanced Preparation Platform Helping Students Ace Competitive Exams Through AI-Curated Practice Sets And Real-Time Performance Analytics.", tags: ["EdTech", "AI", "Analytics"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "eclips", category: "EdTech", workPage: { image: "/workhero1.png", heading: "Eclips", description: "Eclips Transforms Video-Based Learning With Smart Clip Annotations, Peer Discussions, And Instructor Tools That Turn Passive Watching Into Active Understanding.", tags: ["EdTech", "Video", "Web App"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "we-pilot", category: "AI", workPage: { image: "/workhero2.png", heading: "We Pilot", description: "We Pilot Is An AI Co-Pilot Platform That Automates Repetitive Business Workflows, Giving Teams A Smarter, Faster Way To Ship Work.", tags: ["AI", "SaaS", "Automation"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "kanonic-ai", category: "AI", workPage: { image: "/workhero3.png", heading: "Kanonic AI", description: "Kanonic's AI Layer Brings Intelligent Content Recommendations And Adaptive Assessments, Personalising Every Step Of The Educational Journey.", tags: ["AI", "EdTech", "Product"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "lgh", category: "Restaurant", workPage: { image: "/workhero1.png", heading: "Lebanese Grill House", description: "We Partnered With LGH To Craft A Clean, Elegant, And Conversion-Focused Digital Experience That Reflects Their Brand Identity And Elevates Their Online Presence.", tags: ["Hospitality", "Restaurant", "Branding"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "hf", category: "Restaurant", workPage: { image: "/workhero2.png", heading: "HF Restaurant", description: "HF Restaurant Needed A Digital Identity As Warm And Inviting As Their Food. We Created A Rich, Sensory-Forward Website That Drives Reservations And Builds Loyalty.", tags: ["Restaurant", "Branding", "Web"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "burger-buddy", category: "Restaurant", workPage: { image: "/workhero3.png", heading: "Burger Buddy", description: "Burger Buddy's Bold Personality Demanded A Website That Matched Its Energy. We Built A Fun, Fast-Loading Order-First Experience That Converts Cravings Into Clicks.", tags: ["Restaurant", "Fast Food", "UI/UX"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "trs", category: "Podcast", workPage: { image: "/workhero1.png", heading: "TRS", description: "TRS Is One Of The Region's Most Listened-To Podcasts. We Built A Hub That Centralises Episodes, Guest Bios, And Community Interaction Into A Single Sleek Experience.", tags: ["Podcast", "Media", "Branding"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "ucast", category: "Podcast", workPage: { image: "/workhero2.png", heading: "Ucast", description: "Ucast Is A Podcast Discovery And Hosting Platform Built For Independent Creators — Featuring Episode Management, Analytics, And A Creator-Centric Listening Interface.", tags: ["Podcast", "Platform", "SaaS"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "marshan", category: "E-Commerce", workPage: { image: "/workhero3.png", heading: "Marshan", description: "Marshan's E-Commerce Redesign Focused On Reducing Friction At Every Touchpoint — From Discovery To Checkout — Resulting In A 35% Uplift In Completed Purchases.", tags: ["E-Commerce", "Fashion", "UI/UX"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "tripking", category: "E-Commerce", workPage: { image: "/workhero1.png", heading: "TripKing", description: "TripKing Merges Travel Commerce With Editorial Storytelling — Letting Explorers Discover, Compare, And Book Experiences Through A Visually Immersive Storefront.", tags: ["E-Commerce", "Travel", "Web"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "golpo-app", category: "Music", workPage: { image: "/workhero2.png", heading: "Golpo App", description: "Golpo Is A Music Storytelling App Where Artists Share The Narratives Behind Their Songs. We Built An Intimate, Audio-First Interface That Deepens The Fan-Artist Connection.", tags: ["Music", "Mobile App", "Product"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "ray-task", category: "Automobile", workPage: { image: "/workhero3.png", heading: "Ray Task", description: "Ray Task Is An Automotive Service Scheduling Platform That Connects Car Owners With Certified Technicians — Streamlined Booking, Transparent Pricing, Zero Hassle.", tags: ["Automobile", "Marketplace", "App"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "dm-task", category: "Automobile", workPage: { image: "/workhero1.png", heading: "DM Task", description: "DM Task Brings Digital Efficiency To Automotive Fleet Management — Providing Real-Time Tracking, Maintenance Alerts, And Driver Analytics In One Unified Dashboard.", tags: ["Automobile", "SaaS", "Dashboard"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "gofast", category: "Automobile", workPage: { image: "/workhero2.png", heading: "GoFast", description: "GoFast Is A High-Performance EV Brand We Helped Launch Digitally — With A Cinematic Website That Captures The Speed, Technology, And Ambition Behind The Brand.", tags: ["Automobile", "EV", "Branding"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "tintype", category: "Productivity", workPage: { image: "/workhero3.png", heading: "Tintype", description: "Tintype Is A Minimalist Productivity Suite For Deep Workers — Featuring Distraction-Free Writing, Task Batching, And A Beautifully Calm Interface Built For Focus.", tags: ["Productivity", "SaaS", "Design"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "ghurni", category: "Green Tech", workPage: { image: "/workhero1.png", heading: "Ghurni", description: "Ghurni Is A Green-Tech Startup Revolutionising Waste Collection Logistics. We Designed A Data-Forward Platform That Makes Sustainability Tracking Actionable And Engaging.", tags: ["Green Tech", "Sustainability", "Platform"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "factwatch", category: "News", workPage: { image: "/workhero2.png", heading: "FactWatch", description: "FactWatch Is A Fact-Checking Platform Designed For Trust And Speed — Presenting Verified Information With Clear Source Attribution And An Easy-To-Parse Visual Hierarchy.", tags: ["News", "Media", "Web"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "trending-today", category: "News", workPage: { image: "/workhero3.png", heading: "Trending Today", description: "Trending Today Is A Real-Time News Aggregator Built For The Scroll Generation — Fast-Loading Cards, Smart Topic Filtering, And A Personalised Feed.", tags: ["News", "Media", "Mobile"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "nuo", category: "News", workPage: { image: "/workhero1.png", heading: "Nuo", description: "Nuo Reimagines Local News With A Community-Driven Editorial Model. We Created A Platform That Balances Journalistic Integrity With The Accessibility Of Modern Social Media.", tags: ["News", "Community", "Branding"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "pzs", category: "Association", workPage: { image: "/workhero2.png", heading: "PZS", description: "PZS Needed A Professional Digital Presence That Reflects The Prestige Of Its Membership. We Delivered A Refined, Content-Rich Portal For Events, Publications, And Governance.", tags: ["Association", "NGO", "Web"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "demand-agency", category: "Marketing", workPage: { image: "/workhero3.png", heading: "Demand Agency", description: "Demand Agency Is A Performance Marketing Firm. We Built Their Website As A Conversion Machine — Bold Copy, Sharp Visuals, And A Lead Funnel That Turns Visitors Into Clients.", tags: ["Marketing", "Agency", "Branding"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "codeflee", category: "Agency", workPage: { image: "/workhero1.png", heading: "Codeflee", description: "Codeflee Is A Dev Agency With Big Ambitions. We Crafted Their Brand Identity And Website To Communicate Technical Excellence While Remaining Approachable To Non-Technical Clients.", tags: ["Agency", "Tech", "Branding"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "syscomatic", category: "Agency", workPage: { image: "/workhero2.png", heading: "Syscomatic", description: "Syscomatic Delivers Enterprise Automation Solutions. Their New Digital Presence Positions Them As Category Leaders — Serious, Scalable, And Unmistakably Modern.", tags: ["Agency", "Automation", "Enterprise"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
  { id: "legit-banda", category: "Agency", workPage: { image: "/workhero3.png", heading: "Legit Banda", description: "Legit Banda Is A Creative Agency With Personality. We Helped Them Express Their Irreverent Identity Through A Portfolio Site That Doubles As A Statement Of Intent.", tags: ["Agency", "Creative", "Branding"] }, detailPage: { heroImage: null, overview: "", challenge: "", solution: "", images: [], tags: [] } },
];

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

  return (
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
              
              <div className="flex items-center gap-2">
                <a
                  href="/contact"
                  className="border border-[#D1FF52]/40 text-white hover:text-black hover:bg-[#D1FF52] hover:border-[#D1FF52] bg-transparent px-5 py-2 rounded-full transition-all duration-300 text-[14px] font-medium whitespace-nowrap"
                >
                  Book a Quick call
                </a>
                <button
                  className="border border-[#D1FF52]/40 bg-transparent p-2 rounded-tr-full rounded-b-full hover:rounded-t-full hover:rounded-bl-none hover:bg-[#D1FF52] transition-all duration-300 cursor-pointer group"
                >
                  <ArrowUpRight 
                    className="w-4 h-4 text-[#D1FF52] group-hover:text-black group-hover:rotate-45 transition-all duration-300" 
                  />
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