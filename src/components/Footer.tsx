import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const footerLinks = [
  { to: '/', key: 'nav.home' },
  { to: '/standards', key: 'nav.standards' },
  { to: '/certification', key: 'nav.certification' },
  { to: '/services', key: 'nav.services' },
  { to: '/consumer', key: 'nav.consumer' },
  { to: '/industry', key: 'nav.industry' },
  { to: '/about', key: 'nav.about' },
];

export default function Footer() {
  const { tk } = useLanguage();
  return (
    <footer className="border-t border-navy-100 bg-white">
      <div className="container-page py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-800 text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="font-display text-base font-bold text-navy-900">
                {tk('nav.brand')}
              </span>
            </div>
            <p className="mt-3 text-sm text-navy-600">
              {tk('footer.tagline')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-navy-600 hover:text-navy-900"
              >
                {tk(link.key)}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-navy-100 pt-6">
          <p className="text-xs text-navy-500">
            {tk('footer.sihNotice')}
          </p>
          <p className="mt-1 text-xs text-navy-400">
            {tk('footer.disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
}
