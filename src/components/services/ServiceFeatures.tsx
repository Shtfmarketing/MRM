import React from 'react';
import { MessageSquare, Clock, BarChart3 } from 'lucide-react';

const ServiceFeatures = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Multi-Channel Automation',
      description: 'Seamlessly coordinate messaging across email, SMS, and voice channels'
    },
    {
      icon: Clock,
      title: 'Smart Scheduling',
      description: 'AI-powered timing optimization for maximum engagement'
    },
    {
      icon: BarChart3,
      title: 'Response Analytics',
      description: 'Real-time tracking and analysis of communication effectiveness'
    }
  ];

  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#181715] border border-[#D5B803]/20 p-8 hover:border-[#D5B803] transition-all duration-300">
              <feature.icon className="h-12 w-12 text-[#D5B803] mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-[#928E72]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;