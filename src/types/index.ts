export type Mode = 'consumer' | 'industry';

export type Language = 'en' | 'hi' | 'te';

export interface Source {
  id: string;
  document: string;
  type: string;
  status: 'demo' | 'verified';
  url?: string;
}

export interface AssistantResponse {
  id: string;
  query: string;
  answer: string;
  explanation: string;
  nextStep: string;
  sources: Source[];
  isDemo: boolean;
  isFallback?: boolean;
}

export interface DemoStandard {
  id: string;
  number: string;
  title: string;
  category: string;
  industry: string;
  status: 'demo';
  description: string;
  scope: string;
  certificationNote: string;
  source: Source;
}

export type ChatRole = 'user' | 'assistant';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  response?: AssistantResponse;
  timestamp: number;
  feedback?: 'up' | 'down';
}
