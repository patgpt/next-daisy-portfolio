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
}): JSX.Element {
    useEffect(() => {
        console.error('Timeline Error:', error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-4 bg-base-300 rounded-lg border-4 border-primary">
            <h2 className="text-4xl font-bold mb-4 text-error animate-pulse font-mono">GAME OVER</h2>
            <p className="text-lg mb-6 font-mono text-center">
                ERROR: {error.message || 'A wild bug appeared!'}
            </p>
            <button
                className="btn btn-primary font-mono hover:scale-105 transition-transform"
                onClick={reset}
            >
                🎮 Continue [Press Start]
            </button>
            <p className="mt-4 text-sm font-mono text-base-content/70">
                Insert coin to debug...
            </p>
        </div>
    );
}