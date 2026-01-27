import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Shield, Clock, Languages, Star, Plane, MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const services = [
  {
    icon: Plane,
    title: 'Airport Transfer',
    description: 'Professional pickup and drop-off services to and from Baku International Airport.',
    price: 'From $35',
  },
  {
    icon: MapPin,
    title: 'City Tours',
    description: 'Explore Baku and surrounding areas with our experienced local drivers.',
    price: 'From $50/hour',
  },
  {
    icon: Briefcase,
    title: 'Corporate Service',
    description: 'Dedicated drivers for business meetings, conferences, and corporate events.',
    price: 'From $80/hour',
  },
];

const features = [
  { icon: Shield, title: 'Licensed & Insured', desc: 'All drivers are fully licensed with comprehensive insurance' },
  { icon: Languages, title: 'Multilingual', desc: 'Drivers speaking EN, RU, AZ, and TR' },
  { icon: Clock, title: 'Available 24/7', desc: 'Round-the-clock service for your convenience' },
  { icon: Star, title: 'Top Rated', desc: '4.9/5 average rating from customers' },
];

const Drivers: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleHireDriver = (serviceTitle: string) => {
    toast({
      title: 'Driver Service Selected',
      description: `You selected ${serviceTitle}. Redirecting to booking...`,
    });

    setTimeout(() => {
      navigate('/booking', { state: { service: serviceTitle, bookingType: 'driver' } });
    }, 1000);
  };

  const handleBookNow = () => {
    toast({
      title: 'Opening Booking Form',
      description: 'Redirecting you to complete your driver booking...',
    });

    setTimeout(() => {
      navigate('/booking', { state: { service: 'Driver Service', bookingType: 'driver' } });
    }, 1000);
  };

  const eliteDrivers = [
    { id: 1, name: 'Rashad Mammadov', rating: 4.9, rides: 847, experience: '8 years', languages: ['EN', 'AZ', 'RU'], specialties: ['Airport Transfer', 'Corporate'] },
    { id: 2, name: 'Elnur Hasanov', rating: 4.8, rides: 623, experience: '6 years', languages: ['EN', 'TR', 'AZ'], specialties: ['City Tours', 'Inter-city'] },
    { id: 3, name: 'Ali Aliyev', rating: 5.0, rides: 1205, experience: '12 years', languages: ['EN', 'AZ', 'RU', 'TR'], specialties: ['VIP Service', 'Wedding'] },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            {t('drivers')}
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            {t('professionalDriversDesc')}
          </p>
        </div>
      </section>

      {/* Elite Drivers Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-accent border-accent/30 tracking-widest uppercase">Elite Team</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Meet Our <span className="text-gradient">Professional</span> Drivers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eliteDrivers.map((driver, index) => (
              <Card
                key={driver.id}
                className="group card-gradient border-border overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 rounded-[2rem]"
                onClick={() => navigate(`/drivers/${driver.id}`)}
              >
                <CardContent className="p-0">
                  <div className="relative h-64 bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                    <div className="w-32 h-32 rounded-full accent-gradient flex items-center justify-center text-4xl font-bold text-accent-foreground shadow-2xl">
                      {driver.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-accent text-accent" />
                      <span className="text-xs font-bold">{driver.rating}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-accent transition-colors">{driver.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{driver.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4" />
                        <span>{driver.rides} rides</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {driver.languages.map(lang => (
                        <Badge key={lang} variant="secondary" className="bg-secondary/50 text-[10px] uppercase">{lang}</Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full h-12 rounded-xl border-accent/20 text-accent hover:bg-accent hover:text-accent-foreground font-bold">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
            Our Driver Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="overflow-hidden card-gradient border-border hover:shadow-2xl transition-all duration-500 animate-slide-up hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl accent-gradient flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    {service.description}
                  </p>
                  <p className="text-2xl font-bold text-accent mb-4">{service.price}</p>
                  <Button
                    onClick={() => handleHireDriver(service.title)}
                    className="w-full accent-gradient text-accent-foreground hover:opacity-90"
                  >
                    {t('hireDriver')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Ready to Book a Driver?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us to arrange your professional driver service
          </p>
          <Button
            onClick={handleBookNow}
            size="lg"
            className="h-14 px-10 text-lg accent-gradient text-accent-foreground hover:opacity-90"
          >
            Book Now
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Drivers;
