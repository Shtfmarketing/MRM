import { LucideIcon } from 'lucide-react';

export interface Episode {
  title: string;
  description: string;
  duration: string;
  date: string;
  host: string;
  hostImage: string;
  role?: string;
}

export interface Podcast {
  name: string;
  icon: LucideIcon;
  url: string;
}