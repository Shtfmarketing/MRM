import React from 'react';
import { Check } from 'lucide-react';

const ServiceChallenges = () => {
  const challenges = [
    {
      title: 'Inconsistent follow-up with potential recruits',
      description: 'Automated communication sequences ensure no prospect falls through the cracks'
    },
    {
      title: 'Time-consuming manual outreach',
      description: 'Save 15+ hours per week with intelligent automation'
    }
  ];

  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Common Challenges We Solve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-[#181715] border border-[#D5B803]/20 p-8">
              <div className="flex items-start">
                <Check className="h-6 w-6 text-[#D5B803] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#D5B803] mb-2">{challenge.title}</h3>
                  <p className="text-[#928E72]">{challenge.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceChallenges;