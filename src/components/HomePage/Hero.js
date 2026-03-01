import { MoveUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] sm:min-h-[700px] px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 mb-7 sm:mb-0 overflow-hidden bg-black">
      
      {/* Base gradient layer */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 150% 55% at 70% 90%, #5b48d9 0%, #3a2a9e 25%, #1a1040 55%, #000000 80%)`,
        }}
      />

      {/* Secondary glow — left edge bleed */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 50% 110% at 10% 120%, #3d2fa0 0%, transparent 65%)`,
        }}
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />

      {/* Main Heading */}
      <h1 className="relative z-10 text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] sm:leading-tight max-w-sm xs:max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        Designing Digital Products
        <br />
        <span className="inline-block mt-1 sm:mt-0">That Move </span>
        <span className="inline-block mt-1 sm:mt-0 italic text-[#D1FF52]">business forward!</span>
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 text-gray-100 text-base font-normal xs:text-lg sm:text-xl md:text-2xl max-w-sm xs:max-w-md sm:max-w-xl md:max-w-3xl mt-6 sm:mt-8 md:mt-10 leading-relaxed px-2 sm:px-4">
        We craft scalable, user-first digital experiences for startups and growing companies worldwide.
      </p>

      {/* CTA Buttons - Desktop */}
      <div className="relative z-10 hidden md:flex items-center space-x-4 mt-10 group">
        <button className="bg-[#D1FF52] text-black px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#D1FF52]/30 text-lg font-medium cursor-pointer hover:scale-105 active:scale-95">
          Start Your Project
        </button>
        <button className="border-2 border-black bg-transparent p-3 rounded-full transition-all duration-300 hover:bg-black/10 group-hover:rotate-45 cursor-pointer hover:scale-105 active:scale-95">
          <MoveUpRight className="w-6 h-6 text-black transition-colors duration-300" />
        </button>
      </div>

      {/* CTA Button - Mobile */}
      <div className="relative z-10 md:hidden mt-6 mb-16">
        <button className="flex items-center justify-center bg-[#D1FF52] text-black px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#D1FF52]/30 text-lg font-medium min-w-[160px] hover:scale-105 active:scale-95">
          Start Your Project
          <MoveUpRight className="w-5 h-5 ml-2 transition-transform duration-300" />
        </button>
      </div>

      {/* Scroll Indicator - Mobile Only */}
      <div className="absolute bottom-10  md:hidden left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-gray-800">
          <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#D1FF52] via-purple-400 to-transparent opacity-70"></div>
        </div>
      </div>
    </section>
  )
}