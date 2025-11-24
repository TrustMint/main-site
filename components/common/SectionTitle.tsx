import React from 'react';

interface SectionTitleProps {
  title: string;
  highlight?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, highlight, className = '' }) => {
  return (
    <h2 className={`section-title reveal ${className}`}>
      {title} {highlight && <span className="gradient-text">{highlight}</span>}
    </h2>
  );
};
