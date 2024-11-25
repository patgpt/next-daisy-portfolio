/**
 * Badge variant options for styling
 * @typedef {'primary' | 'secondary' | 'accent'} BadgeVariant
 */
export type BadgeVariant = 'primary' | 'secondary' | 'accent';

/**
 * Badge size options
 * @typedef {'sm' | 'md' | 'lg'} BadgeSize
 */
export type BadgeSize = 'sm' | 'md' | 'lg';

/**
 * Timeline item positioning
 * @typedef {'left' | 'right'} TimelineSide
 */
export type TimelineSide = 'left' | 'right';

export interface TimelineBaseProps {
  className?: string;
  'aria-label'?: string;
}

// ...existing timeline types...