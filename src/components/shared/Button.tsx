import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({ className, variant = 'primary', size = 'md', children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'relative group font-tactical uppercase tracking-wider transition-all duration-300',
        'before:absolute before:inset-0 before:border-2 before:border-[#D5B803] before:transform before:transition-transform before:duration-300',
        'after:absolute after:inset-0 after:border-2 after:border-[#D5B803] after:transform after:transition-transform after:duration-300',
        'hover:before:-translate-x-1 hover:before:-translate-y-1',
        'hover:after:translate-x-1 hover:after:translate-y-1',
        {
          'bg-gradient-to-r from-[#D5B803] to-[#4E5A3C] text-black': variant === 'primary',
          'bg-[#181715] text-[#D5B803] hover:bg-[#4E5A3C]/20': variant === 'secondary',
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;