import React, { useState } from 'react';
import { MapPin, Calendar, Search, Star, Shield, Clock, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-car.jpg';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [pickupLocation, setPickupLocation] = useState('');
  const [returnLocation, setReturnLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSearch = () => {
    if (!pickupLocation || !pickupDate || !returnDate) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields to search for cars.',
        variant: 'destructive'
      });
      return;
    }

    if (new Date(returnDate) <= new Date(pickupDate)) {
      toast({
        title: 'Invalid Dates',
        description: 'Return date must be after pickup date.',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Searching...',
      description: 'Finding the perfect car for you!',
    });

    setTimeout(() => {
      navigate('/cars');
    }, 500);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image with Parallax & Overlay */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(var(--background))_100%)] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      {/* Floating Particles/Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: Math.random() * 100 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, -50, 0],
              x: [0, Math.random() * 20 - 10, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute rounded-full accent-gradient blur-3xl"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent/20 mb-6"
            >
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/80">
                #1 Premium Car Rental in Azerbaijan
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6 leading-tight">
              {t('findPerfectRide')}<span className="text-gradient">.</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Experience the pinnacle of luxury travel. Whether for business or pleasure,
              our fleet of elite vehicles ensures your journey is as remarkable as the destination.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Fully Insured</p>
                  <p className="text-xs text-muted-foreground">Peace of mind guaranteed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">24/7 Support</p>
                  <p className="text-xs text-muted-foreground">Always there for you</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Search Form Card */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="glass-card rounded-3xl p-8 border-accent/10 shadow-huge relative overflow-hidden group hover-glow">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Car className="w-32 h-32 rotate-[-20deg]" />
              </div>

              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-foreground">
                <Search className="w-6 h-6 text-accent" />
                Find Your Vehicle
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-accent" />
                      Pickup Location
                    </label>
                    <Input
                      placeholder="Enter city or airport"
                      className="h-14 glass-card border-border/50 focus:border-accent"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-accent" />
                      Return Location
                    </label>
                    <Input
                      placeholder="Enter city or airport"
                      className="h-14 glass-card border-border/50 focus:border-accent"
                      value={returnLocation}
                      onChange={(e) => setReturnLocation(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-accent" />
                      Pickup Date
                    </label>
                    <Input
                      type="date"
                      className="h-14 glass-card border-border/50 focus:border-accent"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-accent" />
                      Return Date
                    </label>
                    <Input
                      type="date"
                      className="h-14 glass-card border-border/50 focus:border-accent"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      min={pickupDate || new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <Button
                  onClick={handleSearch}
                  className="w-full h-16 text-lg font-bold accent-gradient text-accent-foreground premium-glow transition-all active:scale-95"
                >
                  <Search className="w-5 h-5 mr-3" />
                  Explore Available Cars
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  * No credit card required to browse our premium collection
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
