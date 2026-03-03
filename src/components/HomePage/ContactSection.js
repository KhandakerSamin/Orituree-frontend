"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";

const services = [
  "UI/UX Design",
  "Web Development",
  "Mobile App",
  "Branding",
  "Consulting",
];

const budgets = [
  "< $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
];

/* ── Custom Dropdown ── */
function CustomDropdown({ label, placeholder, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex flex-col gap-1.5" ref={ref}>
      <label className="text-white text-base pb-1.5">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className={`w-full bg-white/10 rounded-sm px-4 py-3 text-base outline-none transition-colors flex items-center justify-between cursor-pointer ${
            value ? "text-white" : "text-white/60"
          } ${open ? "ring-1 ring-white/20" : ""}`}
        >
          <span className="truncate">{value || placeholder}</span>
          <ChevronDown
            className={`w-4 h-4 text-white/40 transition-transform duration-200 flex-shrink-0 ml-2 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`absolute z-50 top-full left-0 right-0 mt-1.5 bg-[#0e0e14]/98 backdrop-blur-xl border border-white/10 rounded-xl py-1.5 shadow-2xl shadow-black/70 transition-all duration-200 origin-top ${
            open
              ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"
          }`}
        >
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-150 flex items-center justify-between group/opt ${
                value === opt
                  ? "text-[#D1FF52] bg-white/5"
                  : "text-white/65 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{opt}</span>
              {value === opt && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#D1FF52] flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "", company: "", phone: "", email: "",
    service: "", budget: "", details: "",
  });

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const setField = (k) => (v) => setForm((p) => ({ ...p, [k]: v }));

  const inputCls =
    "w-full bg-white/10 rounded-sm px-4 py-3 text-white text-base placeholder-white/60 outline-none focus:border-white/25 transition-colors";

  return (
    <section className="relative w-full overflow-hidden py-20 px-6 flex items-center justify-center min-h-screen">

      {/* ── GRADIENT LAYERS ── */}

      {/* Base: pure black */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black" />

      {/* Layer 0: diagonal linear — vivid top-left → black */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #2e1a72 0%, #1a0e42 22%, #0a0520 45%, #000000 65%, #000000 100%)",
          opacity: 0.85,
        }}
      />

      {/* Layer 1: large bloom radial — top-left corner */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 58% at 0% 0%, rgba(181,169,254,0.38) 0%, rgba(120,90,230,0.22) 30%, transparent 62%)",
        }}
      />

      {/* Layer 2: tight vivid punch — right at corner */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 35% 30% at 0% 0%, rgba(160,130,255,0.45) 0%, rgba(100,70,220,0.2) 45%, transparent 68%)",
        }}
      />

      {/* Layer 3: blurred SVG blob — top-left quadrant, strong fill */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ filter: "blur(60px)" }}
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ctaBlob" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%"   stopColor="#B5A9FE" stopOpacity="0.5"  />
              <stop offset="35%"  stopColor="#6d50d0" stopOpacity="0.22" />
              <stop offset="70%"  stopColor="#2a1260" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0"    />
            </linearGradient>
          </defs>
          <path
            d="M0,0 L520,0 C560,60 580,180 520,300 C450,430 220,500 0,540 Z"
            fill="url(#ctaBlob)"
          />
        </svg>
      </div>

      {/* Layer 4: hard black — bottom 25% */}
      <div
        className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
        style={{
          height: "25%",
          background: "linear-gradient(to top, #000000 60%, transparent 100%)",
        }}
      />

      {/* Layer 5: hard black — right 35% */}
      <div
        className="absolute top-0 right-0 bottom-0 z-0 pointer-events-none"
        style={{
          width: "35%",
          background: "linear-gradient(to left, #000000 55%, transparent 100%)",
        }}
      />

      {/* Grain — heavy */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.45,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Grain — fine */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.22,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='80' height='80' filter='url(%23n2)'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
          mixBlendMode: "soft-light",
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-[1300px] w-full mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

        {/* Left column */}
        <div className="w-full lg:w-[50%] flex-shrink-0 pt-2">
          <h2
            className="font-newsreader text-white font-normal leading-snug mb-6"
            style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
          >
            Ready to turn your<br />
            idea into a{" "}
            <em className="italic" style={{ color: "#D1FF52" }}>
              scalable product?
            </em>
          </h2>

          <p className="text-white text-sm leading-relaxed mb-10 max-w-[340px]">
            Book a discovery call with our team.<br />
            We'll align on strategy, define the roadmap, present a tailored proposal — and begin building.
          </p>

          {/* Person card */}
          <div className="flex flex-col gap-3">
            <div
              className="relative w-[220px] h-[220px] rounded-lg overflow-hidden"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <Image
                src="/mohon.png"
                alt="Md Abul Hashem"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-white font-newsreader italic text-base leading-tight">Md Abul Hashem</p>
              <p className="text-white/50 text-xs mt-0.5">Design Lead, Oriure</p>
            </div>
          </div>
        </div>

        {/* Right column — form */}
        <div className="w-full lg:w-[58%] flex flex-col gap-5">

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-white text-base pb-1.5">Your Name*</label>
            <input
              className={inputCls}
              placeholder="John Doe"
              value={form.name}
              onChange={set("name")}
            />
          </div>

          {/* Company */}
          <div className="flex flex-col gap-1.5">
            <label className="text-white text-base pb-1.5">Company Name</label>
            <input
              className={inputCls}
              placeholder="Google Inc."
              value={form.company}
              onChange={set("company")}
            />
          </div>

          {/* Phone + Email */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-white text-base pb-1.5">Phone</label>
              <input
                className={inputCls}
                placeholder="+1 212-555-0178"
                value={form.phone}
                onChange={set("phone")}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-white text-base pb-1.5">Email*</label>
              <input
                className={inputCls}
                placeholder="yourname@example.com"
                value={form.email}
                onChange={set("email")}
              />
            </div>
          </div>

          {/* Service + Budget */}
          <div className="grid grid-cols-2 gap-4">
            <CustomDropdown
              label="Service(s) you need*"
              placeholder="Select your service"
              options={services}
              value={form.service}
              onChange={setField("service")}
            />
            <CustomDropdown
              label="Project budget*"
              placeholder="Select your range"
              options={budgets}
              value={form.budget}
              onChange={setField("budget")}
            />
          </div>

          {/* Project details */}
          <div className="flex flex-col gap-1.5">
            <label className="text-white text-base pb-1.5">Project Details</label>
            <textarea
              className={inputCls + " resize-none min-h-[100px]"}
              placeholder="I want to redesign my website"
              value={form.details}
              onChange={set("details")}
            />
          </div>

          {/* Submit */}
          <div className="flex items-center gap-2 pt-1 group/submit">
            <button
              className="bg-[#D1FF52] text-black px-6 py-3 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300"
            >
              Let's Connect
            </button>
            <button className="border border-[#D1FF52]/50 bg-transparent p-3 rounded-tr-full rounded-b-full transition-all duration-300 group-hover/submit:rounded-t-full group-hover/submit:rounded-bl-none group-hover/submit:bg-[#D1FF52] cursor-pointer">
              <ArrowUpRight className="w-4 h-4 text-[#D1FF52] group-hover/submit:rotate-45 group-hover/submit:text-black transition-all duration-300" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}