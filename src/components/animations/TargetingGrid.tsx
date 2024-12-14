import React from 'react';

const TargetingGrid = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Targeting Grid Lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-7xl mx-auto">
          {/* Horizontal Lines */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-[#D5B803]/10"
              style={{ top: `${(i + 1) * 20}%` }}
            />
          ))}
          
          {/* Vertical Lines */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-[#D5B803]/10"
              style={{ left: `${(i + 1) * 20}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TargetingGrid;