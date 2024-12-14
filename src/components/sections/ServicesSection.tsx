import React from 'react';
import { MessageSquare, Target, Video, Share2, Phone, Mail, Calendar, BarChart3 } from 'lucide-react';
import { ServiceCard } from '../shared/ServiceCard';

const services = [
  {
    name: 'Command Comms',
    description: 'Automate communication with recruits using text, email, and phone outreach.',
    icon: MessageSquare,
  },
  {
    name: 'LeadTrek',
    description: 'Connect with the right recruits using high-quality leads.',
    icon: Target,
  },
  {
    name: 'ReconVisuals',
    description: 'Engage recruits with professional, inspiring video content.',
    icon: Video,
  },
  {
    name: 'SocialOps Command',
    description: 'Dominate social media with targeted posts and campaigns.',
    icon: Share2,
  },
  {
    name: 'Vanguard Voice',
    description: 'Keep recruits informed with expert call handling.',
    icon: Phone,
  },
  {
    name: 'MissionMail',
    description: 'Nurture recruits with automated email campaigns.',
    icon: Mail,
  },
  {
    name: 'OpsScheduler',
    description: 'Simplify scheduling with automatic reminders.',
    icon: Calendar,
  },
  {
    name: 'IntelSight',
    description: 'Optimize recruiting with powerful data insights.',
    icon: BarChart3,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#181715] py-24 relative">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Tools for Recruiting Success</h2>
          <p className="text-[#928E72] max-w-2xl mx-auto">
            Comprehensive solutions designed to enhance your recruitment operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;