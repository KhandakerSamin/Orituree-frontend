"use client"
import React from 'react';
import { ArrowUpRight, MoveUpRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 sm:py-40 md:py-30 lg:py-35 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Badge */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center border border-[#D1FF52] px-6 py-2 text-sm font-medium text-gray-300 rounded-full bg-transparent">
            Got a project in mind?
          </div>
        </div>

        {/* Main Heading */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8 sm:mb-12 bg-clip-text text-transparent"
          style={{
            background: 'linear-gradient(95.24deg, #D1FF52 4.05%, #010206 105.94%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Let&apos;s discuss the details
        </h2>

        {/* Contact Button */}
        {/* Desktop Version - Two Buttons */}
        <div className="hidden sm:flex items-center justify-center space-x-4 group max-w-[350px] mx-auto">
          <button className="w-full sm:w-auto border border-[#D1FF52] bg-[#D1FF52] text-black px-6 sm:px-8 py-3 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#D1FF52]/20 text-base sm:text-lg font-medium cursor-pointer hover:scale-105">
            Contact Us
          </button>
          <button className="border border-[#D1FF52] text-[#D1FF52] hover:bg-[#D1FF52] hover:text-black bg-transparent p-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#D1FF52]/20 hover:rotate-45 cursor-pointer">
            <MoveUpRight className="w-5 sm:w-6 h-5 sm:h-6 transition-colors duration-300" />
          </button>
        </div>

        {/* Mobile Version - Single Combined Button */}
        <div className="flex sm:hidden items-center justify-center max-w-[220px] mx-auto">
          <button className="flex items-center justify-center space-x-3 w-full border border-[#D1FF52] bg-[#D1FF52] text-black px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#D1FF52]/20 text-base font-medium cursor-pointer hover:scale-105 group">
            <span>Contact Us</span>
            <MoveUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;