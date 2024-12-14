import React from 'react';

const RadarSweep = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 animate-radar-sweep">
          <div className="h-full w-1 bg-gradient-to-b from-[#D5B803]/0 via-[#D5B803]/20 to-[#D5B803]/0" />
        </div>
      </div>
    </div>
  );
};

export default RadarSweep;