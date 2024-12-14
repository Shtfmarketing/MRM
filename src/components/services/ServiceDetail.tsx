import React from 'react';
import { Service } from '../../types/services';
import ServiceFeatures from './sections/ServiceFeatures';
import ServiceStats from './sections/ServiceStats';
import ServiceChallenges from './sections/ServiceChallenges';
import Button from '../shared/Button';

interface ServiceDetailProps {
  service: Service;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">{service.title}</h1>
          <p className="text-xl text-[#D5B803] max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <p className="text-[#928E72] mb-8 leading-relaxed">
              Our {service.title} solution revolutionizes military recruitment by delivering automated, 
              personalized communication across multiple channels. Our AI-powered system ensures every 
              interaction is timely, relevant, and aligned with your recruitment goals.
            </p>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center text-[#928E72]">
                  <service.icon className="h-5 w-5 text-[#D5B803] mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          {service.stats && <ServiceStats stats={service.stats} />}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg">Start Your Free Trial</Button>
            <Button variant="secondary" size="lg">Schedule a Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;