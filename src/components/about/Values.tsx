import React from 'react';
import { Shield, Target, Users, Award } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Upholding the highest standards of honesty and ethical conduct in all our operations.'
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Delivering accurate, targeted solutions that meet specific recruitment needs.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with military branches to achieve shared recruitment goals.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Consistently exceeding expectations in service delivery and results.'
  }
];

const Values = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
          <p className="text-[#928E72] max-w-2xl mx-auto">
            The principles that guide our mission and shape our success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-[#181715] border border-[#D5B803]/20 p-8 hover:border-[#D5B803] transition-colors">
              <value.icon className="h-12 w-12 text-[#D5B803] mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-[#928E72]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;