// src/components/HomePage.jsx
import React from 'react';
import HeroSection from './HeroSection';
import ServiceTicker from './ServiceTicker';
import ServicesGridSection from './ServicesGridSection';
import AchievementsSection from './AchievementsSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import PricingSection from './PricingSection';
import Testimonials from './Testimonials';
import Blogs from './Blogs';
import FAQ from './FAQ';

/**
 * HomePage component aggregates all sections that form the main landing page.
 * This component will be rendered when the user navigates to the root path ("/").
 */
function HomePage() {
  return (
    <>
      {/* The HeroSection is typically the first part of the home page */}
      <HeroSection />

      {/* ServiceTicker provides dynamic information or highlights */}
      <ServiceTicker />

      {/* These sections provide core content for the home page */}
      <ServicesGridSection />
      <AchievementsSection />
      <WhyChooseUsSection />
      <PricingSection />
      <Testimonials />
      <Blogs />
      <FAQ />
    </>
  );
}

export default HomePage;