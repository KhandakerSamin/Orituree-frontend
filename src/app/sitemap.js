import projectsData from "@/data/projectsData";
import { POSTS } from "@/data/insightData";

const BASE = "https://www.oriture.co";

export default function sitemap() {
  const now = new Date().toISOString();

  const staticRoutes = [
    { url: BASE,              lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/work`,    lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/about`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`,lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/insight`, lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
  ];

  const projectRoutes = projectsData
    .filter((p) => !p.hidden && p.detailPage)
    .map((p) => ({
      url: `${BASE}/work/${p.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const insightRoutes = (POSTS || []).map((post) => ({
    url: `${BASE}/insight/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...insightRoutes];
}
