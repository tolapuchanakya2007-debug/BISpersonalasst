import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Factory, Package, ClipboardList, FileText, FlaskConical, ShieldCheck, LayoutGrid, Sparkles, ArrowRight } from 'lucide-react';
import { industryCategories } from '@/data/demoStandards';
import Disclaimer from '@/components/Disclaimer';
import { useLanguage } from '@/context/LanguageContext';

export default function Industry() {
  const navigate = useNavigate();
  const { tk } = useLanguage();
  const [product, setProduct] = useState('');
  const [industry, setIndustry] = useState(industryCategories[0]);
  const [need, setNeed] = useState('industry.need1');
  const [result, setResult] = useState<null | { product: string; industry: string; needKey: string }>(null);

  const needs = [
    'industry.need1',
    'industry.need2',
    'industry.need3',
    'industry.need4',
    'industry.need5',
    'industry.need6',
  ];

  const handleGenerate = () => {
    if (!product.trim()) return;
    setResult({ product: product.trim(), industry, needKey: need });
  };

  const handleAskAssistant = () => {
    const query = `I manufacture ${result?.product || product}. What BIS requirements should I check?`;
    navigate('/assistant?q=' + encodeURIComponent(query));
  };

  const guidanceSections = [
    {
      icon: FileText,
      titleKey: 'industry.guidance1Title',
      items: [
        'industry.guidance1Item1',
        'industry.guidance1Item2',
        'industry.guidance1Item3',
      ],
    },
    {
      icon: ShieldCheck,
      titleKey: 'industry.guidance2Title',
      items: [
        'industry.guidance2Item1',
        'industry.guidance2Item2',
        'industry.guidance2Item3',
      ],
    },
    {
      icon: ClipboardList,
      titleKey: 'industry.guidance3Title',
      items: [
        'industry.guidance3Item1',
        'industry.guidance3Item2',
        'industry.guidance3Item3',
        'industry.guidance3Item4',
      ],
    },
    {
      icon: FlaskConical,
      titleKey: 'industry.guidance4Title',
      items: [
        'industry.guidance4Item1',
        'industry.guidance4Item2',
        'industry.guidance4Item3',
      ],
    },
    {
      icon: ArrowRight,
      titleKey: 'industry.guidance5Title',
      items: [
        'industry.guidance5Item1',
        'industry.guidance5Item2',
        'industry.guidance5Item3',
      ],
    },
  ];

  return (
    <div className="container-page py-8 sm:py-12">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-100 text-saffron-700">
          <Factory className="h-6 w-6" />
        </div>
        <h1 className="mt-4 section-title">{tk('industry.title')}</h1>
        <p className="mt-3 text-navy-600">
          {tk('industry.desc')}
        </p>
      </div>

      {/* Form */}
      <div className="mx-auto mt-10 max-w-2xl">
        <div className="card p-6 sm:p-8">
          <div className="space-y-5">
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-navy-700">
                <Package className="h-4 w-4 text-navy-500" />
                {tk('industry.step1')}
              </label>
              <input
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder={tk('industry.step1Placeholder')}
                className="input"
              />
            </div>

            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-navy-700">
                <LayoutGrid className="h-4 w-4 text-navy-500" />
                {tk('industry.step2')}
              </label>
              <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="input">
                {industryCategories.map((c) => (
                  <option key={c} value={c}>{tk(`ind.${c}`)}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-navy-700">
                <ClipboardList className="h-4 w-4 text-navy-500" />
                {tk('industry.step3')}
              </label>
              <div className="grid gap-2 sm:grid-cols-2">
                {needs.map((n) => (
                  <button
                    key={n}
                    onClick={() => setNeed(n)}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-all ${
                      need === n
                        ? 'border-navy-800 bg-navy-800 text-white'
                        : 'border-navy-200 bg-white text-navy-700 hover:border-navy-300 hover:bg-navy-50'
                    }`}
                  >
                    {need === n && <Sparkles className="h-3.5 w-3.5 text-saffron-400" />}
                    {tk(n)}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={handleGenerate} disabled={!product.trim()} className="btn-accent w-full">
              <Sparkles className="h-4 w-4" />
              {tk('industry.generate')}
            </button>
          </div>
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className="mx-auto mt-8 max-w-2xl animate-slide-up">
          <div className="card border-saffron-200 p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-lg font-bold text-navy-900">{tk('industry.resultTitle')}</h2>
              <span className="badge-demo">{tk('industry.demoGuidanceBadge')}</span>
            </div>
            <p className="mt-1 text-xs font-medium text-saffron-700">
              {tk('industry.resultNotice')}
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-lg bg-navy-50/50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">{tk('industry.product')}</p>
                <p className="mt-0.5 text-sm font-medium text-navy-900">{result.product}</p>
                <p className="mt-1 text-xs text-navy-500">{tk(`ind.${result.industry}`)} · {tk('industry.needLabel')}: {tk(result.needKey)}</p>
              </div>

              {guidanceSections.map((section) => {
                const Icon = section.icon;
                return (
                  <div key={section.titleKey}>
                    <h3 className="flex items-center gap-1.5 text-sm font-semibold text-navy-900">
                      <Icon className="h-4 w-4 text-navy-500" />
                      {tk(section.titleKey)}
                    </h3>
                    <ul className="mt-1.5 space-y-1">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-navy-700">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-navy-400" />
                          {tk(item)}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="mt-5">
              <Disclaimer />
            </div>

            <button onClick={handleAskAssistant} className="btn-accent mt-5 w-full">
              {tk('industry.askAssistantProduct')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
