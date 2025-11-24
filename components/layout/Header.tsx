import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Button } from '../common/Button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.classList.add('nav-open');
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.classList.remove('nav-open');
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const LangButton = ({ className = "" }) => (
    <button 
      onClick={() => { toggleLang(); closeMenu(); }} 
      className={`btn btn-secondary ${className}`}
      style={{ minWidth: '60px', padding: '14px 10px', fontSize: '14px' }}
      title={lang === 'en' ? "Switch to Russian" : "Switch to English"}
    >
      {lang === 'en' ? 'RU' : 'EN'}
    </button>
  );

  return (
    <header>
      <nav className="navbar container-fluid">
        <a href="#hero" className="logo" onClick={closeMenu}>
          <i className="fas fa-atom animated-gradient-text"></i>
          <span className="animated-gradient-text">SynapseAI</span>
        </a>

        <div 
          className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} 
          onClick={closeMenu}
          aria-hidden="true"
        />

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="nav-links">
          <li><a href="#about" onClick={closeMenu}>{t.nav.about}</a></li>
          <li><a href="#how-it-works" onClick={closeMenu}>{t.nav.mechanisms}</a></li>
          <li><a href="#tech-stack" onClick={closeMenu}>{t.nav.tech}</a></li>
          <li><a href="#roadmap" onClick={closeMenu}>{t.nav.roadmap}</a></li>
          <li><a href="#team" onClick={closeMenu}>{t.nav.team}</a></li>
          
          <li className="mobile-menu-items mobile-buttons-container">
             <LangButton className="mobile-btn" />
             <Button href="https://invest.synapseairwa.com" target="_blank" variant="secondary" className="mobile-btn" onClick={closeMenu}>{t.nav.investorPortal}</Button>
             <Button href="https://app.synapseairwa.com" target="_blank" variant="primary" className="mobile-btn" onClick={closeMenu}>{t.nav.launchApp}</Button>
          </li>

          <li className="mobile-menu-items mobile-socials-container">
             <div className="ios-social-links">
                <a href="#" target="_blank" title="Twitter / X">
                  <svg viewBox="0 0 512 512" fill="currentColor" style={{ width: '18px', height: '18px' }}>
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </a>
                <a href="#" target="_blank" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" target="_blank" title="Telegram"><i className="fab fa-telegram"></i></a>
                <a href="mailto:contact@synapseai.com" title="Email"><i className="fas fa-envelope"></i></a>
             </div>
          </li>
        </ul>

        <div className="header-buttons">
          <LangButton />
          <Button href="https://invest.synapseairwa.com" target="_blank" variant="secondary">{t.nav.investorPortal}</Button>
          <Button href="https://app.synapseairwa.com" target="_blank" variant="primary">{t.nav.launchApp}</Button>
        </div>

        <button 
          className="mobile-menu-toggle" 
          id="mobile-menu-toggle" 
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"} 
          onClick={toggleMenu}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </nav>
    </header>
  );
};
