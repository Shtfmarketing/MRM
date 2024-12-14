import React from 'react';
import { Shield, Award, Trophy } from 'lucide-react';

const stats = [
  { label: 'Increase in Recruit Engagement', value: '85%' },
  { label: 'Successful Campaigns', value: '3,000+' },
  { label: 'Customer Satisfaction', value: '98%' },
];

const TrustSection = () => {
  return (
    <section className="bg-[#181715] py-24 relative">
      <div className="absolute inset-0 camo-pattern opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Trusted by Top Recruiters Nationwide</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D5B803] to-[#4E5A3C] mx-auto mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 border border-[#D5B803]/20 bg-[#4E5A3C]/10">
              <div className="text-4xl font-bold text-[#D5B803] mb-2">{stat.value}</div>
              <div className="text-[#928E72] font-tactical">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#case-studies" className="inline-flex items-center text-[#D5B803] hover:text-[#4E5A3C] transition-colors">
            <span className="mr-2">See How We've Helped Others</span>
            <Award className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;