import React from 'react';
import { episodes } from '../../data/podcast/episodes';
import EpisodeCard from './cards/EpisodeCard';

const EpisodeGrid = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map((episode, index) => (
            <EpisodeCard key={index} {...episode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpisodeGrid;