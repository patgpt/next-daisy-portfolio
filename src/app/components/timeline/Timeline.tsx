"use client";
import React, { Suspense, useMemo } from 'react';
import { TimelineProps } from '../../types/timeline';
import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';
import { usePathname } from 'next/navigation';
import { validateTimelineItems } from '../../utils/validation';

/**
 * Renders a skeleton loader for the timeline
 * @returns {JSX.Element} Skeleton loading state component
 */
const TimelineSkeleton = () => (
    <div className="flex flex-col gap-16">
        {[1, 2, 3].map((i) => (
            <div key={i} className="flex w-full flex-col gap-4">
                <div className="skeleton h-4 w-24 mx-auto md:mx-0"></div>
                <div className="skeleton h-[200px] w-full rounded-lg"></div>
            </div>
        ))}
    </div>
);

/**
 * Timeline component that displays a vertical timeline of items
 * @param {TimelineProps} props - The component props
 * @param {TimelineItem[]} props.items - Array of timeline items to display
 * @returns {JSX.Element} Timeline component
 */
const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const pathname = usePathname();

  const validatedItems = useMemo(() => {
    try {
      validateTimelineItems(items);
      return items;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Timeline validation failed for ${pathname}: ${error.message}`);
      } else {
        throw new Error(`Timeline validation failed for ${pathname}`);
      }
    }
  }, [items, pathname]);

  if (!items?.length) {
    throw new Error(`No timeline items found for path: ${pathname}`);
  }

  return (
    <Suspense fallback={<TimelineSkeleton />}>
      <motion.div
        className="container max-w-6xl mx-auto px-4 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        role="region"
        aria-label="Experience Timeline"
      >
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 hidden md:block -translate-x-1/2" />
        <ul className="relative" role="list">
          {validatedItems.map((item, index) => (
            <TimelineItem
              key={item.slug || index}
              item={item}
              index={index}
            />
          ))}
        </ul>
      </motion.div>
    </Suspense>
  );
};

export default Timeline;