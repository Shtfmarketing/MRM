import React from 'react';
import { useInView } from '../../hooks/useInView';
import { ServiceCategoryCard } from './cards/ServiceCategoryCard';
import { serviceCategories } from '../../data/services';
import { SectionTitle } from '../shared/SectionTitle';

const ServiceCategories = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-[#4E5A3C]/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Service Categories"
          className="text-center mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <ServiceCategoryCard
              key={category.id}
              {...category}
              delay={index * 200}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;