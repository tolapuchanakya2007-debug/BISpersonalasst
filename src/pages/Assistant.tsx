import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ChatWindow from '@/components/ChatWindow';
import { useMode } from '@/context/ModeContext';

export default function Assistant() {
  const { mode, setMode } = useMode();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || undefined;

  const [queryKey, setQueryKey] = useState(0);

  useEffect(() => {
    setQueryKey((k) => k + 1);
  }, [initialQuery]);

  return (
    <div className="container-page py-6 sm:py-8">
      <ChatWindow key={queryKey} mode={mode} onModeChange={setMode} initialQuery={initialQuery} />
    </div>
  );
}
