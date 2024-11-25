"use client";
import React, { Suspense } from 'react';
import { TimelineProps } from '../../types/timeline';
import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';
import { usePathname } from 'next/navigation';

const TimelineSkeleton = () => (
  <div className="animate-pulse">
    {[1, 2, 3].map((i) => (
      <div key={i} className="h-48 bg-base-300 rounded-lg mb-16" />
    ))}
  </div>
);

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const pathname = usePathname();

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
          {items.map((item, index) => (
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