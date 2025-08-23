"use client"

import React from 'react';
import Image from 'next/image';

const BrandsShowcase = () => {
  // First row brands (7 brands)
  const firstRowBrands = [
    { id: 1, src: '/brand-1.png', alt: 'Brand 1' },
    { id: 2, src: '/brand-2.png', alt: 'Brand 2' },
    { id: 3, src: '/brand-3.png', alt: 'Brand 3' },
    { id: 4, src: '/brand-4.png', alt: 'Brand 4' },
    { id: 5, src: '/brand-5.png', alt: 'Brand 5' },
    { id: 6, src: '/brand-6.png', alt: 'Brand 6' },
    { id: 7, src: '/brand-7.png', alt: 'Brand 7' }
  ];

  // Second row brands (6 brands)
  const secondRowBrands = [
    { id: 8, src: '/brand-8.png', alt: 'Brand 8' },
    { id: 9, src: '/brand-9.png', alt: 'Brand 9' },
    { id: 10, src: '/brand-10.png', alt: 'Brand 10' },
    { id: 11, src: '/brand-11.png', alt: 'Brand 11' },
    { id: 12, src: '/brand-12.png', alt: 'Brand 12' },
    { id: 13, src: '/brand-13.png', alt: 'Brand 13' }
  ];

  return (
    <section className="relative z-10 py-8 sm:py-12 md:py-16 lg:py-35 overflow-hidden max-w-[1350px] mx-auto px-4 sm:px-6">
      {/* Optional Section Header for Mobile */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-gray-400 text-sm sm:text-base font-medium tracking-wider uppercase mb-2">
          Trusted by Industry Leaders
        </h2>
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#D1FF52] to-transparent mx-auto"></div>
      </div>

      {/* First Row - Left to Right */}
      <div className="relative mb-8 sm:mb-10 md:mb-12">
        <div className="flex animate-slide-left-to-right gap-3 sm:gap-4 md:gap-5">
          {/* Triple the brands for mobile seamless loop */}
          {[...firstRowBrands, ...firstRowBrands, ...firstRowBrands].map((brand, index) => (
            <div
              key={`first-${brand.id}-${index}`}
              className="flex-shrink-0 min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px] bg-[#0c0f17] border border-gray-800/50 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg hover:border-[#D1FF52]/20 transition-all duration-300"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                height={40}
                width={90}
                className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto mx-auto object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative">
        <div className="flex animate-slide-right-to-left gap-3 sm:gap-4 md:gap-5">
          {/* Triple the brands for mobile seamless loop */}
          {[...secondRowBrands, ...secondRowBrands, ...secondRowBrands].map((brand, index) => (
            <div
              key={`second-${brand.id}-${index}`}
              className="flex-shrink-0 min-w-[160px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] bg-[#0c0f17] border border-gray-800/50 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg hover:border-[#D1FF52]/20 transition-all duration-300"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                height={36}
                width={85}
                className="h-7 sm:h-8 md:h-9 lg:h-11 w-auto mx-auto object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideLeftToRight {
          0% {
            transform: translateX(-66.67%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes slideRightToLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-66.67%);
          }
        }

        .animate-slide-left-to-right {
          animation: slideLeftToRight 45s linear infinite;
        }

        .animate-slide-right-to-left {
          animation: slideRightToLeft 40s linear infinite;
        }

        /* Pause animation on hover for desktop */
        @media (min-width: 768px) {
          .animate-slide-left-to-right:hover,
          .animate-slide-right-to-left:hover {
            animation-play-state: paused;
          }
        }

        /* Faster animation on mobile for better UX */
        @media (max-width: 767px) {
          .animate-slide-left-to-right {
            animation-duration: 35s;
          }
          
          .animate-slide-right-to-left {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
};

export default BrandsShowcase;