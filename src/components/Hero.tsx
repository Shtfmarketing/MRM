import React from 'react';
import { Shield, Target } from 'lucide-react';
import Button from './shared/Button';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#181715] flex items-center justify-center overflow-hidden">
      {/* Military Pattern Background */}
      <div className="absolute inset-0 military-texture" />
      
      {/* Animated Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-[#D5B803]/20 rotate-45 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border-2 border-[#4E5A3C]/20 -rotate-45 animate-pulse delay-300" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <Shield className="h-16 w-16 text-[#D5B803]" />
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tighter uppercase">
          Elite Military
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D5B803] to-[#4E5A3C] mt-2">
            Recruitment Solutions
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-[#928E72] mb-12 font-tactical">
          PRECISION TARGETING • STRATEGIC DEPLOYMENT • MISSION SUCCESS
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group">
            <span className="flex items-center">
              Deploy Mission
              <Target className="ml-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
            </span>
          </Button>
          <Button variant="secondary" size="lg">
            Intel Brief
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;