import React from 'react';
import { Shield, Lock, Eye, Database, Globe, Bell } from 'lucide-react';

const sections = [
  {
    icon: Shield,
    title: 'Information Collection',
    content: `We collect information that you provide directly to us, including:
      • Personal identification information
      • Contact information
      • Military service details
      • Professional background
      • Communication preferences`
  },
  {
    icon: Lock,
    title: 'Data Security',
    content: `We implement appropriate security measures to protect your information:
      • Encryption of sensitive data
      • Secure server infrastructure
      • Regular security audits
      • Access controls and authentication
      • Compliance with military-grade security standards`
  },
  {
    icon: Eye,
    title: 'Information Usage',
    content: `Your information is used for:
      • Processing recruitment applications
      • Providing requested services
      • Communication about opportunities
      • Analytics and service improvement
      • Legal compliance`
  },
  {
    icon: Database,
    title: 'Data Storage',
    content: `We maintain strict data storage policies:
      • Secure cloud infrastructure
      • Regular backups
      • Data retention schedules
      • Access logging
      • Disaster recovery protocols`
  },
  {
    icon: Globe,
    title: 'Third-Party Sharing',
    content: `We may share information with:
      • Military branches (with consent)
      • Service providers
      • Legal authorities (when required)
      • Analytics partners
      All sharing is subject to strict confidentiality agreements.`
  },
  {
    icon: Bell,
    title: 'Your Rights',
    content: `You have the right to:
      • Access your personal data
      • Request corrections
      • Delete your information
      • Opt-out of communications
      • File complaints about data handling`
  }
];

const PrivacyContent = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-[#181715] border border-[#D5B803]/20 p-8 hover:border-[#D5B803] transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <section.icon className="h-8 w-8 text-[#D5B803] mr-4" />
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              <div className="text-[#928E72] whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;