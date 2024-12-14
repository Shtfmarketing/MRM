import React from 'react';
import Button from '../shared/Button';

const ServicesCTA = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Recruitment?</h2>
        <p className="text-[#928E72] mb-12">
          Start your journey to more effective military recruitment with our comprehensive solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg">Start Your Free Trial</Button>
          <Button variant="secondary" size="lg">Schedule a Demo</Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;