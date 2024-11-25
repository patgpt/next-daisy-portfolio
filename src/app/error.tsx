'use client';

import { useEffect } from "react";

/**
 * Error handler component for route segments
 * @param {Object} props - The component props
 * @param {Error & { digest?: string }} props.error - The error that occurred
 * @param {() => void} props.reset - Function to reset the error boundary
 * @returns {JSX.Element} Error UI for route segments
 */
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