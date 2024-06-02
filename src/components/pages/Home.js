import React from 'react';
import Header from '../common/Header';
import HeroSection from '../common/HeroSection';
import FeatureSection from '../common/FeatureSection';
import CourseSection from '../common/CourseSection';
import Footer from '../common/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureSection />
      <CourseSection />
      <Footer />
    </div>
  );
};

export default Home;
