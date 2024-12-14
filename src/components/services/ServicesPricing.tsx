import React from 'react';
import { Check } from 'lucide-react';
import Button from '../shared/Button';

const plans = [
  {
    name: 'Starter',
    price: '$999',
    description: 'Essential tools for recruitment marketing',
    features: [
      'Basic campaign planning',
      'Social media management',
      'Monthly analytics',
      'Email marketing',
      'Basic lead generation'
    ]
  },
  {
    name: 'Professional',
    price: '$2,499',
    description: 'Advanced solutions for growing programs',
    features: [
      'Advanced campaign planning',
      'Full social media management',
      'Real-time analytics dashboard',
      'Automated email sequences',
      'Advanced lead generation',
      'Custom reporting',
      'Priority support'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Comprehensive solutions for large organizations',
    features: [
      'Strategic campaign planning',
      'Multi-channel management',
      'Advanced analytics & AI',
      'Custom automation workflows',
      'Premium lead generation',
      'Dedicated account manager',
      '24/7 priority support',
      'Custom integrations'
    ]
  }
];

const ServicesPricing = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
          <p className="text-[#928E72] max-w-2xl mx-auto">
            Choose the perfect plan for your recruitment needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#181715] border border-[#D5B803]/20 p-8 transition-all duration-300 hover:border-[#D5B803]"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-[#D5B803] mb-4">{plan.price}</div>
              <p className="text-[#928E72] mb-8">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-white">
                    <Check className="h-5 w-5 text-[#D5B803] mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button size="lg" className="w-full">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPricing;