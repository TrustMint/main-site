import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { SectionTitle } from '../components/common/SectionTitle';

export const Team = () => {
  const { t } = useLanguage();
  const icons = ["fa-user-astronaut", "fa-robot"];
  return (
    <section id="team">
      <div className="container">
        <SectionTitle title={t.team.title} />
        <p className="section-subtitle reveal">{t.team.subtitle}</p>
        <div className="team-grid">
          {t.team.members.map((member, index) => (
            <div className="team-card reveal glass-effect" key={index}>
              <div className="avatar"><i className={`fas ${icons[index]}`}></i></div>
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
