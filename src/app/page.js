import Navbar from "@/components/Global/Navbar";
import BlogSection from "@/components/HomePage/BlogSection";
import Brand from "@/components/HomePage/Brand";
import CaseStudies from "@/components/HomePage/CaseStudies";
import FAQSection from "@/components/HomePage/FAQSection";
import Hero from "@/components/HomePage/Hero";
import RecentWork from "@/components/HomePage/RecentWork";
import Services from "@/components/HomePage/Services";
import TestimonialSection from "@/components/HomePage/TestimonialSection";


export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Shared Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% 8%, rgba(148, 163, 184, 0.2) 0%, rgba(71, 85, 105, 0.1) 25%, transparent 50%),
            linear-gradient(180deg, #0f172a 0%, #0a0f1c 15%, #050810 40%, #030508 70%, #000000 100%)
          `,
        }}
      />
      <Navbar />
      <Hero />
      <Brand />
      <RecentWork />
      <CaseStudies />
      <Services />
      <TestimonialSection />
      <BlogSection />
      <FAQSection />
    </main>
  )
}
