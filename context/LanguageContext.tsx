import React, { createContext, useState, ReactNode } from 'react';
import { Language, Translations } from '../types/index';
import { translations } from '../data/translations';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  toggleLang: () => {},
  t: translations.en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ru' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};
