import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { MilitaryOccupation, ClearanceLevel } from '../../types/military';

interface MOSSearchProps {
  onSearch: (query: string, filters: MOSSearchFilters) => void;
}

interface MOSSearchFilters {
  clearanceLevel: ClearanceLevel | 'all';
}

const MOSSearch: React.FC<MOSSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<MOSSearchFilters>({
    clearanceLevel: 'all'
  });

  const handleSearch = () => {
    onSearch(query, filters);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative flex items-center">
        <Search className="absolute left-4 h-5 w-5 text-[#928E72]" />
        <input
          type="text"
          placeholder="Search by MOS/AFSC code or title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-[#181715] border-2 border-[#4E5A3C]/20 text-white placeholder-[#928E72] focus:border-[#D5B803] transition-colors rounded-lg"
          aria-label="Search military occupations"
        />
        <button
          onClick={() => handleSearch()}
          className="ml-4 px-6 py-3 bg-[#D5B803] text-[#181715] font-tactical rounded-lg hover:bg-[#4E5A3C] transition-colors"
          aria-label="Submit search"
        >
          Search
        </button>
      </div>

      <div className="mt-4 flex items-center space-x-4">
        <Filter className="h-5 w-5 text-[#928E72]" />
        <select
          value={filters.clearanceLevel}
          onChange={(e) => setFilters({ ...filters, clearanceLevel: e.target.value as ClearanceLevel | 'all' })}
          className="bg-[#181715] text-white border border-[#4E5A3C]/20 rounded-lg px-4 py-2"
          aria-label="Filter by clearance level"
        >
          <option value="all">All Clearance Levels</option>
          <option value="none">No Clearance Required</option>
          <option value="confidential">Confidential</option>
          <option value="secret">Secret</option>
          <option value="topsecret">Top Secret</option>
          <option value="sci">SCI</option>
        </select>
      </div>
    </div>
  );
};

export default MOSSearch;