import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../../../types/blog';

const BlogCard: React.FC<BlogPost> = ({ title, excerpt, image, category, date }) => {
  return (
    <div className="group bg-[#181715] border border-[#D5B803]/20 hover:border-[#D5B803] transition-all duration-300">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#D5B803] text-sm">{category}</span>
          <span className="text-[#928E72] text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-[#928E72] mb-6">{excerpt}</p>
        <button className="text-[#D5B803] font-tactical flex items-center group-hover:text-white transition-colors">
          Read More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;