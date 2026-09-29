import { Link } from 'react-router-dom';
import { MessageCircle, BookOpen, User, Factory, ShieldCheck, FileSearch, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { tk } = useLanguage();
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-saffron-500/10 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-navy-500/20 blur-3xl" />

        <div className="container-page relative py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-saffron-400" />
              {tk('home.sihBadge')}
            </div>
            <h1 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-5xl sm:leading-tight">
              {tk('home.heroTitle')}
            </h1>
            <p className="mt-5 text-base text-navy-200 sm:text-lg">
              {tk('home.heroDesc')}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/assistant" className="btn-accent w-full px-6 py-3 text-base sm:w-auto">
                <MessageCircle className="h-5 w-5" />
                {tk('home.askBisAssistant')}
              </Link>
              <Link to="/standards" className="btn w-full border border-white/20 bg-white/5 px-6 py-3 text-base text-white hover:bg-white/10 sm:w-auto">
                <BookOpen className="h-5 w-5" />
                {tk('home.exploreStandards')}
              </Link>
            </div>
            <p className="mt-6 text-sm font-medium text-navy-300">
              {tk('home.tagline')}
            </p>
          </div>
        </div>
      </section>

      {/* Who are you? */}
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">{tk('home.whoAreYou')}</h2>
          <p className="mt-3 text-navy-600">
            {tk('home.whoAreYouDesc')}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Consumer */}
          <div className="card-hover group relative overflow-hidden p-8">
            <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-navy-50" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-100 text-navy-700">
                <User className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-900">{tk('home.consumerTitle')}</h3>
              <p className="mt-2 text-sm text-navy-600">
                {tk('home.consumerDesc')}
              </p>
              <Link to="/consumer" className="btn-primary mt-6">
                {tk('home.continueConsumer')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Industry */}
          <div className="card-hover group relative overflow-hidden p-8">
            <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-saffron-50" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron-100 text-saffron-700">
                <Factory className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-900">
                {tk('home.industryTitle')}
              </h3>
              <p className="mt-2 text-sm text-navy-600">
                {tk('home.industryDesc')}
              </p>
              <Link to="/industry" className="btn-primary mt-6">
                {tk('home.continueIndustry')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="border-y border-navy-100 bg-white py-16">
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, titleKey: 'home.featureSourceAwareTitle', descKey: 'home.featureSourceAwareDesc' },
              { icon: FileSearch, titleKey: 'home.featureStandardsSearchTitle', descKey: 'home.featureStandardsSearchDesc' },
              { icon: Sparkles, titleKey: 'home.featureAiGuidanceTitle', descKey: 'home.featureAiGuidanceDesc' },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.titleKey} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{tk(f.titleKey)}</h3>
                  <p className="mt-1.5 text-sm text-navy-600">{tk(f.descKey)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16">
        <div className="rounded-2xl bg-navy-900 px-6 py-12 text-center text-white sm:px-12">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            {tk('home.ctaTitle')}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-navy-200">
            {tk('home.ctaDesc')}
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/assistant" className="btn-accent w-full px-6 py-3 sm:w-auto">
              <MessageCircle className="h-5 w-5" />
              {tk('home.ctaAskAssistant')}
            </Link>
            <Link to="/certification" className="btn w-full border border-white/20 bg-white/5 px-6 py-3 text-white hover:bg-white/10 sm:w-auto">
              {tk('home.ctaViewCert')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
