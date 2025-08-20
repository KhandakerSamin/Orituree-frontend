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
    <section className="relative z-10 py-20 overflow-hidden max-w-[1350px] mx-auto">
      {/* First Row - Left to Right */}
      <div className="relative mb-12">
        <div className="flex animate-slide-left-to-right gap-5">
          {/* Double the brands for seamless loop */}
          {[...firstRowBrands, ...firstRowBrands].map((brand, index) => (
            <div
              key={`first-${brand.id}-${index}`}
              className="flex-shrink-0 min-w-[200px] mx-auto bg-[#0c0f17] px-5 py-1.5 rounded transition-opacity duration-400 "
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                height={48}
                width={110}
                className="h-12 w-auto mx-auto object-contain"
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
        <div className="flex animate-slide-right-to-left gap-5 ">
          {/* Double the brands for seamless loop */}
          {[...secondRowBrands, ...secondRowBrands].map((brand, index) => (
            <div
              key={`second-${brand.id}-${index}`}
              className="flex-shrink-0 min-w-[250px] mx-auto bg-[#0c0f17] px-5 py-1.5 rounded transition-opacity duration-400"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                height={40}
                width={100}
                className="h-11 w-auto mx-auto object-contain"
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
            transform: translateX(-50%);
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
            transform: translateX(-50%);
          }
        }

        .animate-slide-left-to-right {
          animation: slideLeftToRight 30s linear infinite;
        }

        .animate-slide-right-to-left {
          animation: slideRightToLeft 30s linear infinite;
        }

        /* Pause animation on hover */
        .animate-slide-left-to-right:hover,
        .animate-slide-right-to-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BrandsShowcase;