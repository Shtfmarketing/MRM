import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface ServiceCategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  price: string;
  delay: number;
  inView: boolean;
}

export const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({
  title,
  description,
  icon: Icon,
  price,
  delay,
  inView,
}) => {
  return (
    <div
      className={cn(
        'group bg-[#181715] border border-[#D5B803]/20 p-8',
        'transform transition-all duration-700',
        'hover:border-[#D5B803] hover:bg-[#D5B803]/5',
        inView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative">
        <Icon className="h-10 w-10 text-[#D5B803] mb-6 transform transition-transform group-hover:scale-110" />
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-[#928E72] mb-6">{description}</p>
        <div className="text-[#D5B803] font-bold">{price}</div>
      </div>
    </div>
  );
};