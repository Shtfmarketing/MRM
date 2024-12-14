import React from 'react';
import { Flag } from 'lucide-react';

const milestones = [
  {
    year: '2018',
    title: 'Company Founded',
    description: 'Established with a mission to modernize military recruitment.'
  },
  {
    year: '2019',
    title: 'First Major Contract',
    description: 'Partnered with U.S. Army Recruitment Command.'
  },
  {
    year: '2020',
    title: 'Digital Innovation',
    description: 'Launched AI-powered recruitment platform.'
  },
  {
    year: '2023',
    title: 'National Expansion',
    description: 'Extended services to all military branches.'
  }
];

const Timeline = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
          <p className="text-[#928E72] max-w-2xl mx-auto">
            Key milestones in our mission to transform military recruitment
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#D5B803]/20" />
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-[#181715] border border-[#D5B803]/20 p-8">
                    <div className="flex items-center mb-4">
                      <Flag className="h-6 w-6 text-[#D5B803] mr-3" />
                      <span className="text-[#D5B803] font-bold">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-[#928E72]">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;