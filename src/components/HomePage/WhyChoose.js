import { MoveUpRight } from "lucide-react";

const reasons = [
  {
    title: "Fast &\nStructured Onboarding",
    desc: "Seamless communication with immediate project kickoff.",
  },
  {
    title: "On-Time, Every\nTime",
    desc: "Clear timelines. Reliable execution. Zero surprises.",
  },
  {
    title: "Flexible\nCollaboration Model",
    desc: "Dedicated team support with transparent, fixed monthly pricing.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent">

      {/* ── Continuous gradient — same colors as Hero */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 130% 60% at 50% 0%, #3B2A7A 0%, #1E1240 25%, #0A0618 50%, transparent 85%),
            radial-gradient(ellipse 80% 70% at 80% 20%, #4A2E9E 0%, #2B1860 30%, transparent 65%),
            radial-gradient(ellipse 60% 50% at 15% 30%, #341E70 0%, #160B35 30%, transparent 60%)
          `,
        }}
      />

      {/* Bottom fade to black */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.88) 75%, #000000 100%)`,
        }}
      />

      {/* Bottom-right purple glow — sits above the black fade */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 90% 65% at 80% 90%, #7B5FD4 0%, #4A2E9E 25%, #2B1860 50%, transparent 80%),
            radial-gradient(ellipse 70% 55% at 90% 100%, #5A3EAA 0%, #3B2A7A 30%, transparent 65%),
            radial-gradient(ellipse 50% 45% at 70% 95%, #6B4FC4 0%, #341E70 40%, transparent 70%)
          `,
          opacity: 1,
        }}
      />

      {/* Noise grain — matching Hero */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          opacity: 0.55,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Finer grain second pass — matching Hero */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          opacity: 0.30,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='80' height='80' filter='url(%23n2)'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
          mixBlendMode: "soft-light",
        }}
      />

      {/* ── Content — centered column layout */}
      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">

        {/* Heading — centered */}
        <div className="text-start mx-4 sm:mx-8 mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-newsreader text-2xl sm:text-3xl lg:text-5xl font-normal leading-[1.2] text-white">
            <span className="not-italic" style={{ color: "#D1FF52" }}>Oriture</span>{" "}
            is your
            <br />
            perfect choice in terms of
          </h2>
        </div>

        {/* Cards — single column, centered */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            {reasons.map((item, i) => (
              <div
                key={i}
                className="group relative w-full max-w-xl overflow-hidden rounded-t-2xl px-4 sm:px-6 py-4 sm:py-5 transition-all duration-300"
                style={{
            background: "linear-gradient(360deg, rgba(3, 2, 7, 0) 0%, rgba(255, 255, 255, 0.1) 100%)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            borderRight: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "none",
                }}
              >
                {/* Icon + Text */}
              <div className="relative z-10 flex items-start gap-3 sm:gap-4">
               
                <img src="/LogoIcon.svg" alt="icon" className="w-4 h-4 sm:w-5 sm:h-5 mt-1" />
                

                <div>
                  <h3 className="font-newsreader text-lg sm:text-2xl font-normal text-white leading-snug mb-1.5 sm:mb-2 whitespace-pre-line">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}