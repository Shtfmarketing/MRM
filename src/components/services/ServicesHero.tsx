import React from 'react';
import { Shield, Target } from 'lucide-react';
import Button from '../shared/Button';

const ServicesHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-20">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://cdn.coverr.co/videos/coverr-military-training-5267/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#181715] via-transparent to-[#181715]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Shield className="h-16 w-16 text-[#D5B803]" />
            <Target className="absolute -top-2 -right-2 h-6 w-6 text-[#D5B803] animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tighter">
          Elite Tools for
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D5B803] to-[#4E5A3C] mt-2">
            Military Recruitment Success
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-[#928E72] mb-12 font-tactical">
          PRECISION TARGETING • STRATEGIC DEPLOYMENT • MISSION SUCCESS
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg">Discover Our Tools</Button>
          <Button variant="secondary" size="lg">Schedule Demo</Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;