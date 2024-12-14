import React from 'react';
import { blogCategories } from '../../data/blog/categories';

const BlogCategories = () => {
  return (
    <section className="py-24 relative bg-[#181715]">
      <div className="absolute inset-0 military-texture opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Explore Topics</h2>
          <p className="text-[#928E72] max-w-2xl mx-auto">
            Discover insights across various military recruitment domains
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#181715] border border-[#D5B803]/20 p-6 hover:border-[#D5B803] transition-colors text-center"
            >
              <category.icon className="h-12 w-12 text-[#D5B803] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
              <p className="text-[#928E72] text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;