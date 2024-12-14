import React from 'react';
import Button from '../shared/Button';

const ContactForm = () => {
  return (
    <div className="bg-[#181715] border border-[#D5B803]/20 p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-[#928E72] mb-2">First Name</label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-3 bg-[#181715] border border-[#4E5A3C]/20 text-white focus:border-[#D5B803] transition-colors rounded"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-[#928E72] mb-2">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-3 bg-[#181715] border border-[#4E5A3C]/20 text-white focus:border-[#D5B803] transition-colors rounded"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-[#928E72] mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-[#181715] border border-[#4E5A3C]/20 text-white focus:border-[#D5B803] transition-colors rounded"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-[#928E72] mb-2">Subject</label>
          <select
            id="subject"
            className="w-full px-4 py-3 bg-[#181715] border border-[#4E5A3C]/20 text-white focus:border-[#D5B803] transition-colors rounded"
          >
            <option value="">Select a subject</option>
            <option value="recruitment">Recruitment Strategy</option>
            <option value="marketing">Marketing Services</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-[#928E72] mb-2">Message</label>
          <textarea
            id="message"
            rows={6}
            className="w-full px-4 py-3 bg-[#181715] border border-[#4E5A3C]/20 text-white focus:border-[#D5B803] transition-colors rounded"
          ></textarea>
        </div>

        <Button size="lg" className="w-full">Send Message</Button>
      </form>
    </div>
  );
};

export default ContactForm;