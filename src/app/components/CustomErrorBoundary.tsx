
"use client";
import React from 'react';

interface Props {
    children: React.ReactNode;
    fallback: React.ReactNode;
}

interface State {
    hasError: boolean;
}

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
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}