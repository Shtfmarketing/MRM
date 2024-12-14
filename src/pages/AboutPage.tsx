import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutHero from '../components/about/AboutHero';
import MissionVision from '../components/about/MissionVision';
import TeamSection from '../components/about/TeamSection';
import Timeline from '../components/about/Timeline';
import Values from '../components/about/Values';
import AboutCTA from '../components/about/AboutCTA';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Military Marketing Elite</title>
        <meta name="description" content="Learn about our mission to revolutionize military recruitment through innovative marketing solutions." />
      </Helmet>
      <div className="bg-[#181715]">
        <AboutHero />
        <MissionVision />
        <Values />
        <Timeline />
        <TeamSection />
        <AboutCTA />
      </div>
    </>
  );
};

export default AboutPage;