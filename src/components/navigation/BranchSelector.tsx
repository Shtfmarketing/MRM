import React from 'react';
import { Shield } from 'lucide-react';
import { MilitaryBranch, BRANCH_COLORS } from '../../types/military';
import { cn } from '../../utils/cn';

interface BranchSelectorProps {
  selectedBranch: MilitaryBranch | null;
  onBranchSelect: (branch: MilitaryBranch) => void;
}

const branches: { id: MilitaryBranch; name: string }[] = [
  { id: 'army', name: 'U.S. Army' },
  { id: 'navy', name: 'U.S. Navy' },
  { id: 'airforce', name: 'U.S. Air Force' },
  { id: 'marines', name: 'U.S. Marines' },
  { id: 'coastguard', name: 'U.S. Coast Guard' },
  { id: 'spaceforce', name: 'U.S. Space Force' },
];

const BranchSelector: React.FC<BranchSelectorProps> = ({ selectedBranch, onBranchSelect }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {branches.map(({ id, name }) => (
        <button
          key={id}
          onClick={() => onBranchSelect(id)}
          className={cn(
            'relative p-4 border-2 rounded transition-all duration-300',
            'flex flex-col items-center justify-center text-center',
            selectedBranch === id
              ? `border-${BRANCH_COLORS[id].primary} bg-${BRANCH_COLORS[id].primary}/10`
              : 'border-[#4E5A3C]/20 hover:border-[#D5B803]'
          )}
          aria-selected={selectedBranch === id}
          role="tab"
        >
          <Shield 
            className={cn(
              'h-8 w-8 mb-2',
              selectedBranch === id
                ? `text-${BRANCH_COLORS[id].primary}`
                : 'text-[#928E72]'
            )}
          />
          <span className="text-sm font-tactical text-white">{name}</span>
        </button>
      ))}
    </div>
  );
};

export default BranchSelector;