import React from 'react';
import { Target, Crosshair, BarChart3, Shield } from 'lucide-react';
import { FeatureCard } from './shared/FeatureCard';
import { Feature } from '../types/feature';

const features: Feature[] = [
  {
    title: 'Strategic Targeting',
    description: 'Precision-guided campaigns that hit the mark every time.',
    icon: Crosshair,
  },
  {
    title: 'Combat-Ready Content',
    description: 'Battle-tested visuals that inspire and engage.',
    icon: Shield,
  },
  {
    title: 'Mission Analytics',
    description: 'Real-time intelligence for tactical advantage.',
    icon: BarChart3,
  },
];

const Features = () => {
  return (
    <div className="bg-[#181715] py-24 relative">
      <div className="absolute inset-0 camo-pattern" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-wider">
            Tactical Advantages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D5B803] to-[#4E5A3C] mx-auto mb-6" />
          <p className="text-[#928E72] max-w-2xl mx-auto font-tactical tracking-wide">
            ADVANCED CAPABILITIES FOR MODERN RECRUITMENT WARFARE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;