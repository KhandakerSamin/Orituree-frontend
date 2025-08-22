"use client"
import React from 'react';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';

const CaseStudies = () => {
  // Dummy data - this will come from backend later
  const allCaseStudies = [
    {
      id: 1,
      image: '/CS-1.png',
      category: 'E-Commerce',
      title: 'Revamping E-Commerce UX for Higher Conversions'
    },
    {
      id: 2,
      image: '/CS-1.png',
      category: 'Healthcare',
      title: 'Transforming Healthcare Platforms for Better Engagement'
    },
    {
      id: 3,
      image: '/CS-1.png',
      category: 'Finance',
      title: 'Fintech Dashboard Redesign Boosting User Retention'
    }
  ];

  // Get only the two most recent case studies
  const recentCaseStudies = allCaseStudies.slice(-2);

  return (
    <section
      className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      style={{
  background: "linear-gradient(180deg, #17181B 0%, #000000 70%, #17181B 100%)"
}}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center border-[#D1FF52] px-4 sm:px-6 py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-medium text-gray-300 border rounded-full bg-transparent">
            Case Studies
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight max-w-4xl mx-auto px-4">
            Real Results: Our Case Studies
            <br />
            <span className="inline-block mt-1">& Success Stories</span>
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          {recentCaseStudies.map((study) => (
            <div
              key={study.id}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
            >
              {/* Case Study Image */}
              <div className="relative h-48 sm:h-64 lg:h-72 xl:h-96 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="w-full h-full  object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectFit: 'cover' }}
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />

                {/* Image Placeholder */}
                <div
                  className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400 text-sm hidden rounded-t-2xl sm:rounded-t-3xl"
                >
                  Case Study Image
                </div>
              </div>

              {/* Case Study Details */}
              <div className="p-4 sm:p-6 lg:p-8 rounded-b-2xl sm:rounded-b-3xl">
                <div className="inline-block px-3 py-1 mb-3 sm:mb-4 text-xs font-medium text-gray-300 bg-gray-800/50 rounded-full border border-[#D1FF52]">
                  {study.category}
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white leading-tight group-hover:text-[#D1FF52] transition-colors duration-300">
                  {study.title}
                </h3>
              </div>

              {/* Hover Overlay only on image */}
              <div className="absolute inset-x-0 top-0 h-48 sm:h-64 lg:h-72 xl:h-96 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-t-2xl sm:rounded-t-3xl"></div>
            </div>
          ))}
        </div>

        {/* See More Case Studies Button */}
        <div className="flex  items-center justify-center space-x-4 group max-w-[350px] mx-auto">
          <button className="w-full sm:w-auto border border-[#D1FF52] bg-[#D1FF52] text-black px-6 sm:px-8 py-3 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#D1FF52]/20 text-base sm:text-lg font-medium cursor-pointer">
            See More Case Studies
          </button>
          <button className="border border-[#D1FF52] text-[#D1FF52] group-hover:bg-[#D1FF52] group-hover:text-black bg-transparent p-3 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#D1FF52]/20 group-hover:rotate-45  cursor-pointer">
            <MoveUpRight className="w-5 sm:w-6 h-5 sm:h-6 transition-colors duration-300" />
          </button>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-[#D1FF52]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default CaseStudies;