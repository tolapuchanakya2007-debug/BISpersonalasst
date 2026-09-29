import {
  User,
  Monitor,
  Bot,
  Database,
  BookOpen,
  FileCheck,
  Server,
  Cpu,
  ArrowDown,
  Layers,
} from 'lucide-react';
import Disclaimer from '@/components/Disclaimer';

const currentFlow = [
  { icon: User, label: 'User' },
  { icon: Monitor, label: 'Web Interface' },
  { icon: Bot, label: 'AI Assistant' },
  { icon: Database, label: 'Knowledge Retrieval' },
  { icon: BookOpen, label: 'BIS Knowledge Base' },
  { icon: FileCheck, label: 'Source-backed Response' },
];

const futureFlow = [
  { icon: Monitor, label: 'Frontend' },
  { icon: Server, label: 'Python/FastAPI Backend' },
  { icon: Layers, label: 'RAG Retrieval' },
  { icon: BookOpen, label: 'Verified BIS Knowledge Base' },
  { icon: Cpu, label: 'LLM' },
  { icon: FileCheck, label: 'Answer + Sources' },
];

export default function About() {
  return (
    <div className="container-page py-8 sm:py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="section-title">About BIS Intelligent Assistant</h1>
        <p className="mt-3 text-navy-600">
          This prototype demonstrates an AI-powered interface designed to help consumers and industries understand Indian Standards and BIS services.
        </p>
      </div>

      {/* Current architecture */}
      <div className="mx-auto mt-12 max-w-3xl">
        <h2 className="text-center font-display text-xl font-bold text-navy-900">
          Current Prototype Architecture
        </h2>
        <div className="mt-8 flex flex-col items-center gap-2">
          {currentFlow.map((node, i) => {
            const Icon = node.icon;
            const isLast = i === currentFlow.length - 1;
            return (
              <div key={node.label} className="flex flex-col items-center">
                <div className="flex items-center gap-3 rounded-xl border border-navy-200 bg-white px-5 py-3 shadow-card">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-100 text-navy-700">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-navy-900">{node.label}</span>
                </div>
                {!isLast && <ArrowDown className="my-1 h-5 w-5 text-navy-300" />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Future architecture */}
      <div className="mx-auto mt-14 max-w-3xl">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-center font-display text-xl font-bold text-navy-900">
            Future Architecture
          </h2>
          <span className="badge-demo">Planned Integration</span>
        </div>
        <p className="mt-2 text-center text-sm text-navy-600">
          The production system will connect a Python/FastAPI backend with RAG retrieval and a verified BIS knowledge base.
        </p>
        <div className="mt-8 flex flex-col items-center gap-2">
          {futureFlow.map((node, i) => {
            const Icon = node.icon;
            const isLast = i === futureFlow.length - 1;
            return (
              <div key={node.label} className="flex flex-col items-center">
                <div className="flex items-center gap-3 rounded-xl border border-saffron-200 bg-saffron-50 px-5 py-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-saffron-100 text-saffron-700">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-navy-900">{node.label}</span>
                </div>
                {!isLast && <ArrowDown className="my-1 h-5 w-5 text-saffron-300" />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Problem statement */}
      <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
        <h2 className="font-display text-lg font-bold text-navy-900">Problem Statement</h2>
        <p className="mt-2 text-sm text-navy-700">
          <span className="font-semibold">SIH26107:</span> AI-powered Intelligent Assistant for Indian Standards and BIS Services for Industries and Consumers.
        </p>
        <p className="mt-3 text-sm text-navy-600">
          The assistant is designed to serve two audiences — consumers who want to understand BIS marks and standards in simple language, and industries that need guidance on certification, documentation and compliance.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-3xl">
        <Disclaimer text="This is a prototype for the Smart India Hackathon 2026. All data shown is demo data and must be verified against official BIS sources." />
      </div>
    </div>
  );
}
