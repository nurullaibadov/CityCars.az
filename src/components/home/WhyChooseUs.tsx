import React from 'react';
import { Car, Shield, Clock, DollarSign, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Car,
    titleKey: 'premiumFleet',
    descKey: 'premiumFleetDesc',
    color: 'from-gold-400 to-gold-600'
  },
  {
    icon: Clock,
    titleKey: 'support247',
    descKey: 'support247Desc',
    color: 'from-amber-400 to-amber-600'
  },
  {
    icon: DollarSign,
    titleKey: 'bestPrices',
    descKey: 'bestPricesDesc',
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    icon: Shield,
    titleKey: 'professionalDrivers',
    descKey: 'professionalDriversDesc',
    color: 'from-orange-400 to-orange-600'
  },
];

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 accent-gradient opacity-10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6"
          >
            Distinctive <span className="text-gradient">Advantages</span>.
          </motion.h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            What sets CityCars apart is our relentless pursuit of perfection in every detail,
            ensuring your journey is as prestigious as your destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="h-full p-10 rounded-[2.5rem] glass-card border-border/40 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-20 h-20 mb-8 rounded-[2rem] accent-gradient flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform duration-500">
                  <feature.icon className="w-10 h-10 text-accent-foreground" />
                </div>

                <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {t(feature.titleKey)}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {t(feature.descKey)}
                </p>

                <div className="pt-6 border-t border-border/40 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
