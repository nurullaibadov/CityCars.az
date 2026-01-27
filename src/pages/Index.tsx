import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import BrandMarquee from '@/components/home/BrandMarquee';
import FeaturedCars from '@/components/home/FeaturedCars';
import FleetSpotlight from '@/components/home/FleetSpotlight';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import StatsSection from '@/components/home/StatsSection';
import LuxuryConcierge from '@/components/home/LuxuryConcierge';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import HowItWorks from '@/components/home/HowItWorks';
import SpecialOffers from '@/components/home/SpecialOffers';
import VIPSection from '@/components/home/VIPSection';
import DashboardTeaser from '@/components/home/DashboardTeaser';
import AppShowcase from '@/components/home/AppShowcase';
import Newsletter from '@/components/home/Newsletter';

const Index: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <BrandMarquee />
      <FeaturedCars />
      <FleetSpotlight />
      <VIPSection />
      <StatsSection />
      <LuxuryConcierge />
      <WhyChooseUs />
      <HowItWorks />
      <SpecialOffers />
      <DashboardTeaser />
      <TestimonialsCarousel />
      <AppShowcase />
      <Newsletter />
    </Layout>
  );
};

export default Index;
