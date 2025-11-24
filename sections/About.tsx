import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { SectionTitle } from '../components/common/SectionTitle';

export const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle title={t.about.title} highlight={t.about.titleSpan} />
        <div className="about-content reveal">
          <p className="section-subtitle" style={{ textAlign: 'inherit', maxWidth: '100%', paddingLeft: 0, paddingRight: 0 }}>
            {t.about.subtitle}
          </p>
          <h3>{t.about.missionTitle}</h3>
          <p>{t.about.missionText}</p>
          <h3>{t.about.benefitsTitle}</h3>
          <ul>
            {t.about.benefits.map((benefit, index) => (
              <li key={index}><b>{benefit.label}</b> {benefit.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
