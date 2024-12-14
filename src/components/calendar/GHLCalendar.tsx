import React, { useEffect } from 'react';
import { loadGHLCalendar } from '../../utils/ghl';

interface GHLCalendarProps {
  calendarId: string;
}

const GHLCalendar: React.FC<GHLCalendarProps> = ({ calendarId }) => {
  useEffect(() => {
    const elementId = 'ghl-calendar-embed';
    loadGHLCalendar(elementId, calendarId);
  }, [calendarId]);

  return (
    <div id="ghl-calendar-embed" className="w-full min-h-[600px] bg-[#181715]">
      <div className="flex items-center justify-center h-full">
        <p className="text-[#928E72]">Loading calendar...</p>
      </div>
    </div>
  );
};

export default GHLCalendar;