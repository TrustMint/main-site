import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { SectionTitle } from '../components/common/SectionTitle';

export const Roadmap = () => {
  const { t } = useLanguage();
  return (
    <section id="roadmap" className="roadmap">
      <div className="container">
        <SectionTitle title={t.roadmap.title} />
        <div className="timeline">
          {t.roadmap.phases.map((phase, index) => (
            <div className={`phase ${index % 2 === 0 ? 'left' : 'right'} reveal glass-effect`} key={index}>
              <h3>{phase.title}</h3>
              <ul>
                {phase.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
