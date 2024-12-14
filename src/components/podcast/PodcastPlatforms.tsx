import React from 'react';
import { podcastPlatforms } from '../../data/podcast/platforms';

const PodcastPlatforms = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Listen On</h2>
        <p className="text-[#928E72] max-w-2xl mx-auto mb-12">
          Available on all major podcast platforms
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {podcastPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              className="group bg-[#181715] border border-[#D5B803]/20 p-6 hover:border-[#D5B803] transition-all duration-300"
            >
              <platform.icon className="h-12 w-12 text-[#D5B803] mx-auto mb-4" />
              <div className="text-white font-bold group-hover:text-[#D5B803] transition-colors">
                {platform.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastPlatforms;