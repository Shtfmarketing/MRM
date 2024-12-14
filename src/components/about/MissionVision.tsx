import React from 'react';
import { Target, Compass } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#181715] border border-[#D5B803]/20 p-8">
            <Target className="h-12 w-12 text-[#D5B803] mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-[#928E72]">
              To revolutionize military recruitment through innovative marketing solutions that connect the right candidates with the right opportunities, ensuring the strength and readiness of our armed forces.
            </p>
          </div>
          
          <div className="bg-[#181715] border border-[#D5B803]/20 p-8">
            <Compass className="h-12 w-12 text-[#D5B803] mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-[#928E72]">
              To be the leading force in military recruitment marketing, setting new standards for excellence and innovation while supporting the future of our nation's defense.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;