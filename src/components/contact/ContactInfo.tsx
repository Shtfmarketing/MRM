import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 765-4321']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@militarymarketing.com', 'support@militarymarketing.com']
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Military Plaza', 'Suite 100', 'Arlington, VA 22201']
    },
    {
      icon: Clock,
      title: 'Hours of Operation',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM EST', 'Saturday: 9:00 AM - 2:00 PM EST']
    }
  ];

  return (
    <div className="space-y-8">
      {contactDetails.map((item, index) => (
        <div key={index} className="bg-[#181715] border border-[#D5B803]/20 p-6">
          <div className="flex items-center mb-4">
            <item.icon className="h-6 w-6 text-[#D5B803] mr-3" />
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
          </div>
          <div className="space-y-2">
            {item.details.map((detail, i) => (
              <p key={i} className="text-[#928E72]">{detail}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;