import AboutHero from '@/components/AboutPage/aboutHero';
import Footer from '@/components/Global/Footer';
import Navbar from '@/components/Global/Navbar';
import React from 'react';

const AboutPage = () => {
     return (
          <div>
               <Navbar />
               <AboutHero />
               <Footer />
          </div>
     );
};

export default AboutPage;