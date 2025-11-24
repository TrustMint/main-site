import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { SectionTitle } from '../components/common/SectionTitle';

export const HowItWorks = () => {
  const { t } = useLanguage();
  const icons = ["fa-file-signature", "fa-brain", "fa-users", "fa-coins"];
  return (
    <section id="how-it-works">
      <div className="container">
        <SectionTitle title={t.howItWorks.title} />
        <div className="steps-container">
          {t.howItWorks.steps.map((step, index) => (
            <div className="step reveal" key={index}>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              <div className="step-img"><i className={`fas ${icons[index]}`}></i></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
