"use client"
import { useState } from "react";
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import InsightHero from "@/components/InsightPage/insightHero";
import InsightFilter from "@/components/InsightPage/InsightFilter";
import InsightGrid from "@/components/InsightPage/InsightGrid";

export default function InsightPage() {
  const [activeCategory, setActiveCategory] = useState("Explore All");

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <InsightHero />
      <InsightFilter
        active={activeCategory}
        onChange={setActiveCategory}
      />
      <div className="bg-black h-8 md:h-10" />
      <InsightGrid activeCategory={activeCategory} />
      <Footer />
    </div>
  );
}