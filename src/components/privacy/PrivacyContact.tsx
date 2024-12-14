import React from 'react';
import { Mail } from 'lucide-react';
import Button from '../shared/Button';

const PrivacyContact = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="h-16 w-16 text-[#D5B803] mx-auto mb-8" />
        <h2 className="text-4xl font-bold text-white mb-4">Privacy Questions?</h2>
        <p className="text-[#928E72] mb-8">
          If you have any questions about our privacy policy or data handling practices, please don't hesitate to contact our privacy team.
        </p>
        
        <Button size="lg">Contact Privacy Team</Button>
      </div>
    </section>
  );
};

export default PrivacyContact;