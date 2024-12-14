import React from 'react';
import { Service } from '../../../types/services';
import { ArrowRight } from 'lucide-react';

const ServiceCard: React.FC<Service> = ({ title, description, icon: Icon, features, stats }) => {
  return (
    <div className="bg-[#181715] border border-[#D5B803]/20 p-8 hover:border-[#D5B803] transition-all duration-300">
      <Icon className="h-12 w-12 text-[#D5B803] mb-6" />
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-[#928E72] mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.slice(0, 3).map((feature, index) => (
          <li key={index} className="flex items-center text-[#928E72]">
            <ArrowRight className="h-4 w-4 text-[#D5B803] mr-2" />
            {feature}
          </li>
        ))}
      </ul>

      {stats && (
        <div className="grid grid-cols-2 gap-4 mb-8">
          {Object.entries(stats).slice(0, 2).map(([key, value], index) => (
            <div key={index} className="text-center p-4 bg-[#181715] border border-[#D5B803]/20">
              <div className="text-2xl font-bold text-[#D5B803]">{value}</div>
              <div className="text-[#928E72] text-sm capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </div>
          ))}
        </div>
      )}
      
      <button className="text-[#D5B803] font-tactical flex items-center hover:text-white transition-colors">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
};

export default ServiceCard;