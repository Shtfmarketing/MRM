import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The targeted marketing campaigns significantly improved our recruitment numbers across all branches.",
      author: "Col. Sarah Mitchell",
      role: "Military Recruitment Director"
    },
    {
      quote: "Their data-driven approach helped us optimize our strategies and reach our recruitment goals ahead of schedule.",
      author: "Maj. James Anderson",
      role: "Strategic Operations Officer"
    }
  ];

  return (
    <div className="bg-[#181715] py-24 relative overflow-hidden">
      {/* Military-style pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6bTAgNmMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6IiBmaWxsPSIjNEU1QTNDIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Success Stories</h2>
          <p className="text-[#928E72] max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience with our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#4E5A3C]/20 to-transparent p-8 rounded-lg border border-[#D5B803]/20"
            >
              <blockquote className="text-white text-lg mb-6">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div>
                  <div className="text-[#D5B803] font-semibold">{testimonial.author}</div>
                  <div className="text-[#928E72] text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;