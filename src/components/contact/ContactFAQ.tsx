import React from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What services do you offer for military recruitment?',
    answer: 'We provide comprehensive recruitment marketing solutions including digital campaigns, social media management, content creation, and analytics tracking specifically designed for military recruitment.'
  },
  {
    question: 'How can I schedule a consultation?',
    answer: 'You can schedule a consultation by filling out our contact form, calling us directly, or using our online scheduling system. Our team will respond within 24 hours.'
  },
  {
    question: 'Do you work with all military branches?',
    answer: 'Yes, we work with all branches of the military including Army, Navy, Air Force, Marines, Coast Guard, and Space Force.'
  },
  {
    question: 'What makes your recruitment marketing different?',
    answer: 'Our approach combines military expertise with cutting-edge marketing technology to deliver targeted, effective recruitment campaigns that resonate with potential recruits.'
  }
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="relative py-24 bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-[#928E72]">Find quick answers to common questions</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#181715] border border-[#D5B803]/20"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-bold">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-[#D5B803]" />
                ) : (
                  <Plus className="h-5 w-5 text-[#D5B803]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-[#928E72]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;