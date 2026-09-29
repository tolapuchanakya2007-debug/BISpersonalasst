import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, BadgeCheck, LayoutGrid, Info, User, Factory, MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

const navLinks = [
  { to: '/', key: 'nav.home', icon: Home },
  { to: '/standards', key: 'nav.standards', icon: BookOpen },
  { to: '/certification', key: 'nav.certification', icon: BadgeCheck },
  { to: '/services', key: 'nav.services', icon: LayoutGrid },
  { to: '/about', key: 'nav.about', icon: Info },
];

export default function Navbar() {
  const location = useLocation();
  const { tk } = useLanguage();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/90 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-800 text-white">
            <span className="font-display text-sm font-bold">BI</span>
          </div>
          <span className="font-display text-base font-bold text-navy-900">
            {tk('nav.brand')}
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-navy-100 text-navy-900'
                    : 'text-navy-600 hover:bg-navy-50 hover:text-navy-900'
                }`}
              >
                <Icon className="h-4 w-4" />
                {tk(link.key)}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/consumer" className="btn-outline">
            <User className="h-4 w-4" />
            {tk('nav.consumer')}
          </Link>
          <Link to="/industry" className="btn-outline">
            <Factory className="h-4 w-4" />
            {tk('nav.industry')}
          </Link>
          <Link to="/assistant" className="btn-accent">
            <MessageCircle className="h-4 w-4" />
            {tk('nav.askAssistant')}
          </Link>
          <LanguageSelector />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSelector />
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-navy-700 hover:bg-navy-100"
            aria-label={tk('nav.toggleMenu')}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-navy-100 bg-white lg:hidden">
          <div className="container-page space-y-1 py-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium ${
                    active ? 'bg-navy-100 text-navy-900' : 'text-navy-600 hover:bg-navy-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tk(link.key)}
                </Link>
              );
            })}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Link to="/consumer" onClick={() => setOpen(false)} className="btn-outline justify-center">
                <User className="h-4 w-4" />
                {tk('nav.consumer')}
              </Link>
              <Link to="/industry" onClick={() => setOpen(false)} className="btn-outline justify-center">
                <Factory className="h-4 w-4" />
                {tk('nav.industry')}
              </Link>
            </div>
            <Link to="/assistant" onClick={() => setOpen(false)} className="btn-accent w-full justify-center">
              <MessageCircle className="h-4 w-4" />
              {tk('nav.askAssistant')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
