import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { SectionTitle } from '../components/common/SectionTitle';

export const TechStack = () => {
  const { t } = useLanguage();
  return (
    <section id="tech-stack">
      <div className="container">
        <SectionTitle title={t.techStack.title} />
        <div className="tech-table-container reveal">
          <table className="tech-table">
            <thead>
              <tr>
                {t.techStack.headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.techStack.rows.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
