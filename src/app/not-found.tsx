'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const MatrixRain = dynamic(() => import('@/components/MatrixRain'), { ssr: false });

/**
 * Matrix-themed 404 page component that displays a "spoon not found" message with Matrix references.
 * Offers two options: return to home page (blue pill) or trigger Matrix rain effect (red pill).
 * Any keypress (except Escape) redirects to home page.
 * @returns {JSX.Element} The rendered NotFound component
 */
export default function NotFound() {
    const [showMatrix, setShowMatrix] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    /**
     * Handles the click event for the Matrix effect button (red pill)
     * Sets loading state and triggers the Matrix rain animation
     */
    const handleMatrixClick = () => {
        setIsLoading(true);
        setShowMatrix(true);
    };

    /**
     * Sets up keyboard event listeners for navigation and Matrix effect control
     * - Any key (except when typing in forms/dialogs): Redirects to home page
     * - Escape key: Closes Matrix effect if active
     */
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            // Ignore keyboard events when user is typing in form elements
            if (event.target instanceof HTMLInputElement ||
                event.target instanceof HTMLTextAreaElement ||
                (event.target instanceof HTMLElement &&
                    (event.target.closest('[role="dialog"]') ||
                        event.target.closest('[role="menu"]')))) {
                return;
            }

            // Handle Escape key to close Matrix effect
            if (event.key === 'Escape' && showMatrix) {
                setShowMatrix(false);
                return;
            }

            router.push('/');
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [router, showMatrix]);

    return (
        <main role="main">
            <div className={`transition-opacity duration-500 ${showMatrix ? 'opacity-100' : 'opacity-0'}`}>
                {showMatrix && <MatrixRain />}
            </div>
            <div className="flex flex-col items-center justify-center min-h-[400px] p-4 bg-base-300 rounded-lg border-4 border-primary">
                <h2 className="text-4xl font-bold mb-4 text-error animate-pulse font-mono">SPOON NOT FOUND</h2>
                <div className="text-8xl mb-2">🥄</div>
                <p className="text-xl mb-6 font-mono text-center text-primary">
                    404 - There is no spoon
                </p>
                <p className="text-lg mb-8 font-mono text-center text-secondary max-w-md italic">
                    &quot;Do not try and bend the spoon. That&apos;s impossible. Instead, only try to realize the truth... there is no spoon.&quot;
                </p>
                <div className="flex gap-4 mt-4">
                    <Link
                        href="/"
                        className="btn px-8 border-4 font-mono hover:scale-105 transition-transform rounded-full bg-blue-600 hover:bg-blue-700 border-blue-800 text-white"
                        title="Return to reality"
                    >
                        Blue Pill
                    </Link>
                    <button
                        onClick={handleMatrixClick}
                        className="btn px-8 border-4 font-mono hover:scale-105 transition-transform rounded-full bg-red-600 hover:bg-red-700 border-red-800 text-white disabled:opacity-50"
                        aria-label="Enter the Matrix effect"
                        title="Enter the Matrix"
                        disabled={showMatrix || isLoading}
                    >
                        {isLoading ? 'Loading...' : 'Red Pill'}
                    </button>
                </div>
                <p className="mt-8 mb-2 text-sm font-mono text-base-content/70 text-center max-w-md">
                    &quot;You take the blue pill... the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill... you stay in Wonderland, and I show you how deep the rabbit hole goes.&quot;
                </p>
                <p className="text-sm font-mono text-base-content/70 animate-pulse">
                    The choice is yours...
                </p>
            </div>
        </main>
    );
}