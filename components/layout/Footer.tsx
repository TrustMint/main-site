import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer>
      <div className="container">
        <a href="#hero" className="footer-logo" style={{ textDecoration: 'none' }}>
          <i className="fas fa-atom"></i> SynapseAI
        </a>

        <div className="social-links">
          <a href="#" target="_blank" title="Twitter / X">
            <svg viewBox="0 0 512 512" fill="currentColor" style={{ width: '20px', height: '20px' }}>
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </a>
          <a href="#" target="_blank" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" target="_blank" title="Telegram"><i className="fab fa-telegram"></i></a>
          <a href="mailto:contact@synapseai.com" title="Email"><i className="fas fa-envelope"></i></a>
        </div>

        <p className="footer-copy">{t.footer.copy}<br />{t.footer.risk}</p>
      </div>
    </footer>
  );
};
