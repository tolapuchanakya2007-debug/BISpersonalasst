import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { Language } from '@/types';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'te', label: 'తెలుగు' },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="relative flex items-center">
      <Globe className="pointer-events-none absolute left-2.5 h-4 w-4 text-navy-400" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="appearance-none rounded-lg border border-navy-200 bg-white py-2 pl-8 pr-7 text-sm text-navy-700 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-200"
        aria-label="Select language"
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-2 h-4 w-4 text-navy-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}
