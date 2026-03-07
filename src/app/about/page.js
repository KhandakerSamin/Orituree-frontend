import AboutHero from '@/components/AboutPage/aboutHero';
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
               <GuidingMinds />
               <Footer />
          </div>
     );
};

export default AboutPage;