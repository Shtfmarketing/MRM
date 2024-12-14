import React from 'react';
import { ArrowRight } from 'lucide-react';
import { featuredPosts } from '../../data/blog/featured';
import Button from '../shared/Button';

const FeaturedPosts = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Articles</h2>
          <p className="text-[#928E72] max-w-2xl mx-auto">
            Essential insights for modern military recruitment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <div key={index} className="group relative">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#181715] border border-[#D5B803]/20 p-8 group-hover:border-[#D5B803] transition-colors">
                <div className="text-[#D5B803] text-sm mb-2">{post.category}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{post.title}</h3>
                <p className="text-[#928E72] mb-6">{post.excerpt}</p>
                <Button variant="secondary" size="sm" className="group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;