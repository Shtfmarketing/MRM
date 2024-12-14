import { MessageSquare, Target, Video, Share2, Phone, Mail } from 'lucide-react';

export const serviceCategories = [
  {
    id: 'command-comms',
    title: 'Command Communications',
    description: 'Automated multi-channel communication system for recruit engagement',
    icon: MessageSquare,
    price: '$499/month',
  },
  {
    id: 'lead-trek',
    title: 'LeadTrek™',
    description: 'Advanced lead generation and qualification system',
    icon: Target,
    price: '$799/month',
  },
  {
    id: 'recon-visuals',
    title: 'ReconVisuals',
    description: 'Professional video content creation and distribution',
    icon: Video,
    price: '$999/month',
  },
  {
    id: 'social-ops',
    title: 'SocialOps Command',
    description: 'Military-focused social media management platform',
    icon: Share2,
    price: '$599/month',
  },
  {
    id: 'vanguard-voice',
    title: 'Vanguard Voice',
    description: 'AI-powered call center solutions for recruitment',
    icon: Phone,
    price: '$699/month',
  },
  {
    id: 'mission-mail',
    title: 'MissionMail',
    description: 'Strategic email marketing automation system',
    icon: Mail,
    price: '$399/month',
  },
];