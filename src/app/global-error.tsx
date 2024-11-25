'use client';

/**
 * Global error handler component for the application
 * @param {Object} props - The component props
 * @param {Error & { digest?: string }} props.error - The error that occurred
 * @param {() => void} props.reset - Function to reset the error boundary
 * @returns {JSX.Element} Global error UI
 */
export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    console.error('Error:', error);

    return (
        <html>
            <body>
                <div className="flex flex-col items-center justify-center min-h-screen p-4">
                    <h2 className="text-xl font-bold mb-4">Something went wrong!</h2>
                    <button
                        className="btn btn-primary"
                        onClick={reset}
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}