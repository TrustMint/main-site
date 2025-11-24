import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from '../components/common/Button';

export const CTA = () => {
  const { t } = useLanguage();
  return (
    <section id="cta" className="cta-section" style={{ borderBottom: 'none' }}>
      <div className="container reveal">
        <h2 className="section-title">
            {t.cta.title}<br />{t.cta.titleSpan} <span className="gradient-text">{t.cta.titleAfter}</span>
        </h2>
        <p className="section-subtitle">{t.cta.subtitle}</p>
        <div className="cta-button-container">
          <Button href="mailto:contact@synapseai.com" variant="primary">{t.cta.button}</Button>
        </div>
      </div>
    </section>
  );
};
