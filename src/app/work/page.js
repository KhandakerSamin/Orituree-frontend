import Footer from '@/components/Global/Footer';
import Navbar from '@/components/Global/Navbar';
import TestimonialSection from '@/components/HomePage/TestimonialSection';
import WorkCTA from '@/components/WorkPage/workCTA';
import WorkHero from '@/components/WorkPage/workHero';
import WorkProjects from '@/components/WorkPage/WorkProjects';
import React from 'react';

export const metadata = {
  title: "Our Work — Case Studies & Portfolio | Oriture",
  description: "Explore Oriture's portfolio of 30+ digital products — branding, UI/UX design, web development, and MVP builds for clients across 11 countries.",
  alternates: { canonical: "https://www.oriture.co/work" },
  openGraph: {
    title: "Our Work — Case Studies & Portfolio | Oriture",
    description: "Explore Oriture's portfolio of 30+ digital products — branding, UI/UX design, web development, and MVP builds for clients across 11 countries.",
    url: "https://www.oriture.co/work",
    type: "website",
  },
};

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