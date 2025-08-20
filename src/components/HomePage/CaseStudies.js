"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import Image from 'next/image';

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Dummy data - this will come from backend later
  const caseStudies = [
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

  // Duplicate array for seamless infinite loop
  const infiniteCaseStudies = [...caseStudies, ...caseStudies];
  const maxSlides = caseStudies.length;

  // Auto slide every 6 seconds (very slow)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 1;
        if (next >= maxSlides) {
          return 0;
        }
        return next;
      });
    }, 6000); // Slower movement - 6 seconds

    return () => clearInterval(interval);
  }, [maxSlides]);

  return (
    <section 
      className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #17181B 0%, #000000 54.39%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center border-[#D1FF52] px-6 py-2 mb-6 text-sm font-medium text-gray-300 border rounded-full bg-transparent">
            Case Studies
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl  font-medium text-white leading-tight max-w-4xl mx-auto">
            Real Results: Our Case Studies
            <br />
            <span className="inline-block mt-1">& Success Stories</span>
          </h2>
        </div>

        {/* Case Studies Slider */}
        <div className="relative mb-12 sm:mb-16">
          {/* Left margin, no right margin - cards extend beyond container */}
          <div className="ml-4 sm:ml-8 lg:ml-16 overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 50}%)` }}
              ref={sliderRef}
            >
              {/* Use duplicated array to ensure always 2+ cards visible */}
              {infiniteCaseStudies.map((study, index) => (
                <div 
                  key={`${study.id}-${Math.floor(index / caseStudies.length)}`}
                  className="flex-shrink-0 w-full sm:w-1/2 pr-4 sm:pr-6"
                >
                  <div className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
                    {/* Case Study Image */}
                    <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden rounded-t-3xl">

                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{ objectFit: 'cover' }}
                        onError={(e) => {
                          // Fallback to placeholder if image doesn't load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                        sizes="(max-width: 640px) 100vw, 50vw"
                        priority={currentSlide === index % caseStudies.length}
                      />
               

                      {/* Image Placeholder */}
                      <div 
                        className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400 text-sm hidden rounded-t-3xl"
                      >
                        Case Study Image
                      </div>
                    </div>

                    {/* Case Study Details - Direct on section background */}
                    <div className="p-6 sm:p-8 rounded-b-3xl">
                      <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-gray-300 bg-gray-800/50 rounded-full border border-gray-600">
                        {study.category}
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight group-hover:text-[#D1FF52] transition-colors duration-300">
                        {study.title}
                      </h3>
                    </div>

                    {/* Hover Overlay only on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-t-3xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mb-8 space-x-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-700 ${
                currentSlide === index 
                  ? 'bg-[#D1FF52] w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* See More Case Studies Button */}
        <div className="hidden md:flex items-center space-x-4 mt-10 justify-center">
          <button className="border border-[#D1FF52]  bg-[#D1FF52] text-black  px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#D1FF52]/20 text-lg font-medium">
            See More Case Studies
          </button>
          <button className="border border-[#D1FF52] text-[#D1FF52] hover:bg-[#D1FF52] hover:text-black bg-transparent p-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#D1FF52]/20 hover:rotate-45 group">
            <MoveUpRight className="w-6 h-6 transition-colors duration-300" />
          </button>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#D1FF52]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default CaseStudies;