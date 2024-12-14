import React from 'react';
import { LucideIcon, Check } from 'lucide-react';
import Button from '../shared/Button';

interface ServiceDetailCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  price: string;
}

export const ServiceDetailCard: React.FC<ServiceDetailCardProps> = ({
  title,
  description,
  features,
  icon: Icon,
  price
}) => {
  return (
    <div className="group relative bg-[#181715] border border-[#D5B803]/20 p-8 transition-all duration-300 hover:border-[#D5B803]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#D5B803]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative">
        <Icon className="h-12 w-12 text-[#D5B803] mb-6" />
        
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-[#928E72] mb-6">{description}</p>
        
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <Check className="h-5 w-5 text-[#D5B803] mr-3" />
              <span className="text-white">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="text-2xl font-bold text-[#D5B803] mb-6">
          {price}
        </div>
        
        <Button size="lg" className="w-full">
          Get Started
        </Button>
      </div>
    </div>
  );
};