import React, { useState, useEffect } from 'react';
import { Shield, ArrowRight, Target } from 'lucide-react';
import Button from '../shared/Button';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#181715] flex items-center justify-center pt-20 overflow-hidden">
      {/* Military Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#181715] via-transparent to-[#181715] z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://cdn.coverr.co/videos/coverr-aerial-view-of-military-vehicles-5266/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Tactical Grid Overlay */}
      <div className="absolute inset-0 bg-tactical-grid opacity-10" />
      
      {/* Scanning Effect */}
      <div className="absolute inset-0 animate-military-scan" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`flex justify-center mb-8 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="relative">
            <Shield className="h-16 w-16 text-[#D5B803]" />
            <Target className="absolute -top-2 -right-2 h-6 w-6 text-[#D5B803] animate-pulse" />
          </div>
        </div>

        <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tighter transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Elite Military
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D5B803] to-[#4E5A3C] mt-2">
            Recruitment Solutions
          </span>
        </h1>

        <p className={`max-w-2xl mx-auto text-xl text-[#928E72] mb-12 font-tactical transition-all duration-1000 delay-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          PRECISION TARGETING • STRATEGIC DEPLOYMENT • MISSION SUCCESS
        </p>

        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Button size="lg" className="group w-full sm:w-auto">
            <span className="flex items-center justify-center">
              Begin Mission
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            Request Intel Brief
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;