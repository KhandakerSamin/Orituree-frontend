"use client"

import React from 'react';
import Image from 'next/image';

const BrandsShowcase = () => {
  const firstRowBrands = [
    { id: 1, src: '/brand1.png', alt: 'Brand 1' },
    { id: 2, src: '/brand2.png', alt: 'Brand 2' },
    { id: 3, src: '/brand3.png', alt: 'Brand 3' },
    { id: 4, src: '/brand4.png', alt: 'Brand 4' },
    { id: 5, src: '/brand5.png', alt: 'Brand 5' },
    { id: 6, src: '/brand6.png', alt: 'Brand 6' },
    { id: 7, src: '/brand7.png', alt: 'Brand 7' }
  ];

  const secondRowBrands = [
    { id: 8, src: '/brand8.png', alt: 'Brand 8' },
    { id: 9, src: '/brand9.png', alt: 'Brand 9' },
    { id: 10, src: '/brand10.png', alt: 'Brand 10' },
    { id: 11, src: '/brand11.png', alt: 'Brand 11' },
    { id: 12, src: '/brand12.png', alt: 'Brand 12' },
    { id: 13, src: '/brand13.png', alt: 'Brand 13' }
  ];

  const containerStyle = {
    overflow: 'hidden',
    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
    maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
  };

  const rtlStyle = {
    display: 'flex',
    gap: '20px',
    width: 'fit-content',
    animation: 'scrollRTL 60s linear infinite',
  };

  const ltrStyle = {
    display: 'flex',
    gap: '20px',
    width: 'fit-content',
    animation: 'scrollLTR 60s linear infinite',
  };

  const BrandCard = ({ brand, size = 'normal' }) => (
    <div
      className="flex-shrink-0 bg-[#0c0f17] border border-gray-800/50 px-5 py-3 rounded-lg hover:border-[#D1FF52]/20 transition-all duration-300"
      style={{ minWidth: size === 'normal' ? '200px' : '200px' }}
    >
      <Image
        src={brand.src}
        alt={brand.alt}
        height={size === 'normal' ? 40 : 36}
        width={90}
        className={`${size === 'normal' ? 'h-12' : 'h-11'} w-auto mx-auto object-contain filter brightness-75 hover:brightness-100 transition-all duration-300`}
        onError={(e) => { e.target.style.display = 'none'; }}
        unoptimized
      />
    </div>
  );

  return (
    <>
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

      <section className="relative z-10 py-8 sm:py-12 md:py-16 lg:py-35 max-w-[1350px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-gray-400 text-sm sm:text-base font-medium tracking-wider uppercase mb-2">
            Trusted by Industry Leaders
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#D1FF52] to-transparent mx-auto"></div>
        </div>

        {/* First Row - Right to Left */}
        <div className="relative mb-10" style={containerStyle}>
          <div style={rtlStyle}>
            {[...firstRowBrands, ...firstRowBrands, ...firstRowBrands, ...firstRowBrands].map((brand, index) => (
              <BrandCard key={`first-${brand.id}-${index}`} brand={brand} size="normal" />
            ))}
          </div>
        </div>

        {/* Second Row - Left to Right */}
        <div className="relative" style={containerStyle}>
          <div style={ltrStyle}>
            {[...secondRowBrands, ...secondRowBrands, ...secondRowBrands, ...secondRowBrands].map((brand, index) => (
              <BrandCard key={`second-${brand.id}-${index}`} brand={brand} size="small" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandsShowcase;