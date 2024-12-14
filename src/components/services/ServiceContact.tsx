import React from 'react';
import GHLContactForm from '../forms/GHLContactForm';
import GHLCalendar from '../calendar/GHLCalendar';

const ServiceContact = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Begin Your Mission?
          </h2>
          <p className="text-[#928E72] max-w-2xl mx-auto">
            Schedule a consultation or fill out the form below to get started
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <GHLContactForm />
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Schedule a Demo</h3>
            <GHLCalendar calendarId="YOUR_GHL_CALENDAR_ID" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContact;