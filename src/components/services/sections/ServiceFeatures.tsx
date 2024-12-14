import React from 'react';
import { ServiceFeature } from '../../../types/services';

interface ServiceFeaturesProps {
  features: ServiceFeature[];
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
      {features.map((feature, index) => (
        <div key={index} className="bg-[#181715] border border-[#D5B803]/20 p-8 hover:border-[#D5B803] transition-all duration-300">
          <feature.icon className="h-12 w-12 text-[#D5B803] mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
          <p className="text-[#928E72]">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceFeatures;