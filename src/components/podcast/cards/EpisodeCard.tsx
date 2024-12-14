import React from 'react';
import { Play } from 'lucide-react';
import { Episode } from '../../../types/podcast';

const EpisodeCard: React.FC<Episode> = ({ title, description, duration, date, host, hostImage }) => {
  return (
    <div className="bg-[#181715] border border-[#D5B803]/20 p-6 hover:border-[#D5B803] transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[#D5B803] text-sm">{duration}</span>
        <span className="text-[#928E72] text-sm">{date}</span>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-[#928E72] mb-6">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={hostImage}
            alt={host}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-white text-sm">{host}</span>
        </div>
        <button className="w-10 h-10 rounded-full bg-[#D5B803] flex items-center justify-center group transition-transform hover:scale-110">
          <Play className="h-5 w-5 text-[#181715]" />
        </button>
      </div>
    </div>
  );
};

export default EpisodeCard;