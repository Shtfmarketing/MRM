import React from 'react';
import { cn } from '../../utils/cn';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className
}) => {
  return (
    <div className={cn('text-center', className)}>
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      {subtitle && (
        <p className="text-[#928E72] max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};