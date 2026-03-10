// src/components/Insight/InsightFilter.jsx
"use client";

import { CATEGORIES } from "@/data/insightData";

export default function InsightFilter({ active, onChange }) {
  return (
    <div className="w-full bg-black py-4">
      <div className="mx-auto max-w-[1370px] px-6 md:px-8">
        <div className="flex gap-2 flex-wrap justify-center items-center">
          {CATEGORIES.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                onClick={() => onChange(cat)}
                className="text-xs md:text-sm font-medium px-4 py-2 rounded-full border transition-all duration-250 whitespace-nowrap"
                style={{
                  background: isActive ? "#D1FF52" : "transparent",
                  color: isActive ? "#000000" : "#9ca3af",
                  borderColor: isActive ? "#D1FF52" : "rgba(255,255,255,0.12)",
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}