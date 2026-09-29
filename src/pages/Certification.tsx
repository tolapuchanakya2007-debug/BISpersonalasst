import { useNavigate } from 'react-router-dom';
import {
  PackageSearch,
  FileSearch,
  ClipboardCheck,
  FlaskConical,
  FileText,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import Disclaimer from '@/components/Disclaimer';
import { useLanguage } from '@/context/LanguageContext';

export default function Certification() {
  const navigate = useNavigate();
  const { tk } = useLanguage();

  const handleAskAssistant = () => {
    navigate('/assistant?q=' + encodeURIComponent('How do I apply for BIS certification?'));
  };

  const cards = [
    { icon: ShieldCheck, titleKey: 'cert.card1Title', descKey: 'cert.card1Desc' },
    { icon: ClipboardCheck, titleKey: 'cert.card2Title', descKey: 'cert.card2Desc' },
    { icon: FileSearch, titleKey: 'cert.card3Title', descKey: 'cert.card3Desc' },
    { icon: FlaskConical, titleKey: 'cert.card4Title', descKey: 'cert.card4Desc' },
    { icon: PackageSearch, titleKey: 'cert.card5Title', descKey: 'cert.card5Desc' },
    { icon: FileText, titleKey: 'cert.card6Title', descKey: 'cert.card6Desc' },
  ];

  const steps = [
    { icon: PackageSearch, titleKey: 'cert.step1Title', descKey: 'cert.step1Desc' },
    { icon: FileSearch, titleKey: 'cert.step2Title', descKey: 'cert.step2Desc' },
    { icon: ClipboardCheck, titleKey: 'cert.step3Title', descKey: 'cert.step3Desc' },
    { icon: FlaskConical, titleKey: 'cert.step4Title', descKey: 'cert.step4Desc' },
    { icon: FileText, titleKey: 'cert.step5Title', descKey: 'cert.step5Desc' },
    { icon: ShieldCheck, titleKey: 'cert.step6Title', descKey: 'cert.step6Desc' },
  ];

  return (
    <div className="container-page py-8 sm:py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="section-title">{tk('cert.title')}</h1>
        <p className="mt-3 text-navy-600">
          {tk('cert.desc')}
        </p>
      </div>

      {/* Overview cards */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.titleKey} className="card-hover p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-100 text-navy-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-navy-900">{tk(c.titleKey)}</h3>
              <p className="mt-1.5 text-sm text-navy-600">{tk(c.descKey)}</p>
            </div>
          );
        })}
      </div>

      {/* Process */}
      <div className="mt-14">
        <h2 className="text-center font-display text-xl font-bold text-navy-900 sm:text-2xl">
          {tk('cert.processTitle')}
        </h2>
        <div className="mx-auto mt-8 max-w-3xl">
          <div className="space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;
              return (
                <div key={step.titleKey} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy-800 text-white shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    {!isLast && <div className="my-1 w-px flex-1 bg-navy-200" />}
                  </div>
                  <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-6'}`}>
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-saffron-100 text-xs font-bold text-saffron-700">
                        {i + 1}
                      </span>
                      <h3 className="font-display text-base font-semibold text-navy-900">{tk(step.titleKey)}</h3>
                    </div>
                    <p className="mt-1.5 text-sm text-navy-600">{tk(step.descKey)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mx-auto mt-10 max-w-3xl">
        <Disclaimer text={tk('cert.disclaimer')} />
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <button onClick={handleAskAssistant} className="btn-accent">
          <MessageCircle className="h-5 w-5" />
          {tk('cert.askAssistant')}
        </button>
      </div>

      {/* Key distinction */}
      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-navy-100 bg-navy-50/50 p-6">
        <h3 className="flex items-center gap-2 font-display text-base font-semibold text-navy-900">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          {tk('cert.distinctionTitle')}
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-navy-700">
          <li className="flex items-start gap-2">
            <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-400" />
            {tk('cert.distinction1')}
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-400" />
            {tk('cert.distinction2')}
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-400" />
            {tk('cert.distinction3')}
          </li>
        </ul>
      </div>
    </div>
  );
}
