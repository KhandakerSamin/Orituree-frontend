// src/components/Insight/InsightCard.jsx
"use client";

import Link from "next/link";

export default function InsightCard({ post }) {
  return (
    <Link
      href={`/insight/${post.slug}`}
      className="group block bg-transparent"
    >
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10] mb-3">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {/* Category badge */}
        <span
          className="absolute bottom-3 left-3 text-[11px] font-medium px-2.5 py-1 rounded-full"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(6px)",
            color: "#D1FF52",
            border: "1px solid rgba(209,255,82,0.25)",
          }}
        >
          {post.category}
        </span>
      </div>

      {/* Meta row */}
      <div className="flex items-center gap-2 mb-2">
        {/* Author avatar */}
        <div className="w-5 h-5 rounded-full overflow-hidden bg-[#D1FF52]/20 flex-shrink-0 flex items-center justify-center">
          {post.authorAvatar ? (
            <img src={post.authorAvatar} alt={post.author} className="w-full h-full object-cover" />
          ) : (
            <span className="text-[8px] font-bold text-[#D1FF52]">O</span>
          )}
        </div>
        <span className="text-gray-500 text-[11px]">{post.author}</span>
        <span className="text-gray-600 text-[11px]">·</span>
        <span className="text-gray-500 text-[11px]">{post.date}</span>
      </div>

      {/* Title */}
      <h3 className="text-white text-sm md:text-[15px] font-normal font-serif leading-snug group-hover:text-[#D1FF52] transition-colors duration-300">
        {post.title}
      </h3>
    </Link>
  );
}