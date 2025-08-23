"use client"
import React from 'react';
import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import Image from 'next/image';

const BlogSection = () => {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      image: '/blog.png', // You can add actual blog images
      category: 'Ux Design',
      title: "Beginner's Guide to UX Acronyms",
      date: 'January 30, 2024',
      readTime: '5 Min Read'
    },
    {
      id: 2,
      image: '/blog.png',
      category: 'Ux Design',
      title: "Beginner's Guide to UX Acronyms",
      date: 'January 30, 2024',
      readTime: '5 Min Read'
    },
    {
      id: 3,
      image: '/blog.png',
      category: 'Ux Design',
      title: "Beginner's Guide to UX Acronyms",
      date: 'January 30, 2024',
      readTime: '5 Min Read'
    }
  ];

  return (
    <section className="py-20 sm:py-24 md:py-35 lg:py-50  px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          <div className="inline-flex items-center justify-center border border-[#D1FF52] px-4 sm:px-6 py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-medium text-gray-300 rounded-full bg-transparent">
            Recent Blog
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight px-2">
            Read updated journal
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="group bg-gray-900/50 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/5"
            >
              {/* Blog Image */}
              <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Image Placeholder */}
                <div 
                  className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400 text-sm hidden"
                >
                  Blog Image
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Blog Content */}
              <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-black">
                <span className="inline-block px-3 py-1 text-xs font-medium mb-3 sm:mb-4 lg:mb-5 text-gray-200 bg-gray-800/80 backdrop-blur-sm rounded-full border border-[#D1FF52]">
                  {post.category}
                </span>

                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4 leading-tight group-hover:text-[#D1FF52] transition-colors duration-300">
                  {post.title}
                </h3>
                
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400">
                  <span className="truncate pr-2">{post.date}</span>
                  <div className="flex items-center space-x-1 flex-shrink-0">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#D1FF52] rounded-full"></div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* See All Blogs Button */}
        <div className="flex items-center justify-center">
          {/* Mobile: Single combined button */}
          <button className="md:hidden flex items-center justify-center space-x-3 border border-[#D1FF52] bg-[#D1FF52] text-black px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#D1FF52]/20 text-base font-medium cursor-pointer w-full max-w-[220px]">
            <span>See All Blogs</span>
            <MoveUpRight className="w-5 h-5" />
          </button>

          {/* Desktop: Two separate buttons */}
          <div className="hidden md:flex items-center justify-center space-x-4 group max-w-[320px] w-full">
            <button className="flex-1 border border-[#D1FF52] bg-[#D1FF52] text-black px-6 lg:px-8 py-3 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#D1FF52]/20 text-base lg:text-lg font-medium cursor-pointer">
              See All Blogs
            </button>
            <button className="border border-[#D1FF52] text-[#D1FF52] group-hover:bg-[#D1FF52] group-hover:text-black bg-transparent p-3 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#D1FF52]/20 group-hover:rotate-45 cursor-pointer flex-shrink-0">
              <MoveUpRight className="w-5 lg:w-6 h-5 lg:h-6 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;