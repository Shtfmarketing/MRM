import React from 'react';
import { ServiceChallenge } from '../../../types/services';

interface ServiceChallengesProps {
  challenges: ServiceChallenge[];
}

const ServiceChallenges: React.FC<ServiceChallengesProps> = ({ challenges }) => {
  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold text-white mb-12">Common Challenges We Solve</h2>
      <div className="space-y-8">
        {challenges.map((challenge, index) => (
          <div key={index} className="bg-[#181715] border border-[#D5B803]/20 p-8">
            <h3 className="text-xl font-bold text-[#D5B803] mb-4">{challenge.title}</h3>
            <p className="text-[#928E72]">{challenge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceChallenges;