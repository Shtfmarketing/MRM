import React from 'react';
import { Mic, Target } from 'lucide-react';
import Button from '../shared/Button';

const PodcastHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
      <div className="absolute inset-0 military-texture opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Mic className="h-16 w-16 text-[#D5B803]" />
            <Target className="absolute -top-2 -right-2 h-6 w-6 text-[#D5B803] animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tighter">
          Mission Critical
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D5B803] to-[#4E5A3C] mt-2">
            Recruitment Podcast
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-[#928E72] mb-12 font-tactical">
          EXPERT INSIGHTS • TACTICAL DISCUSSIONS • RECRUITMENT SUCCESS
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Latest Episode</Button>
          <Button variant="secondary" size="lg">Subscribe Now</Button>
        </div>
      </div>
    </section>
  );
};

export default PodcastHero;