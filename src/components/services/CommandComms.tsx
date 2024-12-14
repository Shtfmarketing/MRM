import React from 'react';
import { MessageSquare, Clock, BarChart3, Shield } from 'lucide-react';
import Button from '../shared/Button';

const features = [
  {
    icon: MessageSquare,
    title: 'Multi-Channel Automation',
    description: 'Seamlessly coordinate messaging across email, SMS, and voice channels'
  },
  {
    icon: Clock,
    title: 'Smart Scheduling',
    description: 'AI-powered timing optimization for maximum engagement'
  },
  {
    icon: BarChart3,
    title: 'Response Analytics',
    description: 'Real-time tracking and analysis of communication effectiveness'
  }
];

const challenges = [
  {
    title: 'Inconsistent follow-up with potential recruits',
    description: 'Automated communication sequences ensure no prospect falls through the cracks'
  },
  {
    title: 'Time-consuming manual outreach',
    description: 'Save 15+ hours per week with intelligent automation'
  }
];

const CommandComms = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Command Comms</h1>
          <p className="text-xl text-[#D5B803] max-w-3xl mx-auto">
            Transform your recruitment communications with military-grade precision and automation that drives results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#181715] border border-[#D5B803]/20 p-8 hover:border-[#D5B803] transition-all duration-300">
              <feature.icon className="h-12 w-12 text-[#D5B803] mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-[#928E72]">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <p className="text-[#928E72] mb-8 leading-relaxed">
              Command Comms revolutionizes military recruitment by delivering automated, personalized communication across multiple channels. Our AI-powered system ensures every interaction is timely, relevant, and aligned with your recruitment goals.
            </p>
            <p className="text-[#928E72] mb-8 leading-relaxed">
              Built specifically for military recruiters, Command Comms understands the unique challenges of connecting with potential recruits. Our platform maintains consistent engagement through smart scheduling, automated follow-ups, and real-time response tracking.
            </p>
            <p className="text-[#928E72] mb-8 leading-relaxed">
              With built-in compliance and security features, you can focus on building relationships while our system handles the heavy lifting of communication management.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-8 bg-[#181715] border border-[#D5B803]/20">
              <div className="text-4xl font-bold text-[#D5B803] mb-2">89%</div>
              <div className="text-[#928E72]">Increase in response rates</div>
            </div>
            <div className="text-center p-8 bg-[#181715] border border-[#D5B803]/20">
              <div className="text-4xl font-bold text-[#D5B803] mb-2">45%</div>
              <div className="text-[#928E72]">Reduction in recruitment cycle time</div>
            </div>
          </div>
        </div>

        {/* Challenges Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12">Common Challenges We Solve</h2>
          <div className="space-y-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-[#181715] border border-[#D5B803]/20 p-8">
                <h3 className="text-xl font-bold text-[#D5B803] mb-4">{challenge.title}</h3>
                <p className="text-[#928E72]">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg">Start Your Free Trial</Button>
            <Button variant="secondary" size="lg">Schedule a Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommandComms;