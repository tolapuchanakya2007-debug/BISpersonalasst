import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Tag, Layers, BookOpen, ShieldCheck, MessageCircle } from 'lucide-react';
import { allStandards } from '@/data/demoStandards';
import SourceCard from '@/components/SourceCard';
import Disclaimer from '@/components/Disclaimer';
import { useLanguage } from '@/context/LanguageContext';

export default function StandardDetails() {
  const { tk } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const standard = allStandards.find((s) => s.id === id);

  if (!standard) {
    return (
      <div className="container-page py-20 text-center">
        <p className="text-navy-600">{tk('standards.standardNotFound')}</p>
        <Link to="/standards" className="btn-primary mt-4">{tk('standards.backToStandards')}</Link>
      </div>
    );
  }

  const handleAskAssistant = () => {
    const query = `I'm looking at ${standard.number}: ${standard.title}. Can you explain this standard?`;
    navigate(`/assistant?q=${encodeURIComponent(query)}`);
  };

  const fields = [
    { icon: FileText, label: tk('standards.standardNumber'), value: standard.number },
    { icon: BookOpen, label: tk('standards.titleLabel'), value: tk(`std.${standard.id}.title`) },
    { icon: Tag, label: tk('standards.productCategory'), value: tk(`cat.${standard.category}`) },
    { icon: Layers, label: tk('standards.industryLabel'), value: tk(`ind.${standard.industry}`) },
  ];

  return (
    <div className="container-page py-8 sm:py-12">
      <Link to="/standards" className="inline-flex items-center gap-1.5 text-sm text-navy-600 hover:text-navy-900">
        <ArrowLeft className="h-4 w-4" />
        {tk('standards.backToStandards')}
      </Link>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Main */}
        <div className="lg:col-span-2">
          <div className="card p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-navy-900">{standard.number}</p>
                  <span className="badge-demo">{tk('standards.demoData')}</span>
                </div>
              </div>
            </div>

            <h1 className="mt-5 font-display text-xl font-bold text-navy-900 sm:text-2xl">
              {tk(`std.${standard.id}.title`)}
            </h1>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {fields.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex items-start gap-3 rounded-lg bg-navy-50/50 p-3">
                    <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-500" />
                    <div>
                      <p className="text-xs font-medium text-navy-500">{f.label}</p>
                      <p className="text-sm font-semibold text-navy-900">{f.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-navy-900">{tk('standards.descriptionLabel')}</h3>
                <p className="mt-1 text-sm text-navy-700">{tk(`std.${standard.id}.description`)}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy-900">{tk('standards.scopeLabel')}</h3>
                <p className="mt-1 text-sm text-navy-700">{tk(`std.${standard.id}.scope`)}</p>
              </div>
              <div>
                <h3 className="flex items-center gap-1.5 text-sm font-semibold text-navy-900">
                  <ShieldCheck className="h-4 w-4 text-saffron-600" />
                  {tk('standards.relatedCertInfo')}
                </h3>
                <p className="mt-1 text-sm text-navy-700">{tk(`std.${standard.id}.certificationNote`)}</p>
              </div>
            </div>

            <Disclaimer text={tk('standards.disclaimer')} />

            <button onClick={handleAskAssistant} className="btn-accent mt-6">
              <MessageCircle className="h-4 w-4" />
              {tk('standards.askAssistantAboutThis')}
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-navy-900">{tk('standards.source')}</h3>
            <div className="mt-3">
              <SourceCard source={standard.source} />
            </div>
          </div>

          <div className="card mt-4 p-5">
            <h3 className="text-sm font-semibold text-navy-900">{tk('standards.quickActions')}</h3>
            <div className="mt-3 space-y-2">
              <Link to="/certification" className="btn-outline w-full justify-center">
                {tk('standards.viewCertProcess')}
              </Link>
              <Link to="/industry" className="btn-outline w-full justify-center">
                {tk('standards.industryGuidance')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
