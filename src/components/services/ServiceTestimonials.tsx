import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The targeting capabilities have revolutionized our recruitment process.",
    author: "Col. Sarah Mitchell",
    role: "Military Recruitment Director",
    rating: 5
  },
  {
    quote: "Increased our qualified leads by 150% in just three months.",
    author: "Maj. James Anderson",
    role: "Strategic Operations Officer",
    rating: 5
  }
];

const ServiceTestimonials = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Mission Success Stories
          </h2>
          <p className="text-[#928E72] max-w-2xl mx-auto">
            Hear from our satisfied clients about their recruitment victories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#181715] border border-[#D5B803]/20 p-8 relative"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-[#D5B803] fill-current"
                  />
                ))}
              </div>
              
              <blockquote className="text-white text-lg mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <div className="font-bold text-[#D5B803]">
                  {testimonial.author}
                </div>
                <div className="text-[#928E72]">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;