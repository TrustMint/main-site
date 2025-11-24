import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';

export const Preloader = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${isHidden ? 'hidden' : ''}`}>
      <i className="fas fa-atom logo-icon"></i>
      <div className="logo-text animated-gradient-text">{t.preloader}</div>
    </div>
  );
};
