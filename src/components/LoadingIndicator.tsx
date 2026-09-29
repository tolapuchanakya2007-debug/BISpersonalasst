import { useLanguage } from '@/context/LanguageContext';

export default function LoadingIndicator() {
  const { tk } = useLanguage();
  return (
    <div className="flex items-center gap-1.5 py-1">
      <span className="h-2 w-2 animate-pulse-dot rounded-full bg-navy-400" style={{ animationDelay: '0ms' }} />
      <span className="h-2 w-2 animate-pulse-dot rounded-full bg-navy-400" style={{ animationDelay: '150ms' }} />
      <span className="h-2 w-2 animate-pulse-dot rounded-full bg-navy-400" style={{ animationDelay: '300ms' }} />
      <span className="ml-1 text-xs text-navy-500">{tk('assistant.searching')}</span>
    </div>
  );
}
