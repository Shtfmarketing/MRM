import React from 'react';
import Button from '../shared/Button';

const AboutCTA = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
        <p className="text-[#928E72] max-w-2xl mx-auto mb-12">
          Partner with us to transform your recruitment strategy and secure the future of military talent
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg">Schedule Consultation</Button>
          <Button variant="secondary" size="lg">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;