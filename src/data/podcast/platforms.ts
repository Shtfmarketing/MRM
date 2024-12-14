import { Podcast } from '../../types/podcast';
import { Music, Radio, Mic, Headphones } from 'lucide-react';

export const podcastPlatforms: Podcast[] = [
  {
    name: 'Apple Podcasts',
    icon: Music,
    url: '#'
  },
  {
    name: 'Spotify',
    icon: Headphones,
    url: '#'
  },
  {
    name: 'Google Podcasts',
    icon: Mic,
    url: '#'
  },
  {
    name: 'Amazon Music',
    icon: Radio,
    url: '#'
  }
];