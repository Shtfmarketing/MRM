// Military Branch Types
export type MilitaryBranch = 'army' | 'navy' | 'airforce' | 'marines' | 'coastguard' | 'spaceforce';

// Security Clearance Levels
export type ClearanceLevel = 'none' | 'confidential' | 'secret' | 'topsecret' | 'sci';

// Military Occupation Types
export interface MilitaryOccupation {
  code: string; // MOS/AFSC code
  title: string;
  branch: MilitaryBranch;
  clearanceRequired: ClearanceLevel;
  description: string;
}

// Branch-specific colors and styles
export const BRANCH_COLORS: Record<MilitaryBranch, { primary: string; secondary: string }> = {
  army: { primary: '#4B5320', secondary: '#789D4A' },
  navy: { primary: '#000080', secondary: '#1C2841' },
  airforce: { primary: '#00308F', secondary: '#72A0C1' },
  marines: { primary: '#C41E3A', secondary: '#8B0000' },
  coastguard: { primary: '#003478', secondary: '#FF7034' },
  spaceforce: { primary: '#1D2951', secondary: '#4B0082' }
};