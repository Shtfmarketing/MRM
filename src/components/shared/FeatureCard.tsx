import React from 'react';
import { Feature } from '../../types/feature';

export const FeatureCard: React.FC<Feature> = ({ title, description, icon: Icon }) => {
  return (
    <div className="group relative bg-gradient-to-b from-[#4E5A3C] to-[#181715] rounded-none border border-[#D5B803]/20 p-8 transform hover:scale-105 transition-all duration-300">
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
      <div className="h-16 w-16 rounded-none bg-[#D5B803] flex items-center justify-center mb-6 transform -rotate-6">
        <Icon className="h-8 w-8 text-[#181715]" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 uppercase">{title}</h3>
      <p className="text-[#928E72] font-tactical">{description}</p>
    </div>
  );
};