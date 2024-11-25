export interface TimelineItem {
  date: string;
  title: string;
  company?: string;
  location?: string;
  description: string;
  side: 'left' | 'right';
  logo?: string;
  skills?: string[];
  slug: string;
}

export interface TimelineProps {
  items: TimelineItem[];
}