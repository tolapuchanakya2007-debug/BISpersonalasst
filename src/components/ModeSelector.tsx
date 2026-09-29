import { User, Factory } from 'lucide-react';
import type { Mode } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface ModeSelectorProps {
  mode: Mode;
  onChange: (mode: Mode) => void;
}

export default function ModeSelector({ mode, onChange }: ModeSelectorProps) {
  const { tk } = useLanguage();
  const modes: { value: Mode; key: string; icon: typeof User }[] = [
    { value: 'consumer', key: 'mode.consumer', icon: User },
    { value: 'industry', key: 'mode.industry', icon: Factory },
  ];
  return (
    <div className="inline-flex rounded-lg border border-navy-200 bg-white p-1">
      {modes.map((m) => {
        const Icon = m.icon;
        const active = mode === m.value;
        return (
          <button
            key={m.value}
            onClick={() => onChange(m.value)}
            className={`flex items-center gap-1.5 rounded-md px-4 py-1.5 text-sm font-medium transition-all ${
              active
                ? 'bg-navy-800 text-white shadow-sm'
                : 'text-navy-600 hover:text-navy-900'
            }`}
          >
            <Icon className="h-4 w-4" />
            {tk(m.key)}
          </button>
        );
      })}
    </div>
  );
}
