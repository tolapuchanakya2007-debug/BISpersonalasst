import { FileText, ExternalLink, AlertCircle } from 'lucide-react';
import type { Source } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface SourceCardProps {
  source: Source;
}

export default function SourceCard({ source }: SourceCardProps) {
  const { tk } = useLanguage();
  const isDemo = source.status === 'demo';
  return (
    <div className="rounded-lg border border-navy-100 bg-navy-50/50 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-navy-100 text-navy-700">
            <FileText className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-navy-900">{source.document}</p>
            <p className="mt-0.5 text-xs text-navy-500">{source.type}</p>
          </div>
        </div>
        {isDemo && (
          <span className="badge-demo">
            <AlertCircle className="h-3 w-3" />
            {tk('source.demo')}
          </span>
        )}
      </div>

      <div className="mt-3 space-y-1">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-navy-500">{tk('source.statusLabel')}</span>
          <span className="font-medium text-navy-700">
            {isDemo ? tk('source.demoStatus') : tk('source.verifiedStatus')}
          </span>
        </div>
      </div>

      <button
        className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-navy-200 bg-white px-3 py-2 text-xs font-medium text-navy-700 transition-colors hover:bg-navy-50"
        onClick={() => {
          if (source.url) {
            window.open(source.url, '_blank', 'noopener,noreferrer');
          } else {
            alert(tk('source.prototypeMessage'));
          }
        }}
      >
        <ExternalLink className="h-3.5 w-3.5" />
        {tk('source.viewSource')}
      </button>
    </div>
  );
}
