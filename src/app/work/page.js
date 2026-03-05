import Footer from '@/components/Global/Footer';
import Navbar from '@/components/Global/Navbar';
import TestimonialSection from '@/components/HomePage/TestimonialSection';
import WorkCTA from '@/components/WorkPage/workCTA';
import WorkHero from '@/components/WorkPage/workHero';
import WorkProjects from '@/components/WorkPage/WorkProjects';
import React from 'react';

const AllWorksPage = () => {
     return (
          <div>
               <Navbar />
               <WorkHero />
               <WorkProjects />
               <TestimonialSection />
               <WorkCTA />
               <Footer />
          </div>
     );
};

export default AllWorksPage;