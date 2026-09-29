import { useState } from 'react';
import { Copy, Check, ThumbsUp, ThumbsDown, ShieldCheck, AlertCircle } from 'lucide-react';
import type { ChatMessage as ChatMessageType } from '@/types';
import SourceCard from '@/components/SourceCard';

interface ChatMessageProps {
  message: ChatMessageType;
  onFeedback: (id: string, feedback: 'up' | 'down') => void;
}

export default function ChatMessage({ message, onFeedback }: ChatMessageProps) {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === 'user';

  const handleCopy = () => {
    const text = message.response
      ? `${message.response.answer}\n\n${message.response.explanation}\n\nNext step: ${message.response.nextStep}`
      : message.content;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isUser) {
    return (
      <div className="flex justify-end animate-fade-in">
        <div className="max-w-[85%] rounded-2xl rounded-br-md bg-navy-800 px-4 py-2.5 text-sm text-white shadow-sm sm:max-w-[75%]">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3 animate-fade-in">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-saffron-100 text-saffron-700">
        <ShieldCheck className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        {message.response ? (
          <div className="space-y-3">
            {message.response.isDemo && (
              <div className="inline-flex items-center gap-1.5 rounded-full bg-saffron-100 px-2.5 py-0.5 text-xs font-medium text-saffron-800">
                <AlertCircle className="h-3 w-3" />
                DEMO RESPONSE
              </div>
            )}
            <div className="rounded-2xl rounded-tl-md border border-navy-100 bg-white px-4 py-3 shadow-sm">
              <p className="text-sm font-medium text-navy-900">{message.response.answer}</p>
              <div className="mt-3 border-t border-navy-100 pt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">
                  Simple explanation
                </p>
                <p className="mt-1 text-sm text-navy-700">{message.response.explanation}</p>
              </div>
              <div className="mt-3 border-t border-navy-100 pt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">
                  Next step
                </p>
                <p className="mt-1 text-sm text-navy-700">{message.response.nextStep}</p>
              </div>
            </div>

            {message.response.sources.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">Sources</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {message.response.sources.map((src) => (
                    <SourceCard key={src.id} source={src} />
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-navy-500 transition-colors hover:bg-navy-100 hover:text-navy-700"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
              <button
                onClick={() => onFeedback(message.id, 'up')}
                className={`rounded-md p-1 transition-colors ${
                  message.feedback === 'up'
                    ? 'bg-green-100 text-green-700'
                    : 'text-navy-500 hover:bg-navy-100 hover:text-navy-700'
                }`}
                aria-label="Helpful"
              >
                <ThumbsUp className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => onFeedback(message.id, 'down')}
                className={`rounded-md p-1 transition-colors ${
                  message.feedback === 'down'
                    ? 'bg-red-100 text-red-700'
                    : 'text-navy-500 hover:bg-navy-100 hover:text-navy-700'
                }`}
                aria-label="Not helpful"
              >
                <ThumbsDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl rounded-tl-md border border-navy-100 bg-white px-4 py-3 text-sm text-navy-700 shadow-sm">
            {message.content}
          </div>
        )}
      </div>
    </div>
  );
}
