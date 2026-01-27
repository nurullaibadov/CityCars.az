import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedCars from '@/components/home/FeaturedCars';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import HowItWorks from '@/components/home/HowItWorks';
import SpecialOffers from '@/components/home/SpecialOffers';
import VIPSection from '@/components/home/VIPSection';
import AppShowcase from '@/components/home/AppShowcase';
import Newsletter from '@/components/home/Newsletter';

const Index: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedCars />
      <VIPSection />
      <StatsSection />
      <WhyChooseUs />
      <HowItWorks />
      <SpecialOffers />
      <TestimonialsCarousel />
      <AppShowcase />
      <Newsletter />
    </Layout>
  );
};

export default Index;
