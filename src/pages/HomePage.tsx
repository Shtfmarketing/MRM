import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ProblemSolutionSection from '../components/sections/ProblemSolutionSection';
import ServicesSection from '../components/sections/ServicesSection';
import TrustSection from '../components/sections/TrustSection';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <TrustSection />
      <Testimonials />
    </>
  );
};

export default HomePage;