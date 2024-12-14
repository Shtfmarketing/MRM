import React from 'react';
import { Helmet } from 'react-helmet-async';
import PodcastHero from '../components/podcast/PodcastHero';
import FeaturedEpisodes from '../components/podcast/FeaturedEpisodes';
import EpisodeGrid from '../components/podcast/EpisodeGrid';
import PodcastPlatforms from '../components/podcast/PodcastPlatforms';
import PodcastNewsletter from '../components/podcast/PodcastNewsletter';

const PodcastPage = () => {
  return (
    <>
      <Helmet>
        <title>Military Recruitment Podcast | Expert Insights</title>
        <meta name="description" content="Listen to expert discussions on military recruitment strategies, leadership, and success stories." />
      </Helmet>
      <div className="bg-[#181715]">
        <PodcastHero />
        <FeaturedEpisodes />
        <EpisodeGrid />
        <PodcastPlatforms />
        <PodcastNewsletter />
      </div>
    </>
  );
};

export default PodcastPage;