// src/data/insightData.js

export const CATEGORIES = [
  "Explore All",
  "SaaS",
  "Edtech",
  "Telecommunication",
  "Fashion & Apparel",
  "Construction",
];

export const POSTS = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  category: ["Design Process", "SaaS", "Edtech", "Telecommunication", "Fashion & Apparel", "Construction"][i % 6],
  author: "Oriture",
  authorAvatar: "/images/oriture-avatar.png", // replace with real path
  date: "March 08, 2026",
  title: "30+ Branding Statistics That Reveal The Trends Shaping 2026",
  slug: `branding-statistics-trends-2026-${i + 1}`,
  thumbnail: `/images/insight/thumb-${(i % 3) + 1}.png`, // replace with real paths
  readTime: "5 min read",
}));

export const POSTS_PER_PAGE = 9;