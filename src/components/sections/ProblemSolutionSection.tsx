import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { ProblemSolutionCard } from '../shared/ProblemSolutionCard';

const problems = [
  {
    title: 'Low engagement with recruits',
    description: 'Traditional methods fail to capture attention',
    icon: XCircle,
  },
  {
    title: 'Inefficient communication tools',
    description: 'Scattered platforms and manual processes',
    icon: XCircle,
  },
  {
    title: 'Poor lead quality',
    description: 'Wasted time on unqualified prospects',
    icon: XCircle,
  },
];

const solutions = [
  {
    title: 'Automated Engagement',
    description: 'AI-driven communication that converts',
    icon: CheckCircle,
  },
  {
    title: 'Unified Command Center',
    description: 'All your tools in one powerful platform',
    icon: CheckCircle,
  },
  {
    title: 'Precision Targeting',
    description: 'Connect with high-quality leads only',
    icon: CheckCircle,
  },
];

const ProblemSolutionSection = () => {
  return (
    <section className="bg-[#181715] py-24 relative">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problems Column */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Struggling to Reach the Right Recruits?
            </h2>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <ProblemSolutionCard key={index} {...problem} variant="problem" />
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Our Solutions Simplify and Amplify Your Efforts
            </h2>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <ProblemSolutionCard key={index} {...solution} variant="solution" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;