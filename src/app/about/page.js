import AboutCTA from '@/components/AboutPage/aboutCTA';
import AboutHero from '@/components/AboutPage/aboutHero';
import Gallery from '@/components/AboutPage/Gallery';
import GuidingMinds from '@/components/AboutPage/GuidingMinds';
import TeamSection from '@/components/AboutPage/Team';
import Footer from '@/components/Global/Footer';
import Navbar from '@/components/Global/Navbar';
import React from 'react';

export const metadata = {
  title: "About Oriture — Our Team, Story & Mission",
  description: "Meet the Oriture team — 7 designers, developers, and creatives building scalable digital products for startups and growing companies across 11 countries.",
  alternates: { canonical: "https://www.oriture.co/about" },
  openGraph: {
    title: "About Oriture — Our Team, Story & Mission",
    description: "Meet the Oriture team — 7 designers, developers, and creatives building scalable digital products for startups and growing companies across 11 countries.",
    url: "https://www.oriture.co/about",
    type: "website",
  },
};

const AboutPage = () => {
     return (
          <div>
               <Navbar />
               <AboutHero />
               <TeamSection />
               {/* <GuidingMinds /> */}
               <Gallery />
               <AboutCTA />
               <Footer />
          </div>
     );
};

export default AboutPage;