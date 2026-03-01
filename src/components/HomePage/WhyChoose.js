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
          background: `linear-gradient(to bottom, transparent 0%, transparent 50%, #000000 100%)`,
        }}
      />

      {/* Noise grain */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.45,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
        }}
      />

      {/* ── Content — centered column layout */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">

        {/* Heading — centered */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-newsreader text-3xl sm:text-4xl lg:text-5xl font-normal italic leading-[1.2] text-white">
            <span className="not-italic" style={{ color: "#D1FF52" }}>Oriture</span>{" "}
            is your
            <br />
            perfect choice in terms of
          </h2>
        </div>

        {/* Cards — single column, centered */}
        <div className="flex flex-col items-center gap-5 sm:gap-6">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="group relative w-full max-w-xl rounded-2xl px-6 py-5 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Icon + Text */}
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 mt-1 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "#D1FF52" }}
                >
                  <MoveUpRight className="w-4 h-4 text-black" />
                </div>

                <div>
                  <h3 className="font-newsreader text-xl sm:text-2xl font-normal text-white leading-snug mb-2 whitespace-pre-line">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Subtle hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(209,255,82,0.04) 0%, transparent 60%)",
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}