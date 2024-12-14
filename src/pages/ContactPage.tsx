import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';
import ContactFAQ from '../components/contact/ContactFAQ';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Military Recruitment Marketing</title>
        <meta name="description" content="Get in touch with our military recruitment marketing experts. We're here to help you optimize your recruitment strategies." />
      </Helmet>
      <div className="bg-[#181715]">
        <ContactHero />
        <div className="relative py-24">
          <div className="absolute inset-0 military-texture opacity-5" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
        <ContactMap />
        <ContactFAQ />
      </div>
    </>
  );
}

export default ContactPage;