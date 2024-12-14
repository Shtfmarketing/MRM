import React from 'react';
import { Shield, ChevronDown } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { HeroTitle } from './hero/HeroTitle';
import { HeroContent } from './hero/HeroContent';

const ServiceHero = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative min-h-[60vh] flex items-center justify-center pt-20">
      <div className="absolute inset-0 military-texture opacity-10" />
      
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transform transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <Shield className="h-16 w-16 text-[#D5B803] mx-auto mb-8" />
        <HeroTitle />
        <HeroContent />
        <ChevronDown className="h-8 w-8 text-[#D5B803] mx-auto animate-bounce" />
      </div>
    </section>
  );
};

export default ServiceHero;