import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Preloader } from './components/common/Preloader';
import { BackToTop } from './components/common/BackToTop';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { WinWin } from './sections/WinWin';
import { HowItWorks } from './sections/HowItWorks';
import { TechStack } from './sections/TechStack';
import { Roadmap } from './sections/Roadmap';
import { Team } from './sections/Team';
import { CTA } from './sections/CTA';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useMouseEffect } from './hooks/useMouseEffect';
import { useParticles } from './hooks/useParticles';

const AppContent = () => {
  useScrollReveal();
  useMouseEffect();
  useParticles();

  return (
    <>
      <Preloader />
      <div id="particles-js"></div>
      <Header />
      <main>
        <Hero />
        <About />
        <WinWin />
        <HowItWorks />
        <TechStack />
        <Roadmap />
        <Team />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
