import React from 'react';

interface ServiceStatsProps {
  stats: Record<string, string>;
}

const ServiceStats: React.FC<ServiceStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {Object.entries(stats).map(([key, value], index) => (
        <div key={index} className="text-center p-8 bg-[#181715] border border-[#D5B803]/20">
          <div className="text-4xl font-bold text-[#D5B803] mb-2">{value}</div>
          <div className="text-[#928E72] capitalize">
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceStats;