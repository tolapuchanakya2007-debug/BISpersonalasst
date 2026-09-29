import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  BadgeCheck,
  BookOpen,
  MessageSquareWarning,
  LayoutGrid,
  MessageCircle,
  User,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Consumer() {
  const navigate = useNavigate();
  const { tk } = useLanguage();

  const cards = [
    { icon: ShieldCheck, titleKey: 'consumer.card1Title', descKey: 'consumer.card1Desc', query: 'What is the BIS Standard Mark?' },
    { icon: BadgeCheck, titleKey: 'consumer.card2Title', descKey: 'consumer.card2Desc', query: 'How can I verify BIS certification?' },
    { icon: BookOpen, titleKey: 'consumer.card3Title', descKey: 'consumer.card3Desc', query: 'What is an Indian Standard?' },
    { icon: MessageSquareWarning, titleKey: 'consumer.card4Title', descKey: 'consumer.card4Desc', query: 'How can I complain about a product?' },
    { icon: LayoutGrid, titleKey: 'consumer.card5Title', descKey: 'consumer.card5Desc', query: '' },
    { icon: MessageCircle, titleKey: 'consumer.card6Title', descKey: 'consumer.card6Desc', query: '' },
  ];

  const menuOptions = [
    { labelKey: 'consumer.menuOpt1', query: 'How can I verify BIS certification?' },
    { labelKey: 'consumer.menuOpt2', query: 'What is the BIS Standard Mark?' },
    { labelKey: 'consumer.menuOpt3', query: 'What is an Indian Standard?' },
    { labelKey: 'consumer.menuOpt4', query: 'How can I complain about a product?' },
    { labelKey: 'consumer.menuOpt5', query: '' },
  ];

  const handleMenuClick = (query: string) => {
    if (query) {
      navigate('/assistant?q=' + encodeURIComponent(query));
    } else {
      navigate('/assistant');
    }
  };

  const handleCardClick = (query: string) => {
    if (query) navigate('/assistant?q=' + encodeURIComponent(query));
    else navigate('/assistant');
  };

  return (
    <div className="container-page py-8 sm:py-12">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy-100 text-navy-700">
          <User className="h-6 w-6" />
        </div>
        <h1 className="mt-4 section-title">{tk('consumer.title')}</h1>
        <p className="mt-3 text-navy-600">
          {tk('consumer.desc')}
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <button
              key={c.titleKey}
              onClick={() => handleCardClick(c.query)}
              className="card-hover group flex flex-col p-5 text-left"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-100 text-navy-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-navy-900">{tk(c.titleKey)}</h3>
              <p className="mt-1.5 flex-1 text-sm text-navy-600">{tk(c.descKey)}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-navy-700 group-hover:text-saffron-600">
                {tk('consumer.explore')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </button>
          );
        })}
      </div>

      {/* Guided menu */}
      <div className="mx-auto mt-12 max-w-2xl">
        <div className="card p-6 sm:p-8">
          <h2 className="font-display text-lg font-bold text-navy-900">{tk('consumer.menuTitle')}</h2>
          <p className="mt-1.5 text-sm text-navy-600">
            {tk('consumer.menuDesc')}
          </p>
          <div className="mt-5 space-y-2">
            {menuOptions.map((opt) => (
              <button
                key={opt.labelKey}
                onClick={() => handleMenuClick(opt.query)}
                className="flex w-full items-center justify-between rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm font-medium text-navy-700 transition-all hover:border-navy-400 hover:bg-navy-50"
              >
                {tk(opt.labelKey)}
                <ArrowRight className="h-4 w-4 text-navy-400" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
