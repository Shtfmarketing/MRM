import React from 'react';
import { Helmet } from 'react-helmet-async';
import PrivacyHero from '../components/privacy/PrivacyHero';
import PrivacyContent from '../components/privacy/PrivacyContent';
import PrivacyContact from '../components/privacy/PrivacyContact';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Military Recruitment Marketing</title>
        <meta name="description" content="Our commitment to protecting your privacy and data security in military recruitment marketing." />
      </Helmet>
      <div className="bg-[#181715]">
        <PrivacyHero />
        <PrivacyContent />
        <PrivacyContact />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;