import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import ServiceFeatures from '../components/services/ServiceFeatures';
import ServiceChallenges from '../components/services/ServiceChallenges';
import ServicesCTA from '../components/services/ServicesCTA';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Military Marketing Services | Elite Solutions</title>
        <meta name="description" content="Transform your military recruitment with our comprehensive communication and marketing solutions." />
      </Helmet>
      <div className="bg-[#181715]">
        <ServicesHero />
        <ServiceFeatures />
        <ServiceChallenges />
        <ServicesList />
        <ServicesCTA />
      </div>
    </>
  );
};

export default ServicesPage;