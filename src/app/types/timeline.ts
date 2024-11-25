
export interface TimelineItem {
  date: string;
  title: string;
  company?: string;
  location?: string;
  description: string;
  side: 'left' | 'right';
  logo?: string;
}

export interface TimelineProps {
  items: TimelineItem[];
}