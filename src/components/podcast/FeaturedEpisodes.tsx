import React from 'react';
import { Play } from 'lucide-react';
import { featuredEpisodes } from '../../data/podcast/featured';

const FeaturedEpisodes = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Episodes</h2>
          <p className="text-[#928E72] max-w-2xl mx-auto">
            Essential listening for military recruitment professionals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredEpisodes.map((episode, index) => (
            <div key={index} className="bg-[#181715] border border-[#D5B803]/20 p-8 hover:border-[#D5B803] transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <button className="w-16 h-16 rounded-full bg-[#D5B803] flex items-center justify-center group transition-transform hover:scale-110">
                    <Play className="h-8 w-8 text-[#181715] transition-transform group-hover:scale-110" />
                  </button>
                </div>
                <div>
                  <span className="text-[#D5B803] text-sm">{episode.duration}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{episode.title}</h3>
                  <p className="text-[#928E72] mb-4">{episode.description}</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={episode.hostImage}
                      alt={episode.host}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="text-white font-bold">{episode.host}</div>
                      <div className="text-[#928E72] text-sm">{episode.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEpisodes;