import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Service } from '../../../data/services/servicesList';
import Button from '../../shared/Button';

interface ServiceDetailsProps {
  service: Service;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="flex items-center mb-6">
          <service.icon className="h-12 w-12 text-[#D5B803] mr-4" />
          <h2 className="text-4xl font-bold text-white">{service.title}</h2>
        </div>
        
        <p className="text-xl text-[#928E72] mb-8">{service.description}</p>
        
        {service.stats && (
          <div className="grid grid-cols-2 gap-8 mb-8">
            {Object.entries(service.stats).map(([key, value]) => (
              <div key={key}>
                <div className="text-4xl font-bold text-[#D5B803] mb-2">{value}</div>
                <div className="text-[#928E72] capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>
        )}
        
        <Button size="lg" className="group">
          Learn More
          <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      
      <div className="bg-[#181715] border border-[#D5B803]/20 p-8">
        <h3 className="text-xl font-bold text-white mb-6">Key Features</h3>
        <ul className="space-y-4">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center text-[#928E72]">
              <ChevronRight className="h-5 w-5 text-[#D5B803] mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        
        {service.benefits && (
          <>
            <h3 className="text-xl font-bold text-white mt-8 mb-6">Benefits</h3>
            <ul className="space-y-4">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center text-[#928E72]">
                  <ChevronRight className="h-5 w-5 text-[#D5B803] mr-3" />
                  {benefit}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;