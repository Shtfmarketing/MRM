import { LucideIcon } from 'lucide-react';

export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

export interface BlogCategory {
  name: string;
  description: string;
  icon: LucideIcon;
}