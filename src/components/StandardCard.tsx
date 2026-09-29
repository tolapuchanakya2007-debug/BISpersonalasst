import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import type { DemoStandard } from '@/types';
import Disclaimer from '@/components/Disclaimer';
import { useLanguage } from '@/context/LanguageContext';

interface StandardCardProps {
  standard: DemoStandard;
}

export default function StandardCard({ standard }: StandardCardProps) {
  const { tk } = useLanguage();
  return (
    <div className="card-hover group flex flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-100 text-navy-700">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-sm font-bold text-navy-900">{standard.number}</p>
            <p className="text-xs text-navy-500">{tk(`cat.${standard.category}`)}</p>
          </div>
        </div>
        <span className="badge-demo">{tk('standards.demoData')}</span>
      </div>

      <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
        {tk(`std.${standard.id}.title`)}
      </h3>
      <p className="mt-1.5 line-clamp-2 text-sm text-navy-600">{tk(`std.${standard.id}.description`)}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="badge-navy">{tk(`ind.${standard.industry}`)}</span>
      </div>

      <Disclaimer variant="inline" text={tk('standards.disclaimerInline')} />

      <Link
        to={`/standards/${standard.id}`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 transition-colors hover:text-saffron-600"
      >
        {tk('standards.viewDetails')}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}
