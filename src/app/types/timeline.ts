export type Side = 'left' | 'right';

export interface TimelineItem {
  slug: string;
  title: string;
  company: string;
  date: string;
  description: string;
  location?: string;
  logo?: string;
  skills?: string[];
  side: Side;
}

export interface TimelineProps {
  items: TimelineItem[];
}

export class TimelineValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TimelineValidationError';
  }
}