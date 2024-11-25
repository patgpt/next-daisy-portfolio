"use client";
import React from 'react';

/**
 * Props for the CustomErrorBoundary component
 * @interface Props
 */
interface Props {
    /** Content to render when no error occurs */
    children: React.ReactNode;
    /** Content to render when an error occurs */
    fallback: React.ReactNode;
    /** Optional callback for error handling */
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

/**
 * State interface for error boundary
 * @interface State
 */
interface State {
    /** Whether an error has occurred */
    hasError: boolean;
}

/**
 * Error boundary component for handling runtime errors
 * @class CustomErrorBoundary
 * @extends {React.Component<Props, State>}
 */
export class CustomErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- I know what I'm doing eslint stfu and hold my beer
    static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Timeline Error:', error, errorInfo);
        this.props.onError?.(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}