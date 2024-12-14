import React from 'react';
import { Shield, Target, BarChart3 } from 'lucide-react';
import { ServiceDetailCard } from './ServiceDetailCard';

const services = [
  {
    id: 'strategic',
    title: 'Strategic Marketing',
    description: 'Data-driven campaigns that target qualified candidates with precision.',
    features: [
      'Demographic targeting',
      'Multi-channel campaigns',
      'Performance analytics',
      'A/B testing'
    ],
    icon: Target,
    price: '$799/month'
  },
  {
    id: 'automation',
    title: 'Recruitment Automation',
    description: 'Streamline your recruitment process with intelligent automation.',
    features: [
      'Email sequences',
      'SMS campaigns',
      'Lead scoring',
      'Automated follow-ups'
    ],
    icon: Shield,
    price: '$999/month'
  },
  {
    id: 'analytics',
    title: 'Performance Analytics',
    description: 'Comprehensive insights into your recruitment metrics.',
    features: [
      'Real-time dashboards',
      'Custom reporting',
      'ROI tracking',
      'Conversion analytics'
    ],
    icon: BarChart3,
    price: '$599/month'
  }
];

const ServiceDetails = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Mission-Critical Services
          </h2>
          <p className="text-[#928E72] max-w-2xl mx-auto">
            Comprehensive solutions designed for modern military recruitment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceDetailCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;