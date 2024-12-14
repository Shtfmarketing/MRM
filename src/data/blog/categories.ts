import { Target, Users, BarChart3, Briefcase, Shield, Video, Globe, BookOpen } from 'lucide-react';
import { BlogCategory } from '../../types/blog';

export const blogCategories: BlogCategory[] = [
  {
    name: 'Strategy',
    description: 'Strategic approaches to military recruitment',
    icon: Target
  },
  {
    name: 'Leadership',
    description: 'Insights on recruitment leadership',
    icon: Users
  },
  {
    name: 'Analytics',
    description: 'Data-driven recruitment decisions',
    icon: BarChart3
  },
  {
    name: 'Career Development',
    description: 'Military career opportunities',
    icon: Briefcase
  },
  {
    name: 'Security',
    description: 'Security clearance insights',
    icon: Shield
  },
  {
    name: 'Marketing',
    description: 'Recruitment marketing strategies',
    icon: Video
  },
  {
    name: 'Global Recruitment',
    description: 'International recruitment trends',
    icon: Globe
  },
  {
    name: 'Training',
    description: 'Recruitment training resources',
    icon: BookOpen
  }
];