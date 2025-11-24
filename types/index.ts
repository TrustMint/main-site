export type Language = 'en' | 'ru';

export interface Translations {
  preloader: string;
  nav: {
    about: string;
    mechanisms: string;
    tech: string;
    roadmap: string;
    team: string;
    investorPortal: string;
    launchApp: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    titleSpan: string;
    subtitle: string;
    missionTitle: string;
    missionText: string;
    benefitsTitle: string;
    benefits: { label: string; text: string }[];
  };
  winWin: {
    title: string;
    titleSpan: string;
    subtitle: string;
    investors: { title: string; items: { title: string; text: string }[] };
    scientists: { title: string; items: { title: string; text: string }[] };
  };
  howItWorks: {
    title: string;
    steps: { title: string; text: string }[];
  };
  techStack: {
    title: string;
    headers: string[];
    rows: string[][];
  };
  roadmap: {
    title: string;
    phases: { title: string; items: string[] }[];
  };
  team: {
    title: string;
    subtitle: string;
    members: { name: string; role: string; desc: string }[];
  };
  cta: {
    title: string;
    titleSpan: string;
    titleAfter: string;
    subtitle: string;
    button: string;
  };
  footer: {
    copy: string;
    risk: string;
  };
}
