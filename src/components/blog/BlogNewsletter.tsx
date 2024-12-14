import React from 'react';
import { Mail } from 'lucide-react';
import Button from '../shared/Button';

const BlogNewsletter = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="h-16 w-16 text-[#D5B803] mx-auto mb-8" />
        <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
        <p className="text-[#928E72] mb-8">
          Subscribe to our newsletter for the latest insights in military recruitment
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 bg-[#181715] border border-[#D5B803]/20 text-white placeholder-[#928E72] focus:border-[#D5B803] transition-colors rounded"
          />
          <Button size="lg">Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default BlogNewsletter;