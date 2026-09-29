import { Sparkles } from 'lucide-react';

interface SuggestedQuestionProps {
  question: string;
  onClick: (q: string) => void;
}

export default function SuggestedQuestion({ question, onClick }: SuggestedQuestionProps) {
  return (
    <button
      onClick={() => onClick(question)}
      className="group flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-2 text-sm text-navy-700 transition-all hover:border-navy-400 hover:bg-navy-50"
    >
      <Sparkles className="h-3.5 w-3.5 text-saffron-500" />
      <span className="text-left">{question}</span>
    </button>
  );
}
