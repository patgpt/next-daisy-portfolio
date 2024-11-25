
'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Timeline Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-4">
      <h2 className="text-xl font-bold mb-4">Something went wrong!</h2>
      <button
        className="btn btn-primary"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}