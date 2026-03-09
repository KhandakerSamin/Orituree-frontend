import AboutCTA from '@/components/AboutPage/aboutCTA';
import AboutHero from '@/components/AboutPage/aboutHero';
import Gallery from '@/components/AboutPage/Gallery';
import GuidingMinds from '@/components/AboutPage/GuidingMinds';
import TeamSection from '@/components/AboutPage/Team';
import Footer from '@/components/Global/Footer';
import Navbar from '@/components/Global/Navbar';
import React from 'react';

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