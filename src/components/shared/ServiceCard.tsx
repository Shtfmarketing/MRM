import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, icon: Icon }) => {
  return (
    <div className="group relative bg-gradient-to-b from-[#4E5A3C]/20 to-transparent p-6 border border-[#D5B803]/20 hover:border-[#D5B803]/40 transition-all">
      <div className="mb-4">
        <Icon className="h-8 w-8 text-[#D5B803]" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-[#928E72] text-sm">{description}</p>
      <div className="mt-4">
        <a href="#" className="text-[#D5B803] text-sm hover:text-white transition-colors">
          Learn More →
        </a>
      </div>
    </div>
  );
};