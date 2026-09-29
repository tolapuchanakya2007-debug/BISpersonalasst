import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onExplore: () => void;
}

export default function ServiceCard({ icon: Icon, title, description, onExplore }: ServiceCardProps) {
  return (
    <div className="card-hover group flex flex-col p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-display text-base font-semibold text-navy-900">{title}</h3>
      <p className="mt-1.5 flex-1 text-sm text-navy-600">{description}</p>
      <button
        onClick={onExplore}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 transition-colors hover:text-saffron-600"
      >
        Explore
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  );
}
