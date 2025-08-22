import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import BlogSection from "@/components/HomePage/BlogSection";
import Brand from "@/components/HomePage/Brand";
import CaseStudies from "@/components/HomePage/CaseStudies";
import CTASection from "@/components/HomePage/CTASection";
import FAQSection from "@/components/HomePage/FAQSection";
import Hero from "@/components/HomePage/Hero";
import RecentWork from "@/components/HomePage/RecentWork";
import Services from "@/components/HomePage/Services";
import TestimonialSection from "@/components/HomePage/TestimonialSection";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Hero Section Background (includes Navbar and Brand) */}
      <div 
        className="relative"
        style={{
          background: 'linear-gradient(180deg, #0A1332 0%, #000000 54.39%)'
        }}
      >
        

        <Navbar />
        <Hero />
        <Brand />
      </div>

      {/* Rest of the page with different background */}
      <div
        className="relative"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% 8%, rgba(148, 163, 184, 0.1) 0%, rgba(71, 85, 105, 0.05) 25%, transparent 50%),
            linear-gradient(180deg, #000000 0%, #0a0f1c 15%, #050810 40%, #030508 70%, #000000 100%)
          `
        }}
      >
        <RecentWork />
        <CaseStudies />
        <Services />
        <TestimonialSection />
        <BlogSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}