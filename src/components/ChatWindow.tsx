import { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Paperclip, RotateCcw, Plus, FileText, X, Info } from 'lucide-react';
import type { ChatMessage as ChatMessageType, Mode, AssistantResponse } from '@/types';
import { askAssistant, suggestedQuestions } from '@/services/assistantService';
import ChatMessage from '@/components/ChatMessage';
import ModeSelector from '@/components/ModeSelector';
import SuggestedQuestion from '@/components/SuggestedQuestion';
import LoadingIndicator from '@/components/LoadingIndicator';

interface ChatWindowProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  initialQuery?: string;
}

const initialAssistantMessage: ChatMessageType = {
  id: 'msg-initial',
  role: 'assistant',
  content: `Hello! I'm the BIS Intelligent Assistant.

I can help you understand:
• Indian Standards
• BIS certification
• BIS services
• Consumer information
• Industry guidance

Ask your question in your own words.`,
  timestamp: Date.now(),
};

function uid() {
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export default function ChatWindow({ mode, onModeChange, initialQuery }: ChatWindowProps) {
  const [messages, setMessages] = useState<ChatMessageType[]>([initialAssistantMessage]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [attachedFile, setAttachedFile] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const initialQueryHandled = useRef(false);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading, scrollToBottom]);

  const sendQuestion = useCallback(
    async (question: string) => {
      if (!question.trim() || loading) return;
      setError(false);
      setInput('');

      const userMsg: ChatMessageType = {
        id: uid(),
        role: 'user',
        content: question,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setLoading(true);

      try {
        const response: AssistantResponse = await askAssistant(question, { mode });
        const assistantMsg: ChatMessageType = {
          id: uid(),
          role: 'assistant',
          content: '',
          response,
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, assistantMsg]);
      } catch {
        setError(true);
        const errMsg: ChatMessageType = {
          id: uid(),
          role: 'assistant',
          content:
            'Sorry, something went wrong while processing your request. Please try again.',
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, errMsg]);
      } finally {
        setLoading(false);
      }
    },
    [loading, mode]
  );

  useEffect(() => {
    if (initialQuery && !initialQueryHandled.current) {
      initialQueryHandled.current = true;
      sendQuestion(initialQuery);
    }
  }, [initialQuery, sendQuestion]);

  const handleFeedback = (id: string, feedback: 'up' | 'down') => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, feedback: m.feedback === feedback ? undefined : feedback } : m))
    );
  };

  const handleNewConversation = () => {
    setMessages([{ ...initialAssistantMessage, id: 'msg-initial-' + Date.now(), timestamp: Date.now() }]);
    setInput('');
    setError(false);
    setAttachedFile(null);
  };

  const handleClearConversation = () => {
    setMessages([{ ...initialAssistantMessage, id: 'msg-initial-' + Date.now(), timestamp: Date.now() }]);
    setInput('');
    setError(false);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachedFile(file.name);
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendQuestion(input);
  };

  const showSuggestions = messages.length <= 1;

  return (
    <div className="flex flex-col rounded-2xl border border-navy-100 bg-white shadow-card overflow-hidden" style={{ height: 'calc(100vh - 13rem)' }}>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy-100 bg-white px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-800 text-white">
            <span className="font-display text-xs font-bold">BI</span>
          </div>
          <div>
            <p className="font-display text-sm font-bold text-navy-900">BIS Intelligent Assistant</p>
            <p className="flex items-center gap-1.5 text-xs text-navy-500">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              BIS Knowledge Assistant
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ModeSelector mode={mode} onChange={onModeChange} />
          <button
            onClick={handleNewConversation}
            className="inline-flex items-center gap-1.5 rounded-lg border border-navy-200 px-3 py-1.5 text-xs font-medium text-navy-600 hover:bg-navy-50"
          >
            <Plus className="h-3.5 w-3.5" />
            New
          </button>
          <button
            onClick={handleClearConversation}
            className="inline-flex items-center gap-1.5 rounded-lg border border-navy-200 px-3 py-1.5 text-xs font-medium text-navy-600 hover:bg-navy-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Clear
          </button>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto scrollbar-thin bg-navy-50/30 p-4">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} onFeedback={handleFeedback} />
        ))}

        {loading && (
          <div className="flex gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-saffron-100 text-saffron-700">
              <span className="font-display text-xs font-bold">BI</span>
            </div>
            <div className="rounded-2xl rounded-tl-md border border-navy-100 bg-white px-4 py-3 shadow-sm">
              <LoadingIndicator />
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-700">
            <Info className="h-4 w-4" />
            Unable to get a response. Please try again.
          </div>
        )}

        {showSuggestions && !loading && (
          <div className="pt-2">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy-500">
              Suggested questions
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions[mode].map((q) => (
                <SuggestedQuestion key={q} question={q} onClick={sendQuestion} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Attachment preview */}
      {attachedFile && (
        <div className="border-t border-navy-100 bg-saffron-50 px-4 py-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs text-saffron-800">
              <FileText className="h-4 w-4" />
              <span className="font-medium">{attachedFile}</span>
              <span className="rounded-full bg-saffron-200 px-2 py-0.5 text-[10px] font-semibold">
                Prototype feature
              </span>
            </div>
            <button onClick={() => setAttachedFile(null)} className="text-saffron-700 hover:text-saffron-900">
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-1 text-xs text-saffron-700">
            Document analysis is available in the planned RAG/document-processing module.
          </p>
        </div>
      )}

      {/* Input */}
      <div className="border-t border-navy-100 bg-white p-3">
        <form onSubmit={handleSubmit} className="flex items-end gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileSelect}
            className="hidden"
          />
          <button
            type="button"
            onClick={handleAttachClick}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-navy-200 text-navy-500 transition-colors hover:bg-navy-50 hover:text-navy-700"
            aria-label="Attach document"
          >
            <Paperclip className="h-5 w-5" />
          </button>
          <div className="relative flex-1">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about BIS standards, certification, services..."
              className="input pr-4"
            />
          </div>
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-navy-800 text-white transition-colors hover:bg-navy-700 disabled:opacity-40"
            aria-label="Send"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
        <p className="mt-1.5 text-center text-[11px] text-navy-400">
          Demo responses — verify with official BIS sources.
        </p>
      </div>
    </div>
  );
}
