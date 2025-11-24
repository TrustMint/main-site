import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from '../components/common/Button';

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="hero" className="hero">
      <div className="hero-content container reveal">
        <div className="typewriter-container">
          <h1 className="typewriter" style={{ '--typewriter-steps': t.hero.title.length } as React.CSSProperties}>
            {t.hero.title}
          </h1>
        </div>
        <p>{t.hero.subtitle}</p>
        <Button href="#about" variant="primary">{t.hero.cta}</Button>
      </div>
    </section>
  );
};
