
import { TimelineItem, TimelineValidationError } from '../types/timeline';

export const validateTimelineItem = (item: TimelineItem): void => {
  if (!item.slug) throw new TimelineValidationError('Timeline item missing slug');
  if (!item.title) throw new TimelineValidationError('Timeline item missing title');
  if (!item.company) throw new TimelineValidationError('Timeline item missing company');
  if (!item.date) throw new TimelineValidationError('Timeline item missing date');
  if (!item.description) throw new TimelineValidationError('Timeline item missing description');
};

export const validateTimelineItems = (items: TimelineItem[]): void => {
  if (!items?.length) throw new TimelineValidationError('No timeline items provided');
  items.forEach(validateTimelineItem);
};