import React from 'react';
import { cn } from '../../utils/cn';

interface LogoProps {
  variant?: 'horizontal' | 'vertical';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'horizontal', className }) => {
  return (
    <div className={cn(
      'flex items-center',
      variant === 'vertical' && 'flex-col',
      className
    )}>
      {/* SVG Logo */}
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 876 890" 
        className="text-[#D5B803]"
      >
        <path 
          fill="currentColor" 
          d="M875.374146,891.000000 C583.673523,891.000000 292.513550,891.000000 1.176797,891.000000 C1.176797,594.333374 1.176797,297.666718 1.176797,1.052882 C293.083954,1.052882 585.041992,1.052882 877.000000,1.052882 C877.000000,296.265625 877.001526,591.425537 876.955200,886.585388 C876.954956,888.057007 876.276550,889.528442 875.374146,891.000000 z"
        />
      </svg>

      {/* Logo Text */}
      <div className={cn(
        'flex flex-col',
        variant === 'horizontal' ? 'ml-4' : 'mt-4 text-center'
      )}>
        <span className="text-2xl font-bold text-white tracking-tight">
          Military Recruiting Marketing
        </span>
      </div>
    </div>
  );
};

export default Logo;