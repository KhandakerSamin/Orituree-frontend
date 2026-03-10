// src/components/Insight/InsightGrid.jsx
"use client";

import { useState, useMemo } from "react";
import { ChevronRight } from "lucide-react";
import InsightCard from "./InsightCard";
import { POSTS, POSTS_PER_PAGE, CATEGORIES } from "@/data/insightData";

/* ── Pagination dots ── */
function Pagination({ current, total, onChange }) {
  const displayTotal = Math.max(total, 4);
  const pages = Array.from({ length: displayTotal }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-14">
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className="w-8 h-8 rounded-full text-sm font-medium transition-all duration-200 flex items-center justify-center"
          style={{
            background: p === current ? "#D1FF52" : "transparent",
            color: p === current ? "#000" : "#6b7280",
            border: p === current ? "none" : "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {p}
        </button>
      ))}

      {/* Next arrow */}
      {current < displayTotal && (
        <button
          onClick={() => onChange(current + 1)}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/10"
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#9ca3af",
          }}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

export default function InsightGrid({ activeCategory }) {
  const [page, setPage] = useState(1);

  // Filter posts
  const filtered = useMemo(() => {
    if (!activeCategory || activeCategory === "Explore All") return POSTS;
    return POSTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  const handlePageChange = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-black pb-20 md:pb-28">
      <div className="mx-auto max-w-[1370px] px-6 md:px-8">

        {paginated.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-gray-500 text-base">No posts in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {paginated.map((post) => (
              <InsightCard key={post.id} post={post} />
            ))}
          </div>
        )}

        <Pagination
          current={page}
          total={totalPages}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}