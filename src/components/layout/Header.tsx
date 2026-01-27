import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown, Car, Heart, User, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useFavoritesStore } from '@/hooks/useFavoritesStore';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo.png';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'az', label: 'Azərbaycan', flag: '🇦🇿' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { favorites } = useFavoritesStore();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('home') },
    { path: '/cars', label: t('cars') },
    { path: '/drivers', label: t('drivers') },
    { path: '/transfer', label: t('transfer') },
    { path: '/tracking', label: t('tracking') },
    { path: '/news', label: t('news') },
    { path: '/contact', label: t('contact') },
  ];

  const currentLang = languages.find(l => l.code === language);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'py-4 glass-card border-b border-accent/10 shadow-huge'
        : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="relative w-14 h-14 flex items-center justify-center"
            >
              <img src={logo} alt="CityCars Logo" className="w-full h-full object-contain" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-display font-bold text-foreground leading-none tracking-tight">
                City<span className="text-accent">Cars</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold opacity-80">Azerbaijan</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 group overflow-hidden"
              >
                <span className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${location.pathname === link.path ? 'text-accent' : 'text-foreground/70 group-hover:text-foreground'
                  }`}>
                  {link.label}
                </span>
                {location.pathname === link.path ? (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent"
                  />
                ) : (
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Action Buttons Group */}
            <div className="flex items-center glass-card rounded-full p-1 border-border/40">
              {/* Favorites */}
              <Link to="/favorites" className="relative group/fav">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent/10 transition-colors">
                  <Heart className={`w-5 h-5 transition-all ${favorites.length > 0 ? 'fill-red-500 text-red-500 scale-110' : 'text-foreground/70'}`} />
                  {favorites.length > 0 && (
                    <span className="absolute top-1 right-1 h-4 w-4 flex items-center justify-center bg-red-500 text-white text-[10px] font-bold rounded-full">
                      {favorites.length}
                    </span>
                  )}
                </Button>
              </Link>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:bg-accent/10 text-foreground/70"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </Button>

              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="hidden md:flex gap-1.5 px-3 rounded-full hover:bg-accent/10">
                    <span className="text-base">{currentLang?.flag}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/70">{currentLang?.code}</span>
                    <ChevronDown className="w-3 h-3 text-foreground/50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass-card border-border/40 mt-2 min-w-[140px]">
                  {languages.map(lang => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as 'en' | 'ru' | 'az' | 'tr')}
                      className="gap-3 cursor-pointer p-3 focus:bg-accent/10 focus:text-accent font-bold text-xs uppercase tracking-widest"
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Auth Buttons */}
            <div className="hidden xl:flex items-center gap-3">
              <Link to="/login">
                <Button variant="ghost" className="font-bold text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground">
                  {t('login')}
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" className="accent-gradient text-accent-foreground font-bold text-xs uppercase tracking-[0.2em] px-8 rounded-2xl premium-glow">
                  <Sparkles className="w-4 h-4 mr-2" />
                  {t('signUp')}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full glass-card border-border/40"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              className="lg:hidden mt-4 pt-6 border-t border-border/40 overflow-hidden"
            >
              <nav className="flex flex-col gap-2 mb-8">
                {navLinks.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-6 py-4 rounded-2xl transition-all font-bold text-sm uppercase tracking-widest ${location.pathname === link.path
                      ? 'accent-gradient text-accent-foreground shadow-lg'
                      : 'hover:bg-accent/5 text-foreground/70'
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="grid grid-cols-2 gap-4 pb-8">
                <Link to="/login" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full h-14 rounded-2xl border-border/40 font-bold uppercase tracking-widest text-xs">
                    {t('login')}
                  </Button>
                </Link>
                <Link to="/signup" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full h-14 rounded-2xl accent-gradient text-accent-foreground font-bold uppercase tracking-widest text-xs premium-glow">
                    {t('signUp')}
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
