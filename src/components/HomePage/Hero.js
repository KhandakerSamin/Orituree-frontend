import { MoveUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] sm:min-h-[700px] px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 mb-7 sm:mb-0 overflow-hidden">

      {/* Main Heading */}
      <h1 className="relative z-10 text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] sm:leading-tight max-w-sm xs:max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        Crafting Intuitive
        <br />
        <span className="inline-block mt-1 sm:mt-0">& Scalable Digital</span>
        <br />
        <span className="inline-block mt-1 sm:mt-0">Experiences</span>
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 text-gray-200 text-base font-normal xs:text-lg sm:text-xl md:text-2xl max-w-sm xs:max-w-md sm:max-w-xl md:max-w-3xl mt-6 sm:mt-8 md:mt-10 leading-relaxed px-2 sm:px-4">
        A Global UI/UX Design Agency Delivering User-Centric, High-Impact
        <span className="block sm:inline"> Digital Solutions.</span>
      </p>

      {/* CTA Buttons - Desktop */}
      <div className="relative z-10 hidden md:flex items-center space-x-4 mt-10 group">
        <button className="border border-[#D1FF52] text-gray-300 group-hover:bg-[#D1FF52] group-hover:text-black bg-transparent px-8 py-3 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#D1FF52]/20 text-lg font-medium cursor-pointer hover:scale-105 active:scale-95">
          Contact Us
        </button>
        <button className="border border-[#D1FF52] text-[#D1FF52] group-hover:bg-[#D1FF52] group-hover:text-black bg-transparent p-3 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#D1FF52]/20 group-hover:rotate-45 cursor-pointer hover:scale-105 active:scale-95">
          <MoveUpRight className="w-6 h-6 transition-colors duration-300" />
        </button>
      </div>

      {/* CTA Button - Mobile */}
      <div className="relative z-10 md:hidden mt-6 mb-16">
        <button className="flex items-center justify-center border border-[#D1FF52] text-gray-300 hover:bg-[#D1FF52] hover:text-black active:bg-[#D1FF52] active:text-black bg-transparent px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#D1FF52]/20 text-lg font-medium min-w-[160px] hover:scale-105 active:scale-95">
          Contact Us
          <MoveUpRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* Scroll Indicator - Mobile Only */}
      <div className="absolute bottom-10  md:hidden left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#D1FF52] via-gray-400 to-transparent opacity-70"></div>
        </div>
      </div>
    </section>
  )
}