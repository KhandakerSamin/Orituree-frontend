import { POSTS } from "@/data/insightData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Insight | Oriture",
      description: "Design and development insights from the Oriture studio.",
    };
  }

  const url = `https://www.oriture.co/insight/${slug}`;

  return {
    title: `${post.title} | Oriture`,
    description: post.excerpt?.slice(0, 160) || "Design and development insights from Oriture.",
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | Oriture`,
      description: post.excerpt?.slice(0, 160),
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["Oriture"],
      tags: post.tags,
      images: post.heroImage ? [{ url: post.heroImage, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Oriture`,
      description: post.excerpt?.slice(0, 160),
      images: post.heroImage ? [post.heroImage] : [],
    },
  };
}

export default function InsightSlugLayout({ children }) {
  return children;
}
