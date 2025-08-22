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
        {/* Vector Images - positioned for both Navbar and Hero */}
        <div className="absolute top-20 sm:top-24 md:top-28 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
          <div className="relative">
            {/* Vector 1 - positioned slightly left */}
            <img 
              src="/vector1.svg" 
              alt="Vector decoration 1" 
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 opacity-60 absolute -left-8 sm:-left-12 md:-left-16 top-0 animate-pulse"
              style={{ animationDuration: '3s' }}
            />
            {/* Vector 2 - positioned slightly right */}
            <img 
              src="/vector2.svg" 
              alt="Vector decoration 2" 
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 opacity-40 absolute left-8 sm:left-12 md:left-16 top-4 sm:top-6 animate-pulse"
              style={{ animationDuration: '4s', animationDelay: '1s' }}
            />
          </div>
        </div>

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