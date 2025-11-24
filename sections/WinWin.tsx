import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { SectionTitle } from '../components/common/SectionTitle';

export const WinWin = () => {
  const { t } = useLanguage();
  return (
    <section id="win-win">
      <div className="container">
        <SectionTitle title={t.winWin.title} highlight={t.winWin.titleSpan} />
        <p className="section-subtitle reveal">
          {t.winWin.subtitle}
        </p>
        <div className="win-win-grid">
          <div className="win-win-card glass-effect reveal">
            <h3>{t.winWin.investors.title}</h3>
            <ul>
              {t.winWin.investors.items.map((item, index) => (
                <li key={index}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="win-win-card glass-effect reveal">
            <h3>{t.winWin.scientists.title}</h3>
            <ul>
              {t.winWin.scientists.items.map((item, index) => (
                <li key={index}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
