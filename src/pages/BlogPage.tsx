import React from 'react';
import { Helmet } from 'react-helmet-async';
import BlogHero from '../components/blog/BlogHero';
import FeaturedPosts from '../components/blog/FeaturedPosts';
import BlogGrid from '../components/blog/BlogGrid';
import BlogCategories from '../components/blog/BlogCategories';
import BlogNewsletter from '../components/blog/BlogNewsletter';

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Military Recruitment Blog | Latest Insights & Strategies</title>
        <meta name="description" content="Stay updated with the latest military recruitment strategies, insights, and success stories." />
      </Helmet>
      <div className="bg-[#181715]">
        <BlogHero />
        <FeaturedPosts />
        <BlogGrid />
        <BlogCategories />
        <BlogNewsletter />
      </div>
    </>
  );
};

export default BlogPage;