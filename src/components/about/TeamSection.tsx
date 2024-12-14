import React from 'react';

const team = [
  {
    name: 'Col. James Anderson',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1597838816882-4435b1977fbe?auto=format&fit=crop&q=80&w=400',
    bio: '25 years of military leadership experience'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Chief Strategy Officer',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400',
    bio: 'Former military recruitment director'
  },
  {
    name: 'David Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    bio: 'Digital transformation expert'
  },
  {
    name: 'Maria Rodriguez',
    role: 'Director of Operations',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    bio: 'Veteran affairs specialist'
  }
];

const TeamSection = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
          <p className="text-[#928E72] max-w-2xl mx-auto">
            Veterans and experts dedicated to transforming military recruitment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-[#181715] border border-[#D5B803]/20 p-6 hover:border-[#D5B803] transition-colors">
              <div className="aspect-square mb-6 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-[#D5B803] mb-2">{member.role}</p>
              <p className="text-[#928E72] text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;