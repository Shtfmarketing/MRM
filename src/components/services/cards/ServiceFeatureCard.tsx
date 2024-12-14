import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceFeatureCard: React.FC<ServiceFeatureCardProps> = ({
  icon: Icon,
  title,
  description
}) => {
  return (
    <div className="text-center p-6 bg-[#181715] border border-[#D5B803]/20 transition-all duration-300 hover:border-[#D5B803]">
      <Icon className="h-12 w-12 text-[#D5B803] mx-auto mb-6" />
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-[#928E72]">{description}</p>
    </div>
  );
};

export default ServiceFeatureCard;