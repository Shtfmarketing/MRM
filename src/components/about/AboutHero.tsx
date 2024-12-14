import React from 'react';
import { Shield, Target } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
      <div className="absolute inset-0 military-texture opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Shield className="h-16 w-16 text-[#D5B803]" />
            <Target className="absolute -top-2 -right-2 h-6 w-6 text-[#D5B803] animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tighter">
          Our Mission to
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D5B803] to-[#4E5A3C] mt-2">
            Transform Recruitment
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-[#928E72] mb-12 font-tactical">
          INNOVATION • EXCELLENCE • INTEGRITY
        </p>
      </div>
    </section>
  );
};

export default AboutHero;