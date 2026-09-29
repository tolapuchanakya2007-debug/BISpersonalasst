import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import StandardCard from '@/components/StandardCard';
import Disclaimer from '@/components/Disclaimer';
import { allStandards, productCategories, industryCategories } from '@/data/demoStandards';
import { useLanguage } from '@/context/LanguageContext';

export default function Standards() {
  const { tk } = useLanguage();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [industry, setIndustry] = useState('all');
  const [status, setStatus] = useState('all');

  const filtered = useMemo(() => {
    return allStandards.filter((s) => {
      const matchesQuery =
        !query ||
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.number.toLowerCase().includes(query.toLowerCase()) ||
        s.description.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'all' || s.category === category;
      const matchesIndustry = industry === 'all' || s.industry === industry;
      const matchesStatus = status === 'all' || s.status === status;
      return matchesQuery && matchesCategory && matchesIndustry && matchesStatus;
    });
  }, [query, category, industry, status]);

  return (
    <div className="container-page py-8 sm:py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="section-title">{tk('standards.title')}</h1>
        <p className="mt-3 text-navy-600">
          {tk('standards.description')}
        </p>
      </div>

      {/* Search */}
      <div className="mx-auto mt-8 max-w-2xl">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={tk('standards.searchPlaceholder')}
            className="input pl-12 py-3"
          />
        </div>

        {/* Filters */}
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div>
            <label className="mb-1 flex items-center gap-1 text-xs font-medium text-navy-500">
              <Filter className="h-3 w-3" />
              {tk('standards.category')}
            </label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="input">
              <option value="all">{tk('standards.allCategories')}</option>
              {productCategories.map((c) => (
                <option key={c} value={c}>{tk(`cat.${c}`)}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 flex items-center gap-1 text-xs font-medium text-navy-500">
              <Filter className="h-3 w-3" />
              {tk('standards.industry')}
            </label>
            <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="input">
              <option value="all">{tk('standards.allIndustries')}</option>
              {industryCategories.map((i) => (
                <option key={i} value={i}>{tk(`ind.${i}`)}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 flex items-center gap-1 text-xs font-medium text-navy-500">
              <Filter className="h-3 w-3" />
              {tk('standards.status')}
            </label>
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="input">
              <option value="all">{tk('standards.allStatuses')}</option>
              <option value="demo">{tk('standards.demoData')}</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Disclaimer text={tk('standards.disclaimer')} />
      </div>

      {/* Results */}
      <div className="mt-8">
        <p className="mb-4 text-sm text-navy-500">
          {filtered.length} {filtered.length === 1 ? tk('standards.result') : tk('standards.results')} {tk('standards.found')}
        </p>
        {filtered.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((std) => (
              <StandardCard key={std.id} standard={std} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-navy-200 bg-white py-16 text-center">
            <p className="text-sm text-navy-500">
              {tk('standards.noResults')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
