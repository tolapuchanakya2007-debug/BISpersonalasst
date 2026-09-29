import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import type { Language } from '@/types';
import { translations, type TranslationEntry } from '@/data/translations';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (en: string, hi: string, te: string) => string;
  tk: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback(
    (en: string, hi: string, te: string) => {
      switch (language) {
        case 'hi':
          return hi;
        case 'te':
          return te;
        default:
          return en;
      }
    },
    [language]
  );

  const tk = useCallback(
    (key: string) => {
      const entry: TranslationEntry | undefined = translations[key];
      if (!entry) return key;
      switch (language) {
        case 'hi':
          return entry.hi;
        case 'te':
          return entry.te;
        default:
          return entry.en;
      }
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tk }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
