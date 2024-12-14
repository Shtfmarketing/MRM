import React from 'react';

const RadarAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 animate-radar">
        <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 border-2 border-[#D5B803]/10 rounded-full" />
          <div className="absolute inset-[10%] border-2 border-[#D5B803]/10 rounded-full" />
          <div className="absolute inset-[20%] border-2 border-[#D5B803]/10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default RadarAnimation;