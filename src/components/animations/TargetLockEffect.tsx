import React from 'react';
import { Target } from 'lucide-react';

interface TargetLockEffectProps {
  active?: boolean;
}

const TargetLockEffect: React.FC<TargetLockEffectProps> = ({ active = false }) => {
  return (
    <div className={`relative transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}>
      <Target className="h-12 w-12 text-[#D5B803] animate-target-lock" />
      <div className="absolute inset-0 border-2 border-[#D5B803]/30 rounded-full animate-ping" />
    </div>
  );
};

export default TargetLockEffect;