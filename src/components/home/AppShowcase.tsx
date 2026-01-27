import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Apple, PlayCircle, Star, ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MagneticButton from '@/components/ui/magnetic-button';

const AppShowcase: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Phone Mockup (Abstracted with CSS) */}
                        <div className="relative mx-auto w-[280px] h-[580px] md:w-[320px] md:h-[650px] bg-black rounded-[50px] border-8 border-border shadow-huge overflow-hidden">
                            {/* Screen Content */}
                            <div className="absolute inset-0 bg-background flex flex-col pt-12">
                                <div className="px-6 py-4 flex justify-between items-center bg-accent/5">
                                    <span className="font-bold text-xs tracking-tighter">CITYCARS</span>
                                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                                        <Star className="w-4 h-4 text-accent" />
                                    </div>
                                </div>

                                <div className="p-6 space-y-6 flex-1 overflow-hidden">
                                    <div className="space-y-2">
                                        <div className="h-4 w-2/3 bg-muted rounded-full" />
                                        <div className="h-4 w-full bg-muted rounded-full opacity-60" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="aspect-square rounded-2xl bg-accent/5 border border-accent/10 flex flex-col p-4 justify-between">
                                                <div className="w-8 h-8 rounded-lg bg-accent/10" />
                                                <div className="h-2 w-full bg-accent/20 rounded-full" />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="h-32 w-full glass-card rounded-2xl border-accent/20 p-4 space-y-4">
                                        <div className="flex justify-between items-center">
                                            <div className="h-4 w-1/2 bg-muted rounded-full" />
                                            <div className="h-6 w-12 bg-accent/20 rounded-lg" />
                                        </div>
                                        <div className="h-10 w-full accent-gradient rounded-xl" />
                                    </div>
                                </div>

                                {/* Bottom Nav */}
                                <div className="h-20 bg-background border-t border-border flex justify-around items-center px-6">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className={`w-8 h-8 rounded-lg ${i === 1 ? 'bg-accent/20' : 'bg-muted'}`} />
                                    ))}
                                </div>
                            </div>

                            {/* Speaker/Camera notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl" />
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-20 -right-4 md:-right-12 glass-card p-4 rounded-2xl border-accent/30 shadow-2xl z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <Star className="w-5 h-5 text-green-500 fill-green-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold">4.9/5 Rating</p>
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Play Store Reviews</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-40 -left-6 md:-left-16 glass-card p-4 rounded-2xl border-accent/30 shadow-2xl z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                    <Download className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold">50k+</p>
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Total Downloads</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent/20 mb-8">
                            <Smartphone className="w-4 h-4 text-accent" />
                            <span className="text-xs font-bold uppercase tracking-widest text-accent">Coming Soon to Mobile</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            Rent Your Next Car <br />
                            <span className="text-gradient">From Anywhere</span>
                        </h2>

                        <p className="text-xl text-muted-foreground mb-12 max-w-lg leading-relaxed">
                            Experience the power of CityCars in your pocket. Our upcoming mobile app
                            features AI-recommendations, instant paperless booking, and
                            real-time tracking of your rental delivery.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <MagneticButton>
                                <Button className="h-16 px-8 rounded-2xl bg-black text-white hover:bg-black/90 flex items-center gap-3 border border-white/10">
                                    <Apple className="w-7 h-7" />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase opacity-60 leading-none">Download on</p>
                                        <p className="text-lg font-bold leading-tight">App Store</p>
                                    </div>
                                </Button>
                            </MagneticButton>

                            <MagneticButton>
                                <Button className="h-16 px-8 rounded-2xl bg-black text-white hover:bg-black/90 flex items-center gap-3 border border-white/10">
                                    <PlayCircle className="w-7 h-7" />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase opacity-60 leading-none">Get it on</p>
                                        <p className="text-lg font-bold leading-tight">Google Play</p>
                                    </div>
                                </Button>
                            </MagneticButton>
                        </div>

                        <div className="mt-12 pt-12 border-t border-border/50">
                            <div className="flex items-center gap-4 text-muted-foreground font-medium">
                                <span className="w-12 h-px bg-border" />
                                Notify me on launch
                                <div className="relative flex-1">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full bg-transparent border-b border-border py-2 focus:border-accent outline-none transition-colors"
                                    />
                                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-accent cursor-pointer hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AppShowcase;
