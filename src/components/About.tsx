import React from 'react';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import AppShowcase from './AppShowcase';
import OurStory from './OurStory';
import PlayToEarn from './PlayToEarn';

const About: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <AppShowcase />
      <HowItWorks />
      <PlayToEarn />
      <OurStory />
    </>
  );
};

export default About;
