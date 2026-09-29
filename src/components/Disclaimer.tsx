import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface DisclaimerProps {
  text?: string;
  variant?: 'inline' | 'box';
}

export default function Disclaimer({
  text,
  variant = 'box',
}: DisclaimerProps) {
  const { tk } = useLanguage();
  const displayText = text ?? tk('disclaimer.default');
  if (variant === 'inline') {
    return (
      <p className="flex items-start gap-1.5 text-xs text-navy-500">
        <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
        {displayText}
      </p>
    );
  }
  return (
    <div className="flex items-start gap-3 rounded-lg border border-saffron-200 bg-saffron-50 p-3.5">
      <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-saffron-600" />
      <p className="text-sm text-saffron-800">{displayText}</p>
    </div>
  );
}
