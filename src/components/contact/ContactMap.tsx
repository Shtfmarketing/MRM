import React from 'react';

const ContactMap = () => {
  return (
    <section className="relative py-24 bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Location</h2>
          <p className="text-[#928E72]">Visit our headquarters in Arlington, VA</p>
        </div>
        
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49853.91250766247!2d-77.10950833347168!3d38.881759164590435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b69d7ba7a70f%3A0xf8cf6fc845f6b093!2sArlington%2C%20VA!5e0!3m2!1sen!2sus!4v1647887774745!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;