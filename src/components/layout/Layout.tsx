import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import LiveChatWidget from '@/components/shared/LiveChatWidget';
import FloatingActionButton from '@/components/shared/FloatingActionButton';
import NotificationBanner from '@/components/shared/NotificationBanner';
import CookieConsent from '@/components/shared/CookieConsent';
import PremiumEffects from '@/components/shared/PremiumEffects';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <PremiumEffects />
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <LiveChatWidget />
      <FloatingActionButton />
      <NotificationBanner />
      <CookieConsent />
    </div>
  );
};

export default Layout;
