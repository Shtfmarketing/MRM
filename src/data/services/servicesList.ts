import { MessageSquare, Target, Video, Share2, Phone, Mail, Calendar, BarChart3 } from 'lucide-react';
import { Service } from '../../types/services';

export const services: Service[] = [
  {
    id: 'command-comms',
    title: 'Command Comms',
    description: 'Automate communication with recruits via text, email, and phone outreach',
    icon: MessageSquare,
    features: [
      'Multi-channel automation',
      'AI-powered response management',
      'Automated follow-up sequences',
      'Performance tracking'
    ],
    stats: {
      responseRate: '85%',
      engagementIncrease: '75%'
    }
  },
  {
    id: 'leadtrek',
    title: 'LeadTrek',
    description: 'Connect with high-quality, pre-vetted leads that match your requirements',
    icon: Target,
    features: [
      'Smart lead scoring',
      'Automated distribution',
      'Performance tracking',
      'Lead nurturing workflows'
    ],
    stats: {
      leadQuality: '92%',
      conversionRate: '45%'
    }
  },
  {
    id: 'reconvisuals',
    title: 'ReconVisuals',
    description: 'Professional video content creation to inspire and attract potential recruits',
    icon: Video,
    features: [
      'Professional production',
      'Multi-platform distribution',
      'Engagement analytics',
      'Content strategy'
    ],
    stats: {
      engagement: '78%',
      viewCompletion: '85%'
    }
  },
  {
    id: 'socialops',
    title: 'SocialOps Command',
    description: 'Dominate social media with targeted posts and campaigns',
    icon: Share2,
    features: [
      'Content scheduling',
      'Analytics dashboard',
      'Audience targeting',
      'Campaign management'
    ],
    stats: {
      reachIncrease: '120%',
      socialEngagement: '65%'
    }
  },
  {
    id: 'vanguard-voice',
    title: 'Vanguard Voice',
    description: 'Expert call handling and communication services',
    icon: Phone,
    features: [
      'Professional call handling',
      'Script optimization',
      'Call analytics',
      'Quality monitoring'
    ],
    stats: {
      callSuccess: '89%',
      satisfactionRate: '94%'
    }
  },
  {
    id: 'mission-mail',
    title: 'MissionMail',
    description: 'Strategic email marketing automation for recruitment',
    icon: Mail,
    features: [
      'Email automation',
      'Template library',
      'A/B testing',
      'Performance tracking'
    ],
    stats: {
      openRate: '45%',
      clickThrough: '28%'
    }
  },
  {
    id: 'ops-scheduler',
    title: 'OpsScheduler',
    description: 'Simplify scheduling with automated appointment system',
    icon: Calendar,
    features: [
      'Online scheduling',
      'Automated reminders',
      'Calendar integration',
      'Availability management'
    ],
    stats: {
      noShowReduction: '75%',
      schedulingEfficiency: '90%'
    }
  },
  {
    id: 'intelsight',
    title: 'IntelSight',
    description: 'Data tracking and performance insights to optimize recruitment',
    icon: BarChart3,
    features: [
      'Real-time analytics',
      'Custom reporting',
      'Performance metrics',
      'ROI tracking'
    ],
    stats: {
      dataAccuracy: '99%',
      insightGeneration: '85%'
    }
  }
];