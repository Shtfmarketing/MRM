import React from 'react';
import { Target, Shield, BarChart3, Users } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'Reach qualified candidates with data-driven targeting'
  },
  {
    icon: Shield,
    title: 'Brand Protection',
    description: 'Maintain military values in all marketing efforts'
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    description: 'Monitor and optimize recruitment metrics'
  },
  {
    icon: Users,
    title: 'Lead Management',
    description: 'Efficiently process and nurture potential recruits'
  }
];

const ServicesFeatures = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-[#928E72] max-w-2xl mx-auto">
            Industry-leading features designed for military recruitment success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="h-12 w-12 text-[#D5B803] mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-[#928E72]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesFeatures;