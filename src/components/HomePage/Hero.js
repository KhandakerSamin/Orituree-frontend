import { MoveUpRight } from "lucide-react";
import Image from "next/image";

const row1 = [1, 2, 3, 4, 5, 6, 7];
const row2 = [8, 9, 10, 11, 12, 13];

export default function Hero() {
  return (
    <section className="relative flex flex-col min-h-[calc(100vh)] w-full overflow-hidden bg-black">

      {/* ── LAYER 0: Base radial glow — large, soft, centered-low, muted indigo */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 120% 70% at 50% 100%, #3B2A7A 0%, #1E1240 30%, #0A0618 60%, transparent 100%)`,
        }}
      />

      {/* ── LAYER 1: Second radial — adds left-leaning blue-purple depth */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 90% 55% at 40% 95%, #4A2E9E 0%, #2B1860 40%, transparent 75%)`,
          opacity: 0.75,
        }}
      />

      {/* ── LAYER 2: SVG wave shape with heavy blur — soft feathered edge */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="absolute bottom-0 w-full"
          style={{ height: "100%", filter: "blur(40px)" }}
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveBlur" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%"   stopColor="#7B5FD4" stopOpacity="0.9" />
              <stop offset="25%"  stopColor="#5A3EAA" stopOpacity="0.7" />
              <stop offset="50%"  stopColor="#341E70" stopOpacity="0.4" />
              <stop offset="75%"  stopColor="#160B35" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,900 L0,340 C180,370 350,580 700,530 C1050,480 1280,250 1440,280 L1440,900 Z"
            fill="url(#waveBlur)"
          />
        </svg>
      </div>

      {/* ── LAYER 3: Heavy noise grain — large, dense, very visible */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.55,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
        }}
      />

      {/* ── LAYER 4: Finer grain second pass */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0.30,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='80' height='80' filter='url(%23n2)'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
          mixBlendMode: "soft-light",
        }}
      />

      {/* ── LAYER 5: Top vignette — keeps top deep black, fades into color below */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #000000 0%, #000000 18%, transparent 55%)",
        }}
      />

      {/* ── ALL CONTENT: z-10 */}

      {/* HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 sm:px-6 lg:px-8 text-center pt-35 pb-4 sm:pt-30 sm:pb-8 min-h-[50vh]">

        <h1 className="font-newsreader text-[38px] sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-[1.15] max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl">
          Designing Digital Products
          <br />
          <span>That Move </span>
          <span className="italic text-[#D1FF52]">business forward!</span>
        </h1>

        <p className="relative z-10 text-white/70 text-base sm:text-md md:text-lg max-w-sm sm:max-w-lg md:max-w-2xl mt-3 sm:mt-5 leading-relaxed">
          We craft scalable, user-first digital experiences for startups and growing
          companies worldwide.
        </p>

        {/* CTA — Desktop */}
        <div className=" flex items-center space-x-2 mt-7 md:mt-5 group">
          <button className="bg-[#D1FF52] text-black px-5 py-3 rounded-full text-base font-medium cursor-pointer ">
            Start Your Project
          </button>
          <button className="border border-[#D1FF52]/50 bg-transparent p-3 rounded-tr-full rounded-b-full transition-all duration-300 group-hover:rounded-t-full group-hover:rounded-bl-none group-hover:bg-[#D1FF52] cursor-pointer">
            <MoveUpRight className="w-5 h-5 group-hover:rotate-45 text-[#D1FF52] group-hover:text-black" />
          </button>
        </div>



        
      </div>

      {/* BRAND SECTION */}
      <div className="relative z-10 w-full pb-35 pt-4 px-4 sm:px-8">
        <p className="text-center text-sm uppercase text-white/70 mb-4 tracking-wide">
          we help to{" "}
          <span className="text-[#D1FF52] font-medium">structure</span>
        </p>

        {/* Row 1 — Right to Left */}
        <div
          className="relative mb-5 max-w-5xl mx-auto"
          style={{
            overflow: 'hidden',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '24px',
              width: 'fit-content',
              animation: 'scrollRTL 60s linear infinite',
            }}
          >
            {[...row1, ...row1, ...row1, ...row1].map((n, i) => (
              <div key={`r1-${n}-${i}`} className="flex-shrink-0 flex items-center justify-center h-7 sm:h-8">
                <Image
                  src={`/brand${n}.png`}
                  alt={`Brand ${n}`}
                  width={105}
                  height={35}
                  className="h-full w-auto object-contain max-w-[100px] sm:max-w-[105px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — Left to Right */}
        <div
          className="relative max-w-4xl mx-auto"
          style={{
            overflow: 'hidden',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '24px',
              width: 'fit-content',
              animation: 'scrollLTR 60s linear infinite',
            }}
          >
            {[...row2, ...row2, ...row2, ...row2].map((n, i) => (
              <div key={`r2-${n}-${i}`} className="flex-shrink-0 flex items-center justify-center h-7 sm:h-8">
                <Image
                  src={`/brand${n}.png`}
                  alt={`Brand ${n}`}
                  width={105}
                  height={35}
                  className="h-full w-auto object-contain max-w-[100px] sm:max-w-[105px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollRTL {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollLTR {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Mobile scroll indicator */}
        <div className="absolute bottom-7 md:hidden left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] uppercase tracking-widest text-white/70">Scroll</span>
            <div className="w-px h-7 bg-gradient-to-b from-[#D1FF52]/60 via-purple-400/40 to-transparent" />
          </div>
        </div>

    </section>
  );
}