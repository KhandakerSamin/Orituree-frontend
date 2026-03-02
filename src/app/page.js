import Navbar from "@/components/Global/Navbar";
import Hero from "@/components/HomePage/Hero";
import IdeaToImpact from "@/components/HomePage/IdeaToImpact";
import WhyChoose from "@/components/HomePage/WhyChoose";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Hero Section Background (includes Navbar and Brand) */}
      <div 
        className="relative"
        style={{
          background: 'linear-gradient(180deg, #0A1332 0%, #000000 54.39%)'
        }}
      >
        <Navbar />
        <Hero />
        <WhyChoose />
        <IdeaToImpact />
      </div>
    </main>
  )
}