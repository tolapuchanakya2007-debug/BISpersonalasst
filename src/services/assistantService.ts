import { demoResponses, getFallbackResponse } from '@/data/demoResponses';
import { bisKnowledge } from '@/data/bisKnowledge';
import type { AssistantResponse, Mode, Source } from '@/types';

export interface AssistantServiceOptions {
  mode: Mode;
  context?: string;
}

function normalizeQuery(query: string): string {
  return query
    .toLowerCase()
    .trim()
    .replace(/[?.!,]+$/g, '')
    .replace(/\s+/g, ' ');
}

function findInKnowledgeBase(query: string): AssistantResponse | null {
  const normalized = normalizeQuery(query);
  if (!normalized) return null;

  for (const item of bisKnowledge) {
    const itemQuery = normalizeQuery(item.query);
    if (normalized === itemQuery) {
      return knowledgeToResponse(item);
    }
  }

  for (const item of bisKnowledge) {
    const itemQuery = normalizeQuery(item.query);
    if (normalized.includes(itemQuery) || itemQuery.includes(normalized)) {
      return knowledgeToResponse(item);
    }
  }

  const titleKeywords: Record<string, string[]> = {
    'kys-01': ['know your standard', 'kys'],
    'kys-02': ['find the relevant indian standard', 'find relevant standard', 'which standard applies'],
    'kys-03': ['compulsory', 'compulsory for my product', 'is bis certification compulsory', 'mandatory'],
    'kys-04': ['need for bis', 'requirements for getting a bis licence', 'what does a manufacturer need'],
    'kys-05': ['grant a licence', 'grant a product certification licence', 'how does bis grant'],
    'kys-06': ['different bis standard marks', 'standard marks', 'isi mark', 'eco mark', 'registration mark'],
    'kys-07': ['file a complaint', 'complain to bis', 'how can i complain'],
    'kys-08': ['bis care app', 'care app'],
    'kys-09': ['r-number', 'r number', 'rnumber'],
    'kys-10': ['hallmarking', 'hallmark'],
    'kys-11': ['valid bis licence', 'check whether a product has', 'check a licence', 'licence check'],
    'kys-12': ['verify a hallmarked', 'hallmarked jewellery', 'verify hallmark'],
    'kys-13': ['types of complaints', 'what complaints can i'],
    'kys-14': ['authenticity of a product', 'check authenticity', 'is this product genuine'],
    'kys-15': ['huid', 'huid number'],
    'kys-16': ['compulsory registration scheme', 'crs'],
    'kys-17': ['search using an is number', 'search by is number', 'is number search'],
    'kys-18': ['search using a product keyword', 'search by product name', 'product keyword'],
    'kys-19': ['information is available for a selected', 'what information is available'],
    'kys-20': ['bis laboratories', 'find laboratories', 'labs related to a standard'],
  };

  for (const item of bisKnowledge) {
    const words = titleKeywords[item.id];
    if (words && words.some((w) => normalized.includes(w))) {
      return knowledgeToResponse(item);
    }
  }

  return null;
}

function knowledgeToResponse(item: (typeof bisKnowledge)[number]): AssistantResponse {
  return {
    id: `resp-knowledge-${item.id}-${Date.now()}`,
    query: item.query,
    answer: item.answer,
    explanation: item.explanation,
    nextStep: item.nextStep,
    sources: [item.source],
    isDemo: true,
  };
}

function findInDemoResponses(query: string): AssistantResponse | null {
  const normalized = normalizeQuery(query);
  if (!normalized) return null;

  if (demoResponses[normalized]) return demoResponses[normalized];

  for (const key of Object.keys(demoResponses)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return demoResponses[key];
    }
  }

  const keywords: Record<string, string[]> = {
    'what is bis': ['bis', 'bureau of indian standards'],
    'what is bis certification': ['certification', 'certify', 'certified'],
    'what is the bis standard mark': ['mark', 'standard mark'],
    'how can i verify bis certification': ['verify', 'check certificate', 'licence'],
    'how do i apply for bis certification': ['apply', 'application', 'how to get'],
    'how can i find the relevant indian standard': ['find standard', 'relevant standard', 'which standard'],
    'what documents may be required': ['document', 'documents', 'paperwork'],
    'what is a quality control order': ['qco', 'quality control order'],
    'how can i complain about a product': ['complain', 'complaint', 'grievance'],
    'what is an indian standard': ['indian standard', 'what is is', 'what is a standard'],
    'i manufacture electrical products. what bis requirements should i check': [
      'electrical',
      'manufacture',
      'requirements',
    ],
  };

  for (const [key, words] of Object.entries(keywords)) {
    if (words.some((w) => normalized.includes(w))) {
      return demoResponses[key];
    }
  }

  return null;
}

function getDemoResponse(query: string): AssistantResponse {
  const fromKnowledge = findInKnowledgeBase(query);
  if (fromKnowledge) {
    return fromKnowledge;
  }

  const found = findInDemoResponses(query);
  if (found) {
    return { ...found, id: `resp-${Date.now()}`, query };
  }
  return getFallbackResponse(query);
}

interface ApiChatResponse {
  answer?: string;
  explanation?: string;
  nextStep?: string;
  sources?: Array<{
    id?: string;
    document?: string;
    type?: string;
    status?: 'demo' | 'verified';
    url?: string;
  }>;
  isDemo?: boolean;
  isFallback?: boolean;
}

function mapApiResponse(data: ApiChatResponse, query: string): AssistantResponse {
  const sources: Source[] = (data.sources ?? []).map((s, i) => ({
    id: s.id ?? `src-${Date.now()}-${i}`,
    document: s.document ?? 'BIS information',
    type: s.type ?? 'Official BIS information',
    status: (s.status ?? 'demo') as 'demo' | 'verified',
    url: s.url,
  }));

  return {
    id: `resp-${Date.now()}`,
    query,
    answer: data.answer ?? '',
    explanation: data.explanation ?? '',
    nextStep: data.nextStep ?? '',
    sources,
    isDemo: data.isDemo ?? true,
    isFallback: data.isFallback,
  };
}

export async function askAssistant(
  query: string,
  options: AssistantServiceOptions
): Promise<AssistantResponse> {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, mode: options.mode, context: options.context }),
    });

    if (!res.ok) {
      throw new Error(`API returned ${res.status}`);
    }

    const data = (await res.json()) as ApiChatResponse;

    if (!data.answer) {
      throw new Error('Empty answer from API');
    }

    return mapApiResponse(data, query);
  } catch {
    await new Promise((resolve) => setTimeout(resolve, 650 + Math.random() * 500));
    return getDemoResponse(query);
  }
}

export const suggestedQuestions: Record<Mode, string[]> = {
  consumer: [
    'How can I check whether a product has a valid BIS licence?',
    'How can I file a complaint with BIS?',
    'What is the BIS CARE app?',
    'What is the BIS Standard Mark?',
    'How can I verify a hallmarked jewellery item?',
    'What is an HUID number?',
    'What is R-Number verification?',
  ],
  industry: [
    'How can a manufacturer find the relevant Indian Standard?',
    'Is BIS certification compulsory for my product?',
    'How can I apply for BIS certification?',
    'What are the requirements for a BIS licence?',
    'How does BIS grant a product certification licence?',
    'What is Know Your Standard?',
    'Can I search for a standard using an IS number?',
  ],
};
