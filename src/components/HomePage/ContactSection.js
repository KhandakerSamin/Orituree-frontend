"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ChevronDown, CircleCheckBig } from "lucide-react";
import Image from "next/image";

const services = [
  "UI/UX Design",
  "Web Development",
  "Mobile App",
  "Branding",
  "Consulting",
];

const budgets = [
  "< $200",
  "$200 – $500",
  "$500 – $1,000",
  "$1,000 – $5,000",
  "$5000 +",
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
      <label className="text-white text-sm sm:text-base pb-1">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className={`w-full bg-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none transition-colors flex items-center justify-between cursor-pointer ${
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

  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("animating");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("send failed");
    } catch (err) {
      console.error(err);
    }

    // Keep animating for the full flight duration, then show sent
    setTimeout(() => setStatus("sent"), 2200);
  };

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const setField = (k) => (v) => setForm((p) => ({ ...p, [k]: v }));

  const inputCls =
    "w-full bg-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder-white/60 outline-none focus:border-white/25 transition-colors";

  return (
    <section id="contact" className="relative w-full overflow-hidden py-16 sm:py-28 px-5 sm:px-6 flex items-center justify-center min-h-[auto] sm:min-h-screen">
      <style dangerouslySetInnerHTML={{__html: `
        /* ── Letter slide-in on mount ── */
        .sbtn-letter {
          display: inline-block;
          opacity: 0;
          animation: sbtnSlideIn 0.8s ease forwards calc(var(--i) * 0.03s);
        }
        /* Hover: wave bounce on each letter */
        .sbtn-main:hover .sbtn-letter {
          animation: sbtnWave 0.5s ease forwards calc(var(--i) * 0.02s) !important;
          opacity: 1;
        }
        /* ── Plane icon ── */
        .sbtn-plane {
          transition: transform 0.3s ease;
          position: relative;
          z-index: 2;
        }
        .sbtn-main:hover .sbtn-plane {
          transform: rotate(45deg) scale(1.25);
        }
        /* ── Contrail (pseudo on plane wrapper) ── */
        .sbtn-plane-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .sbtn-plane-wrap::before {
          content: "";
          position: absolute;
          top: 50%;
          margin-top: -1px;
          height: 2px;
          width: 0;
          right: calc(100% + 3px);
          background: linear-gradient(to right, transparent, rgba(0,0,0,0.45));
        }
        /* ── Spinning outline glow on hover ── */
        .sbtn-outline {
          position: absolute;
          border-radius: inherit;
          overflow: hidden;
          z-index: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
          inset: -2px -3.5px;
          pointer-events: none;
        }
        .sbtn-outline::before { content: ""; }
        .sbtn-main:hover .sbtn-outline { opacity: 0; }
        /* ── Animating pill ── */
        .sbtn-anim-pill {
          position: relative;
          display: inline-flex;
          align-items: center;
          background: #D1FF52;
          border-radius: 9999px;
          overflow: hidden;
          height: 46px;
          width: 260px;
          padding: 0 22px;
        }
        .sbtn-fly-letters {
          display: flex;
          align-items: center;
          color: black;
          font-size: 14px;
          font-weight: 600;
          pointer-events: none;
          position: relative;
          z-index: 1;
        }
        .sbtn-fly-letters span {
          display: inline-block;
          animation: sbtnGone 0.45s ease forwards calc(var(--i) * 0.025s);
        }
        .sbtn-fly-plane {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          display: flex;
          align-items: center;
          pointer-events: none;
          z-index: 3;
          animation: sbtnFlyAcross 2.2s cubic-bezier(0.25,0.1,0.25,1) forwards;
        }
        /* ── Sent state ── */
        .sbtn-check-icon {
          opacity: 0;
          animation: sbtnAppear 0.7s ease forwards 0.05s;
          flex-shrink: 0;
        }
        .sbtn-success-letter {
          display: inline-block;
          opacity: 0;
          animation: sbtnSlideIn 0.7s ease forwards calc(var(--i) * 0.028s);
        }
        /* ── Keyframes ── */
        @keyframes sbtnSlideIn {
          0%   { opacity: 0; transform: translateY(-20px) translateX(4px) rotate(-90deg); filter: blur(5px); }
          30%  { opacity: 1; transform: translateY(3px) rotate(0); filter: blur(0); }
          50%  { opacity: 1; transform: translateY(-2px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes sbtnWave {
          30%  { opacity: 1; transform: translateY(4px) translateX(0) rotate(0); }
          50%  { opacity: 1; transform: translateY(-3px) translateX(0) rotate(0); }
          100% { opacity: 1; transform: translateY(0) translateX(0) rotate(0); }
        }
        @keyframes sbtnGone {
          from { opacity: 1; }
          to   { opacity: 0; transform: translateX(5px) translateY(18px); filter: blur(5px); }
        }
        @keyframes sbtnFlyAcross {
          0%   { transform: translateX(-36px) rotate(-8deg); opacity: 0; }
          8%   { opacity: 1; transform: translateX(-10px) rotate(-8deg); }
          20%  { transform: translateX(30px) rotate(0deg); }
          85%  { opacity: 1; transform: translateX(230px) rotate(0deg); }
          100% { transform: translateX(290px) rotate(8deg); opacity: 0; }
        }
        @keyframes sbtnAppear {
          0%   { opacity: 0; transform: scale(3.5) rotate(-40deg); filter: blur(4px); }
          35%  { opacity: 1; transform: scale(0.7); filter: blur(1px); }
          55%  { opacity: 1; transform: scale(1.15); filter: blur(0); }
          100% { opacity: 1; transform: scale(1); }
        }

      `}} />

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
      <div className="relative z-10 max-w-[1300px] w-full mx-auto flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-24 items-start">

        {/* Left column */}
        <div className="w-full lg:w-[38%] flex-shrink-0 pt-0 sm:pt-2">
          <h2
            className="font-newsreader text-white font-normal leading-snug mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-[52px]"
          >
            Ready to turn your<br />
            idea into a{" "}
            <em className="italic" style={{ color: "#D1FF52" }}>
              scalable product?
            </em>
          </h2>

          <p className="text-white/70 text-sm leading-relaxed mb-8 sm:mb-10 max-w-[340px]">
            Book a discovery call with our team.<br />
            We'll align on strategy, define the roadmap, present a tailored proposal — and begin building.
          </p>

          {/* Person card */}
          <div className="flex flex-col gap-3">
            <div
              className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-lg overflow-hidden"
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
              <p className="text-white font-newsreader italic text-sm sm:text-base leading-tight">Md Abul Hashem</p>
              <p className="text-white/50 text-xs mt-0.5">Design Lead, Oriure</p>
            </div>
          </div>
        </div>

        {/* Right column — form */}
        <div className="w-full lg:w-[62%] flex flex-col gap-3 sm:gap-4">


            <div className="flex flex-col gap-1.5">
            <label className="text-white text-base pb-1.5">Your Name*</label>
            <input
              className={inputCls}
              placeholder="John Doe"
              value={form.name}
              onChange={set("name")}
            />
          </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-white text-sm sm:text-base pb-1.5">Phone</label>
              <input
                className={inputCls}
                placeholder="+1 212-555-0178"
                value={form.phone}
                onChange={set("phone")}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-white text-sm sm:text-base pb-1.5">Email*</label>
              <input
                className={inputCls}
                placeholder="yourname@example.com"
                value={form.email}
                onChange={set("email")}
              />
            </div>
          </div>

          {/* Service + Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <label className="text-white text-sm sm:text-base pb-1.5">Project Details</label>
            <textarea
              className={inputCls + " resize-none min-h-[100px]"}
              placeholder="I want to redesign my website"
              value={form.details}
              onChange={set("details")}
            />
          </div>

          {/* Submit */}
          <div className="pt-1">

            {/* ── IDLE: plane icon + wave letters + spinning outline glow ── */}
            {status === 'idle' && (
              <div className="flex items-center gap-2 group/submit w-fit" onClick={handleSubmit}>

                <button
                  type="button"
                  className="sbtn-main relative bg-[#D1FF52] text-black rounded-full text-sm font-semibold cursor-pointer flex items-center gap-2 overflow-hidden"
                  style={{ padding: '12px 22px', height: '46px' }}
                >
                  {/* Spinning border glow on hover */}
                  <div className="sbtn-outline" />

                  {/* Paper-plane icon */}
                  <div className="sbtn-plane-wrap">
                    <svg
                      className="sbtn-plane"
                      width="17" height="17" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z" fill="rgba(0,0,0,0.85)" />
                      <path d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z" fill="rgba(0,0,0,0.85)" />
                    </svg>
                  </div>

                  {/* Letters — wave on hover, slide-in on mount */}
                  <div className="flex relative z-10">
                    {"Send\u00A0Message".split('').map((char, i) => (
                      <span key={i} className="sbtn-letter" style={{ '--i': i }}>
                        {char}
                      </span>
                    ))}
                  </div>
                </button>

                {/* Arrow button */}
                <button
                  type="button"
                  className="border border-[#D1FF52]/50 bg-transparent p-3 rounded-tr-full rounded-b-full transition-all duration-300 group-hover/submit:rounded-t-full group-hover/submit:rounded-bl-none group-hover/submit:bg-[#D1FF52] cursor-pointer"
                >
                  <ArrowUpRight className="w-4 h-4 text-[#D1FF52] group-hover/submit:rotate-45 group-hover/submit:text-black transition-all duration-300" />
                </button>

              </div>
            )}

            {/* ── ANIMATING: letters fade out, plane flies clearly L → R ── */}
            {status === 'animating' && (
              <div className="sbtn-anim-pill">
                {/* Letters fading out */}
                <div className="sbtn-fly-letters">
                  {"Send\u00A0Message".split('').map((char, i) => (
                    <span key={i} style={{ '--i': i }}>{char}</span>
                  ))}
                </div>

                {/* Plane — enters from left edge, exits from right edge */}
                <div className="sbtn-fly-plane">
                  {/* Contrail trail behind the plane */}
                  <div style={{
                    position: 'absolute',
                    right: '100%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    height: '2px',
                    width: '36px',
                    background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.35))',
                  }} />
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z" fill="rgba(0,0,0,0.85)" />
                    <path d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z" fill="rgba(0,0,0,0.85)" />
                  </svg>
                </div>
              </div>
            )}

            {/* ── SENT: CircleCheckBig + letter-by-letter reveal ── */}
            {status === 'sent' && (
              <div className="inline-flex items-center gap-2.5 bg-[#D1FF52] rounded-full px-5 py-3">
                <CircleCheckBig className="sbtn-check-icon w-[17px] h-[17px] text-black" />
                <div className="flex text-black text-sm font-semibold whitespace-nowrap">
                  {"Thanks for contacting us!".split('').map((char, i) => (
                    <span key={i} className="sbtn-success-letter" style={{ '--i': i }}>
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}