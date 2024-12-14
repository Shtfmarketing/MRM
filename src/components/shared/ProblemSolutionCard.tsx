import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ProblemSolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variant: 'problem' | 'solution';
}

export const ProblemSolutionCard: React.FC<ProblemSolutionCardProps> = ({
  title,
  description,
  icon: Icon,
  variant,
}) => {
  return (
    <div className={cn(
      'p-6 border transition-all duration-300',
      variant === 'problem' 
        ? 'border-red-500/20 bg-red-500/5 hover:bg-red-500/10'
        : 'border-[#D5B803]/20 bg-[#D5B803]/5 hover:bg-[#D5B803]/10'
    )}>
      <div className="flex items-start">
        <Icon className={cn(
          'h-6 w-6 mr-4 flex-shrink-0',
          variant === 'problem' ? 'text-red-500' : 'text-[#D5B803]'
        )} />
        <div>
          <h3 className="text-white font-bold mb-2">{title}</h3>
          <p className="text-[#928E72] text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};