import {
  BookOpen,
  BadgeCheck,
  FileText,
  FlaskConical,
  Users,
  MessageSquareWarning,
  ShieldCheck,
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import Disclaimer from '@/components/Disclaimer';
import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
  const { tk } = useLanguage();

  const services = [
    { icon: BookOpen, titleKey: 'services.s1Title', descKey: 'services.s1Desc' },
    { icon: BadgeCheck, titleKey: 'services.s2Title', descKey: 'services.s2Desc' },
    { icon: FileText, titleKey: 'services.s3Title', descKey: 'services.s3Desc' },
    { icon: FlaskConical, titleKey: 'services.s4Title', descKey: 'services.s4Desc' },
    { icon: Users, titleKey: 'services.s5Title', descKey: 'services.s5Desc' },
    { icon: MessageSquareWarning, titleKey: 'services.s6Title', descKey: 'services.s6Desc' },
    { icon: ShieldCheck, titleKey: 'services.s7Title', descKey: 'services.s7Desc' },
  ];

  const prototypeMessage = () => alert(tk('services.prototypeMessage'));

  return (
    <div className="container-page py-8 sm:py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="section-title">{tk('services.title')}</h1>
        <p className="mt-3 text-navy-600">
          {tk('services.desc')}
        </p>
      </div>

      <div className="mt-8">
        <Disclaimer />
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.titleKey} icon={s.icon} title={tk(s.titleKey)} description={tk(s.descKey)} onExplore={prototypeMessage} />
        ))}
      </div>
    </div>
  );
}
