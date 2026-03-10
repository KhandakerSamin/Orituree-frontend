// src/app/insight/[slug]/page.jsx
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import { POSTS } from "@/data/insightData";

/* ─────────────────────────────────────────────────
   INLINE CARD  (same as InsightCard.jsx — inlined
   here to avoid any import path resolution issues)
───────────────────────────────────────────────── */
function PostCard({ post }) {
  return (
    <Link href={`/insight/${post.slug}`} className="group block bg-transparent">
      <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10] mb-3">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
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
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 rounded-full overflow-hidden bg-[#D1FF52]/20 flex-shrink-0 flex items-center justify-center">
          <span className="text-[8px] font-bold text-[#D1FF52]">O</span>
        </div>
        <span className="text-gray-500 text-[11px]">{post.author}</span>
        <span className="text-gray-600 text-[11px]">·</span>
        <span className="text-gray-500 text-[11px]">{post.date}</span>
      </div>
      <h3 className="text-white text-sm md:text-[15px] font-normal font-serif leading-snug group-hover:text-[#D1FF52] transition-colors duration-300">
        {post.title}
      </h3>
    </Link>
  );
}

/* ─────────────────────────────────────────────────
   SIDEBAR RELATED CARD
───────────────────────────────────────────────── */
function RelatedCard({ post }) {
  return (
    <Link href={`/insight/${post.slug}`} className="group flex gap-3 items-start">
      <div className="flex-shrink-0 w-[72px] h-[54px] rounded-xl overflow-hidden">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[#D1FF52] text-[10px] uppercase tracking-widest mb-0.5">{post.category}</p>
        <h4 className="text-white text-xs font-serif leading-snug line-clamp-2 group-hover:text-[#D1FF52] transition-colors duration-200">
          {post.title}
        </h4>
        <p className="text-gray-500 text-[10px] mt-1">{post.date}</p>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────────
   CONTENT BLOCK RENDERER
───────────────────────────────────────────────── */
function ContentBlock({ block }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-gray-300 text-base md:text-[17px] leading-relaxed mb-6">
          {block.text}
        </p>
      );

    case "heading":
      return (
        <h2 className="text-2xl md:text-3xl text-white font-light font-serif mt-12 mb-5 leading-snug">
          {block.text}
        </h2>
      );

    case "image":
      return (
        <figure className="my-10">
          <div className="w-full overflow-hidden rounded-2xl">
            <img
              src={block.src}
              alt={block.caption || ""}
              className="w-full h-auto object-cover"
            />
          </div>
          {block.caption && (
            <figcaption className="text-gray-500 text-sm mt-3 text-center italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "stats":
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
          {block.items.map((item, i) => (
            <div
              key={i}
              className="px-5 py-5 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(209,255,82,0.07) 0%, rgba(120,69,238,0.08) 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p className="text-[#D1FF52] text-3xl md:text-4xl font-serif font-light mb-2 leading-none">
                {item.value}
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
      );

    case "quote":
      return (
        <blockquote
          className="relative my-10 pl-6 md:pl-8"
          style={{ borderLeft: "3px solid #D1FF52" }}
        >
          <p className="text-white text-xl md:text-2xl font-serif font-light italic leading-relaxed mb-3">
            "{block.text}"
          </p>
          <cite className="text-gray-500 text-sm not-italic">— {block.author}</cite>
        </blockquote>
      );

    default:
      return null;
  }
}

/* ─────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────── */
export default function InsightDetailPage() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);

  const others = POSTS.filter((p) => p.slug !== slug);
  const related  = [...others].sort(() => Math.random() - 0.5).slice(0, 3);
  const sidebar  = [...others].sort(() => Math.random() - 0.5).slice(0, 4);

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center flex-col gap-4">
          <h1 className="text-white text-3xl font-serif">Post Not Found</h1>
          <Link
            href="/insight"
            className="text-[#D1FF52] text-sm hover:underline inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative w-full pt-32 pb-12 md:pt-40 overflow-hidden">

        {/* Gradient canvas */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-black" />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(125deg, #000000 0%, #04010d 18%, #080318 35%, #0e0628 50%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 88% 25%, #8b58f5 0%, #6038d0 25%, #331880 52%, #0e0628 72%, transparent 88%)",
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 82% 15%, #aa78ff 0%, #7845ee 28%, #4020b0 52%, transparent 72%)",
            opacity: 0.8,
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(115deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.1) 55%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(0,0,0,0.7) 82%, #000 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            opacity: 0.35,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
            mixBlendMode: "overlay",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1370px] px-6 md:px-8">

          {/* Back */}
          <Link
            href="/insight"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#D1FF52] transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          {/* Category + meta chips */}
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                background: "rgba(209,255,82,0.12)",
                color: "#D1FF52",
                border: "1px solid rgba(209,255,82,0.25)",
              }}
            >
              {post.category}
            </span>
            <span className="text-gray-500 text-xs flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {post.date}
            </span>
            <span className="text-gray-500 text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-[50px] font-light font-serif text-white leading-tight mb-5 max-w-3xl">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            {post.excerpt}
          </p>

          {/* Author chip */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#D1FF52]/15 flex items-center justify-center border border-[#D1FF52]/25">
              <span className="text-[#D1FF52] text-sm font-bold font-serif">O</span>
            </div>
            <div>
              <p className="text-white text-sm font-medium">{post.author}</p>
              <p className="text-gray-500 text-xs">{post.authorRole}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <div className="w-full bg-black pb-2">
        <div className="mx-auto max-w-[1370px] px-6 md:px-8">
          <div className="w-full overflow-hidden rounded-3xl" style={{ aspectRatio: "21/9" }}>
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ── ARTICLE + SIDEBAR ── */}
      <section className="w-full bg-black py-14 md:py-20">
        <div className="mx-auto max-w-[1370px] px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 xl:gap-16">

            {/* Article */}
            <article className="min-w-0">
              {post.content.map((block, i) => (
                <ContentBlock key={i} block={block} />
              ))}

              {/* Tags footer */}
              {post.tags && (
                <div
                  className="flex flex-wrap gap-2 mt-12 pt-8"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="text-gray-500 text-sm mr-1 self-center">Tags:</span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-400 px-3 py-1 rounded-full bg-white/5 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>

            {/* Sticky Sidebar */}
            <aside>
              <div className="lg:sticky lg:top-28 space-y-8">

                {/* Related reads */}
                <div>
                  <h3
                    className="text-white text-base font-serif font-light mb-5 pb-3"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    More{" "}
                    <em className="text-[#D1FF52] italic">Insights</em>
                  </h3>
                  <div className="space-y-5">
                    {sidebar.map((p) => (
                      <RelatedCard key={p.id} post={p} />
                    ))}
                  </div>
                </div>

                {/* CTA card */}
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(209,255,82,0.08) 0%, rgba(120,69,238,0.12) 100%)",
                    border: "1px solid rgba(209,255,82,0.12)",
                  }}
                >
                  <h4 className="text-white text-base font-serif mb-2">
                    Build something{" "}
                    <em className="text-[#D1FF52] italic">great</em>
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Oriture works with founders and product teams to craft digital experiences that convert.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-black text-sm font-semibold px-4 py-2.5 rounded-full bg-[#D1FF52] hover:bg-[#c8f545] transition-colors"
                  >
                    Work With Us <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── MORE ARTICLES ── */}
      <section className="w-full bg-black pb-20 md:pb-28">
        <div className="mx-auto max-w-[1370px] px-6 md:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-light font-serif text-white">
              More <em className="text-[#D1FF52] italic">articles</em>
            </h2>
            <Link
              href="/insight"
              className="text-[#D1FF52] text-sm hover:underline inline-flex items-center gap-1.5"
            >
              View all <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {related.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}